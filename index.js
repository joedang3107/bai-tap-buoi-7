// viết chương trình kiểm tra n có phải số nguyên tố hay không?
//các bước:
// - kiểm tra < 2
// - kiểm tra  = 2
// vòng lặp > 2, n-1; index++

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
// or dùng while
// let n = 15
// let index = 1
// while (index<n) {
//   if (index%2!=0) {
//     console.log(index);
//   }
//   index++
// }

// 3. Viết chương trình in ra các số chẳn từ 1 đến n?
// let n = 10;
// for (let index = 2; index < n; index++) {
//     if (index%2!=0) continue;
//       console.log(index);
// }

// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// function test_prime(n) {
//   if (n < 2) {
//     check = false;
//   } else {
//     for (let index = 2; index <= Math.sqrt(n); index++) {
//       // từ 2 đến căn n ko có số mà n chia hết
//       if (n % index == 0) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }
// console.log(test_prime(123));
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

// while (index <= 5) {
//   if (index % 2 != 0) {
//     tong += index;
//   }
//   index++;
// }
// console.log(tong);

// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// VD1: n=1234, output: ‘NO’
// VD2: n=135, output: ‘YES
// let inputElement3 = document.querySelector("#le");
// let btn3 = document.querySelector(".btn-3");
// let message3 = document.querySelector(".message-3");

// function checkSoLe(n) {
//   let check = true;
//   while (n > 0) {
//     n = parseInt(n / 10);
//     a = n % 10;
//     if (a % 2 == 0) {
//       check = false;
//     }
//   }
//   if (check == true) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// checkSoLe(13);

// btn3.onclick = function () {
//   checkSoLe(inputElement3.value);
// };

// palindrome(135)
// 9.5 đảo ngược 1 số trong JS
// let number = 12345;
// let reversed_number = 0;
// while (number>0) {
// 	let digit = number % 10;
// 	reversed_number = reversed_number*10 + digit;
// 	number = parseInt(number/10);
// }
// console.log(reversed_number);

// 10. In bảng cửu chương ra màn hình?
// Output:
// 2x1=2
// 2x2=4
// 2x3=6
// 2x4=8
// 2x5=10
// 2x6=12
// 2x7=14
// 2x8=16
// 2x9=18
// 2x10=20
// 3x1=3
// 3x2=6
// …..
// 9x9=81
// 9x10=90

// for (let i=2; i<10; i++) {
//     for (let j=1; j<10; j++) {
//         console.log(`${i} x ${j} =`,i*j);
//     }
// }

// kiểm tra 1 số có phải số nguyên tố hay không?
// let check = true
// let n = 2

// if (n < 2 || n % 2 == 0 && n != 2) {
//     check = false
// } else if (n == 2) {
//     check = true
// }
// else {
//     for (let i = 3; i < Math.sqrt(n); i+=2) {
//         if (n % i == 0) {
//             check = false
//             break
//         }

//     }
// }

// if (check == true) {
//     console.log('là số nguyên tố');
// } else {
//     console.log('không phải số nguyên tố');
// }

// kiểm tra 1 số có phải toàn số lẻ hay không?
// function checkSoLe(n) {
//   while (n > 0) {
//     n /= 10;
//     a = n % 10;
//     if (a % 2 == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// if (checkSoLe(2)) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
let inputElement3 = document.querySelector("#tongsole");
let btn3 = document.querySelector(".btn-3");
let message3 = document.querySelector(".message-3");

function tongSole(n) {
  let tong = 0;
  let index = 1;
  while (index <= n) {
    if (index % 2 != 0) {
      tong += index;
    }
    index++;
  }
  message3.innerText = tong;
}

btn3.onclick = function () {
  tongSole(inputElement3.value);
};

// kiểm tra số nguyên tố
let inputElement1 = document.querySelector("#prime");
let btn1 = document.querySelector(".btn-1");
let message1 = document.querySelector(".message-1");

function prime(n) {
  let check = true;
  if (n < 2) {
    check = false;
  } else {
    for (let index = 2; index < n - 1; index++) {
      // n-1 vì n lúc nào cũng chia hết cho chính nó
      if (n % index == 0) {
        check = false;
      }
    }
  }
  if (check == true) {
    message1.innerText = "là số nguyên tố";
  } else {
    message1.innerText = "không phải số nguyên tố";
  }
}

btn1.onclick = function () {
  prime(inputElement1.value);
};

// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n=1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’

let inputElement2 = document.querySelector("#palindrome");
let btn2 = document.querySelector(".btn-2");
let message2 = document.querySelector(".message-2");

// console.log(inputElement);
function palindrome(n) {
  let final = 0; //luu bien
  temp = n; //luu bien
  while (n > 0) {
    a = n % 10;
    n = parseInt(n / 10);
    final = final * 10 + a; // dao ngc so da cho
  }
  if (final == temp) {
    message2.innerText = "là số đối xứng";
  } else {
    message2.innerText = "không phải số đối xứng";
  }
}

btn2.onclick = function () {
  palindrome(inputElement2.value);
};

// in bảng cửu chương ra màn hình

let btn4 = document.querySelector(".btn-4");
let message4 = document.querySelector(".message-4");

function multiplication() {
  let result = "";
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      tich = i * j + "<br>";
      result += `${i} x ${j} = ${tich}`;
      message4.innerHTML = result;
    }
    // debugger
  }
}

btn4.onclick = function () {
  multiplication();
};

// in ra số nguyên tố từ 1 đến n

let inputElement5 = document.querySelector("#prime-value");
let btn5 = document.querySelector(".btn-5");
let message5 = document.querySelector(".message-5");

function print_primes_till_N(N) {
  // Declare the variables
  let i, j, flag;

  // Print display message
  // document.write(
  // "Prime numbers between 1 and " + N + " are:<br>"
  // );

  // Traverse each number from 1 to N
  // with the help of for loop
  for (i = 1; i <= N; i++) {
    // Skip 0 and 1 as they are
    // neither prime nor composite
    if (i == 1 || i == 0) continue;

    // flag variable to tell
    // if i is prime or not
    flag = 1;

    for (j = 2; j <= i / 2; ++j) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    // debugger
    // flag = 1 means i is prime
    // and flag = 0 means i is not prime
    if (flag == 1) message5.textContent += `${i} `;
  }
}

btn5.onclick = function () {
  print_primes_till_N(inputElement5.value);
};

// kiểm tra n có phải toàn số lẻ tạo thành hay không?

let inputElement6 = document.querySelector("#odd-combined");
let btn6 = document.querySelector(".btn-6");
let message6 = document.querySelector(".message-6");

function checkSoLe(n) {
  let check = true;
  while (n>0) {
      if ((n % 10) % 2 == 0) {
          check = false;
          break;
      }
      n=n/10;
  }
  if (check == true) {
    message6.innerText = 'Yes'
  }
  else {
    message6.innerText = 'No'
  }
}

btn6.onclick = function () {
  checkSoLe(inputElement6.value)
}
