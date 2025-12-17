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
    <details className="group border border-border-light rounded-lg overflow-hidden">
      <summary className="flex justify-between items-center p-4 cursor-pointer bg-surface-light">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-[20px]">
            {icon}
          </span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">
          expand_more
        </span>
      </summary>

      <div className="p-4 pt-2 border-t border-border-light">{children}</div>
    </details>
  );
}
