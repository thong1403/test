// bài 1
// let a = prompt("nhập vào một chuỗi bất kì");
// let b = "";
// for(let i = a.length-1; i >= 0;i=i-1){
// b =b + a[i];
// }console.log(`"${b}"`);

//bài 2
// let a = prompt("Viết chuỗi kí tự ngăn cách nhau bởi dấu cách").toLowerCase().split(" ");
// let b = " "
// for (let i = 0; i <= userInput.length-1; i++){
//   b = b + a[i].substring(0,1).toUpperCase() + a[i].substring(1).toLowerCase()+ " "
// }console.log(b);

//bài 4
// a = [5, 2, 3, 4, 1];
// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] > a[j]) {
//             temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;
//         }
//     }
// }
// console.log("Sắp xếp lại thành =>", a);

//bài 3
// let a= [ 1,2,3,4,5,5,3,5,6,7,4]
// let miniA = [...new Set(a)];

// console.log(miniA);

//bài 5
// let a = ["chung", "an"];
// let b = prompt("mời bạn nhập vào c/r/u/d/e");
// if (b === "c") {
//     let c = prompt("nhập vào tên nhân viên bạn muốn thêm")
//     a.push(c);
//     for (let i = 0; i <= a.length - 1; i = i + 1) {
//         console.log(i + 1, a[i]);
//     }

// } else if (b === "r") {
//     for (let i = 0; i <= a.length - 1; i = i + 1) {
//         console.log(i + 1, a[i]);
//     }
// } else if (b === "u") {
//     let d = prompt("nhập nội dung muốn upđate");
//     let vitri = prompt("nhập vị trí muốn update");
//     a[vitri] = d
//     for (let i = 0; i <= a.length - 1; i = i + 1) {
//         console.log(i + 1, a[i]);
//     }
// } else if (b === "d") {
//     let vitri = Number(prompt("nhập vị trí muốn delete "));
//     a.splice(vitri);
//     for (let i = 0; i <= a.length - 1; i = i + 1) {
//         console.log(i + 1, a[i]);
//     }
// } else if(b === "e"){
//     console.log("cảm ơn và tạm biệt")
// }

//bài 7
