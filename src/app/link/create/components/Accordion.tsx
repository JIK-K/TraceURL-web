export default function Accordion({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border border-border-light rounded-[8px] overflow-hidden">
      <summary className="flex justify-between items-center p-[16px] cursor-pointer bg-surface-light">
        <div className="flex items-center gap-[12px]">
          <span className="material-symbols-outlined text-primary text-[20px]">
            {icon}
          </span>
          <span className="text-[14px] font-medium">{title}</span>
        </div>
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">
          expand_more
        </span>
      </summary>

      <div className="p-[16px] pt-[8px] border-t border-border-light">{children}</div>
    </details>
  );
}
