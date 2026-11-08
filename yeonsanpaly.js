// 문제 100. 다음 코드의 모든 출력 결과를 예상하고 이유를 설명하세요.
let a = 10;
let b = 20;
let c = "30";
a += 5;
b--;
a = ++b + a--;

console.log(a);
console.log(b);
console.log(c);
console.log(a + b + c);
console.log(a + Number(c) + b);
console.log(a > b);
console.log(a == "35");
console.log(a === "35");

let result1 = a > b && Number(c) > 20;
let result2 = a < b || c == 30;
console.log(result1);
console.log(result2);

let result3 = result1 ? a + b : a - b;
console.log(result3);

/*

요구사항: 

1) 출력 순서 
2) 변수 변화 
3) 전위/후위 증감 순서
4) 문자열 결합과 숫자 덧셈 구분 
5) 비교·논리 결과 
6) 삼항 선택 이유 

*/