"use client";

import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f8fcf8] dark:bg-[#102210] text-[#0d1b0d] dark:text-gray-100 font-display transition-colors duration-200">
      <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8 lg:px-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-28 flex flex-col gap-4">
            <div className="rounded-xl border border-[#cfe7cf] bg-white dark:bg-[#1a2e1a] dark:border-[#2a452a] p-5 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#4c9a4c]">
                이 페이지 내용
              </p>
              <nav className="flex flex-col space-y-1 text-sm">
                <a
                  href="#article1"
                  className="rounded-md px-2 py-1.5 hover:bg-green-50 hover:text-[#13ec13] dark:hover:bg-green-900/30"
                >
                  제1조 (목적)
                </a>
                <a
                  href="#article2"
                  className="rounded-md px-2 py-1.5 hover:bg-green-50 hover:text-[#13ec13] dark:hover:bg-green-900/30"
                >
                  제2조 (용어의 정의)
                </a>
                <a
                  href="#article3"
                  className="rounded-md px-2 py-1.5 hover:bg-green-50 hover:text-[#13ec13] dark:hover:bg-green-900/30"
                >
                  제3조 (서비스 변경)
                </a>
                <a
                  href="#article4"
                  className="rounded-md px-2 py-1.5 hover:bg-green-50 hover:text-[#13ec13] dark:hover:bg-green-900/30"
                >
                  제4조 (이용자의 의무)
                </a>
                <a
                  href="#article5"
                  className="rounded-md px-2 py-1.5 hover:bg-green-50 hover:text-[#13ec13] dark:hover:bg-green-900/30"
                >
                  제5조 (개인정보 보호)
                </a>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          <div className="rounded-2xl border border-[#cfe7cf] bg-white dark:bg-[#1a2e1a] dark:border-[#2a452a] shadow-sm p-8 md:p-12">
            <div className="mb-10 border-b border-[#cfe7cf] pb-8">
              <span className="inline-block rounded-full bg-[#13ec13]/10 px-3 py-1 text-xs font-bold text-[#13ec13]">
                이용약관
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-black">
                서비스 이용약관
              </h1>
            </div>

            <div className="space-y-14">
              <section id="article1" className="scroll-mt-32">
                <h3 className="text-xl font-bold mb-4">제1조 (목적)</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  본 약관은 회사가 제공하는 URL 단축 서비스 이용과 관련하여
                  회사와 회원 간의 권리와 의무를 규정함을 목적으로 합니다.
                </p>
              </section>

              <section id="article2" className="scroll-mt-32">
                <h3 className="text-xl font-bold mb-4">제2조 (용어의 정의)</h3>
                <div className="rounded-lg border border-[#cfe7cf] bg-[#f8fcf8] dark:bg-[#102210]/50 p-6">
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li>
                      <strong>서비스</strong>: URL 단축 및 추적 기능
                    </li>
                    <li>
                      <strong>회원</strong>: 본 약관에 동의한 이용자
                    </li>
                  </ul>
                </div>
              </section>

              <section id="article3" className="scroll-mt-32">
                <h3 className="text-xl font-bold mb-4">제3조 (서비스 변경)</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  회사는 운영상 필요에 따라 서비스의 일부 또는 전부를 변경할 수
                  있습니다.
                </p>
              </section>

              <section id="article4" className="scroll-mt-32">
                <h3 className="text-xl font-bold mb-4">
                  제4조 (이용자의 의무)
                </h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>허위 정보 등록 금지</li>
                  <li>타인의 권리 침해 금지</li>
                </ul>
              </section>

              <section id="article5" className="scroll-mt-32">
                <h3 className="text-xl font-bold mb-4">
                  제5조 (개인정보 보호)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  회사는 관련 법령에 따라 회원의 개인정보를 보호합니다.
                </p>
              </section>
            </div>
          </div>

          <footer className="mt-8 text-center text-xs text-gray-400">
            © 2023 URL Shortener. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
