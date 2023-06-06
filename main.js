// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data); 
//   }
   
//   getData();


// function getData() {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//       xhr.onload = () => resolve(xhr.responseText);
//       xhr.onerror = () => reject(xhr.statusText);
//       xhr.send();
//     });
//   }
   
//   getData().then((data) => {
//     console.log(data); // данные выведутся в консоль после загрузки с сервера
//   }).catch((error) => {
//     console.error(error); // обработка возможной ошибки
//   });



// async function getData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       console.log(data); // данные выведутся в консоль после загрузки с сервера
//     } catch (error) {
//       console.error(error); // обработка возможной ошибки
//     }
//   }
   
//   getData();

// try {
//     const result = someFunctionThatMightThrowAnError();
//     console.log(result);
//   } catch (error) {

//     console.error(error);
//   }

try {
    // попытка выполнить код, который может вызвать ошибку
    const result = someFunctionThatMightThrowAnError();
    console.log(result);
  } catch (error) {
    // обработка ошибки
    console.error(error);
  } finally {
    // код, который будет выполнен независимо от того, произошла ли ошибка или нет
    console.log('Конец');
  }
  