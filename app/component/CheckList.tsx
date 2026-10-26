import type { ElementType, ReactNode } from "react";

type CheckListItemProps = {
  text?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  /** When set, shows this number in the icon badge instead of the default checkmark */
  index?: number;
  as?: "div" | "li";
  wrapperClassName?: string;
  innerClassName?: string;
  iconClassName?: string;
  textClassName?: string;
};

export function CheckListItem({
  text,
  children,
  icon,
  index,
  as: Tag = "div",
  wrapperClassName = "group rounded-xl bg-white/80 p-2 shadow-md transition-all duration-300 hover:-translate-y-1",
  innerClassName = "flex items-start sm:items-center gap-2",
  iconClassName = "flex h-6 w-6 min-h-6 min-w-6 rounded-lg text-xs sm:h-9 sm:w-9 sm:min-h-9 sm:min-w-9 items-center justify-center sm:rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 sm:text-sm font-bold text-white drop-shadow-lg drop-shadow-indigo-500/25",
  textClassName = "",
}: CheckListItemProps) {
  const content = children ?? text;
  const badge = icon ?? (index !== undefined ? index : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 sm:h-4 sm:w-4"><path d="M20 6 9 17l-5-5"/></svg>);

  if (Tag === "li") {
    return (
      <li className={`${innerClassName} ${wrapperClassName}`.trim()}>
        <div className={iconClassName}>{badge}</div>
        <div className={textClassName}>{content}</div>
      </li>
    );
  }

  return (
    <div className={wrapperClassName}>
      <div className={innerClassName}>
        <div className={iconClassName}>{badge}</div>
        <div className={textClassName}>{content}</div>
      </div>
    </div>
  );
}

type CheckListProps = {
  items: readonly string[];
  as?: ElementType;
  gridClassName?: string;
  itemAs?: "div" | "li";
  icon?: ReactNode;
  /** Show 1, 2, 3… instead of checkmarks */
  numbered?: boolean;
  /** First number when numbered (default 1) */
  startIndex?: number;
  itemWrapperClassName?: string;
  itemInnerClassName?: string;
  itemIconClassName?: string;
  itemTextClassName?: string;
};

export default function CheckList({
  items,
  as: GridTag = "div",
  gridClassName = "grid gap-3 sm:grid-cols-2",
  itemAs = "div",
  icon,
  numbered = false,
  startIndex = 1,
  itemWrapperClassName,
  itemInnerClassName,
  itemIconClassName,
  itemTextClassName,
}: CheckListProps) {
  return (
    <GridTag className={gridClassName}>
      {items.map((item, i) => (
        <CheckListItem
          key={String(item)}
          text={item}
          as={itemAs}
          icon={numbered ? undefined : icon}
          index={numbered ? startIndex + i : undefined}
          wrapperClassName={itemWrapperClassName}
          innerClassName={itemInnerClassName}
          iconClassName={itemIconClassName}
          textClassName={itemTextClassName}
        />
      ))}
    </GridTag>
  );
}
