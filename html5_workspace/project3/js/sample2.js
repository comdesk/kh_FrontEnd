document.write('<!DOCTYPE html>')

document.write("<h3>sample2.js</h3>");

//변수 선언 및 초기화 => 변수 정의
var age = 23;

// 웹 브라우저에 Viewport에 출력문장
// 문자에 스타일 속성 적용
// 여기서 백슬래시(\) 기호는 Escape 문자(= 탈출문자) => 안쪽 ""을 단순 문자로 만듦. (바깥쪽 ""은 문자열 리터럴을 만드는 기능)
document.write("<div style=\"color: red; font-size: 24px;\">외부 자바스크립트 파일</div>");
document.write("당신의 나이는 " + age + "입니다.");