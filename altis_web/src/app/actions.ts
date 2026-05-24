"use server";

import { getSupabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function submitTrialBooking(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const phone = formData.get("phone") as string;
  const email = (formData.get("email") as string) || null;
  const ageCategory = formData.get("ageCategory") as string;
  const goal = formData.get("goal") as string;
  const preferredTime = (formData.get("preferredTime") as string) || null;
  const message = (formData.get("message") as string) || null;

  const { error } = await getSupabase().from("trial_bookings").insert({
    full_name: fullName,
    phone,
    email,
    age_category: ageCategory,
    goal,
    preferred_time: preferredTime,
    message,
  });

  if (error) {
    console.error("Trial booking error:", error);
    redirect("/book-trial?error=1");
  }

  redirect("/book-trial?success=1");
}

export async function submitContactInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = (formData.get("email") as string) || null;
  const message = (formData.get("message") as string) || null;

  const { error } = await getSupabase().from("contact_inquiries").insert({
    name,
    phone,
    email,
    message,
  });

  if (error) {
    console.error("Contact inquiry error:", error);
    redirect("/contact?error=1");
  }

  redirect("/contact?success=1");
}
