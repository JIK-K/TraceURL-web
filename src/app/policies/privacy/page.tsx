"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f5f8f5] dark:bg-[#102210] text-[#0d1c0d] dark:text-[#e0e7e0] font-display">
      <div className="max-w-[1280px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px] py-[40px] flex gap-[48px]">
        {/* Sidebar */}
        <aside className="hidden lg:block w-[256px] shrink-0">
          <div className="sticky top-[96px] p-[16px] bg-white dark:bg-[#1a2e1a] rounded-[12px] border border-[#e7f4e7] dark:border-[#2a422a] shadow-sm">
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-green-800 dark:text-green-400 mb-[16px]">
              목차
            </h3>
            <nav className="flex flex-col gap-[4px] text-[14px]">
              <a
                href="#section-1"
                className="px-[12px] py-[8px] rounded-[8px] bg-[#0df20d]/10 text-green-900 dark:text-[#0df20d] font-medium"
              >
                1. 총칙
              </a>
              <a
                href="#section-2"
                className="px-[12px] py-[8px] rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                2. 수집하는 개인정보
              </a>
              <a
                href="#section-3"
                className="px-[12px] py-[8px] rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                3. 이용 목적
              </a>
              <a
                href="#section-4"
                className="px-[12px] py-[8px] rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                4. 보유 및 이용기간
              </a>
              <a
                href="#section-5"
                className="px-[12px] py-[8px] rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                5. 이용자의 권리
              </a>
              <a
                href="#section-6"
                className="px-[12px] py-[8px] rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                6. 쿠키
              </a>
              <a
                href="#section-7"
                className="px-[12px] py-[8px] rounded-[8px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                7. 보호책임자
              </a>
            </nav>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 space-y-12">
          {/* Header */}
          <header className="border-b border-[#e7f4e7] dark:border-[#2a422a] pb-[24px]">
            <span className="inline-flex items-center gap-[8px] px-[12px] py-[4px] rounded-[9999px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[12px] font-semibold mb-[16px]">
              <span className="material-symbols-outlined text-[16px]">
                verified_user
              </span>
              Privacy Policy
            </span>
            <h1 className="text-[30px] md:text-[36px] font-black mb-[8px]">
              개인정보처리방침
            </h1>
          </header>

          <section id="section-1" className="scroll-mt-[112px]">
            <h2 className="text-[20px] font-bold mb-[12px]">1. 총칙</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              ShortUrl 서비스(이하 "회사")는 개인정보 보호법 및 관계 법령을
              준수하며, 이용자의 개인정보를 보호하기 위해 최선을 다합니다.
            </p>
          </section>

          <section id="section-2" className="scroll-mt-[112px]">
            <h2 className="text-[20px] font-bold mb-[16px]">2. 수집하는 개인정보</h2>
            <div className="rounded-[12px] border border-[#e7f4e7] dark:border-[#2a422a] bg-white dark:bg-[#1a2e1a] p-[20px] text-[14px] text-gray-600 dark:text-gray-300">
              <ul className="list-disc pl-[20px] space-y-2">
                <li>
                  <strong>회원 정보:</strong> 이메일, 닉네임
                </li>
                <li>
                  <strong>자동 수집:</strong> IP 주소, 접속 로그, 브라우저/기기
                  정보
                </li>
              </ul>
            </div>
          </section>

          <section id="section-3" className="scroll-mt-[112px]">
            <h2 className="text-[20px] font-bold mb-[16px]">3. 이용 목적</h2>
            <div className="grid md:grid-cols-3 gap-[16px]">
              <div className="p-[16px] rounded-[8px] bg-gray-50 dark:bg-gray-800/30 border">
                단축 URL 서비스 제공
              </div>
              <div className="p-[16px] rounded-[8px] bg-gray-50 dark:bg-gray-800/30 border">
                통계 및 분석 리포트 제공
              </div>
              <div className="p-[16px] rounded-[8px] bg-gray-50 dark:bg-gray-800/30 border">
                보안 및 부정 이용 방지
              </div>
            </div>
          </section>

          <section id="section-4" className="scroll-mt-[112px]">
            <h2 className="text-[20px] font-bold mb-[12px]">4. 보유 및 이용기간</h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-300">
              개인정보는 목적 달성 후 지체 없이 파기되며, 관계 법령에 따라 일정
              기간 보관될 수 있습니다.
            </p>
          </section>

          <section id="section-5" className="scroll-mt-[112px]">
            <h2 className="text-[20px] font-bold mb-[12px]">5. 이용자의 권리</h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-300">
              이용자는 언제든지 개인정보 열람, 수정, 삭제 및 처리 정지를 요청할
              수 있습니다.
            </p>
          </section>

          <section id="section-6" className="scroll-mt-[112px]">
            <h2 className="text-[20px] font-bold mb-[12px]">6. 쿠키</h2>
            <div className="p-[16px] rounded-[4px] bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 text-[14px]">
              쿠키 설정을 거부할 경우 일부 서비스 이용에 제한이 있을 수
              있습니다.
            </div>
          </section>

          <section id="section-7" className="scroll-mt-[112px]">
            <h2 className="text-[20px] font-bold mb-[16px]">7. 개인정보 보호책임자</h2>
            <div className="rounded-[16px] bg-[#0d1c0d] dark:bg-black text-white p-[24px]">
              <p className="font-semibold">김철수 (CISO)</p>
              <p className="text-[14px] text-gray-400">privacy@shorturl.com</p>
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-[#e7f4e7] dark:border-[#2a422a] py-[32px] text-center text-[14px] text-gray-500">
        © 2023 ShortUrl Service. All rights reserved.
      </footer>
    </div>
  );
}
