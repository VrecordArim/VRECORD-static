# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

**VRECORD**는 한국 버추얼 스트리머 MCN 에이전시의 홍보 사이트(`www.vrecord.co.kr`)입니다. 순수 바닐라 HTML/CSS/JavaScript로 구성되어 있으며 빌드 도구, 번들러, 프레임워크가 없습니다.

## 개발 환경

빌드 단계 없음. `index.html`을 브라우저에서 직접 열거나 HTTP 서버로 실행:

```bash
python -m http.server 8000
# 또는
npx http-server
```

배포는 파일을 웹 호스트에 업로드하는 방식으로 진행합니다.

## 아키텍처

### 싱글 페이지 레이아웃

네비게이션으로 이동하는 4개의 스크롤 섹션:
- **HOME** (`#header`) — 랜딩, 지원 링크 포함
- **TALENT** (`#talent-container`) — 버추얼 스트리머 프로필 및 소셜 링크
- **CONTENT** (`#content-container`) — VRECORD 세계관/설정 정보
- **GUIDE** (`#guide-container`) — 규칙 및 안내

### JavaScript 모듈 구조

- **`js/index.js`** — 진입점. DOMContentLoaded 시 이벤트 위임 설정. 모든 클릭은 `data-nav-id`, `data-talent-id` 속성을 통해 라우팅됩니다.
- **`js/navi.js`** — 네비게이션 스크롤 및 활성 하이라이트. `onClickNav(id)` 함수 담당.
- **`js/talent.js`** — 탤런트 프로필 렌더링. `getTalentData(id)`가 switch 문으로 탤런트 객체를 반환하고, `switchTalent(id)`가 선택된 프로필을 화면에 렌더링합니다.

### 탤런트 데이터

모든 탤런트 정보는 `js/talent.js`의 switch 문에 하드코딩되어 있습니다. 각 탤런트 객체 구조:
- `name` — 한국어 표시 이름
- `storyHTML` — `.showDesktop` / `.showTablet` / `.showOnlyMobile` 클래스를 활용한 반응형 HTML 문자열
- `url_youtube`, `url_twitter`, `url_twitch` (선택) — 소셜 링크. 없는 링크는 `setLinkVisible()`로 숨겨집니다.

주석 처리된 케이스는 졸업/전 멤버입니다. 현재 활성 탤런트 ID는 0–11 (HTML에 총 12개 슬롯).

### 상태 관리

현재 선택 상태는 모듈 레벨 DOM 참조로 관리됩니다:
- `navi.js` — `selectedNavEl`
- `talent.js` — `selectedTalentEl`

활성 상태는 CSS 클래스 기반 (`.nav-selected`, `.talent-icon-item-sel`).

### CSS 구조

섹션별 스타일시트: `css/index.css`, `css/talent.css`, `css/content.css`, `css/guide.css`. 반응형 분기는 유틸리티 클래스 `.showDesktop`, `.showTablet`, `.showOnlyMobile`, `.showNoMobile`로 처리합니다.

## 주요 컨벤션

- HTML 요소의 `data-nav-id`, `data-talent-id` 속성이 모든 JS 동작을 구동합니다. 인라인 이벤트 핸들러는 사용하지 않습니다.
- 스트리밍 플랫폼 아이콘(숲 vs Twitch)은 `updatePlatformIcon()`에서 URL로 자동 감지합니다.
- 사용자에게 보이는 문자열은 한국어, JS 변수명과 코드는 영어로 작성합니다.
