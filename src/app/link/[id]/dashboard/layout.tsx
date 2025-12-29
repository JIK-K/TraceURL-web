export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
            <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

