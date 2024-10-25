// let h1 = document.querySelector("h1");

// changeColor("red", 1000, () => {
//   changeColor("yellow", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("purple", 1000);
//     });
//   });
// });

// // function saveToDB(data, success, failure) {
//   //   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   // //   console.log(internetSpeed);

//   //   if (internetSpeed > 4) {
//     //     success();
//     //   } else {
//       //     failure();
//       //   }
//       // }

//       // saveToDB(
//         //   "Sai",
//         //   () => {
// //     console.log("success: data is saved");
// //     saveToDB(
//   //       "Vamsi",
//   //       () => {
//     //         console.log("success2 : data is saved");
//     //         saveToDB(
//       //           "Sirikonda",
//       //           () => {
//         //             console.log("success3 : data is saved");
//         //           },
//         //           () => {
//           //             console.log("failure3 : data is not saved");
//           //           }
//           //         );
//           //       },
//           //       () => {
//             //         console.log("failure2: data is not saved");
//             //       }
//             //     );
//             //   },
//             //   () => {
//               //     console.log("failure: data is not saved");
//               //   }
//               // );

//               function saveToDB(data){

//                 return new Promise((resolve, reject)=>{
//                   let internetSpeed = Math.floor(Math.random() * 10)+1;
//                   if(internetSpeed > 4 ){
//                     resolve("Data is saved");
//                   } else{
//                     reject("Weak connection, Data is not saved!");
//                   }
//                 })
//               }

//               // let request = saveToDB("Sai Vamsi");

//               // request.then(()=>{
//                 //   console.log("Sai Vamsi is accepted!")
//                 // })
//                 // .catch(()=>{
//                   //   console.log("Request not accepted!");
//                   // })

//                   saveToDB("Bombilishke")
//                   .then(()=>{
//                     console.log("first statement executed");
//                     return saveToDB("Bomb");
//                   })
//                   .then(()=>{
//                     console.log("second statement executed");
//                   })
//                   .catch((e)=>{
//                     console.log("promise is rejected!");
//                     console.log(e);
//                   });

// function changeColor(color, delay) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   })
// }

// request = changeColor("red",1000)

// request
// .then(()=>{
//   console.log("Color Changed to red");

//   return changeColor("yellow",5000);
// })
// .then(()=>{
//   console.log("color changed to yellow");

//   return changeColor("green",1000);

// })
// .then(()=>{
//   console.log("color changed to green");
// })
// .catch((e)=>{
//   console.log(e);
// })

// async function greet() {
//   // throw("some random error");
//   return "hello";
// }

// greet()
// .then(()=>{
//   console.log("greeted successfully");
// })
// .catch(()=>{
//   console.log("not greeted!");

// })

getNum = () => {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      console.log(num);
      resolve("number found");
    }, 5000);
  });
};

demo = async ()=>{
   await getNum();
   await getNum();
   await getNum();
}
