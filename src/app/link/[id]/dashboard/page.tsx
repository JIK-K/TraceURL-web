"use client";

import { useParams, useRouter } from "next/navigation";
import DeviceBreakdown from "./components/deviceBreakdown";
import RecentClicksTable from "./components/recentClicksTable";
import StatsCards from "./components/statsCard";
import TopBrowsers from "./components/topBrowsers";
import TopReferrers from "./components/topReferrers";
import TrafficChart from "./components/trafficChart";
import VisitsByLocation from "./components/visitsByLocation";
import { useEffect, useState } from "react";
import {
  getChartClickData,
  getDetailClickData,
  getRecentClickList,
  getSummaryClickData,
} from "@/api/analytics.api";
import {
  AnalyticsChartResponseDto,
  AnalyticsDetailResponseDto,
  AnalyticsSummaryResponseDto,
  RecentClickResponseDto,
} from "@/common/dtos/analytics.dto";
import PlatformBreakdown from "./components/PlatformBreakdown";

export default function DashboardPage() {
  const { id } = useParams();
  const router = useRouter();
  const [detail, setDetail] = useState<AnalyticsDetailResponseDto>();
  const [summary, setSummary] = useState<AnalyticsSummaryResponseDto>();

  const [chartData, setChartData] = useState<AnalyticsChartResponseDto | null>(
    null
  );
  const [selectedRange, setSelectedRange] = useState("7d");
  const [isChartLoading, setIsChartLoading] = useState(false);
  const [recentClicks, setRecentClicks] = useState<RecentClickResponseDto[]>(
    []
  );
  const [tablePage, setTablePage] = useState(1);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const TABLE_SIZE = 5;
  useEffect(() => {
    if (!id) return;

    getDetailClickData(id as string)
      .then((res) => {
        console.log(res), setDetail(res.data.data);
      })
      .catch(console.error);
    getSummaryClickData(id as string)
      .then((res) => setSummary(res.data.data))
      .catch(console.error);
    getRecentClickList(id as string, 1, TABLE_SIZE)
      .then((res) => setRecentClicks(res.data.data))
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    if (!id) return;

    setIsChartLoading(true);
    getChartClickData(id as string, selectedRange)
      .then((res) => setChartData(res.data.data))
      .catch(console.error)
      .finally(() => setIsChartLoading(false));
  }, [id, selectedRange]);

  const handleLoadMoreClicks = async () => {
    if (isTableLoading || !id) return;

    const nextPage = tablePage + 1;
    setIsTableLoading(true);

    try {
      const response = await getRecentClickList(
        id as string,
        nextPage,
        TABLE_SIZE
      );
      const newData = response.data.data;

      if (newData.length > 0) {
        setRecentClicks((prev) => [...prev, ...newData]);
        setTablePage(nextPage);
      } else {
        alert("더 이상 불러올 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching more clicks:", error);
    } finally {
      setIsTableLoading(false);
    }
  };
  return (
    <>
      <header className="flex flex-col items-start justify-center whitespace-nowrap border-b border-border-light dark:border-border-dark px-2 sm:px-4 py-4 mb-6">
        <div className="flex w-full items-center justify-between mb-4">
          <button
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
            onClick={() => router.push("/profile/links")}
          >
            <span className="material-symbols-outlined mr-1 text-lg">
              arrow_back
            </span>
            Back to Your Links
          </button>
        </div>
        <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <div className="bg-primary/10 rounded-lg">
            <span className="p-2 material-symbols-outlined text-primary text-3xl">
              analytics
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight">
              Analytics Dashboard
            </h1>
            <p className="text-xs text-subtext-light dark:text-subtext-dark font-medium">
              Tracking & Performance
            </p>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-6">
        <StatsCards summary={summary} />
        <TrafficChart
          data={chartData}
          selectedRange={selectedRange}
          onRangeChange={setSelectedRange}
          isLoading={isChartLoading}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DeviceBreakdown devices={detail?.devices} />
          <PlatformBreakdown platforms={detail?.platforms} />
          <TopBrowsers browsers={detail?.browsers} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VisitsByLocation countries={detail?.countries} />
          <TopReferrers referrers={detail?.referrers} />
        </div>
        <RecentClicksTable
          clicks={recentClicks}
          onLoadMore={handleLoadMoreClicks}
          isLoading={isTableLoading}
        />
      </main>
    </>
  );
}
