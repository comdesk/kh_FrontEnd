var day;

//'Date' 객체 생성하기 위해, 'Date'라는 '생성자 함수' 제공
var week = new Date().getDay(); //0(일)~6(토)
console.log(new Date());

switch(week) {
    case 0: day = "일요일"; break;
    case 1: day = "월요일"; break;
    case 2: day = "화요일"; break;
    case 3: day = "수요일"; break;
    case 4: day = "목요일"; break;
    case 5: day = "금요일"; break;
    case 6: day = "토요일"; break;
    default: day = "없는 요일"
} //switch

console.log(`오늘은 ${day}입니다.`);

// -----------------------------

var today = new Date();
var yyyy = today.getFullYear();
console.log(`1. yyyy: ${yyyy}`);

today.setMinutes