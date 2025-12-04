---
title: '[Web Dev] 웹 개발을 위한 전체적 개요'
description: How to start web development from scratch?
author: yebon
date: 2025-12-03
categories: ["Not Classified"]
tags: ["Not Classified", "Projects", "Web Development", "Front-end", "Back-end", "API", "HTTP"]
image: https://github.com/user-attachments/assets/89c0a545-0fdf-4038-bf5e-cc6c0ee0c3b5
---

## Front-end
---
### UI(User Ineterface):  
상용자가 직접 상호작용하는 부분입니다 웹 페이지의 레이아웃, 디자인, 인터랙션 등을 담당합니다.  <br>

### Language & Framework & Library:   
HTML, CSS, JavaScript 등의 언어와 이 언어들을 기반으로 만들어진 React, Angular, Vue.js 등과 같은 라이브러리와 프레임워크를 사용합니다.  <br>

## Back-end
---
### Server and Data:  
백엔드는 클라이언트의 요청을 받아 적절한 응답을 제공하며, 서버 로직과 데이터베이스를 관리합니다. RDBMS(e.g. MySQL, PostgreSQL)나 NoSQL(e.g. MongoDB, Cassandra) 데이터베이스를 사용해 데이터의 CRUD(Create, Read, Update, DeleAPI te) 작업을 담당하며 비즈니스 로직을 처리합니다.  <br>

### Language & Framework:  
Python, JavaScript, Java, Ruby, PHP 등의 언어와 이를 기반으로 만들어진 Django, Falsk, Express.js, Node.js, Spring, Spring Boot, Ruby on Rails, Laravel 등과 같은 프레임워크를 사용됩니다.<br>

## Front-end ↔ Back-end 연결 원리
---
### HTTP Protocol:
Front-end와 Back-end는 대게 HTTP(HyperText Transfer Protocol)를 통해 통신하며, 이는 주로 웹 브라우저와 웹 서버 간의 통신에 사용됩니다. HTTP는 서버와 클라이언트가 서로 데이터를 주고받기 위해 사용되는 통신 규약을 지칭합니다. HTML, TEXT, IMAGE, VOICE, VIDEO, FILE, JSON, XML 등 거의 모든 형태의 데이터가 전송 가능하며 브라우저인 클라이언트는 서버에 요청(Request)하며, 서버는 이 요청에 대해 응답(Response)합니다. <br>

### API:  
위에 HTTP Protocol에서 소개한 클라이언트의 요청(Request)과 서버의 응답(Response)은 API라는 규칙(정의)에 의해 진행됩니다. 클라이언트가 API에 정의된 방식대로 요청(Request)을 보내 서버는 그 요청을 처리하여 적절한 응답(Response)을 반환합니다. 즉, API는 Front-end와 Back-end가 서로 소통할 수 있게 해주는 매개체 역할을 합니다. <br>


### Request(요청):  
웹 브라우저는 정보를 얻기 위해 아래와 같은 내용들을 포함하여 서버에 요청하게 됩니다. <br>
- `Method:`  
    어떠한 요청을 원하는지 명시합니다.  
    (e.g. 'GET 방식으로 페이지를 줘')  
    - GET: 정보를 가져옴
    - POST: 정보를 보냄 
    - PUT: 정보를 업데이트
    - DELETE: 정보를 삭제

- `URL:`  
    정확히 어떤 파일이나 페이지가 필요한지 주소를 알려줍니다.  
    (e.g. /index.html 파일을 줘)

- `Header:`  
    요청을 보낸 부라우저 정보, 선호하는 언어 등 추가적인 정보를 담습니다.  
    (e.g. 나는 Chrome을 사용하고 있어)


### Response(응답):
서버는 클라이언트의 요청을 받고 아래와 같은 내용을 포함해 답장하게 됩니다.
- `Status Code:`  
    200 OK - 요청이 성공한 경우  
    404 Not Found - 페이지를 찾을 수 없는 경우  

- `Header:`  
보내는 데이터의 종류(HTML, Image 등), 크기 등을 알려줍니다.

- `Body:`  
요청받은 웹 페이지 내용, 이미지 파일 등 실제 주고받는 정보입니다.

### Async(비동기통신):  
현대 웹 앱에서는 AJAX(Asynchronous JavaScript and XML)이나 Fetch API, Axio 등을 사용하여 비동기적으로 데이터를 주고 받습니다.<br>


## Front-end ↔ Back-end 연결 방법(API 종류)
---
### REST API:  
REST는 Representational State Transfer의 약어이며, REST API는 웹 기반 API의 대표적인 예입니다. REST는 클라이언트가 서버 데이터에 액세스하는 데 사용할 수 있는 GET, PUT, POST, DELETE 등의 함수 집함을 정의합니다. HTTP 프로토콜을 사용하여 클라이언트와 서버 간 데이터를 교환합니다.  
(e.g. GET /users, POST /users)

REST API의 주된 특성은 무상태입니다. 이는 서버가 요청 간에 클라이언트 데이터를 저장하지 않음을 의미합니다. 서버에 대한 클라이언트의 요청은 웹 사이트를 방문하기 위해 브라우저에 입력하는 URL과 유사합니다. 서버의 응답은 웹 페이지의 일반적인 그래픽 렌더링이 없는 일반 데이터입니다<br>

### GraphQL:  
최근 많이 사용되는 기술로, Front-end에서 필요한 데이터 형식을 지정하여 요청할 수 있습니다. REST API에서 발생할 수 있는 과다한 데이터 전송 문제를 해결하며, 효율적인 데이터 처리가 가능합니다.<br>

### WebSocket:  
JSON 객체를 사용하여 데이터를 전달하는 또 다른 최신 웹 API 개발입니다. WebSocket API는 클라이언트 앱과 서버 간의 양방향 통신을 지원합니다. 서버가 연결된 클라이언트에 콜백 메시지를 전송할 수 있어 REST API보다 효율적입니다.<br>


## 식당에 비유하자면
---
- **메뉴판(API)**:  
손님이 주문 할 수 있는 메뉴(기능) 정의.

- **손님(Client / Front-end)**:  
메뉴판을 보고 주문을 결정.

- **웨이터(HTTP)**:  
주문을 전달하고(Request), 음식을 서빙(Response)하는 역할.

- **주방장(Server / Back-end)**:  
요리를 실제 만드는 사람.
<br>

## 참고사항
---
### 'API로 데이터 가져오기', 올바른 표현인가?
엄밀히 말해 API로 데이터를 가져온다는 표현은 잘못된 이야기입니다. API는 상호작용을 위한 접근 방법, 함수, 명령 등의 정의나 규칙을 의미합니다. 다른말로 하자면, 어떤 주소로, 어떤 명령을 보내야 원하는 결과를 받을 수 있다는 메뉴판 또는 설계도와 같습니다. 

이 표현을 더욱 정확히 사용하려면 아래와 같은 표현들이 대안이 될 수 있습니다.

* 'API를 이용해 데이터를 요청했다.'
* 'API 엔드포인트를 호출해서 응답 데이터를 받았다.'

## References
[애플리케이션 프로그래밍 인터페이스(API)란 무엇인가요?](https://aws.amazon.com/ko/what-is/api/)  
[프론트엔드 백엔드 연결](https://zero-base.co.kr/event/media_insight_contents_BE_backend_Connection)  
[HTTP는 무엇일까요? - 기본 핵심 요약 총정리](https://inpa.tistory.com/entry/HTTP-%F0%9F%8C%90-%EB%B0%B1%EC%97%94%EB%93%9C-%EB%A1%9C%EB%93%9C%EB%A7%B5-HTTP%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)    
[API의 기본 개념과 초보자 가이드](https://www.fanruan.com/ko-kr/blog/api)  
[Google Gemini for double-chekcing](https://gemini.google.com/app)

