import { BooleanType } from "@/common/enums/boolean.enum";

export interface ResponseDto<T> {
  isSuccess: BooleanType;
  code: string;
  message: string;
  count: number;
  data: T;
}
