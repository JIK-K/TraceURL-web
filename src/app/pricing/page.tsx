export default function PricingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      {/* MAIN */}
      <main className="flex-grow">
        {/* PRICING SECTION */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-black tracking-tighter text-text-light-primary dark:text-text-dark-primary sm:text-5xl md:text-6xl">
                Find the perfect plan
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light-secondary dark:text-text-dark-secondary md:text-xl">
                간단하고 명확한 요금제. 어떤 숨겨진 비용도 없습니다. <br />
                당신의 사용 방식에 가장 최적화된 플랜을 선택하고 링크 활용을 한
                단계 끌어올리세요.
              </p>
            </div>

            {/* PRICING CARDS */}
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* FREE */}
              <div className="flex flex-col rounded-xl border border-border-light bg-surface-light p-8 dark:border-border-dark dark:bg-surface-dark">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
                    Free
                  </h3>
                  <p className="mt-2 text-text-light-secondary dark:text-text-dark-secondary">
                    For individuals getting started.
                  </p>

                  <div className="mt-6">
                    <span className="text-4xl font-black text-text-light-primary dark:text-text-dark-primary">
                      $0
                    </span>
                    <span className="ml-1 text-lg font-medium text-text-light-secondary dark:text-text-dark-secondary">
                      / month
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {[
                      "100 links/month",
                      "Basic Analytics",
                      "QR Code Generation",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">
                          check_circle
                        </span>
                        <span className="text-text-light-secondary dark:text-text-dark-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-8 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-50 px-6 text-base font-bold text-text-light-primary hover:bg-emerald-100 dark:bg-surface-dark dark:text-text-dark-primary dark:hover:bg-border-dark">
                  Get Started
                </button>
              </div>

              {/* PRO */}
              <div className="relative flex flex-col rounded-xl border-2 border-primary bg-surface-light p-8 dark:bg-surface-dark">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
                    Pro
                  </h3>
                  <p className="mt-2 text-text-light-secondary dark:text-text-dark-secondary">
                    For power users and small businesses.
                  </p>

                  <div className="mt-6">
                    <span className="text-4xl font-black text-text-light-primary dark:text-text-dark-primary">
                      $19
                    </span>
                    <span className="ml-1 text-lg font-medium text-text-light-secondary dark:text-text-dark-secondary">
                      / month
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {[
                      "1,000 links/month",
                      "Advanced Analytics",
                      "Custom Domains",
                      "Email Support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">
                          check_circle
                        </span>
                        <span className="text-text-light-secondary dark:text-text-dark-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-8 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white hover:opacity-90">
                  Choose Pro
                </button>
              </div>

              {/* BUSINESS */}
              <div className="flex flex-col rounded-xl border border-border-light bg-surface-light p-8 dark:border-border-dark dark:bg-surface-dark">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
                    Business
                  </h3>
                  <p className="mt-2 text-text-light-secondary dark:text-text-dark-secondary">
                    For teams and larger companies.
                  </p>

                  <div className="mt-6">
                    <span className="text-4xl font-black text-text-light-primary dark:text-text-dark-primary">
                      $49
                    </span>
                    <span className="ml-1 text-lg font-medium text-text-light-secondary dark:text-text-dark-secondary">
                      / month
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {[
                      "Unlimited links",
                      "Team Collaboration",
                      "API Access",
                      "Priority Support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">
                          check_circle
                        </span>
                        <span className="text-text-light-secondary dark:text-text-dark-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-8 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-50 px-6 text-base font-bold text-text-light-primary hover:bg-emerald-100 dark:bg-surface-dark dark:text-text-dark-primary dark:hover:bg-border-dark">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-4xl">
                자주 묻는 질문
              </h2>

              <div className="mt-10 space-y-4">
                {[
                  {
                    q: "나중에 요금제를 변경할 수 있나요?",
                    a: "네, 언제든지 계정 설정에서 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경 시에는 자동으로 일할 계산된 요금 또는 크레딧이 적용됩니다.",
                  },
                  {
                    q: "어떤 결제 방식을 지원하나요?",
                    a: "NaverPay, KakaoPay, Toss, Visa, Mastercard, American Express를 포함한 대부분의 주요 신용카드를 지원합니다. 결제는 Stripe를 통해 안전하게 처리됩니다. 또한 가상계좌 입금으로도 가능합니다.",
                  },
                  {
                    q: "연간 결제 시 할인 혜택이 있나요?",
                    a: "물론입니다! 연간 결제를 선택하면 20% 할인이 적용됩니다. 이는 두 달 이상 무료로 사용하는 것과 같은 혜택입니다.",
                  },
                  {
                    q: "제가 소유한 도메인을 사용할 수 있나요?",
                    a: "네, Pro 및 Business 요금제에서 커스텀 도메인을 사용할 수 있습니다. 이를 통해 단축 링크에 브랜드 도메인을 연결할 수 있습니다.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-lg bg-background-light p-6 dark:bg-background-dark"
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-text-light-primary dark:text-text-dark-primary">
                      {item.q}
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>

                    <p className="mt-4 text-text-light-secondary dark:text-text-dark-secondary">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
