# 나만의 체크포인트

### [키워드 검색 크롤링]

- [x] node.js 개발환경 settings
- [x] 크롤링 모듈 검색, 선택
- [x] 검색 키워드를 input 으로 받고, 결과 페이지 html을 return 하는 함수 작성
- [x] html에서 원해는 태그를 가져올 수 있는 모듈 찾기
- [x] html을 파싱하여 원하는 태그를 데이터화 하는 함수 작성
- [x] 제목, 링크, 미리보기의 value 값을 가져와서 결과로 출력
- [x] async, await // promise, then 학습
- [x] 해당 부분 모듈화

### [검색 프로그램]

- [ ] LRU 캐시 동작 학습
- [ ] 키워드 개수와 키워드별 데이터 개수 input으로 받는 LRU 캐쉬 객체 껍데기 생성
- [ ] 캐시에서 get 할 때마다 hit가 되면 hitCount를 증가 기능 구현
- [ ] 캐시에 set할 때는 이전에 동일한 키가 있으면 업데이트 하도록 구현
- [ ] 키가 없으면 LRU 캐시에서 가장 오래전에 검색한 것을 지우고 새로 추가 하도록 set 구현
- [ ] LRU 캐시를 저장된 단어인지 우선 확인하고, 있을 경우는 저장된 내용을 이용해서 표시하도록 검색 크롤링 개선(캐쉬 데이터이면 표시 필요)
- [ ] $cache 입력시 캐시 목록과 hitCount 리턴


# 결과

### [키워드 검색 크롤링]

- json 모양으로 데이터화

  <img width="300" alt="image" src="https://user-images.githubusercontent.com/82504981/179914480-213a5d4f-61d1-43e9-86f9-964a129d73e7.png">

- 최종 출력

  <img width="300" alt="image" src="https://user-images.githubusercontent.com/82504981/179915787-96132358-30e6-4161-a48f-cd6059251bc6.png">




# 학습 메모

### [키워드 검색 크롤링]

- axios, cheerio 사용법 [참고자료](https://www.youtube.com/watch?v=xbehh8lWy_A)
- javascript forEach [참고자료](https://dydals5678.tistory.com/66)
- import vs require [참고자료](https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-require-%E2%9A%94%EF%B8%8F-import-CommonJs%EC%99%80-ES6-%EC%B0%A8%EC%9D%B4-1)
