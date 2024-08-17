// class Student {
//   constructor(name, age, mks) {
//     this.name = name;
//     this.age = age;
//     this.mks = mks;
//     this.stream = "";
//   }

//   allocation() {
//     if (this.mks >= 300) {
//       this.stream = "Science and Computer";
//     } else if (this.mks >= 200 && this.mks < 300) {
//       this.stream = "Commerce and Computer";
//     } else if (this.mks >= 75 && this.mks < 200) {
//       this.stream = "Arts and Animation";
//     } else {
//       this.stream = "Try Again";
//     }
//   }

//   print() {
// this.allocation();
//     console.log(
//       `Name: ${this.name}, Age: ${this.age}, Marks: ${this.mks}, Stream: ${this.stream}`
//     );
//   }
// }

// const ans = new Student("Vikas", 78, 987);

// ans.print();


Question -- 2 //


// class BubbleSorter {
//   constructor(arr) {
//     this.array = arr;
//   }
//   orginalArray() {
//     return this.array;
//   }

//   sortedArry() {
//     const arr = this.array;
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
// }

// const ans = new BubbleSorter([1, 5, 78, 2, 3]);
// console.log(ans.orginalArray());
