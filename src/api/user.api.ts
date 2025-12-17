import { UserDto } from "@/common/dtos/user.dto";
import { ResponseDto } from "@/dtos/response.dto";
import { getData, patchData } from "@/utils/axios/serverHelper";
import { AxiosResponse } from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/user`;

export const getUserData = (): Promise<AxiosResponse<ResponseDto<UserDto>>> => {
  let url = `${baseUrl}/me`;
  console.log("Request URL:", url);
  return getData(url);
};

export const updateUserName = (
  displayName: string
): Promise<AxiosResponse<ResponseDto<UserDto>>> => {
  let url = `${baseUrl}/name`;
  console.log("Request URL:", url);
  return patchData(url, { displayName });
};
