/*
문자열 내 마음대로 정렬하기

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

/* 내 풀이 */

function solution(strings, n) {
    return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
}



/* localeCompare 란?

두 문자열이 현재 로캘에서 같은지 여부를 확인

a.localeCompare(b)
a : 비교할 첫째 문자열
b : 비교할 둘째 문자열

a가 b보다 앞에 정렬되는 경우 -1

a가 b 뒤에 정렬되는 경우 +1

두 문자열이 동일한 경우 0(영)

*/