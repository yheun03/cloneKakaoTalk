# 카카오톡 클론 - 컴포넌트 구조

이 문서는 카카오톡 클론 프로젝트의 컴포넌트 구조와 각 파일의 역할을 설명합니다.

## 📁 컴포넌트 구조

```
src/components/
├── ui/                    # 기본 UI 컴포넌트
├── chat/                  # 채팅 관련 컴포넌트
├── profile/               # 프로필 관련 컴포넌트
├── poll/                  # 투표 관련 컴포넌트
├── modal/                 # 모달 관련 컴포넌트
└── common/                # 공통 컴포넌트
```

---

## 🎨 UI 컴포넌트 (`/ui/`)

기본적인 UI 요소들을 담당하는 재사용 가능한 컴포넌트들입니다.

### 📝 폼 관련
- **`Button.vue`** - 버튼 컴포넌트 (primary, secondary 등 다양한 스타일)
- **`Input.vue`** - 텍스트 입력 필드
- **`Textarea.vue`** - 여러 줄 텍스트 입력 필드
- **`Checkbox.vue`** - 체크박스
- **`Radio.vue`** - 라디오 버튼
- **`Toggle.vue`** - 토글 스위치
- **`Select.vue`** - 드롭다운 선택
- **`Option.vue`** - Select의 옵션

### 🎯 기타 UI
- **`ProgressBar.vue`** - 진행률 표시바
- **`Icon.vue`** - 아이콘 컴포넌트
- **`Avatar.vue`** - 프로필 이미지/아바타

---

## 💬 채팅 컴포넌트 (`/chat/`)

채팅 기능과 관련된 모든 컴포넌트들입니다.

### 🗨️ 메시지 관련
- **`ChatBubble.vue`** - 개별 채팅 메시지 버블
- **`ChatList.vue`** - 채팅방 목록
- **`ChatInput.vue`** - 메시지 입력창
- **`ChatHeader.vue`** - 채팅방 상단 헤더
- **`MessageStatus.vue`** - 메시지 상태 (읽음, 전송 등)
- **`ReplyBox.vue`** - 답장 기능 박스
- **`VoiceMessage.vue`** - 음성 메시지

---

## 👤 프로필 컴포넌트 (`/profile/`)

사용자 프로필과 관련된 컴포넌트들입니다.

- **`ProfileCard.vue`** - 프로필 카드 (친구 목록 등에서 사용)
- **`ProfileList.vue`** - 프로필 목록
- **`ProfileEditForm.vue`** - 프로필 수정 폼
- **`ProfileImageUploader.vue`** - 프로필 이미지 업로드

---

## 📊 투표 컴포넌트 (`/poll/`)

카카오톡의 투표 기능과 관련된 컴포넌트들입니다.

- **`Poll.vue`** - 투표 메인 컴포넌트
- **`PollOption.vue`** - 투표 옵션
- **`PollResult.vue`** - 투표 결과

---

## 🪟 모달 컴포넌트 (`/modal/`)

다양한 모달창들을 담당하는 컴포넌트들입니다.

- **`ConfirmModal.vue`** - 확인 모달 (삭제 확인 등)
- **`AlertModal.vue`** - 알림 모달
- **`BackupModal.vue`** - 백업 관련 모달

---

## 🔧 공통 컴포넌트 (`/common/`)

여러 곳에서 공통으로 사용되는 유틸리티 컴포넌트들입니다.

- **`DateDivider.vue`** - 날짜 구분선 (채팅에서 날짜 표시)
- **`TimeStamp.vue`** - 시간 표시
- **`AdBanner.vue`** - 광고 배너
- **`NoticeBar.vue`** - 공지사항 바
- **`Divider.vue`** - 구분선

---

## 🚀 사용 방법

### 1. 컴포넌트 import
```vue
<script>
import KButton from '@/components/ui/Button.vue'
import ChatBubble from '@/components/chat/ChatBubble.vue'
</script>
```

### 2. 컴포넌트 등록
```vue
<script>
export default {
  components: {
    KButton,
    ChatBubble
  }
}
</script>
```

### 3. 템플릿에서 사용
```vue
<template>
  <div>
    <KButton variant="primary">버튼</KButton>
    <ChatBubble message="안녕하세요!" />
  </div>
</template>
```

---

## 📋 개발 가이드라인

### 🎯 네이밍 규칙
- **UI 컴포넌트**: `K` 접두사 사용 (예: `KButton`, `KInput`)
- **기능별 컴포넌트**: 기능명 + 역할 (예: `ChatBubble`, `ProfileCard`)

### 🎨 스타일링
- 모든 컴포넌트는 `scoped` 스타일 사용
- SCSS 변수와 믹스인 활용
- 반응형 디자인 고려

### 📱 반응형
- 모바일 우선 설계
- 태블릿, 데스크톱 대응

---

## 🔄 상태 관리

각 컴포넌트는 독립적으로 동작하되, 필요시 부모 컴포넌트를 통해 상태를 공유합니다.

### Props
- 명확한 타입 정의
- 기본값 설정
- 필수/선택 속성 구분

### Events
- `$emit`을 통한 이벤트 전달
- 명확한 이벤트명 사용

---

## 🧪 테스트

각 컴포넌트는 다음을 테스트해야 합니다:
- Props 전달
- Events 발생
- 사용자 상호작용
- 반응형 동작

---

## 📝 TODO

- [ ] 각 컴포넌트별 상세 구현
- [ ] 스토리북 설정
- [ ] 단위 테스트 작성
- [ ] 접근성 개선
- [ ] 성능 최적화

---

## 🤝 기여하기

1. 새로운 컴포넌트 추가 시 이 문서 업데이트
2. 기존 컴포넌트 수정 시 변경사항 문서화
3. 일관된 코딩 스타일 유지
4. 적절한 주석 작성

---

**마지막 업데이트**: 2024년 9월 27일
**작성자**: 은영환
