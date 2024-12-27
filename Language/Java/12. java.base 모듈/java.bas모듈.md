# 1. java.base 모듈

## 1. 문자열 클래스 

| 클래스 | 설명 |
| ----- | ----- |
| String | 문자열을 저장하고 조작할 때 사용 |
| StringBuilder | 효율적인 문자열 조작 기능이 필요할 때 사용 |
| StringTokenizer | 구분자로 연결된 문자열을 분리할 때 사용 |

- String은 문자열을 결합할 때, 새로운 String 객체가 생성되고 이전 객체는 계속 버려지기 때문에 비효율적이다
- 잦은 문자열 변경 작업을 해야 한다면 StringBuilder를 사욯나는 것이 효과적이다
- StringBuilder는 내부 버퍼(데이터를 저장하는 메모리)에 문자열을 저장해두고 그 안에서 추가, 수정, 삭제 작업을 하도록 설계되어 있다
- 문자열이 구분자로 연결되어 있을 경우, 구분자를 기준으로 문자열을 분리하려면 String의 split() 메소드를 이용하거나 java.util 패키지의 StringTokenizer 클래스를 이용할 수 있다


## 2. 포장 클래스(Wrapper)

- 자바의 Wrapper 클래스는 기본 자료형을 객체로 다룰 수 있도록 포장(Wrapper)한 클래스이다

    | 기본 자료형 | Wrapper 클래스 |
    | ---------- | -------------- |
    | int | Integer |
    | float | float |
    | double | douoble |
    | char | character |
    | boolean | boolean |
    | byte | byte |
    | short | short |
    | long | long |

- wrapper 클래스를 사용하는 이유

    1. 컬렉션 프레임워크 사용 :  자바의 컬렉션 프레임워크(List, Set, Map..)은 객체만 저장할 수 있기때문에 기본 자료형을 직접 저장할수 없다! Wrapper 클래스를 사용해 객체로 변환해야 한다

        ``` java
        List<Integer> list = new ArrayList<>();
        list.add(10);
        ```
    
    2. 유틸리티 메서드 제공 : Wrapper 클래스를 형 변환, 값 비교, 문자열 변환 등 여러 유틸리티 메서드를 제공한다

        ``` java
        int number = Integer.parseInt("123");   // 문자열을 정수로 변환
        String str = Integer.toSTring(456);     // 정수를 문자열로 변환
        ```
    
    3. 기본 자료형과 객체 사이의 변환 (Auto-boxing / Unboxing) : 자바는 기본 자료형을 Wrapper 클래스로 변환(박싱, Boxing) 하거나, 그 반대로 변환(언박싱, Unboxing)하는 작업을 자동으로 처리합니다

        ``` java
        Integer obj = 10;
        int value = obj;

## 3. 어노테이션

- 코드에서 @로 작성되는 요소로 클래스 또는 인터페이스를 컴파일하거나 실행할 때 어떻게 처리해야 할 것인지를 알려주는 설정 정보
- 용도 3가지

    1. 컴파일 시 사용하는 정보 전달
    2. 빌드 툴이 코드를 자동으로 생성할 때 사용하는 정보 전달
    3. 실행 시 특정 기능을 처리할 때 사용하는 정보 전달

- 대표적인 예 : @Override -> 컴파일러가 메소드 재정의 검사를 하도록 설정(정확히 재정의되지 않았다면 에러를 발생시킴)