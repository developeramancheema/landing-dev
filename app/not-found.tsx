import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME } from "@/lib/config";
import Heading from "./component/Heading";

export const metadata: Metadata = {
  title: `Page not found – ${APP_NAME}`,
  description: `This page is not available on ${APP_NAME}. Return home or contact our team for help.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <Heading
          badge="Error 404"
          title="This slot"
          highlightText="is empty"
          description={`We could not find that page. The link may be wrong or the page may have moved. Head back to ${APP_NAME} to keep your appointments on track.`}
          headingTag="h1"
          titleClassName="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link href="/" className="bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">Back to home</Link>
          <Link href="/contact-us" className="bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
