"use client";

import { FormEvent, useState } from "react";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function BookingForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      customerName: String(formData.get("customerName") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      petName: String(formData.get("petName") ?? "").trim(),
      petType: String(formData.get("petType") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      preferredTime: String(formData.get("preferredTime") ?? "").trim(),
      note: String(formData.get("note") ?? "").trim()
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "预约提交失败，请稍后再试。");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "预约已提交。门店会在营业时间内联系您确认档期。"
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "预约提交失败，请稍后再试。"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="customerName" type="text" placeholder="您的称呼" aria-label="您的称呼" required />
      <input name="phone" type="tel" placeholder="联系电话" aria-label="联系电话" required />
      <input name="petName" type="text" placeholder="宠物名字" aria-label="宠物名字" />
      <select name="petType" aria-label="宠物类型" required defaultValue="">
        <option value="" disabled>
          宠物类型
        </option>
        <option>小型犬</option>
        <option>中大型犬</option>
        <option>猫咪</option>
        <option>其他</option>
      </select>
      <select name="service" aria-label="预约服务" required defaultValue="">
        <option value="" disabled>
          选择服务
        </option>
        <option>基础洗护</option>
        <option>造型精修</option>
        <option>皮毛护理</option>
        <option>上门接送</option>
      </select>
      <input name="preferredTime" type="text" placeholder="期望时间，例如 周六下午" aria-label="期望时间" />
      <textarea name="note" placeholder="宠物品种、体重、性格或注意事项" aria-label="宠物品种、体重、性格或注意事项" />
      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "提交中..." : "提交预约"}
      </button>
      {status.type !== "idle" ? (
        <div className={`form-note ${status.type === "error" ? "error" : ""}`}>{status.message}</div>
      ) : null}
    </form>
  );
}
