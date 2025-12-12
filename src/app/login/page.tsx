// pages/login.tsx
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 flex flex-1 justify-center items-center py-5">
            <div className="layout-content-container flex flex-col max-w-[420px] flex-1">
              <Link href={"/"}>
                <div className="flex flex-col items-center justify-center gap-4 text-[#0d121c] dark:text-white pb-6">
                  <Image src={"/icon.png"} alt="icon" width={70} height={50} />
                </div>
              </Link>

              <div className="bg-white dark:bg-background-dark/50 rounded-lg p-8 shadow-sm">
                <h1 className="text-[#0d121c] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3">
                  Sign in to Your Account
                </h1>
                <p className="text-slate-600 dark:text-gray-400 text-base font-normal leading-normal pb-6 pt-1 text-center">
                  링크를 간편하게 단축하고, 공유하고, 추적하세요.
                </p>

                <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch">
                  {/* Google Login */}
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-200 gap-3 border border-gray-200">
                    <Image
                      src={"/image/Google_Original.png"}
                      alt="google_icon"
                      width={20}
                      height={20}
                    />
                    <span className="truncate text-black dark:text-black">
                      Continue with Google
                    </span>
                  </button>

                  {/* GitHub Login */}
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-black text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-800 gap-3">
                    <Image
                      src={"/image/Github_Original.png"}
                      alt="github_icon"
                      width={20}
                      height={20}
                    />
                    <span className="truncate">Continue with GitHub</span>
                  </button>
                </div>
              </div>

              <p className="text-slate-600 dark:text-gray-500 text-sm font-normal leading-normal pt-8 px-2 text-center">
                계속 진행하면{" "}
                <a className="underline hover:text-primary" href="#">
                  서비스 이용약관
                </a>{" "}
                및{" "}
                <a className="underline hover:text-primary" href="#">
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
