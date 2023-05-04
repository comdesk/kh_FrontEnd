// (1) prompt 함수 return 값: 입력한 값 / 빈 문자열('') / null (if cancel)
var id = prompt('아이디 입력');     //전역변수

if(id === 'admin') {
    const password = prompt('비밀번호 입력');     //블록변수(즉, 지역변수)

    if(password === '123456') {
        // (2) location 객체
        location.href = "http://www.naver.com";
    } else {
        location.href = "http://www.daum.net";
    } //if-else
} else {
    location.href = "http://www.google.co.kr";
} //if-else