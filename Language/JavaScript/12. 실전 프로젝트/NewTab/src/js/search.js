const $search = document.getElementById('search-input');

// 구글 검색 결과 페이지로 이동하는 moveResultPage 함수 만들기
const moveResultPage = () => {
    let searchWord = $search.value ;
    window.location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = '';
};

// 검색창에서 엔터키를 누르면 moveResultPage 함수 실행
const enterKey = (event) => {
    if(event.code === "Enter") {
        moveResultPage();
    }
};  

// event는 $search 요소에 addEventListener를 사용해서 특정 키를 누르는 이벤트인 keypress를 통해 받아옴
$search.addEventListener('keypress', (event) => {
    enterKey(event);
});