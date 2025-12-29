import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* 약관 링크 */}
          <div className="flex gap-4">
            <Link
              href="/policies/agreement"
              className="text-xs text-text-light-secondary hover:text-primary dark:text-text-dark-secondary dark:hover:text-primary transition-colors"
            >
              이용약관
            </Link>
            <Link
              href="/policies/privacy"
              className="text-xs text-text-light-secondary hover:text-primary dark:text-text-dark-secondary dark:hover:text-primary transition-colors"
            >
              개인정보처리방침
            </Link>
          </div>

          {/* 저작권 */}
          <p className="text-[11px] text-text-light-secondary dark:text-text-dark-secondary">
            © {new Date().getFullYear()} TraceURL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
