//new 연산자 뒤에 나와서, 사용자정의 객체를 생성하는 "생성자함수" 선언

function Car(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;

    this.speedUp = function () {
        this.speed += 10;
        return this.speed;
    }
    this.speedDown = function () {
        this.speed -= 10;
        if(this.speed <=0) this.speed = 0;
        return this.speed;
    }
} //Constructor