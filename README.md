# cloneKakaoTalk

새로운 개발 언어 학습을 위해 기획 및 디자인이 되어 있는 기존 서비스 클론코딩입니다.

## 사용 기술

- Vue 3, Vue Router 4
- Vite 6, Sass (SCSS)
- @vuepic/vue-datepicker, holiday-kr, vite-svg-loader

## 요구 사항

- Node.js `>=20 <23` (`.nvmrc` 참고)

## 프로젝트 구조

저장소 루트에서 바로 실행합니다.

```
├── public/
├── src/
├── index.html
├── package.json
└── vite.config.js
```

## 로컬 실행

```bash
npm install
npm run dev
```

- 기본(GitHub Pages와 동일 base): `http://localhost:8080/cloneKakaoTalk/`
- 루트 경로로 개발: `npm run dev:root` → `http://localhost:8080/`

### base path

`vite.config.js`에서 `VITE_APP_BASE_URL`로 제어합니다. 미설정 시 `/cloneKakaoTalk/`입니다.

| 명령 | base |
|------|------|
| `npm run dev` | `/cloneKakaoTalk/` |
| `npm run dev:root` | `/` |

## GitHub Pages 배포

1. **Settings → Pages** → Source: **Deploy from a branch** → **gh-pages** / **/(root)**
2. 배포:

```bash
npm run deploy
```

배포 URL: `https://<username>.github.io/cloneKakaoTalk/`

## 스크립트 (jonsoft-framework와 동일 패턴)

| 스크립트 | 설명 |
|----------|------|
| `dev` / `dev:host` | 개발 서버 (`0.0.0.0`) |
| `dev:root` | base `/` 로 개발 |
| `dev:clean*` | 캐시 삭제 후 개발 |
| `build` / `build:clean` | 프로덕션 빌드 |
| `preview` / `preview:host` | 빌드 결과 미리보기 |
| `deploy` | 빌드 후 `gh-pages` 브랜치에 배포 |
