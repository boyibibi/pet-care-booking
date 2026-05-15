import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { validateBookingInput } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "请求格式错误。" }, { status: 400 });
  }

  const result = validateBookingInput(body as Record<string, string>);

  if (!result.ok) {
    return NextResponse.json({ message: result.message }, { status: 400 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("bookings")
      .insert({
        customer_name: result.data.customerName,
        phone: result.data.phone,
        pet_name: result.data.petName ?? null,
        pet_type: result.data.petType,
        service: result.data.service,
        preferred_time: result.data.preferredTime ?? null,
        note: result.data.note ?? null,
        status: "pending"
      })
      .select("id")
      .single();

    if (error) {
      console.error(error);
      return NextResponse.json({ message: "预约保存失败，请稍后再试。" }, { status: 500 });
    }

    return NextResponse.json({ id: data.id, message: "预约已提交。" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "服务暂未配置完成，请联系门店电话预约。" }, { status: 500 });
  }
}
