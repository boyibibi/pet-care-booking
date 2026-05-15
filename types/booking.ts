export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export type Booking = {
  id: string;
  customer_name: string;
  phone: string;
  pet_name: string | null;
  pet_type: string;
  service: string;
  preferred_time: string | null;
  note: string | null;
  status: BookingStatus;
  created_at: string;
};

export type CreateBookingInput = {
  customerName: string;
  phone: string;
  petName?: string;
  petType: string;
  service: string;
  preferredTime?: string;
  note?: string;
};
