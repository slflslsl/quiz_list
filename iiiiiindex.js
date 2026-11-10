//학습 목표
//for, for...in, for...of, forEach()
// 를 사용하여 
// 배열의 인덱스와 값에 접근하는 방법을 연습합니다.

// 공통 조건
// - 각 문제에서 지정한 반복문을 사용하세요.
// - 결과는 console.log()로 출력하세요.

/*
문제 1
let scores = [10, 20, 30, 40, 50];

for(let i = 0; i < scores.length; i++) {
     console.log(scores[i]);

문제 2
let numbers = [5, 10, 15, 20, 25];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

문제3
let scores = [70, 80, 90, 60, 100];

for (let i = 0; i < scores.length; i++) {
    console.log(i + " : " + scores[i]);
}

문제 4
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();

// 배열의 처음부터 끝까지 하나씩 꺼내서 출력
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

문제 5. [for...in]
let fruits = ['사과', '바나나', '포도', '딸기'];
각 요소의 인덱스만 출력하세요.
for (i in fruits) {
    console.log(i);
}

//문제 6. [for...in]
let fruits = ['사과', '바나나', '포도', '딸기'];
//인덱스와 값을 함께 출력하세요.
//출력 예시: 0 : 사과
for (i in fruits) {
    console.log(i + " : " + fruits[i]);
}

//문제 7. [for...of]
let prices = [1000, 2000, 3000, 4000];
//배열의 모든 값을 출력하세요.
for (let i of prices) {
    console.log(i);
}
    //문제 8. [for...of]
let numbers = [3, 6, 9, 12, 15];
//각 값을 10 증가시켜 출력하세요.
for (let i of numbers) {
    console.log(i + 10);
}
    //문제 9. [forEach]
let scores = [50, 60, 70, 80, 90];
//각 요소의 인덱스와 값을 출력하세요.

scores.forEach((value, index) => {
    console.log(`${index}번째 점수: ${value}점`);
});

//문제 10. [forEach]
let names = ['김철수', '이영희', '박민수'];
//각 요소를 '1번 김철수'와 같은 형태로 출력하세요.
//번호는 1부터 시작합니다.
names.forEach((value, index) => {
    console.log(`${index + 1}번 ${value}`);
})

*/

