import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-primary-light dark:bg-background-dark font-display">
      {/* Main */}
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4 max-w-4xl text-center mx-auto">
              <h1 className="text-4xl font-black tracking-tighter text-text-light-primary dark:text-text-dark-primary sm:text-5xl md:text-6xl">
                Shorten. Share. Track.
              </h1>
              <p className="max-w-2xl text-lg text-text-light-secondary dark:text-text-dark-secondary md:text-xl">
                간단하고 강력하며 추적 가능한 링크를 만드세요.
                <br /> 모든 클릭에 대한 자세한 분석 정보를 한 곳에서 확인하세요.
              </p>

              <div className="flex w-full max-w-xl flex-col gap-4 bg-white">
                <label className="flex h-14 w-full rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark focus-within:ring-2 focus-within:ring-primary">
                  <span className="material-symbols-outlined flex items-center justify-center pl-4 text-text-light-secondary dark:text-text-dark-secondary self-center">
                    link
                  </span>
                  <input
                    className="form-input w-full flex-1 bg-white px-2 text-text-light-primary placeholder:text-text-light-secondary focus:outline-0 dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary"
                    placeholder="Paste your long URL here"
                  />
                  <div className="flex items-center justify-center pr-2">
                    <Link href="/profile">
                      <button className="flex h-10 min-w-[84px] items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white hover:opacity-90">
                        Shorten
                      </button>
                    </Link>
                  </div>
                </label>

                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  Ready for more features?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-primary hover:underline"
                  >
                    Sign up for a free account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24 bg-white dark:bg-background-dark">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-12">
              <div className="max-w-3xl text-center mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-4xl">
                  Everything You Need in a Link
                </h2>
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
                  단축링크 생성부터 분석까지, 링크 활용도를 극대화할 수 있는
                  모든 기능을 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="flex flex-col gap-3 rounded-xl border border-border-light bg-primary-light p-6 dark:border-border-dark dark:bg-surface-dark">
                  <div className="text-primary">
                    <span className="material-symbols-outlined font-bold text-3xl">
                      Edit
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
                    커스텀 단축링크
                  </h3>
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    브랜드에 맞는 링크로 신뢰도를 높이세요.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col gap-3 rounded-xl border border-border-light bg-primary-light p-6 dark:border-border-dark dark:bg-surface-dark">
                  <div className="text-primary">
                    <span className="material-symbols-outlined font-bold text-3xl">
                      monitoring
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
                    상세한 트래픽 분석
                  </h3>
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    클릭 수, 지역, referrer 등 다양한 데이터를 실시간
                    분석합니다.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col gap-3 rounded-xl border border-border-light bg-primary-light p-6 dark:border-border-dark dark:bg-surface-dark">
                  <div className="text-primary">
                    <span className="material-symbols-outlined font-bold text-3xl">
                      verified_user
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
                    안전하고 빠른 서비스
                  </h3>
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    안정적인 서비스 성능과 보안을 기반으로 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="w-full mx-auto flex flex-col gap-4 max-w-3xl rounded-xl bg-emerald-50 p-10 text-center dark:bg-surface-dark ">
            <h2 className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-4xl">
              Get More From Your Links
            </h2>
            <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
              커스텀 도메인, 고급 분석 대시보드, 팀 협업 기능을 포함한 전체
              기능을 사용해보세요.
            </p>
            <div className="flex justify-center">
              <button className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white hover:opacity-90">
                Create a Free Account
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
