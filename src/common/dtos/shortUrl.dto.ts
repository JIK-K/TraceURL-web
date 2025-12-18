import { BaseStatus } from "../enums/userStatus.enum";
import { BaseDto } from "./base.dto";

// Request DTO for creating a short URL
export interface ShortUrlCreateRequestDto extends BaseDto {
  originalUrl: string;
  title: string;
  alias?: string;
  isCustom: boolean;
  expireDate?: string;
}

// Response DTO for short URL information
export interface ShortUrlResponseDto extends BaseDto {
  id: string;
  shortUrl: string;
  originalUrl: string;
  title: string;
  isCustom: boolean;
  status: BaseStatus;
}
