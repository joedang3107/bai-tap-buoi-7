// viết chương trình kiểm tra n có phải số nguyên tố hay không?
//các bước: 
// - kiểm tra < 2
// - kiểm tra  = 2
// vòng lặp > 2, n-1; index++
// let n = 10;
// let check = true;
// if (n<2) {
//     check = false;
// } else {
//     for (let index = 2; index < n-1; index++) {  // n-1 vì n lúc nào cũng chia hết cho chính nó
//         if (n % index == 0) {
//             check = false;
//         }
//     }
// }
// if (check === true) {
//     console.log('n la sao ng to');
// } else {
//     console.log('ko phai so ng to');
// }


// 1. Viết chương trình in ra các số từ 1 đến n?
// let n = 10;
// for (let index = 1; index <= n; index++) {
//     console.log(index);
// }

// 2. Viết chương trình in ra các số lẻ từ 1 đến n?
// let n = 10;
// for (let index = 1; index <= n; index++) {
//     if(index%2==0) continue;
//     console.log(index);
// }


// 3. Viết chương trình in ra các số chẳn từ 1 đến n?
// let n = 10;
// for (let index = 2; index < n; index++) {
//     if (index%2!=0) continue;
//       console.log(index);
// }

// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// function test_prime(n) {
// if (n<2) {
//     check = false;
// }
// else {
//     for (let index = 2; index <= Math.sqrt(n); index++) { // từ 2 đến căn n ko có số mà n chia hết
//         if (n % index == 0) {
//             return false;
//         }
//         else {
//             return true;
//           }
//     }
//   }
// }
// console.log(test_prime(38));
// 5. Viết chương trình tính tổng từ 1 đến n?
// let tong = 0;
// let index = 0;
// while(index <= 10) {
//     tong += index;
//     index++;
// }
// console.log(tong);

//6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// let tong = 0;
// let index = 0;

// while (index <= 5) {
//     tong += index*index;
//     index++
// }
// console.log(tong);

// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
// let tong = 0;
// let index = 1;

// while (index<=5) {
//     if (index%2!=0) {
//        tong+=index;
//     }
//     index++
// }
// console.log(tong);

// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// VD1: n=1234, output: ‘NO’
// VD2: n=135, output: ‘YES
let n =13579;
function checkSoLe(n) {
    while(n>0) {
        let a = n % 10; 
        n = n/10;
        if(a % 2 == 0){
            return false;
        }
    }
    return true;
}
if(checkSoLe(n))
{
  console.log("yes");
}

else
{
  console.log("no");
}

