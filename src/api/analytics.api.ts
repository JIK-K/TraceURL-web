import {
  AnalyticsSummaryResponseDto,
  RecentClickResponseDto,
} from "@/common/dtos/analytics.dto";
import { ResponseDto } from "@/dtos/response.dto";
import { getData } from "@/utils/axios/serverHelper";
import { AxiosResponse } from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/analytics`;

export const getRecentClickList = (
  shortCode: string,
  page: number = 1,
  size: number = 5,
  sort: string = "createdAt,desc"
): Promise<AxiosResponse<ResponseDto<RecentClickResponseDto[]>>> => {
  let url = `${baseUrl}/${shortCode}/recent?page=${
    page - 1
  }&size=${size}&sort=${sort}`;
  return getData(url);
};

export const getSummaryClickData = (
  shortCode: string
): Promise<AxiosResponse<ResponseDto<AnalyticsSummaryResponseDto>>> => {
  let url = `${baseUrl}/${shortCode}/summary`;
  return getData(url);
};
