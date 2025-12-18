import {
  ShortUrlCreateRequestDto,
  ShortUrlResponseDto,
} from "@/common/dtos/shortUrl.dto";
import { BaseStatus } from "@/common/enums/userStatus.enum";
import { ResponseDto } from "@/dtos/response.dto";
import { getData, postData } from "@/utils/axios/serverHelper";
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
  limit: number = 10,
  sort: string = "createdAt,desc",
  status?: BaseStatus
): Promise<AxiosResponse<ResponseDto<ShortUrlResponseDto[]>>> => {
  let url = `${baseUrl}/list?page=${page - 1}&limit=${limit}&sort=${sort}`;
  if (status) {
    url += `&status=${status}`;
  }
  return getData(url);
};
