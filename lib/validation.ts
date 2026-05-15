import type { CreateBookingInput } from "@/types/booking";

const services = new Set(["基础洗护", "造型精修", "皮毛护理", "上门接送"]);
const petTypes = new Set(["小型犬", "中大型犬", "猫咪", "其他"]);

export function validateBookingInput(input: Partial<CreateBookingInput>) {
  const customerName = input.customerName?.trim() ?? "";
  const phone = input.phone?.trim() ?? "";
  const petType = input.petType?.trim() ?? "";
  const service = input.service?.trim() ?? "";

  if (customerName.length < 1 || customerName.length > 30) {
    return { ok: false as const, message: "请填写 1-30 个字符的称呼。" };
  }

  if (!/^1[3-9]\d{9}$|^\+?\d[\d -]{6,18}$/.test(phone)) {
    return { ok: false as const, message: "请填写有效联系电话。" };
  }

  if (!petTypes.has(petType)) {
    return { ok: false as const, message: "请选择宠物类型。" };
  }

  if (!services.has(service)) {
    return { ok: false as const, message: "请选择有效服务。" };
  }

  return {
    ok: true as const,
    data: {
      customerName,
      phone,
      petName: input.petName?.trim() || undefined,
      petType,
      service,
      preferredTime: input.preferredTime?.trim() || undefined,
      note: input.note?.trim() || undefined
    }
  };
}
