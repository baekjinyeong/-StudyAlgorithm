/*
약수의 합

자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 조건
n은 0 이상 3000이하인 자연수입니다.
*/

/* 내 풀이 */
function solution(n) {
	var answer = 0;
	for ( var i = 0 ; i<= n ; i++) {
		if(n%i === 0) {
			answer +=i;
		}
	}
	return answer;
}

/* 다른사람 풀이 */

let sumDivisor = num => {
  let answer = 0,
		i = 1,
		j = num%2 == 0 ? 1 : 2
  for(i; i<num; i=i+j) if(num%i == 0) answer += i
  return answer+num
}
