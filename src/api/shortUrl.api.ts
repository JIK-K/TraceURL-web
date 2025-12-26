import {
  ShortUrlCreateRequestDto,
  ShortUrlEditRequestDto,
  ShortUrlEditResponseDto,
  ShortUrlResponseDto,
} from "@/common/dtos/shortUrl.dto";
import { BaseStatus } from "@/common/enums/baseStatus.enum";
import { ResponseDto } from "@/dtos/response.dto";
import {
  deleteData,
  getData,
  patchData,
  postData,
} from "@/utils/axios/serverHelper";
import { AxiosResponse } from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/short-url`;

export const createShortUrl = (
  dto: ShortUrlCreateRequestDto
): Promise<AxiosResponse<ResponseDto<boolean>>> => {
  let url = `${baseUrl}/create`;
  console.log("Request URL:", url);
  return postData(url, dto);
};

export const getShortUrlList = (
  page: number = 1,
  size: number = 10,
  sort: string = "createdAt,desc",
  status?: BaseStatus
): Promise<AxiosResponse<ResponseDto<ShortUrlResponseDto[]>>> => {
  let url = `${baseUrl}/list?page=${page - 1}&size=${size}&sort=${sort}`;
  if (status) {
    url += `&status=${status}`;
  }
  return getData(url);
};

export const getShortUrlEditData = (
  shortCode: string
): Promise<AxiosResponse<ResponseDto<ShortUrlEditResponseDto>>> => {
  let url = `${baseUrl}/link/${shortCode}/edit`;
  return getData(url);
};

export const editShortUrl = (
  shortCode: string,
  dto: ShortUrlEditRequestDto
): Promise<AxiosResponse<ResponseDto<boolean>>> => {
  let url = `${baseUrl}/link/${shortCode}/edit`;
  return patchData(url, dto);
};

export const deleteShortUrl = (
  shortCode: string
): Promise<AxiosResponse<ResponseDto<boolean>>> => {
  let url = `${baseUrl}/link/${shortCode}/edit`;
  return deleteData(url);
};
