import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type FormType = "contact" | "demo" | "free-booking" | "newsletter";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  professions: string;
  message: string;
};

type DemoPayload = {
  fullName: string;
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  staffCount?: string;
  bookingMethod?: string;
  improvements?: string[];
  additionalInfo?: string;
};

type FreeBookingPayload = {
  fullName: string;
  businessName: string;
  businessType: string;
  website?: string;
  country: string;
  email: string;
  phone: string;
  bookingMethod: string;
  staffCount: string;
  services: string;
  preferredTime: string;
};

type NewsletterPayload = {
  email: string;
};

type MailContent = {
  fromName: string;
  fromEmail: string;
  subject: string;
  html: string;
};

function formatDate() {
  return new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDateTime() {
  return new Date().toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top;">${escapeHtml(label)}</td>
    <td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${escapeHtml(value || "—")}</td>
  </tr>`;
}

function emailShell({
  headerTitle,
  subtitle,
  leadSource,
  rowsHtml,
  messageHtml,
  email,
  phone,
  footerNote,
}: {
  headerTitle: string;
  subtitle: string;
  leadSource: string;
  rowsHtml: string;
  messageHtml?: string;
  email: string;
  phone?: string;
  footerNote: string;
}) {
  const mailtoLink = `mailto:${encodeURIComponent(email)}`;
  const digits = String(phone || "").replace(/\D/g, "");
  const whatsappLink = digits ? `https://wa.me/${digits}` : "";

  return `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
      <div style="background: linear-gradient(135deg, #4b39f4 0%, #1de4a9 100%); padding: 24px 28px; border-radius: 12px 12px 0 0;">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <span style="font-size: 24px; color: white;">✉</span>
          <div style="margin-left: 12px;">
            <h2 style="margin: 0; font-size: 22px; font-weight: bold; color: #ffffff;">${escapeHtml(headerTitle)}</h2>
            <p style="margin: 6px 0 0; font-size: 14px; color: rgba(255,255,255,0.9);">${escapeHtml(subtitle)}</p>
          </div>
        </div>
      </div>
      <div style="padding: 24px 28px;">
        <div style="display: inline-block; background-color: #edf2f7; color: #4a5568; font-size: 13px; padding: 6px 12px; border-radius: 6px; margin-bottom: 20px;">Lead Source: ${escapeHtml(leadSource)}</div>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 14px;">
          ${rowsHtml}
          ${row("Date", formatDateTime())}
        </table>
        ${
          messageHtml
            ? `<div style="margin-top: 24px; padding: 16px; background-color: #f8f8f8; border-radius: 8px; font-size: 14px; color: #333; line-height: 1.5;">${messageHtml}</div>`
            : ""
        }
        <div style="margin-top: 24px;">
          <a href="${mailtoLink}" style="display: inline-block; background-color: #4b39f4; color: #ffffff; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; margin-right: 12px;">Reply via Email</a>
          ${ whatsappLink ? 
            `<a href="${whatsappLink}" style="display: inline-block; background-color: #ffffff; color: #4b39f4; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; border: 2px solid #4b39f4;">Reply on WhatsApp</a>`
              : ""
          }
        </div>
      </div>
    </div>
    <p style="text-align: center; color: #a0a0a0; font-size: 12px; margin-top: 20px;">${escapeHtml(footerNote)}</p>
  </div>`;
}

function buildContactEmail(data: ContactPayload): MailContent | NextResponse {
  const { name, email, phone, professions, message } = data;

  if (!name || !email || !phone || !professions || !message) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  return {
    fromName: name,
    fromEmail: email,
    subject: `📩 New Contact Inquiry: ${name} — ${professions} (${formatDate()})`,
    html: emailShell({
      headerTitle: "New Contact Inquiry",
      subtitle: "You received a new message from your website",
      leadSource: "Contact Form",
      email,
      phone,
      footerNote: "Sent from GetSetTime CRM System • Do not share customer data",
      rowsHtml: [
        row("Name", name),
        row("Email", email),
        row("Phone", phone),
        row("Profession", professions),
      ].join(""),
      messageHtml: escapeHtml(message).replace(/\n/g, "<br>"),
    }),
  };
}

function buildDemoEmail(data: DemoPayload): MailContent | NextResponse {
  const {
    fullName,
    businessName,
    businessType,
    email,
    phone,
    staffCount,
    bookingMethod,
    improvements = [],
    additionalInfo,
  } = data;

  if (!fullName || !businessName || !businessType || !email || !phone) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const improvementsText = improvements.length ? improvements.join(", ") : "—";

  return {
    fromName: fullName,
    fromEmail: email,
    subject: `🎯 Demo Request: ${fullName} — ${businessType} (${formatDate()})`,
    html: emailShell({
      headerTitle: "New Demo Request",
      subtitle: "Someone requested a demo for their business",
      leadSource: "Demo For Your Business Form",
      email,
      phone,
      footerNote: "Sent from GetSetTime CRM System • Do not share customer data",
      rowsHtml: [
        row("Full Name", fullName),
        row("Business Name", businessName),
        row("Business Type", businessType),
        row("Email", email),
        row("Phone", phone),
        row("Team Size", staffCount || "—"),
        row("Booking Method", bookingMethod || "—"),
        row("Improvements", improvementsText),
        row("Additional Info", additionalInfo || "—"),
      ].join(""),
    }),
  };
}

function buildFreeBookingEmail(data: FreeBookingPayload): MailContent | NextResponse {
  const {
    fullName,
    businessName,
    businessType,
    website,
    country,
    email,
    phone,
    bookingMethod,
    staffCount,
    services,
    preferredTime,
  } = data;

  if (
    !fullName ||
    !businessName ||
    !businessType ||
    !country ||
    !email ||
    !phone ||
    !bookingMethod ||
    !staffCount ||
    !services ||
    !preferredTime
  ) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  return {
    fromName: fullName,
    fromEmail: email,
    subject: `📅 Free Booking Setup: ${fullName} — ${businessType} (${formatDate()})`,
    html: emailShell({
      headerTitle: "Free Booking Page Setup",
      subtitle: "New free booking page challenge submission",
      leadSource: "Free Booking Setup Form",
      email,
      phone,
      footerNote: "Sent from GetSetTime CRM System • Do not share customer data",
      rowsHtml: [
        row("Full Name", fullName),
        row("Business Name", businessName),
        row("Business Type", businessType),
        row("Website/Instagram", website || "—"),
        row("Country", country),
        row("Email", email),
        row("Phone", phone),
        row("Booking Method", bookingMethod),
        row("Staff Count", staffCount),
        row("Main Services", services),
        row("Preferred Call Time", preferredTime),
      ].join(""),
    }),
  };
}

function buildNewsletterEmail(data: NewsletterPayload): MailContent | NextResponse {
  const { email } = data;

  if (!email) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  return {
    fromName: "Newsletter Subscriber",
    fromEmail: email,
    subject: `🔔 New Newsletter Subscriber: ${email} (${formatDate()})`,
    html: emailShell({
      headerTitle: "New Newsletter Subscription",
      subtitle: "A new user has subscribed to your newsletter",
      leadSource: "Newsletter Form",
      email,
      footerNote: "This email was sent from your website newsletter subscription form.",
      rowsHtml: row("Email", email),
    }),
  };
}

function resolveFormType(body: Record<string, unknown>): FormType | null {
  if (typeof body.formType === "string") {
    const type = body.formType as FormType;
    if (["contact", "demo", "free-booking", "newsletter"].includes(type)) {
      return type;
    }
  }

  // Backward-compatible detection for older clients
  if (body.department === "Newsletter" || body.name === "Newsletter Subscriber") {
    return "newsletter";
  }
  if ("businessName" in body && "preferredTime" in body) {
    return "free-booking";
  }
  if ("businessName" in body && ("improvements" in body || "additionalInfo" in body)) {
    return "demo";
  }
  if ("name" in body && "professions" in body && "message" in body) {
    return "contact";
  }

  return null;
}

async function sendMail({ fromName, fromEmail, subject, html }: MailContent) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: process.env.SEND_TO,
    subject,
    html,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formType = resolveFormType(body);

    if (!formType) {
      return NextResponse.json(
        { success: false, error: "Unknown or missing formType" },
        { status: 400 }
      );
    }

    let mail: MailContent | NextResponse;

    switch (formType) {
      case "contact":
        mail = buildContactEmail(body as ContactPayload);
        break;
      case "demo":
        mail = buildDemoEmail(body as DemoPayload);
        break;
      case "free-booking":
        mail = buildFreeBookingEmail(body as FreeBookingPayload);
        break;
      case "newsletter":
        mail = buildNewsletterEmail(body as NewsletterPayload);
        break;
      default:
        return NextResponse.json(
          { success: false, error: "Unsupported form type" },
          { status: 400 }
        );
    }

    if (mail instanceof NextResponse) {
      return mail;
    }

    await sendMail(mail);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
