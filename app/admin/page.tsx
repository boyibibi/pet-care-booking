import Link from "next/link";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import type { Booking, BookingStatus } from "@/types/booking";

export const dynamic = "force-dynamic";

const statusLabel: Record<BookingStatus, string> = {
  pending: "待确认",
  confirmed: "已确认",
  completed: "已完成",
  cancelled: "已取消"
};

async function getBookings(): Promise<Booking[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    throw error;
  }

  return data;
}

export default async function AdminPage() {
  let bookings: Booking[] = [];
  let errorMessage = "";

  try {
    bookings = await getBookings();
  } catch {
    errorMessage = "无法读取预约列表，请检查 Supabase 环境变量和数据库表。";
  }

  return (
    <main className="admin-page">
      <div className="shell">
        <div className="admin-header">
          <div>
            <span className="eyebrow">门店后台</span>
            <h1>预约管理</h1>
            <p className="lead">查看最近 100 条预约。第一版先做只读列表，后续可以加状态修改、短信通知和排班。</p>
          </div>
          <Link className="button secondary" href="/">
            返回首页
          </Link>
        </div>

        {errorMessage ? <div className="form-note error">{errorMessage}</div> : null}

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>状态</th>
                <th>客户</th>
                <th>电话</th>
                <th>宠物</th>
                <th>服务</th>
                <th>期望时间</th>
                <th>备注</th>
                <th>提交时间</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <span className="status">{statusLabel[booking.status] ?? booking.status}</span>
                    </td>
                    <td>{booking.customer_name}</td>
                    <td>{booking.phone}</td>
                    <td>
                      {booking.pet_name ? `${booking.pet_name} · ` : ""}
                      {booking.pet_type}
                    </td>
                    <td>{booking.service}</td>
                    <td>{booking.preferred_time ?? "未填写"}</td>
                    <td>{booking.note ?? "无"}</td>
                    <td>{new Date(booking.created_at).toLocaleString("zh-CN", { hour12: false })}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>暂无预约。</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
