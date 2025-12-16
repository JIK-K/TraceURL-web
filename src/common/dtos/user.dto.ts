// src/common/dto/UserResponseDto.ts

import { UserStatus } from "../enums/userStatus.enum";
import { BaseDto } from "./base.dto";

export interface UserDto extends BaseDto {
  id: string;
  email: string;
  displayName: string;
  type: string;
  status: UserStatus;
  lastLoginAt?: string; // ISO 문자열
}
