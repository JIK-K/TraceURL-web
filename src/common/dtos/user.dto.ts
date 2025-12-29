// src/common/dto/UserResponseDto.ts

import { BaseStatus } from "../enums/baseStatus.enum";
import { BaseDto } from "./base.dto";

export interface UserDto extends BaseDto {
  id: string;
  email: string;
  displayName: string;
  type: string;
  status: BaseStatus;
  lastLoginAt?: string; // ISO 문자열
}
