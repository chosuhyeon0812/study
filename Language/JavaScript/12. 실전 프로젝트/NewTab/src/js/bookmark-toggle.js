// bookmark-toggle.js 생성한 북마크 바 요소에 접근하기

const $bookmarkBar = document.getElementById('bookmark-bar');
const $bookmarkCloseBtn = document.getElementById('bookmark-close-btn');
const $bookmarkOpenBtn = document.getElementById('bookmark-open-btn');
const $bookmarkCloseText = document.getElementById('bookmark-close-text');
const $bookmarkOpenText = document.getElementById('bookmark-open-text');

// bookmarkBarToggle 함수를 작성하여 북마크 바를 열고 닫을 수 있도록 구현(1단계)
/* 
const bookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
    if (isBookmarkBarOpen) {
        if(isBookmarkBarOpen === 'open') {
            localStorage.setItem('isBookmarkBarOpen', 'close');
        } else {
            localStorage.setItem('isBookmarkBarOpen', 'open');
        }
    } else {
        localStorage.setItem('isBookmarkBarOpen', 'open');
    }
};
*/

// 북마크 바 상태에 맞게 스타일 수정하기(2단계)
/*
const isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
if(isBookmarkBarOpen === "close") {
    // 현재 북마크 바가 닫혀있다면
    $bookmarkBar.style.display = 'none';
    $bookmarkCloseBtn.style.display = 'none';
    $bookmarkOpenBtn.style.display = 'flex';
} else {
    // 현재 북마크 바가 열려있다면
    $bookmarkBar.style.display = 'block';
    $bookmarkCloseBtn.style.display = 'flex';
    $bookmarkOpenBtn.style.display = 'none';
}

const bookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
    if(isBookmarkBarOpen) {// isBookmarkBarOpen 값이 존재한다면
        if(isBookmarkBarOpen === 'open'){ // 값이 open이라면
            localStorage.setItem('isBookmarkBarOpen', 'close'); // close로 변경
            $bookmarkBar.style.display = 'none';
            $bookmarkCloseBtn.style.display = 'none';
            $bookmarkOpenBtn.style.display = 'flex';
        } else { // 값이 close라면
            localStorage.setItem('isBookmarkBarOpen', 'open'); // open으로 변경
            $bookmarkBar.style.display = 'block';
            $bookmarkCloseBtn.style.display = 'flex';
            $bookmarkOpenBtn.style.display = 'none';
        }
    } else { // isBookmarkBarOpen 값이 존재하지 않는다면
        localStorage.setItem('isBookmarkBarOpen', 'open'); // open으로 설정
        $bookmarkBar.style.display = 'block';
        $bookmarkCloseBtn.style.display = 'flex';
        $bookmarkOpenBtn.style.display = 'none';
    }
}
*/

// 얼리 리턴 패턴을 적용해 코드 수정하기
const isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');

if(isBookmarkBarOpen === "close") {
    // 현재 북마크 바기 닫혀 있다면
    $bookmarkBar.style.display = 'none';
    $bookmarkCloseBtn.style.display = 'none';
    $bookmarkOpenBtn.style.display = 'flex';
} else {
    // 현재 북마크 바가 열려 있다면
    $bookmarkBar.style.display = 'block';
    $bookmarkCloseBtn.style.display = 'flex';
    $bookmarkOpenBtn.style.display = 'none';
}

const bookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
    if(isBookmarkBarOpen === "close") {
        // isBookmarkBarOpen 값이 close라면
        // 닫힘 -> 열림
        localStorage.setItem('isBookmarkBarOpen', 'open');
        $bookmarkBar.style.display = 'block';
        $bookmarkCloseBtn.style.display = 'flex';   
        $bookmarkOpenBtn.style.display = 'none';
        return;
    }
    // isBookmarkBarOpen 값이 없거나, open이라면
    // 열림 -> 닫힘 
    localStorage.setItem('isBookmarkBarOpen', 'close');
    $bookmarkBar.style.display = 'none';
    $bookmarkCloseBtn.style.display = 'none';
    $bookmarkOpenBtn.style.display = 'flex';
}


$bookmarkOpenBtn.addEventListener("click", bookmarkBarToggle);
$bookmarkCloseBtn.addEventListener("click", bookmarkBarToggle);

