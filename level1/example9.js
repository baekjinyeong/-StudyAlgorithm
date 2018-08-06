/*
수박수박수박수박수박수?

길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.
*/

/* 내 풀이 */
// 1.
function solution(n) {
	var result = "";
	for(var i = 0; i < n; i++) {
		// if(i % 2 === 0) {
		// 	result += "수";
		// } else {
		// 	result += "박";
		// }
		(i % 2 === 0) ? result += "수" : result += "박";
	}
	return result;
}

/* 다른사람 풀이 */

function waterMelon(n){
  var result = "수박";
	result = result.repeat(n-1).substring(0,n);

  return result;
}

/*
repeat 메서드

- 지정된 횟수만큼 반복되는 원래 문자열과 같은 값과 함께 새 문자열 개체를 반환
*/