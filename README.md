# TraceURL

TraceURL은 단순한 URL 단축을 넘어, **상세한 트래픽 분석과 보안 기능**을 제공하는 강력한 단축 링크 서비스입니다. 브랜딩을 위한 커스텀 링크부터, 유입 경로 추적, 악의적인 접근 차단까지 링크 활용도를 극대화할 수 있는 완벽한 툴킷을 제공합니다.

## 🚀 프로젝트 목표 및 포트폴리오 개요
이 프로젝트는 사용자 친화적인 UI/UX와 대용량 트래픽을 고려한 안정적인 링크 처리 및 분석 시스템을 구축하는 것을 목표로 개발되었습니다. 모던 웹 기술 스택을 활용하여 확장성 있는 프론트엔드 아키텍처를 설계하고 구현하는 역량을 보여주기 위한 포트폴리오 프로젝트입니다.

## ✨ 주요 기능
- **커스텀 단축링크 생성**: 브랜드 아이덴티티에 맞는 커스텀 슬러그(Slug)를 사용하여 링크의 신뢰도와 클릭률 향상
- **상세한 트래픽 분석**: 클릭 수, 유입 지역, 브라우저 및 디바이스 환경 등 다양한 트래픽 데이터 실시간 모니터링
- **보안 및 IP 차단**: 악의적인 트래픽을 방지하기 위한 IP 차단 기능 및 안전한 링크 보호
- **QR 코드 생성**: 생성된 단축 링크에 대한 QR 코드를 즉시 발급하여 오프라인 매체 연동 지원
- **사용자 관리**: 회원가입/로그인 및 사용자별 링크 관리 대시보드 제공

## 💻 주요 기술 및 코드 예시 (Core Technologies)

이 프로젝트는 최신 프론트엔드 생태계를 적극 활용하여 유지보수성과 확장성을 높였습니다. 아래는 프로젝트에서 실제 사용된 핵심 기술과 코드 예시입니다.

### 1. Next.js 16 (App Router) & Tailwind CSS v4
React 19와 Next.js 16의 App Router를 기반으로 클라이언트 및 서버 컴포넌트를 적절히 분리하여 사용합니다. 또한, Tailwind CSS v4를 활용해 직관적이고 반응형인 UI를 구현하며, 다양한 유틸리티 클래스를 통해 개발 생산성을 극대화했습니다.

```tsx
// src/app/profile/page.tsx (일부 발췌)
"use client";
import { updateUserName } from "@/api/user.api";
import { useUserStore } from "@/common/zustand/user.zustand";
import { useEffect, useState } from "react";

export default function ProfileSection() {
  const { user, setUser } = useUserStore();
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const handleSaveChanges = () => {
    updateUserName(displayName).then((res) => {
      setUser(res.data.data);
    });
  };

  return (
    <div className="overflow-hidden rounded-[12px] border border-border-light bg-background-light dark:bg-gray-900/50 p-[24px]">
      <h1 className="text-[36px] font-black mb-[24px] text-gray-900 dark:text-white">
        Profile
      </h1>
      {/* ... */}
      <button
        className="h-[40px] px-[16px] rounded-[8px] bg-primary text-white text-[14px] font-bold hover:bg-green-600 transition-colors"
        onClick={handleSaveChanges}
      >
        Save Changes
      </button>
    </div>
  );
}
```

### 2. Zustand (전역 상태 관리)
가볍고 직관적인 상태 관리 라이브러리인 Zustand를 도입했습니다. 특히 `persist` 미들웨어를 사용하여 로컬 스토리지와 상태를 동기화하여, 새로고침 시에도 유저 로그인 상태가 유지되도록 구현했습니다.

```typescript
// src/common/zustand/user.zustand.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserDto } from "../dtos/user.dto";

interface UserState {
  user: UserDto | null;
  setUser: (user: UserDto | null) => void;
  updateUser: (partial: Partial<UserDto>) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (partial) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...partial } : null,
        })),
    }),
    {
      name: "user-store", // 로컬 스토리지에 저장될 키 이름
    }
  )
);
```

### 3. Axios (HTTP 통신 및 모듈화)
도메인별(Auth, User, ShortUrl, Analytics)로 API 호출 함수를 분리하여 관리합니다. 이를 통해 컴포넌트 내부의 로직을 간결하게 유지하고, 재사용성과 가독성을 높였습니다.

```typescript
// src/api/shortUrl.api.ts (일부 발췌)
import { ShortUrlCreateRequestDto, ShortUrlResponseDto } from "@/common/dtos/shortUrl.dto";
import { postData, getData } from "@/utils/axios/serverHelper";
import { AxiosResponse } from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/short-url`;

export const createShortUrl = (
  dto: ShortUrlCreateRequestDto
): Promise<AxiosResponse<ResponseDto<boolean>>> => {
  return postData(`${baseUrl}/create`, dto);
};

export const getShortUrlList = (
  page: number = 1,
  size: number = 10,
  sort: string = "createdAt,desc"
): Promise<AxiosResponse<ResponseDto<ShortUrlResponseDto[]>>> => {
  return getData(`${baseUrl}/list?page=${page - 1}&size=${size}&sort=${sort}`);
};
```

## 📁 프로젝트 구조 (핵심 디렉토리)
```text
src/
├── api/        # Axios 인스턴스 및 도메인별 API 호출 함수 (analytics, auth, shortUrl 등)
├── app/        # Next.js App Router 기반의 페이지 컴포넌트 (login, profile, link 등)
├── common/     # 공통으로 사용되는 UI 컴포넌트 및 상태 관리(Zustand)
├── dtos/       # 데이터 전송 객체 (Data Transfer Object) 타입 정의
├── layout/     # 전체 애플리케이션 레이아웃 컴포넌트
├── styles/     # 전역 CSS 및 Tailwind 설정
└── utils/      # Axios Interceptor, Cookie 처리 등 유틸리티 함수 모음
```
