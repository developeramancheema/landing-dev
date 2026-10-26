import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  iconNode?: ReactNode;
  badge?: string;
  badgeClassName?: string;
  bullets?: readonly string[];
  bulletsClassName?: string;
  // Optional highlighted stat (default: above title)
  stat?: ReactNode;
  statUnit?: ReactNode;
  statPosition?: "above" | "below";
  statClassName?: string;
  statUnitClassName?: string;
  wrapperClassName?: string;
  innerClassName?: string;
  iconWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  // Backward-compatible alias for wrapperClassName
  className?: string;
  // When provided, the card renders as a navigational link
  href?: string;
  // Decorative element rendered as a sibling before the inner content (e.g. gradient overlay)
  overlay?: ReactNode;
  // Content rendered after the description/bullets (e.g. a CTA)
  footer?: ReactNode;
};

export default function Card({
  title,
  description,
  icon,
  iconNode,
  badge,
  badgeClassName = "rounded-full bg-neutral-100 px-3 py-1 text-xs uppercase tracking-widest text-neutral-500",
  bullets,
  bulletsClassName = "mt-4 space-y-2 text-sm text-neutral-600",
  stat,
  statUnit,
  statPosition = "above",
  statClassName = "text-3xl tracking-tight sm:text-4xl text-neutral-900",
  statUnitClassName = "text-sm font-medium text-neutral-600",
  wrapperClassName = "group relative rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-50 px-3 py-3 transition duration-300 hover:-translate-y-1 hover:drop-shadow-xl",
  innerClassName = "h-full space-y-3 rounded-xl bg-white p-4 sm:p-6 drop-shadow-lg transition duration-300 group-hover:drop-shadow-xl",
  iconWrapperClassName = "flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100",
  titleClassName = "font-medium text-neutral-900",
  descriptionClassName = "text-neutral-600",
  className = "",
  href,
  overlay,
  footer,
}: CardProps) {
  const finalWrapperClassName = `${wrapperClassName} ${className}`.trim();
  const iconContent = iconNode ?? (icon ? <span>{icon}</span> : null);

  const statBlock =
    stat != null ? (
      <div className={statClassName}>
        {stat}
        {statUnit != null && <span className={statUnitClassName}> {statUnit}</span>}
      </div>
    ) : null;

  const content = (
    <>
      {overlay}
      <div className={innerClassName}>
        {badge ? (
          <div className="mb-4 flex items-center justify-between gap-3">
            {iconContent && <div className={iconWrapperClassName}>{iconContent}</div>}
            <span className={badgeClassName}>{badge}</span>
          </div>
        ) : (
          iconContent && <div className={iconWrapperClassName}>{iconContent}</div>
        )}
        {statPosition === "above" && statBlock}
        <h3 className={titleClassName}>{title}</h3>
        <p className={descriptionClassName}>{description}</p>
        {statPosition === "below" && statBlock}
        {bullets && bullets.length > 0 && (
          <div className={bulletsClassName}>
            {bullets.map((item) => (
              <div key={item} className="flex items-center gap-2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg> {item}</div>
            ))}
          </div>
        )}
        {footer}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={finalWrapperClassName}>
        {content}
      </Link>
    );
  }

  return <div className={finalWrapperClassName}>{content}</div>;
}