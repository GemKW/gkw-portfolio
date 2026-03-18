import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { Resend } from "resend";
import { RESEND_API_KEY, CONTACT_TO_EMAIL } from "$env/static/private";

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Basic validation
    if (name.length < 2) return fail(400, { error: "Name must be at least 2 characters.", name, email, message });
    if (!email.includes("@")) return fail(400, { error: "Please enter a valid email address.", name, email, message });
    if (message.length < 10) return fail(400, { error: "Message must be at least 10 characters.", name, email, message });

    try {
      const { error } = await resend.emails.send({
        from: "GemK Portfolio <onboarding@resend.dev>",
        to: [CONTACT_TO_EMAIL],
        subject: `New message from ${name}`,
        html: `
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `
      });

      if (error) {
        console.error("Resend error:", error);
        return fail(500, { error: "Email service error. Please try again later." });
      }
    } catch (err) {
      console.error("Unexpected send error:", err);
      return fail(500, { error: "Failed to send message. Please try again later." });
    }

    return { success: true };
  }
};