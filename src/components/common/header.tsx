import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between border-b border-border-light dark:border-border-dark">
          {/* Logo */}
          <div className="flex items-center gap-4 text-text-light-primary dark:text-text-dark-primary">
            <Image src="/icon.png" alt="brand-icon" width={40} height={40} />
            <Link href={"/"}>
              <h2 className="text-2xl font-bold tracking-tight">TraceURL</h2>
            </Link>
          </div>

          {/* Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-6 text-sm font-medium text-text-light-primary dark:text-text-dark-primary">
              <Link className="hover:text-primary" href="/features">
                Features
              </Link>
              <Link className="hover:text-primary" href="/pricing">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Link
                className="flex h-10 min-w-[84px] items-center justify-center rounded-lg bg-emerald-50 px-4 text-sm font-bold text-text-light-primary hover:bg-emerald-100 dark:bg-surface-dark dark:text-text-dark-primary dark:hover:bg-border-dark"
                href={"/login"}
              >
                Log In
              </Link>
              <Link
                className="flex h-10 min-w-[84px] items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:opacity-90"
                href={"/login"}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
