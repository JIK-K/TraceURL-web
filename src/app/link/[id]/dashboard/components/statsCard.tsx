import { AnalyticsSummaryResponseDto } from "@/common/dtos/analytics.dto";

interface StatsCardsProps {
  summary?: AnalyticsSummaryResponseDto;
}
export default function StatsCards(props: StatsCardsProps) {
  const { summary } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
      <div className="flex flex-col justify-between rounded-[8px] p-[20px] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-[8px] mb-[4px]">
          <span className="material-symbols-outlined text-primary text-[20px]">
            ads_click
          </span>
          <p className="text-[14px] font-semibold text-subtext-light dark:text-subtext-dark">
            Total Visits (PV)
          </p>
        </div>
        <div className="flex items-baseline gap-[8px]">
          <p className="text-[30px] font-bold leading-tight">
            {summary?.pv.value.toLocaleString()}
          </p>
          <span className="text-[12px] font-medium text-primary bg-primary/10 px-[6px] py-[2px] rounded-[4px] flex items-center gap-[2px]">
            <span className="material-symbols-outlined text-[12px]">
              trending_up
            </span>{" "}
            {summary?.pv.change}%
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[8px] p-[20px] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-[8px] mb-[4px]">
          <span className="material-symbols-outlined text-primary text-[20px]">
            person
          </span>
          <p className="text-[14px] font-semibold text-subtext-light dark:text-subtext-dark">
            Unique Visitors (UV)
          </p>
        </div>
        <div className="flex items-baseline gap-[8px]">
          <p className="text-[30px] font-bold leading-tight">
            {summary?.uv.value.toLocaleString()}
          </p>
          <span className="text-[12px] font-medium text-primary bg-primary/10 px-[6px] py-[2px] rounded-[4px] flex items-center gap-[2px]">
            <span className="material-symbols-outlined text-[12px]">
              trending_up
            </span>{" "}
            {summary?.uv.change}%
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[8px] p-[20px] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm justify-between">
        <div className="flex items-center gap-[8px] mb-[4px]">
          <span className="material-symbols-outlined text-primary text-[20px]">
            group_add
          </span>
          <p className="text-[14px] font-semibold text-subtext-light dark:text-subtext-dark">
            New vs Returning
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between text-[12px] font-medium">
            <span className="text-text-light dark:text-text-dark">
              New: {summary?.newRate}%
            </span>
            <span className="text-subtext-light dark:text-subtext-dark">
              Returning: {summary?.returnRate}%
            </span>
          </div>
          <div className="flex w-full h-[8px] rounded-[9999px] overflow-hidden bg-background-light dark:bg-background-dark">
            <div
              className="bg-primary h-full"
              style={{ width: `${summary?.newRate}%` }}
            ></div>
            <div
              className="bg-primary-light/30 h-full"
              style={{ width: `${summary?.returnRate}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[8px] p-[20px] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-[8px] mb-[4px]">
          <span className="material-symbols-outlined text-primary text-[20px]">
            public
          </span>
          <p className="text-[14px] font-semibold text-subtext-light dark:text-subtext-dark">
            Top Country
          </p>
        </div>
        <div className="flex items-center gap-[12px] mt-[4px]">
          {summary?.topCountry.flagImage && (
            <img
              alt={`${summary?.topCountry.name} Flag`}
              className="rounded-[4px] w-[32px] h-auto shadow-sm"
              src={summary.topCountry.flagImage}
            />
          )}
          <div>
            <p className="text-[20px] font-bold leading-tight">
              {summary?.topCountry.name}
            </p>
            <p className="text-[12px] text-subtext-light dark:text-subtext-dark">
              {summary?.topCountry.percent}% of total traffic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
