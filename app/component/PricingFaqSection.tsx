import type { ReactNode } from "react";
import RegionalPrice from "./RegionalPrice";

export type PricingFaqItem = {
  title: string;
  content: ReactNode;
  /** Plain-text fallback for FAQ schema when content includes React nodes */
  contentText?: string;
};

export const pricingFaqItems: PricingFaqItem[] = [
  {
    title: "Which plan is best for me?",
    content: `Our price plans are tailored to meet everyone's requirements. Solo practitioners can start for free for the first 250 bookings and upgrade at any time. <br/>For handling appointments across 2 sheets with automated scheduling, the Professional plan is perfect. <br/> For a team of more than two service providers across multiple locations with full automation, the Enterprise plan is best.`,
  },
  {
    title: "What happens when I hit my booking limit?",
    content: `In the free plan, your first 250 bookings are included at no fee for a single sheet. Either you hit the limit before the month ends, or you complete three months of subscription; then you have to choose a paid plan to keep scheduling appointments. <br/> Paid plans include unlimited bookings from day one.`,
  },
  {
    title: "Can I try GetSetTime before committing to a paid plan?",
    content:
      "Yes — the Free plan requires no card and gives you a live booking page to test with real clients. You can also book a demo or start Professional for free and decide once you've seen the automation and branding in action",
  },
  {
    title: "What if I need to add more providers than my plan's seat limit?",
    content: (
      <>
        You&apos;re not locked into a tier by team size. You can add extra seats at any time for{" "}
        <RegionalPrice plan="extraSeat" suffix="/month" />{" "} each (plus taxes). You don&apos;t need to upgrade your plan.
      </>
    ),
    contentText:
      "You're not locked into a tier by team size. You can add extra seats at any time for an additional per-seat monthly fee (plus taxes). You don't need to upgrade your plan.",
  },
  {
    title: "Which payment method can I use to pay?",
    content:
      "We accept payments from MasterCard, Visa, Visa Debit, American Express, and PayPal. Remember, you don't need to provide card details to start your free trial.",
  },
];
