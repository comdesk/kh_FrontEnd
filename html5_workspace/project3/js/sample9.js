var gender = "M";
var age = 21;

if(gender === "M") {
    if(age >= 19) {
        result = "남자 성인입니다.";
    } else {
        result = "남자 미성년자입니다.";
    } //if-else
} else {
    if(age >= 19) {
        result = "여자 성인입니다.";
    } else {
        result = "여자 미성년자입니다.";
    } //if-else
} //if-else
console.log(`당신은 ${result}`);

result = `당신은 ${result}`;

// =====================

var h1 = document.querySelector("h1");
h1.innerHTML = result;
