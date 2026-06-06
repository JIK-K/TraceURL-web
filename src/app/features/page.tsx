export default function FeaturesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-[32px] sm:py-[40px]">
          <div className="container mx-auto px-[16px]">
            <div className="mx-auto max-w-[896px] text-center">
              <h1 className="text-[36px] font-black tracking-tighter text-text-light-primary dark:text-text-dark-primary sm:text-[48px] md:text-[60px]">
                Powerful Features, Built for You
              </h1>
              <p className="mx-auto mt-[16px] max-w-[672px] text-[18px] text-text-light-secondary dark:text-text-dark-secondary md:text-[20px]">
                우리의 URL 단축기는 단순히 링크를 줄여주는 도구가 아닙니다.
                <br />
                정교한 분석부터 맞춤 브랜딩까지, 필요한 모든 기능을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="pb-[32px] sm:pb-[40px]">
          <div className="container mx-auto px-[16px]">
            <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-[16px] rounded-[12px] border border-border-light bg-surface-light p-[24px] transition-shadow hover:shadow-lg dark:border-border-dark dark:bg-surface-dark"
                >
                  <div className="flex size-12 items-center justify-center rounded-[8px] bg-emerald-100 text-primary dark:bg-surface-dark dark:border dark:border-border-dark">
                    <span className="material-symbols-outlined !text-[30px]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[20px] font-bold text-text-light-primary dark:text-text-dark-primary">
                      {item.title}
                    </h3>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[32px] sm:py-[40px]">
          <div className="container mx-auto px-[16px] bg-brand">
            <div className="mx-auto max-w-[896px] rounded-[12px]  p-[40px] text-center dark:bg-surface-dark">
              <div className="flex flex-col items-center gap-[24px]">
                <h2 className="text-[30px] font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-[36px]">
                  Ready to Elevate Your Links?
                </h2>
                <p className="text-[18px] text-text-light-secondary dark:text-text-dark-secondary">
                  수많은 사용자가 Shortify를 믿고 강력하고 추적 가능한 링크를
                  만들고 있습니다.
                  <br />
                  지금 무료로 시작해보세요.
                </p>
                <button className="flex h-[48px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] bg-primary px-[24px] text-[16px] font-bold text-white hover:opacity-90">
                  <span className="truncate">Create a Free Account</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
  {
    icon: "link",
    title: "URL Shortening",
    desc: "길고 복잡한 URL을 모든 플랫폼에서 공유하기 좋은 짧고 기억하기 쉬운 링크로 변환합니다.",
  },
  {
    icon: "edit",
    title: "Customizable Links",
    desc: "맞춤형 별칭을 사용해 브랜드 인지도를 높이고 클릭률을 향상시키세요.",
  },
  {
    icon: "monitoring",
    title: "In-Depth Analytics",
    desc: "클릭 수, 위치 정보, 유입 경로 등 실시간 분석 데이터를 확인할 수 있습니다.",
  },
  {
    icon: "qr_code_2",
    title: "QR Codes",
    desc: "단축 URL에 대한 동적 QR 코드를 생성할 수 있습니다.",
  },
  {
    icon: "domain",
    title: "Custom Domains",
    desc: "사용자만의 도메인을 연결하여 완전히 브랜딩된 링크를 만들어보세요.",
  },
  {
    icon: "groups",
    title: "Team Collaboration",
    desc: "팀원들을 초대하여 링크를 관리하고 캠페인을 함께 분석할 수 있습니다.",
  },
];
