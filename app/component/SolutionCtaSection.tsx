import Image from "next/image";
import type { ReactNode } from "react";
import DemoFreeForm from "@/app/component/DemoFreeForm";
import Heading from "@/app/component/Heading";
import {
  defaultCtaHighlightFeatures,
  defaultCtaSectionContent,
  defaultCtaTrustAvatars,
  defaultCtaTrustBadges,
  type CtaHighlightFeature,
  type CtaTrustBadge,
} from "@/lib/cta-section-data";

export type SolutionCtaSectionProps = {
  badge?: string;
  title?: string;
  description?: string;
  businessType?: string;
  highlightFeatures?: CtaHighlightFeature[];
  trustAvatars?: string[];
  trustBadges?: CtaTrustBadge[];
  trustedBusinessCount?: string;
  className?: string;
  formSlot?: ReactNode;
};

export default function SolutionCtaSection({
  badge = defaultCtaSectionContent.badge,
  title = defaultCtaSectionContent.title,
  description = defaultCtaSectionContent.description,
  businessType,
  highlightFeatures = defaultCtaHighlightFeatures,
  trustAvatars = defaultCtaTrustAvatars,
  trustBadges = defaultCtaTrustBadges,
  trustedBusinessCount = defaultCtaSectionContent.trustedBusinessCount,
  className = "",
  formSlot,
}: SolutionCtaSectionProps) {
  return (
    <section className={`w-full overflow-x-hidden bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 py-14 sm:py-20 ${className}`}>
      <div className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
            <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div className="min-w-0 space-y-5 sm:space-y-6">
                <Heading
                  badge={badge}
                  title={title}
                  description={description}
                  titleClassName="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[40px] capitalize"
                  descriptionClassName="text-sm text-white/90 sm:text-base"
                />

                <div className="space-y-4 sm:space-y-5">
                  {highlightFeatures.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 sm:items-center sm:gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white drop-shadow-sm sm:h-12 sm:w-12">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white sm:text-base">{item.title}</p>
                        <p className="text-xs text-white/85 sm:text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <div className="flex -space-x-2.5">
                      {trustAvatars.map((src) => (
                        <Image
                          key={src}
                          src={src}
                          alt=""
                          width={40}
                          height={40}
                          loading="lazy"
                          className="relative h-9 w-9 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
                        />
                      ))}
                    </div>
                    <div className="hidden h-10 w-px bg-white/30 sm:block" aria-hidden />
                    <div className="min-w-0">
                      <p className="text-sm leading-snug text-white">
                        Trusted by <span className="font-semibold">{trustedBusinessCount}</span> businesses worldwide
                      </p>
                      <div className="mt-1 flex gap-0.5" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-100/95 px-3 py-3 sm:px-5 sm:py-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
                      {trustBadges.map((item) => (
                        <div key={item.title} className="flex items-start gap-2">
                          {item.icon}
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-indigo-950">{item.title}</div>
                            <div className="text-xs text-slate-500">{item.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full">
                {formSlot ?? (businessType ? <DemoFreeForm businessType={businessType} /> : <DemoFreeForm />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
