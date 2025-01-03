//  현재 요일을 가져오고 저장하는 getNowDate, setNowDate 함수를 만들기
const $date = document.getElementById("today-date");    //  오늘 날짜
const $time = document.getElementById("now-time");      //  현재 시간

// 분에 해당하는 숫자를 두 자리로 만들어주는 함수 : modifyNumber
const modifyNumber = (number) => {
    return number < 10 ? "0" + number : number;
}

const setNowDate = (month, date, day) => {
    $date.textContent = `${month}월 ${date}일 ${day}요일`;
};

const getNowDate = () => {
    const nowDate = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = week[nowDate.getDay()];
    setNowDate(month, date, day);
};

// 현재 시간을 가져오고 저장하는 getNowTime, setNowTime 함수를 만들기
const setNowTime = (hour, minute) => {
    $time.textContent = `${hour} : ${minute}`;
}
const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
}

getNowDate();
getNowTime();
// 1초마다 현재 시간을 갱신하는 함수 : setInterval(사용하지 않으면 시간이 흐르지 않음)
setInterval(getNowTime, 1000);