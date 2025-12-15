import { UserDto } from "@/common/dtos/user.dto";
import { ResponseDto } from "@/dtos/response.dto";
import { getData } from "@/utils/axios/serverHelper";
import { AxiosResponse } from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/user`;
export const getUserData = (): Promise<AxiosResponse<ResponseDto<UserDto>>> => {
  let url = `${baseUrl}/me`;
  console.log("Request URL:", url);
  return getData(url);
};
