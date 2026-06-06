import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[200px] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-[9999px] bg-primary/20 blur-[120px] dark:bg-primary/10" />
      </div>

      <main className="relative z-10 flex-grow">
        {/* Hero */}
        <section className="relative px-[16px] py-[80px] sm:py-[120px] lg:py-[160px]">
          <div className="container mx-auto">
            <div className="mx-auto flex max-w-[896px] flex-col items-center gap-[24px] text-center">
              <div className="inline-flex items-center rounded-[9999px] border border-primary/30 bg-primary/10 px-[16px] py-[6px] text-[14px] font-medium text-primary mb-[16px]">
                <span className="relative flex h-[8px] w-[8px] mr-[8px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-[9999px] bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-[8px] w-[8px] rounded-[9999px] bg-primary"></span>
                </span>
                Introducing the all-new TraceURL
              </div>
              <h1 className="text-[48px] font-black tracking-tighter sm:text-[60px] md:text-[72px] lg:text-[80px] leading-[1.1]">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-gray-400">
                  Shorten. Share.
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  Track Everything.
                </span>
              </h1>
              <p className="max-w-[672px] text-[18px] sm:text-[20px] text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                간단하고 강력하며 추적 가능한 링크를 만드세요. 모든 클릭에 대한 자세한 분석 정보를 한 곳에서 직관적으로 확인하세요.
              </p>

              <div className="mt-[32px] flex w-full max-w-[640px] flex-col gap-[16px]">
                <div className="relative flex h-[64px] w-full items-center rounded-[16px] bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <span className="material-symbols-outlined ml-[20px] text-[24px] text-gray-400">
                    link
                  </span>
                  <input
                    className="h-full w-full bg-transparent px-[16px] text-[16px] sm:text-[18px] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-0"
                    placeholder="Paste your long URL here..."
                  />
                  <div className="pr-[8px]">
                    <Link href="/profile">
                      <button className="flex h-[48px] px-[24px] items-center justify-center rounded-[12px] bg-primary text-[16px] font-bold text-white shadow-md transition-all hover:bg-primary-dark hover:-translate-y-[1px] hover:shadow-lg">
                        Shorten
                      </button>
                    </Link>
                  </div>
                </div>

                <p className="text-[14px] text-text-light-secondary dark:text-text-dark-secondary">
                  Ready for more features?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-primary hover:text-primary-dark hover:underline transition-colors"
                  >
                    Sign up for a free account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative bg-white dark:bg-[#0c1017] px-[16px] py-[96px] sm:py-[120px] border-t border-border-light dark:border-border-dark">
          <div className="container mx-auto">
            <div className="flex flex-col gap-[64px]">
              <div className="mx-auto max-w-[768px] text-center">
                <h2 className="text-[36px] font-bold tracking-tight sm:text-[44px]">
                  Everything You Need in a Link
                </h2>
                <p className="mt-[16px] text-[18px] sm:text-[20px] text-text-light-secondary dark:text-text-dark-secondary">
                  단축링크 생성부터 분석, 보안까지 링크 활용도를 극대화할 수 있는 완벽한 툴킷을 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="group flex flex-col gap-[20px] rounded-[24px] border border-border-light bg-[#fafafa] p-[32px] transition-all hover:-translate-y-[4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-border-dark dark:bg-surface-dark dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-emerald-100 text-primary dark:bg-primary/20">
                    <span className="material-symbols-outlined text-[32px]">
                      edit_square
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-[8px] text-[20px] font-bold">커스텀 단축링크</h3>
                    <p className="text-[15px] leading-relaxed text-text-light-secondary dark:text-text-dark-secondary">
                      브랜드 아이덴티티에 맞는 커스텀 슬러그(slug)를 사용하여 링크의 신뢰도와 클릭률을 대폭 높이세요.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group flex flex-col gap-[20px] rounded-[24px] border border-border-light bg-[#fafafa] p-[32px] transition-all hover:-translate-y-[4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-border-dark dark:bg-surface-dark dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                    <span className="material-symbols-outlined text-[32px]">
                      monitoring
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-[8px] text-[20px] font-bold">상세한 트래픽 분석</h3>
                    <p className="text-[15px] leading-relaxed text-text-light-secondary dark:text-text-dark-secondary">
                      클릭 수, 유입 지역, 브라우저 및 디바이스 환경 등 다양한 트래픽 데이터를 실시간으로 모니터링합니다.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group flex flex-col gap-[20px] rounded-[24px] border border-border-light bg-[#fafafa] p-[32px] transition-all hover:-translate-y-[4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-border-dark dark:bg-surface-dark dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                    <span className="material-symbols-outlined text-[32px]">
                      shield_locked
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-[8px] text-[20px] font-bold">안전한 보안 및 IP 차단</h3>
                    <p className="text-[15px] leading-relaxed text-text-light-secondary dark:text-text-dark-secondary">
                      악의적인 트래픽을 방지하기 위한 IP 차단 기능과 안정적인 인프라를 바탕으로 링크를 안전하게 보호합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-[16px] py-[96px] sm:py-[120px]">
          <div className="container mx-auto">
            <div className="relative mx-auto flex w-full max-w-[1024px] flex-col items-center gap-[24px] overflow-hidden rounded-[32px] bg-gradient-to-br from-primary to-emerald-600 px-[32px] py-[64px] sm:px-[64px] sm:py-[80px] text-center text-white shadow-2xl">
              {/* Decorative shapes */}
              <div className="absolute -top-[100px] -right-[100px] h-[300px] w-[300px] rounded-[9999px] bg-white/10 blur-[60px]" />
              <div className="absolute -bottom-[100px] -left-[100px] h-[300px] w-[300px] rounded-[9999px] bg-black/10 blur-[60px]" />

              <h2 className="relative z-10 text-[36px] font-bold tracking-tight sm:text-[48px]">
                Get More From Your Links
              </h2>
              <p className="relative z-10 max-w-[640px] text-[18px] sm:text-[20px] text-emerald-50">
                커스텀 도메인, 고급 분석 대시보드 기능을 포함한 프리미엄 기능을 지금 바로 무료로 체험해보세요.
              </p>
              <div className="relative z-10 mt-[16px] flex justify-center">
                <Link href="/login">
                  <button className="flex h-[56px] items-center justify-center rounded-[16px] bg-white px-[40px] text-[18px] font-bold text-primary shadow-lg transition-all hover:-translate-y-[2px] hover:bg-gray-50 hover:shadow-xl">
                    Create a Free Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
