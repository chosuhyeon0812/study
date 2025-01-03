// API 주소 선언 및 명언을 표시할 요소에 접근하기
const API_URL = `https://random-quote.hyobb.com/`;
const $quote = document.getElementById('quote');
const quoteItem = localStorage.getItem('quote');

// 명언 생성 날짜 가져오기기
const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

// $quote 요소에 명언 API 결괏값 텍스트로 추가하기
const setQuote = (result) => {
    let quote = { createdDate: `${month}-${date}`, quoteData: result};
    localStorage.setItem("quote", JSON.stringify(quote));
    $quote.textContent = `"${result}"`;
}

// 명언 API 호출 후 결괏값 출력하기 : API 호출은 성공할 수도 실패할 수도 있기 때문에 async/await를 사용해 비동기 처리
const getQuote = async () => {
    try {
        const data = await fetch(API_URL).then((res) => res.json());
        const result = data[1].respond;
        console.log(result);    // 오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다. - 앙드레 말로
        setQuote(result);
    } catch (error) {
        console.error(`error : ${error}`);
        setQuote("\"삶은 10%가 일어난 일이고, 90%는 그것에 어떻게 반응하는가에 달려 있다.\" – Charles R. Swindoll");
    }
};

if(quoteItem) {
    let { createdDate, quoteData } = JSON.parse(quoteItem);
    if(createdDate === `${month}-${date}`) {
        $quote.textContent = `"${quoteData}"`;
    } else {
        getQuote();
    }
}