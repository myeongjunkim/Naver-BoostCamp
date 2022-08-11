# 나만의체크포인트
### [프로그래밍]

<조건 정리>
- 두가지의 array 내에서 pair & 연속되는 숫자를 파악하고 우선순위에 따라 우위에 있는 배열의 번호를 return // 없거나 비교 안되면 0 return
- 우선순위 : 2pair < 3pair < 연속된 숫자 5개 < 4pair
- 배열 크기 : 7 // 4pair 가 최대 // 1~13 정수

<요구사항>
- 함수 최대 라인 10 // 들여쓰기 최대 3단계
- 입력값 : 표준입력방식 or 소스코드 내에서 함수 호출하여 입력값 전달

<체크포인트>
1. array 두개 받으면 각각 정렬하기
2. 각 원소의 pair 체크, 최대 pair와 해당 숫자 확인
3. 연속되는 수 5개 있는지 확인
   1. (1,2,3,4,5 ~ 9,10,11,12,13) 총 9개의 straight에 대해 주어진 arr 과 겹치는 부분 확인
   2. 겹치는 부분의 중복 여부 체크
   3. 최종 겹치는 부분의 길이가 5일 경우 arr에 straight 부분이 있는 것으로 간주
4. 우선순위 기준으로 비교

<결과>
<img width="1137" alt="스크린샷 2022-07-18 오후 6 42 50" src="https://user-images.githubusercontent.com/82504981/179485763-8d4f47b9-1de7-448d-825e-89a21c2531f1.png">


# 학습메모
[Markdown 사용법](https://heropy.blog/2017/09/30/markdown/)

### [학습 목표]
- git이 무엇인지 공부하도록 한다.
- IDE가 무엇인지 공부한다.
- javascript의 문법과 실행을 이해하고 조건에 맞는 코드를 짤 수 있도록 한다.

### [gist 환경설정]
- 주의 사항: gist 저장소에는 git 저장소와 달리 하위 폴더를 생성하지 못한다. 모든 파일이 하나의 폴더에 올릴 수 밖에 없다.
- issue 
    - vsc 코드의 터미널에서는 초기 세팅때 push 가 안되는 문제가 있었다. 
    - username과 password를 등록하는 과정자체가 진행되지 않았는데 본 터미널에서 진행하니 문제없이 push가 되었다. 
    -> 초기 설정과 user 등록등 셋팅에 관한 진행은 메인터미널에서 진행 필요! 이후 vsc 터미널에서도 정상 동작함

### [node.js 기본]
- 문자열 여러줄 입력받기 : [클릭](https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0)
- 배열 비교 방법 : [클릭](https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%B9%84%EA%B5%90%ED%95%98%EB%8A%94-3%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-%ED%98%95%EB%8B%98%EC%9D%98-%EC%86%94%EB%A3%A8%EC%85%98)
- 배열 요소 포함 확인 : [클릭](https://ithub.tistory.com/297)
