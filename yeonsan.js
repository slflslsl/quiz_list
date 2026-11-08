/*
1. 
let age = 25;
console.log(age)
2. 
const userName = "홍길동"
console.log(userName);
3.
let price = 1000;
price = 2000;
console.log(price);
4.
let data;
console.log(data);
undefined
5.
const userName = "김철수";
let age = 30;
const height = 178.5;
let isStudent = false;
console.log(userName);
console.log(age);
console.log(height);
console.log(isStudent);
6.
30
10
7.
let score = 80; 
score = 90;
8.
const인데 값 바꿔넣으려고 해서
9.
let score1 = 100;
let myName = "홍길동";
let userAge = 20;
let $money = 5000;
let user_name = "김철수"
10.
A
11.
a = 15
b = 4
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
12.
a = 100 % 7
console.log(a);
13.
a = 2 ** 5
console.log(a);
14.
3.3333333333333335
1
15.
20
16.
30
17.
18
18.
13
19.
apple = 1200
apple = apple * 5
console.log("사과의 총금액: " + apple);
20.
let totalMinutes = 125;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
console.log(hours + "시간" + minutes + "분");
21.
3030
22.
102030
23.
102030
24.
60원
25.
합계: 1020
26.
합계: 30
27.
510
50
28.
80
200
25
29.
let name = "홍길동";
let age = 25;
console.log(name + "님의 나이는 " + age + "세입니다.")
30.
3030
301020
103020
2030
31.
11
32.
8
33.
5
6
34.
6
6
35.
10
9
36.
9
9
37.
11 10
38.
11 11
39.
6 10 15
40.
6 9 16
41.
9 4 6
42.
6 11
43.
31 21
44.
21 13
45.
9 5 14
46.
15
47.
13
48.
20
49.
25
50.
2
51.
22
52.
4
53.
let a=10;
a += 20;
a *= 3;
a -= 15; 
a /= 5
54.
let account = 100000;
account += 30000;
if (account >= 25000) {
    account -= 25000;
}
console.log("잔액 : " + account + "원");
55.
let playerHp = 100;
console.log("현재 HP : " + playerHp);
if (playerHp > 99) {
    playerHp -= 30;
    console.log("HP가 30 감소되어, HP가 " + playerHp + "이(가) 되었습니다.");
    playerHp += 20;
    console.log("HP를 20 회복하여, HP가 " + playerHp + "이(가) 되었습니다.");
    playerHp -= 15;
}
console.log("HP가 15 감소되어, 최종 체력은 " + playerHp + "입니다.");
56.
true
false
57.
true
false
true
false
58.
true
false
59.
false
true
60.
false
true
false
61.
let age = 20;
console.log(age >= 20);
true
62.
let score = 60;
console.log(score >= 60);
true
63.
true
false
true
true
64.
true
6
true
11
65.
let a = 100;
let b = "100";
console.log(a === b);
66.
true
false
false
false
67.
true
true
true
false
68.
false
true
true
69.
true
70.
true
71.
false
72.
true
true
73.
let age = 25;
console.log(age >= 20 && age <= 30);
74.
let score = 75;
let attendance = 90;
console.log(score >= 60 && attendance >= 80);
75.
true
true
false
true
false
76.
성인
77.
불합격
78.
let number = 10;
console.log(number > 0 ? "양수" : "양수가 아님");
79.
let a = 10;
let b = 20;
console.log(b > a ? b : a);
80.
100
81.
15
82.
let num = 17;
console.log();
83.
let price = 25000;
console.log(price === 30000 ? "무료배송" : "배송비 발생");
84.
B
85.
25
86.
100
87.
"100"
88.
"1020"
89.
1020
90.
"1020"
91.
"100200"
300
92.
"102030"
60
93.
5.14??????????
"100200"
94.
"5020"
30 
1000 
2.5 
95.
"102030"
60
"2010"
1020
96.
const productPrice = 15000;
let quantity = 3;
const moveTruck = 3000;
console.log(productPrice * quantity);
console.log(productPrice * quantity + moveTruck);
console.log(productPrice * quantity + moveTruck >= 50000 ? "50000원 이상" : "50000원 미만");
console.log(productPrice * quantity + moveTruck >= 50000 ? "고액주문" : "일반주문");
97.
let korean = 85;
let english = 90;
let math = 75;
let allScore = korean + english + math;
console.log(allScore);
allScore /= 3;
console.log(allScore);
console.log(allScore >= 80 ? "평균 80 이상" : "평균 80 미만");
console.log(allScore >= 80 ? "우수" : "보통");
98.
let account = 100000;
console.log("초기 잔액: " + account + "원");
account += 50000;
console.log("50000원 입금 후 잔액: " + account + "원");
account -= 30000;
console.log("30000원 출금 후 잔액: " + account + "원");
account -= 20000;
console.log("20000원 추가 출금 후 잔액: " + account + "원");
console.log("최종 잔액: " + account + "원");
console.log(account >= 100000 ? "잔액 충분" : "잔액 부족");
99.
let age = 15;
let height = 155;
let withParent = true;
let canEnter = (age >= 14 && height >= 150) || (withParent && height >= 150);
console.log(canEnter ? "입장 가능" : "입장 불가"); 
age = 12;
canEnter = (age >= 14 && height >= 150) || (withParent && height >= 150);
console.log(canEnter ? "입장 가능" : "입장 불가"); 
withParent = false;
canEnter = (age >= 14 && height >= 150) || (withParent && height >= 150);
console.log(canEnter ? "입장 가능" : "입장 불가");
100.
답:
35
20
30
5530
85
true
true
false
true
true
55

［ 실제 계산과정들 ］

초기값
a  10 b 20 c "30"

계산 시작
 a= 15
 b = 19
 a = 20 + 15 

{ a = 35 b = 20 c = "30" }

35 + 20 + "30" = "5530"

35 + 30 + 20 = 85

c = 30 (계산 중에만 숫자로 변환)

 { a = 35 b = 20 c = "30" }

true
true 타입 다른 것 정돈 허용
false 타입도 다르면 안 됨

let result1 = a > b && Number(c) > 20;
둘 다 트루 = true
let result2 = a < b || c == 30;
a < b = false, c == 30 true
하나만 트루여도 되니 true

let result3 = result1 ? a + b : a - b;
result3 = result1 = true  = a + b 
result3 = 55

*/