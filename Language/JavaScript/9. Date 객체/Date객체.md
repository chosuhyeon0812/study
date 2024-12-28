# 1. Date 객체

- Date 객체는 자바스크립트의 내장 객체 중 하나로, 특정 날짜의 시각과 현재 날짜 및 시각을 알 수 있어 아주 유용하게 사용되는 내장 객체입니다
- Date 객체를 활용하면 생성 시각과 수정 시각을 저장할 수 있습니다
- Date 객체는 현재 날짜와 시각을 나타낼 수 있기 때문에 특정일까지 얼마나 남았는지를 나타내는 D-day 기능을 개발하는 데 활용할 수 있고, 달력이나 시계를 개발할 때도 활용할 수 있습니다

## 1. 협정 세계시(UTC)와 타임스탬프

### 1. 협정 세계시(UTC)

- 자바스크립트는 전 세계에서 사용되는 언어이기 때문에 Date 객체는 협정 세계시라고 부르는 UTC를 기준으로 한다
- UTC는 세계 표준 시간으로 사용되며, 1970년 1월 1일 0시 0분 0초를 시간의 시작이라고 정의한다
- Date 객체는 기본적으로 1970년 1월 1일 00:00:00(UTC)을 값으로 갖고 이를 UTC+0시 라고 나타낸다

### 2. 타임스탬프

- 특정 시간을 나타내는 문자열로, 앞서 배운 UTC+0시인 1970년 1월 1일 00:00:00를 기준으로 흘러간 ms(milliseconds)의 시간을 나타내는 숫자이다

    ``` javascript
    // Date 객체를 통해 타임 스탬프 출력하기
    const date = new Date();
    console.log(date.getTime());        // 1730371920000(현재 시각이 출력되므로 결괏값은 항상 다르게 출력된다)
    ```

## 2. Date 생성자 함수

- Date 객체는 생성자 함수의 호출을 통해 생성할 수 있습니다

### 1. new Date()

    ```  javascript
    // Date 객체 생성하기
    const date = new Date();
    console.log(date);          // Sun Dec 29 2024 14:30:15 GMT+0900 (Korean Standard Time)
    ```

### 2. new Date(milliseconds)

- 생성자 함수 Date 에는 인수를 전달할 수 있다
- Date 객체는 기본적으로 1970년 1월 1일 00:00:00(UTC)을 값으로 갖기때문에 한국 표준시는 UTC 시간대보다 9시간 빠른 1970년 1월 1일 09:00:00울 값으로 가진다

    ``` javascript
    // Date 생성자 함수에 0 전달하기
    const date = new Date(0);
    console.log(date);          // Thu Jan 01 1970 09:00:00 GMT+0900 (Korean Standard Time)
    ```

### 3. new Date(dateString)

- 인수로는 날짜와 시간을 나타내는 특정 문자열도 전달 가능하다

    ``` javascript
    // Date  생성자에 날짜 전달하기
    const date = new Date("2023-12-21");
    console.log(date);          // Thu Dec 21 2023 09:00:00 GMT+0900 (Korean Standard Time) 
    ```

## 3. Date 메서드

### 1. Date.now()

- 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시각까지 경과한 ms인 타임스탬프를 반환하는 메서드

    ``` javascript
    // Date.now()로 타임스탬프 번환하기
    let timestamp = Date.now();
    console.log(timestamp);     // 1730371920000(현재 시각이 출력되므로 결괏값은 항상 다르게 출력된다)
    
    let date = new Date(timestamp); // 생성자 함수에 인수로 전달하면 타임스탬프를 실제 날짜와 시각으로 변경할 수 있다
    ```

### 2. 날짜 반환 메서드

- Date 객체의 날짜 반환 메서드

    | 메서드 | 설명 |
    | ----- | ---- |
    | getFullYear() | 연도(네 자릿 수)를 반환 |
    | getMonth() | 월(0~11)을 반환 |
    | getDate() | 일(1~31)을 반환 |

    ``` javascript
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let date = nowDate.getDate();
    let day = nowDate.getDay();

    console.log(`${year}년 ${month}월 ${date}일 ${week[day]}요일`);   // 2024년 12월 12일 일요일
    ```

### 3. 시각 반환 메서드

- Date 객체의 시각 반환 메서드

    | 메서드 | 설명 |
    | ----- | ---- |
    | getHours() | 시(0~23)를 반환 |
    | getMinutes() | 분(0~59)를 반환 |
    | getSeconds() | 초(0~59)를 반환 |
    | getMilliseconds() | 밀리초(0~999)를 반환 |

    ``` javascript
    let nowDate = new Date();
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);  // 2:58:14
    ```
