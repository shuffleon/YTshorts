const siteData = {
  updatedDate: "2026-03-20",
  summary: {
    totalChannels: 4,
    totalCandidates: 12,
    finalPicks: 4,
    readyToEdit: 4
  },
  channels: {
    entertainment: {
      name: "연예/방송/화제",
      path: "entertainment.html",
      subtitle: "오늘 가장 화제성 높은 방송·연예 이슈를 설명형 쇼츠로 정리",
      todayTopic: "오늘 가장 많이 언급된 방송 장면 정리",
      uploadPriority: "상",
      duration: "35~45초",
      recommendedPick: {
        title: "예능/드라마 화제 장면 요약",
        why: "당일 언급량이 높고 설명형 쇼츠로 만들기 쉽습니다.",
        hook: "지금 이 장면이 화제인 이유, 딱 40초 안에 정리합니다."
      },
      candidates: [
        "방송 출연 장면 화제 포인트",
        "연예인 인터뷰 발언 정리",
        "드라마/예능 반응 요약"
      ],
      recommendedTopics: [
        {
          title: "예능 출연자 리액션 장면 정리",
          angle: "왜 사람들이 이 장면에 몰입했는지 설명",
          expected: "댓글 반응 유도형",
          sourceHint: "공식 클립 제목, 방송사 기사, 출연자 SNS"
        },
        {
          title: "인터뷰 발언 핵심 3줄 요약",
          angle: "논란/화제 포인트만 추려서 설명",
          expected: "검색 유입형",
          sourceHint: "인터뷰 원문 기사, 포털 뉴스, 공식 채널"
        },
        {
          title: "드라마 엔딩 장면 반응 정리",
          angle: "반응 갈린 이유와 다음 회차 기대 포인트",
          expected: "팬덤 반응형",
          sourceHint: "방송사 예고편, 커뮤니티 반응, 기사 헤드라인"
        }
      ],
      finalReason: [
        "당일 언급량이 높음",
        "설명형 쇼츠로 만들기 쉬움",
        "시청자의 즉시 반응 유도 가능"
      ],
      kpis: {
        clickPoint: "화제 장면의 이유",
        editingDifficulty: "중",
        sourceStability: "상"
      },
      sourceTypes: [
        "공식 방송사 기사/보도자료",
        "공식 SNS 게시물",
        "인터뷰 기사",
        "대중 반응 참고 기사"
      ],
      sourceLinks: [
        { label: "네이버 뉴스 - 방송/연예", url: "https://search.naver.com/search.naver?where=news&query=%EB%B0%A9%EC%86%A1+%EC%97%B0%EC%98%88", note: "당일 기사 제목과 언급량 확인" },
        { label: "다음 뉴스 - 연예", url: "https://search.daum.net/search?w=news&q=%EC%97%B0%EC%98%88", note: "같은 이슈를 다른 매체로 교차 확인" },
        { label: "YouTube - 공식 방송사 검색", url: "https://www.youtube.com/results?search_query=%EA%B3%B5%EC%8B%9D+%EB%B0%A9%EC%86%A1+%ED%81%B4%EB%A6%BD", note: "공식 클립 제목과 썸네일 참고" },
        { label: "Google Trends", url: "https://trends.google.com/trending", note: "이슈 키워드 관심도 확인" }
      ],
      script: `오프닝: 오늘 가장 많이 언급된 장면, 왜 화제인지 40초 안에 정리합니다.\n본문 1: 어떤 상황이 있었는지 한 문장으로 설명합니다.\n본문 2: 사람들이 반응한 핵심 포인트 두 가지를 보여줍니다.\n본문 3: 이 장면이 계속 언급되는 이유를 짚습니다.\n클로징: 오늘 화제의 핵심은 이 포인트 하나입니다.`,
      subtitles: [
        "0~3초: 지금 이 장면이 왜 난리인지",
        "3~8초: 상황 한 줄 요약",
        "8~16초: 반응 포인트 1 - 예상 밖 표정/멘트",
        "16~24초: 반응 포인트 2 - 커뮤니티 재확산 이유",
        "24~34초: 그래서 오늘 종일 언급된 포인트",
        "34~40초: 오늘 화제 핵심 한 줄 정리"
      ],
      visualPlan: [
        "컷1 (0~3초): 큰 훅 자막 + 주인공 얼굴 캡처 1장",
        "컷2 (3~8초): 기사 헤드라인 1개 + 상황 설명 자막",
        "컷3 (8~16초): 반응 포인트 1을 확대 자막으로 표시",
        "컷4 (16~24초): SNS/커뮤니티 반응 캡처 1~2장",
        "컷5 (24~34초): 다시 기사/공식자료로 팩트 정리",
        "컷6 (34~40초): 결론 카드 + 저장 유도 CTA"
      ],
      titles: [
        "지금 이 장면이 화제인 이유",
        "오늘 가장 많이 언급된 포인트 3가지",
        "방금 뜬 방송 화제 1분 정리"
      ],
      notes: [
        "원본 영상 장시간 사용 금지",
        "캡처 사용 시 설명/비평 목적 유지",
        "사실관계 확인 후 단정 표현 자제"
      ]
    },
    global: {
      name: "글로벌 트렌드/검색 급상승",
      path: "global.html",
      subtitle: "해외에서 뜨는 이슈와 검색 급상승 키워드를 요약",
      todayTopic: "오늘 해외 급상승 키워드 1건",
      uploadPriority: "상",
      duration: "30~40초",
      recommendedPick: {
        title: "해외 급상승 키워드 요약",
        why: "텍스트 소스가 많고 매일 반복 제작하기 쉽습니다.",
        hook: "지금 해외에서 갑자기 많이 검색된 키워드, 이유만 빠르게 보겠습니다."
      },
      candidates: [
        "해외 검색 급상승 키워드",
        "글로벌 엔터/스포츠 화제",
        "AI/테크 트렌드 이슈"
      ],
      recommendedTopics: [
        {
          title: "오늘 미국/일본 급상승 검색어 비교",
          angle: "국가별로 왜 다른 키워드가 떴는지 설명",
          expected: "정보 요약형",
          sourceHint: "Google Trends, 주요 외신, 공식 발표"
        },
        {
          title: "AI 서비스 신기능 반응 정리",
          angle: "무엇이 바뀌었고 사용자 반응이 어떤지",
          expected: "테크 관심층 저장형",
          sourceHint: "공식 블로그, X/Twitter 공식 계정, 기사"
        },
        {
          title: "해외 스포츠/엔터 속보 1분 요약",
          angle: "국내 시청자에게 왜 의미 있는지 연결",
          expected: "검색 유입형",
          sourceHint: "공식 리그/팀/아티스트 계정, 외신 헤드라인"
        }
      ],
      finalReason: [
        "텍스트 소스 중심이라 자동 수집에 유리",
        "국가별 이슈 설명 포맷이 쉬움",
        "반복 제작 구조에 적합"
      ],
      kpis: {
        clickPoint: "해외에서 왜 뜨는지",
        editingDifficulty: "하",
        sourceStability: "상"
      },
      sourceTypes: [
        "Google Trends",
        "공식 발표/보도자료",
        "해외 주요 매체 기사",
        "플랫폼 공식 블로그"
      ],
      sourceLinks: [
        { label: "Google Trends - Trending", url: "https://trends.google.com/trending", note: "급상승 키워드 확인" },
        { label: "Google News - World", url: "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZ4ZERBU0FtbGtHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen", note: "해외 주요 기사 빠르게 훑기" },
        { label: "Reuters World", url: "https://www.reuters.com/world/", note: "루머가 아닌 검증된 기사 우선 확인" },
        { label: "공식 블로그/공식 X 검색", url: "https://www.google.com/search?q=official+blog+site", note: "서비스/브랜드 공식 발표문 확인" }
      ],
      script: `오프닝: 오늘 해외에서 갑자기 많이 검색된 키워드가 있습니다.\n본문 1: 어떤 이슈인지 가장 짧게 정의합니다.\n본문 2: 왜 검색량이 올랐는지 설명합니다.\n본문 3: 국내 시청자 입장에서 왜 볼 만한지 연결합니다.\n클로징: 이 키워드는 오늘 꼭 체크할 만한 글로벌 이슈입니다.`,
      subtitles: [
        "0~3초: 지금 해외에서 뜨는 키워드",
        "3~8초: 이 키워드가 뜻하는 사건/인물",
        "8~16초: 왜 갑자기 검색량이 올라갔는지",
        "16~24초: 해외 기사 핵심 1줄",
        "24~32초: 국내 시청자에게 중요한 이유",
        "32~40초: 오늘 체크할 글로벌 포인트"
      ],
      visualPlan: [
        "컷1 (0~3초): 키워드 큰 자막 + 국가명 배지",
        "컷2 (3~8초): 기사 제목 또는 공식 발표 캡처",
        "컷3 (8~16초): 상승 이유 2줄 자막",
        "컷4 (16~24초): 뉴스/공식 이미지 1장",
        "컷5 (24~32초): 한국 시청자 관점 해설 자막",
        "컷6 (32~40초): 한 줄 결론 + 저장 CTA"
      ],
      titles: [
        "오늘 해외에서 급상승한 이유",
        "지금 가장 뜨는 글로벌 키워드",
        "전세계가 검색한 이슈 1분 정리"
      ],
      notes: [
        "오역 주의",
        "출처 국가/시각 표시 권장",
        "루머성 소스 제외"
      ]
    },
    ranking: {
      name: "지식형/랭킹형",
      path: "ranking.html",
      subtitle: "TOP5·비교형 포맷 중심의 상시 제작 채널",
      todayTopic: "가성비/비교형 주제 1건",
      uploadPriority: "중",
      duration: "35~50초",
      recommendedPick: {
        title: "초보자 실수/추천 TOP5",
        why: "저장형 콘텐츠라 반복 조회와 시리즈화에 강합니다.",
        hook: "이건 초보자라면 저장해둬야 하는 정보입니다."
      },
      candidates: [
        "초보자가 자주 실수하는 5가지",
        "가성비 기준 TOP5",
        "상황별 추천 3가지"
      ],
      recommendedTopics: [
        {
          title: "초보자가 돈 낭비하는 포인트 5가지",
          angle: "하지 말아야 할 것 위주로 경고형 구성",
          expected: "저장/공유형",
          sourceHint: "후기 요약, 커뮤니티 질문, 비교표"
        },
        {
          title: "가성비 기준 TOP5",
          angle: "가격대·사용성·내구성 기준으로 랭킹화",
          expected: "검색 유입형",
          sourceHint: "공식 스펙, 판매페이지, 리뷰 공통 의견"
        },
        {
          title: "상황별 추천 3가지",
          angle: "누구에게 어떤 선택이 맞는지 분기",
          expected: "구매전환형",
          sourceHint: "사용 목적별 추천 자료"
        }
      ],
      finalReason: [
        "상시 제작 가능",
        "시리즈화 쉬움",
        "템플릿 반복 편집 가능"
      ],
      kpis: {
        clickPoint: "저장 가치 높음",
        editingDifficulty: "하",
        sourceStability: "상"
      },
      sourceTypes: [
        "공식 정보/스펙",
        "비교 자료",
        "커뮤니티 반응 요약",
        "리뷰 기반 공통 의견"
      ],
      sourceLinks: [
        { label: "네이버 쇼핑 검색", url: "https://search.shopping.naver.com/search/all?query=%EA%B0%80%EC%84%B1%EB%B9%84", note: "가격대와 상위 제품군 확인" },
        { label: "쿠팡 검색", url: "https://www.coupang.com/np/search?q=%EA%B0%80%EC%84%B1%EB%B9%84", note: "후기 수와 평점 확인" },
        { label: "YouTube 리뷰 검색", url: "https://www.youtube.com/results?search_query=%EB%A6%AC%EB%B7%B0+top5", note: "영상형 후기에서 공통 장단점 추출" },
        { label: "Google 검색", url: "https://www.google.com/search?q=best+top5+review", note: "영문 비교 자료 참고" }
      ],
      script: `오프닝: 이건 초보자라면 저장해둘 만한 주제입니다.\n본문 1: 오늘의 기준을 먼저 제시합니다.\n본문 2: 1위부터 3위 혹은 5위까지 핵심만 짧게 설명합니다.\n본문 3: 어떤 사람에게 맞는지 구분해줍니다.\n클로징: 상황에 따라 가장 무난한 선택을 다시 한 줄로 정리합니다.`,
      subtitles: [
        "0~3초: 저장해두면 좋은 TOP5",
        "3~7초: 오늘 랭킹 기준은 이것",
        "7~14초: 1~2위 핵심 장점",
        "14~22초: 3~4위 장단점 비교",
        "22~30초: 5위 혹은 예외 추천",
        "30~40초: 상황별로 가장 무난한 선택"
      ],
      visualPlan: [
        "컷1 (0~3초): TOP5 타이틀 카드",
        "컷2 (3~7초): 기준 설명 카드 1장",
        "컷3 (7~14초): 순위 카드 1~2",
        "컷4 (14~22초): 순위 카드 3~4",
        "컷5 (22~30초): 순위 카드 5 또는 보너스 추천",
        "컷6 (30~40초): 결론 카드 + 저장 CTA"
      ],
      titles: [
        "가성비 기준 TOP5",
        "초보자라면 꼭 알아야 할 5가지",
        "상황별 추천 한 번에 정리"
      ],
      notes: [
        "광고성 표현 과다 금지",
        "근거 없는 단정 금지",
        "순위 기준 명시 권장"
      ]
    },
    pet: {
      name: "동물/상품형",
      path: "pet.html",
      subtitle: "반려동물 정보형 + 리뷰형 + PPL 확장형 채널",
      todayTopic: "강아지/고양이 용품 추천 1건",
      uploadPriority: "상",
      duration: "35~45초",
      recommendedPick: {
        title: "강아지용품 가성비 BEST5",
        why: "구매 전환과 저장 유도가 모두 가능한 포맷입니다.",
        hook: "강아지 키우면 자주 사게 되는 용품, 가성비 기준으로만 뽑았습니다."
      },
      candidates: [
        "강아지용품 가성비 BEST5",
        "초보 견주 필수템 TOP5",
        "재구매 높은 반려동물템 3가지"
      ],
      recommendedTopics: [
        {
          title: "강아지용품 가성비 BEST5",
          angle: "가격 대비 만족도 높은 입문템 중심",
          expected: "구매전환형",
          sourceHint: "쇼핑 검색, 후기 수, 재구매 언급"
        },
        {
          title: "초보 견주 필수템 TOP5",
          angle: "처음 키울 때 바로 필요한 것만 추림",
          expected: "저장형",
          sourceHint: "입문 가이드, 구매후기, 커뮤니티 질문"
        },
        {
          title: "재구매 높은 반려동물템 3가지",
          angle: "실사용 만족도 위주로 간단 추천",
          expected: "PPL 확장형",
          sourceHint: "브랜드 상세페이지, 후기, 블로그 리뷰"
        }
      ],
      finalReason: [
        "정보형 포맷으로 운영 가능",
        "PPL/제휴 전환 가능성 높음",
        "저장형 콘텐츠에 유리"
      ],
      kpis: {
        clickPoint: "구매전환/저장형",
        editingDifficulty: "중",
        sourceStability: "중"
      },
      sourceTypes: [
        "공식 판매페이지 스펙",
        "사용자 리뷰 요약",
        "커뮤니티 공통 반응",
        "브랜드 공식 자료"
      ],
      sourceLinks: [
        { label: "네이버 쇼핑 - 강아지용품", url: "https://search.shopping.naver.com/search/all?query=%EA%B0%95%EC%95%84%EC%A7%80%20%EC%9A%A9%ED%92%88", note: "가격대와 판매량 확인" },
        { label: "쿠팡 - 반려동물 용품", url: "https://www.coupang.com/np/search?q=%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%20%EC%9A%A9%ED%92%88", note: "후기 수와 평점 확인" },
        { label: "YouTube - 반려동물 용품 리뷰", url: "https://www.youtube.com/results?search_query=%EA%B0%95%EC%95%84%EC%A7%80+%EC%9A%A9%ED%92%88+%EB%A6%AC%EB%B7%B0", note: "실사용 장면 참고" },
        { label: "네이버 카페/블로그 검색", url: "https://search.naver.com/search.naver?where=view&query=%EA%B0%95%EC%95%84%EC%A7%80+%EC%9A%A9%ED%92%88+%EC%B6%94%EC%B2%9C", note: "공통 불만과 장점 정리" }
      ],
      script: `오프닝: 강아지 키우면 생각보다 자주 쓰게 되는 용품들입니다.\n본문 1: 오늘은 가성비 기준으로만 골랐다고 먼저 말합니다.\n본문 2: 각 상품의 장점과 어떤 보호자에게 맞는지 한 줄씩 설명합니다.\n본문 3: 초보자 기준으로 가장 무난한 조합을 제안합니다.\n클로징: 저장해두면 다음 구매할 때 바로 참고할 수 있습니다.`,
      subtitles: [
        "0~3초: 강아지용품 가성비 BEST5",
        "3~7초: 오늘 기준은 가격 대비 만족도",
        "7~14초: 초보 견주에게 먼저 필요한 제품",
        "14~22초: 재구매가 많은 이유 1줄",
        "22~30초: 상황별로 더 맞는 선택",
        "30~40초: 저장해두면 다음 구매 때 바로 참고"
      ],
      visualPlan: [
        "컷1 (0~3초): 카테고리 타이틀 + 제품군 사진",
        "컷2 (3~7초): 선정 기준 카드",
        "컷3 (7~14초): 제품 카드 1~2 + 가격대",
        "컷4 (14~22초): 제품 카드 3~4 + 장단점",
        "컷5 (22~30초): 제품 카드 5 + 추천 대상",
        "컷6 (30~40초): 총평 + 저장 CTA + 협찬표시 필요시 고지"
      ],
      titles: [
        "강아지용품 가성비 BEST5",
        "초보 견주 필수템 TOP5",
        "돈 아깝지 않은 반려동물템 추천"
      ],
      notes: [
        "협찬이면 유료 프로모션 표시",
        "건강/효능 단정 금지",
        "상품 정보 최신성 확인 필요"
      ]
    }
  }
};
