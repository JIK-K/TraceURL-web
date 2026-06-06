export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center p-[16px] sm:p-[24px] lg:p-[32px]">
            <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

