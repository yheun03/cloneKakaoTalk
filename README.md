# cloneKakaoTalk

새로운 개발 언어 학습을 위해 기획 및 디자인이 되어 있는 기존 서비스 클론코딩입니다.

## 사용 기술

- Vue 3, Vue Router 4
- Vite 6, Sass (SCSS)
- @vuepic/vue-datepicker, holiday-kr, vite-svg-loader

## 프로젝트 구조

저장소 루트에서 바로 실행합니다 (`clone-kakaotalk` 하위 폴더 없음).

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

개발 서버: `http://localhost:8080/cloneKakaoTalk/`

## GitHub Pages 배포

1. GitHub 저장소 **Settings → Pages**에서 Source를 **Deploy from a branch**, Branch를 **gh-pages** / **/(root)** 로 설정합니다.
2. 배포:

```bash
npm run deploy
```

배포 URL: `https://<username>.github.io/cloneKakaoTalk/`

기본 base path는 저장소 이름과 동일한 `/cloneKakaoTalk/` 입니다 (`vite.config.js`의 `base`).
