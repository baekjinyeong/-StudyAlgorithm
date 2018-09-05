/*
평균구하기

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한 조건
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
*/

/* 내 풀이 */
function solution(arr) {
	var add = arr.reduce((acc, value) => {
		return acc + value;
	});
	return add / arr.length;
}

/* 다른사람 풀이 */

function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}
