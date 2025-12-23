import { BaseDto } from "./base.dto";

// Request DTO for creating a short URL
export interface IpBlockCreateRequestDto {
  shortCode: string;
  ipAddress: string;
  reason: string;
}

// Response DTO for short URL information
export interface IpBlockResponseDto extends BaseDto {
  id: string;
  ipAddress: string;
  reason: string;
  ipHash: string;
}
