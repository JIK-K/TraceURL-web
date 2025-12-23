import {
  IpBlockCreateRequestDto,
  IpBlockResponseDto,
} from "@/common/dtos/ipBlock.dto";
import { ResponseDto } from "@/dtos/response.dto";
import { deleteData, getData, postData } from "@/utils/axios/serverHelper";
import { AxiosResponse } from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/block-list`;

export const createBlockIp = (
  dto: IpBlockCreateRequestDto
): Promise<AxiosResponse<ResponseDto<IpBlockResponseDto>>> => {
  let url = `${baseUrl}/create`;
  console.log("Request URL:", url);
  return postData(url, dto);
};

export const getIpBlockList = (
  shortCode: string,
  page: number = 1,
  limit: number = 10
): Promise<AxiosResponse<ResponseDto<IpBlockResponseDto[]>>> => {
  let url = `${baseUrl}/list/${shortCode}?page=${page - 1}&limit=${limit}`;
  return getData(url);
};

export const upBlockIp = (
  id: string
): Promise<AxiosResponse<ResponseDto<void>>> => {
  let url = `${baseUrl}/${id}`;
  return deleteData(url);
};
