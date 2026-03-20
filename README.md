# 쇼츠 일일 운영 대시보드

GitHub Pages로 배포할 수 있는 정적 웹사이트 템플릿입니다.

## 파일 구조

- `index.html` : 메인 대시보드
- `entertainment.html` : 연예/방송/화제
- `global.html` : 글로벌 트렌드/검색 급상승
- `ranking.html` : 지식형/랭킹형
- `pet.html` : 동물/상품형
- `assets/styles.css` : 공통 스타일
- `assets/data.js` : 매일 수정하는 데이터 파일
- `assets/script.js` : 화면 렌더링 스크립트

## 가장 중요한 파일

처음에는 `assets/data.js`만 수정하면 됩니다.

### 수정 위치

- 날짜: `updatedDate`
- 채널별 오늘 주제: `todayTopic`
- 후보 주제: `candidates`
- 대본: `script`
- 자막: `subtitles`
- 화면 구성: `visualPlan`
- 제목 후보: `titles`
- 주의사항: `notes`

## GitHub Pages 배포

1. GitHub에서 새 저장소 생성
2. 이 폴더 파일 전체 업로드
3. Settings → Pages 이동
4. Branch를 `main`, Folder를 `/root`로 선택
5. Save 클릭
6. 배포 완료 후 공개 주소 접속
