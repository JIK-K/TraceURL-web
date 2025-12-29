import { BaseStatus } from "../enums/baseStatus.enum";
import { BaseDto } from "./base.dto";

// Request DTO for creating a short URL
export interface ShortUrlCreateRequestDto extends BaseDto {
  originalUrl: string;
  title: string;
  alias?: string;
  isCustom: boolean;
  expireDate?: string;
}

export interface ShortUrlEditRequestDto {
  title: string;
  expireDate: string;
  autoDelete: boolean;
  status: BaseStatus;
}

// Response DTO for short URL information
export interface ShortUrlResponseDto extends BaseDto {
  id: string;
  shortCode: string;
  originalUrl: string;
  title: string;
  isCustom: boolean;
  status: BaseStatus;
}

export interface ShortUrlEditResponseDto extends BaseDto {
  id: string;
  shortCode: string;
  originalUrl: string;
  title: string;
  status: BaseStatus;
  expireAt: string;
  autoDelete: boolean;
}
