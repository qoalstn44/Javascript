/* console.log(1 < 2) // 1이 2보다 작은가? true
console.log(2 <= 2) // 2가 2보다 작거나 같은가? true
console.log(1 > 2) // 1이 2보다 큰가? false
console.log(1 >= 2) // 1이 2보다 크거나 같은가? false */

const shirtsPrice = 100000
const shoesPrice = 80000
let totalPrice = 0

totalPrice += shirtsPrice /* 100000 + 0 */
console.log(totalPrice)/* ←맨처음 토탈이 100000이됬음 이것이
↓두번째 토탈로 와서100000으로 저장 */
totalPrice += shoesPrice /* 80000 + 100000 */
console.log(totalPrice)

totalPrice -= shirtsPrice /* 180000 - 80000 */
console.log(totalPrice)
