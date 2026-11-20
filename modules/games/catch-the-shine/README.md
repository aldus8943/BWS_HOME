# CATCH THE SHINE — BW/S SS27 Interactive Showcase

**FINAL VERSION 스냅샷:** 2026-11-19 (장치1 작업 트리)  
**원본 Git 브랜치 / 기준 HEAD:** `master` / `01bd9ace5941bb45cac23ca0a3a37f028ce1e8c2`  
**Git 태그:** 없음. 승인된 최신 UI·오디오 변경이 미커밋 상태이므로 이 빌드를 가리키는 커밋/태그를 만들지 않았다.  
**검증 상태:** 타입 검사·단위 테스트·빌드 통과. 전체 Playwright 34개 중 30개 통과, 고정 시간표 캐치 자동 조작 4개 실패. 제출 준비 완료 판정은 보류한다.

BW/S SS27 Eclectic Maximalism의 30초 주얼리 캐치 게임이다. 세 레벨 중 하나를 고른 뒤 **KNOW YOUR SHINE** 점수 안내를 보고 ENTER로 시작한다. Pearl +10, Gold +20, Turquoise +30, Rare +50을 모으고 Fake Gem −20을 피한다. 점수는 0 미만으로 내려가지 않는다.

## 레벨

1. **THE GLOW:** 기본 낙하와 캐치.
2. **GOLD RUSH:** 더 빠른 낙하와 Sudden Drop.
3. **CHAOS COUTURE:** Swing Motion, Sudden Drop, Double Drop, 마지막 5초 Final Frenzy.

## 조작과 사운드

- 데스크톱: 게임 영역에서 마우스/포인터를 가로로 움직이거나 **←/→**, **A/D** 키로 트레이를 이동한다.
- 모바일: 게임 영역을 터치하거나 가로로 드래그한다. 플레이 중 문서 스크롤은 막는다.
- 버튼: 레벨 선택 → ENTER, 결과에서 PLAY AGAIN 또는 CHANGE LEVEL.
- 사운드는 새 페이지에서 **ON**으로 표시되지만 READY에서는 조용하다. 브라우저의 자동 재생 제한에 따라 ENTER를 누르면 오디오가 활성화된다. SOUND ON/OFF 버튼으로 끄거나 다시 켤 수 있다. VOLUME은 0–100이며 선택한 값만 브라우저 저장소에 보존된다. 70은 기존 기준 음량, 70–100은 BOOST 구간이다. 배경 음악과 별도 TEST 버튼은 없다.

## 실행과 배포

이 폴더의 `index.html`, `favicon.svg`, `assets/` 전체를 **같은 상대 구조**로 정적 HTTP 서버에 둔다. 브라우저에서 해당 `index.html` URL을 연다. 실행에 Node.js, 백엔드 또는 계정은 필요하지 않다. `file://` 직접 열기는 ES 모듈 제한 때문에 권장하지 않는다.

- **Portfolio Home 하위 경로:** 이 패키지는 Vite `--base ./`로 빌드되어 HTML, CSS, JavaScript 및 지연 로딩 WebGL 청크에 상대 경로를 쓴다. 폴더를 하위 URL에 놓고 **끝에 슬래시가 있는** 해당 디렉터리 URL로 연결한다.
- **GitHub Pages:** 이 폴더의 내용물을 배포 브랜치/정적 사이트 루트 또는 하위 디렉터리에 업로드하고 실제 사이트 경로에서 자산 요청을 확인한다.
- **Vercel:** 이 폴더를 정적 출력 디렉터리로 지정한다. SPA 라우팅이나 서버 함수는 필요하지 않다.

## 호환성과 제약

Chrome 기반 브라우저에서 데스크톱 1280×800, 모바일 에뮬레이션 390×844 및 320×568을 검사했다. WebGL을 사용할 수 없으면 CSS 대체 렌더러를 사용한다. 다른 브라우저, 실제 휴대전화 GPU·이어폰 출력은 별도로 검증하지 않았다. 기존 React Three Fiber의 `THREE.Clock` 사용 중단 경고와 큰 WebGL 청크 빌드 경고가 있다.

## 외부 라이브러리 및 자산

React 19.3.1, React DOM 19.3.1, Three.js 0.187.0, React Three Fiber 9.8.2는 **MIT** 라이선스다. Vite 8.3.7은 빌드 도구이며 MIT 라이선스다. 이 번들의 기타 잠금 파일상 런타임 의존성 및 라이선스는 `THIRD_PARTY_NOTICES.md`에 기록했다. 외부 CDN, 다운로드 이미지/텍스처, 오디오 파일 또는 웹폰트는 사용하지 않는다. 주얼리와 효과음은 코드에서 생성하며 Georgia/Arial 시스템 폰트 대체를 사용한다.

`CHECKSUMS.sha256`에는 이 폴더의 배포 파일 SHA-256을 기록했다. 체크섬 파일 자신은 순환 참조를 피하기 위해 목록에서 제외했다.
