// pages/login.tsx
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col bg-primary-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-[16px] flex flex-1 justify-center items-center py-[20px]">
            <div className="layout-content-container flex flex-col max-w-[420px] flex-1">
              <Link href={"/"}>
                <div className="flex flex-col items-center justify-center gap-[16px] text-[#0d121c] dark:text-white pb-[24px]">
                  <Image src={"/icon.png"} alt="icon" width={70} height={50} />
                </div>
              </Link>

              <div className="bg-white dark:bg-background-dark/50 rounded-[8px] p-[32px] shadow-sm">
                <h1 className="text-[#0d121c] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-[12px]">
                  Sign in to Your Account
                </h1>
                <p className="text-slate-600 dark:text-gray-400 text-[16px] font-normal leading-normal pb-[24px] pt-[4px] text-center">
                  링크를 간편하게 단축하고, 공유하고, 추적하세요.
                </p>

                <div className="flex flex-1 gap-[12px] max-w-[480px] flex-col items-stretch">
                  {/* Google Login */}
                  <Link
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] h-[48px] px-[20px] bg-white text-[16px] font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-200 gap-[12px] border border-gray-200"
                    href={`${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/google`}
                  >
                    <Image
                      src={"/image/Google_Original.png"}
                      alt="google_icon"
                      width={20}
                      height={20}
                    />
                    <span className="truncate text-black dark:text-black">
                      Continue with Google
                    </span>
                  </Link>

                  {/* GitHub Login */}
                  <Link
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] h-[48px] px-[20px] bg-black text-white text-[16px] font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-800 gap-[12px]"
                    href={`${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/github`}
                  >
                    <Image
                      src={"/image/Github_Original.png"}
                      alt="github_icon"
                      width={20}
                      height={20}
                    />
                    <span className="truncate">Continue with GitHub</span>
                  </Link>
                </div>
              </div>

              <p className="text-slate-600 dark:text-gray-500 text-[14px] font-normal leading-normal pt-[32px] px-[8px] text-center">
                계속 진행하면{" "}
                <a
                  className="underline hover:text-primary"
                  href="/policies/agreement"
                >
                  서비스 이용약관
                </a>{" "}
                및{" "}
                <a
                  className="underline hover:text-primary"
                  href="/policies/privacy"
                >
                  개인정보처리방침
                </a>
                에 동의하게 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
