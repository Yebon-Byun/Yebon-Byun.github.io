---
title: 개발 프로젝트 시작하기
description: How to start software projcets from scratch?
author: Yebon Byun
date: 2025-11-07 09:02:00 +0900
categories: ["Not Classified"]
tags: ["Not Classified", "Projects"]
---

### Front-end
- UI(User Ineterface):  
상용자가 직접 상호작용하는 부분입니다. 웹 페이지의 레이아웃, 디자인, 인터랙션 등을 담당합니다.  

- Language:   
HTML, CSS, JavaScript 등의 언어와 라이브러리(e.g. React, Angular, Vue.js) 또는 프레임워크를 사용합니다.  

### 간략 소개:  
#### React:  
Meta에서 개발된 JavaScript 기반의 라이브러리이며, Frontend 프레임워 중 가장 큰 생태계를 구축하고 있습니다. React 기반의 프레임워크인 Next.js를 함께 사용하면 더욱 강력한 개발 환경을 제공합니다.  

#### Angular: 
Google에서 개발되었습니다. 구버전은 JavaScript 기반, 신버전은 TypeScript 기반의 프레임워크로 새롭게 작성되었습니다.  

#### Vue:  
Evan You가 개발한 JavaScript로 기반의 프레임워크 입니다. Nuxt.js는 검색 엔진 최적화(SEO, Search Engine Optimization) 친화적인 웹사이트를 빠르게 구축하는 데 도움을 줍니다.

<!-- ### 추가자료
    ### Front-end 3대장:  
    - React, Angular, Vue는 Frontend를 다루는 기술의 대표적 3대장으로 불리곤 합니다. 엄밀히 말하자면, React는 라이브러리이고 Angular, Vue는 프레임워크지만 이들을 통칭해 부르기 위해 편의상 '프레임워크'로 불리고 있습니다.  

    ### 부가적 설계 과정 필요 여부 확인하기:  
    - Angular, Vue는 프레임워크이기 때문에 부가적인 설계 과정이 필요하지 않습니다. 하지만 리액트(React)는 라이브러리이기 때문에 다양한 기능을 구현하기 위해 부가적 설계 과정이 필요합니다. 다양한 기능이 요구되는 프로젝트의 경우 Angular 또 Vue를 사용하는 것이 좋습니다.  

    ### 단방향 바인딩 / 양방향 바인딩 특성 고려하기:    
    - Angular는 양방향 바인딩 개념을 사용하여 데이터 값이 한쪽에서 변화하면 다른쪽에서도 바로 업데이트 됩니다. 하지만 React, Vue는 단방향 데이터 바인딩을 사용하여 화면을 업데이트하는 코드를 매 번 작성해야하는 번거로움이 있습니다.

    [앵귤러(Angular)란?, 특징부터 장단점, 사용하는 이유까지 모두 알려드립니다!](https://www.elancer.co.kr/blog/detail/217)


    ### 규모에 적합한 도구(프레임워크 OR 라이브러리) 선택하기:    
    [Google AI Summarization]
    [Which is better for web development in 2025, React, Angular, or Vue?](https://www.quora.com/Which-is-better-for-web-development-in-2025-React-Angular-or-Vue)
    [Front-end Frameworks Ratios Over Time][https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/]
    [최신 프론트엔드 프레임워크 비교: React, Vue, Angular 중 선택은?](https://ai-one.tistory.com/entry/%EC%B5%9C%EC%8B%A0-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EB%B9%84%EA%B5%90-React-Vue-Angular-%EC%A4%91-%EC%84%A0%ED%83%9D%EC%9D%80)


    ### 또는 상황에 적합한 도구 선택하기: 
    - 객체 지향 프로그래밍(OOP)를 좋아한다면: Angular
    - 다양한 라이브러리, 도구 또는 생태계를 사용하는 것을 좋아한다면: React
    - 깔끔하고 사용하기 쉬운 코드를 작성하는 것을 선호한다면: Vue
    - 쉽게 배우고 빠르게 프로젝트를 시작하려면: Vue
    - 혼자 개발을 진행하거나 소규모 팀인 경우: Vue OR React
    - 수십 가지 패키지 중에서 선택하는 것을 좋아한다면: React
    - JavaScript 사용이 익숙하고, JavaScript 접근 방식을 좋아한다면: React
    - React-Native로 앱을 빌드하려면: React
    - 디자이너와 함께 작업하고 깔끔한 HTML 파일이 필요한 경우: Angular OR Vue -->

#### Client:  
프론트엔드 코드는 사용자의 브라우저에서 실행됩니다.  

#### Data 표시:  
프론트엔드는 백엔드에서 받은 데이터를 사용자에게 표시하고 사용자의 입력을 백엔드로 전달합니다.  


### Back-end
#### Server and Data:  
백엔드는 데이터베이스와 서버 로직을 관리합니다. 데이터의 CRUD(Create, Read, Update, Delete) 작업을 담당하며 비즈니스 로직을 처리합니다.  

#### Language:  
백엔드 개발에는 Python(Django, Flask), JavaScript(Node.js), Java(Spring, Spring Boot), Ruby(Ruby on Rails), PHP(Laravel) 등 다양한 언어와 프레임워크가 사용됩니다.  

#### Server:  
백엔드 코드는 서버에서 실행됩니다. 서버는 클라이언트의 요청을 받아 적절한 응답을 제공합니다.

#### Data 저장:  
대부분 RDBMS(e.g. MySQL, PostgreSQL)나 NoSQL(e.g. MongoDB, Cassandra) 데이터베이스를 사사용해 데이터터를 저장/관리합니다.  


### Front-end &  Back-end 연결 원리
#### HTTP 프로토콜:  
Front-end와 Back-end는 대개 HTTP(HyperText Transfer Protocol)를 통해 통신합니다.

#### API(Application Programming Interface):  
Back-end 서버는 특정 엔드포인트를 통해 데이터나 기능을 제공하며, Front-end는 이 엔드포인트에 요청을 보내 데이터를 받거나 처리합니다.

#### 비동기통신:  
현대 웹 앱에서는 AJAX(Asynchronous JavaScript and XML), FetchAPI, Axios 등을 사용하여 비동기적으로 데이터를 주고 받습니다.

동기 & 비동기 통신 차이:  
카페에서 커피를 주문하고 기다리는 상황을 떠올려보면 직관적이고 간단한하게 동기 & 비동기의 차이를 볼 수 있습니다.

동기(Synchronous)
* 요청을 하면 해당 코드의 응답이 올 때까지 대기를 하는 방식입니다. 응답이 올 때까지 다음 동작을 멈춥니다.
* 커피 주문 상황으로 예시를 들자면, 커피를 주문하고 커피가 나올 때까지 계산대 앞에서 기다리는 상황입니다.
* 커피를 주문한 손님(요청)은 커피를 받을 때까지 다른 일을 할 수 없습니다.
* 순서가 보장되고 단순하다는 장점이 있지만 비동기에 비해 느리고 대기시간이 발생한다는 단점이 있습니다.

비동기(Asynchronous):  
* 요청을 하면 해당 코드의 응답을 기다리지 않고 다음 코드를 실행합니다.
* 커피 주문 상황으로 예시를 들자면, 커피를 주문하고 진동벨을 받고 자리에 가서 다른 일을 하다가 커피가 나오면 받는 상황입니다.
* 커피를 주문한 손님(요청)은 주문 후 진동벨만 받고 다른일을 처리할 수 있습니다. 커피가 완성되면 진동벨을 통해 알림(콜백)이 와서 일처리 결과를 알려줍니다.
* 빠르고 효율적이며 한 번에 여러 요청을 동시에 처리 가능하다는 장점을 가지고 있지만 콜백, Promise, await 등 추가적으로 고려해야할 복잡한 사항들이 있습니다.





#### <span style="color: white; background-color: dimgrey;">오픈소스 / 소스코드 분석 왜 필요한가?</span>

#### <span style="color: white; background-color: dimgrey;">전체적 구조부터 파악하기</span>

#### <span style="color: white; background-color: dimgrey;">분석하며 기록하기</span>

#### <span style="color: white; background-color: dimgrey;">디버깅하기</span>

#### <span style="color: white; background-color: dimgrey;">너무 오랜 시간 고민하지 말고 질문하기</span>

#### <span style="color: white; background-color: dimgrey;">긍정적 마음을 가지고 휴식(운동)하기</span>

#### <span style="color: white; background-color: dimgrey;">REFERENCES</span>

[spring 과 springBoot의 차이점](https://www.inflearn.com/blogs/3315?srsltid=AfmBOooZWNoZwbyCY2GIFjbMojPj_-b2XiqhHc6EzYynUPmU8kyu1GNl)

[API 와 Endpoint ? (둘 다 정확w히 알고 있다면 안 봐도 되는 글)](https://blog.naver.com/ghdalswl77/222401162545)

ChatGPT

[[Web] 웹에서의 서버와 프론트 서버와 백엔드 서버](https://velog.io/@mjungpp/%EC%9B%B9%EC%97%90%EC%84%9C%EC%9D%98-%EC%84%9C%EB%B2%84%EC%99%80-%ED%94%84%EB%A1%A0%ED%8A%B8-%EC%84%9C%EB%B2%84%EC%99%80-%EB%B0%B1%EC%97%94%EB%93%9C-%EC%84%9C%EB%B2%84)
[[Database] RDBMS와 NoSQL의 차이점](https://khj93.tistory.com/entry/Database-RDBMS%EC%99%80-NOSQL-%EC%B0%A8%EC%9D%B4%EC%A0%90)