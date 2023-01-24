/*
Создайте объект riddles. 
Добавьте свойства question, answer.
создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer.
Добавьте свойство hints (содержащее 2 подсказки).
Если пользователь ответил неверно, ему даётся одна подсказка.
Если пользователь ответил второй раз неверно, даётся вторая подсказка.
Если ответил неверно, то в консоль выводится текст: “вы проиграли”.
*/


const riddles = {};  // создание объекта
riddles.question; // добавление ключа в объект
riddles.answer = "водопровод";// добавление ключа и значения в объект
riddles.hints = ["подсказка первая - коммуникации в доме.", "подсказка вторая - можно включить и выключить.", "Вы проиграли!"]; //добавление ключа и массива
   
riddles.askQuestion = (question) => {     //добавление функции(метода) в объект
   for (let i = 0; i < riddles.hints.length; i++) {
      riddles.question = (prompt("Загадка: речка спятила с ума — по домам пошла сама?")).toLowerCase();
      if (riddles.answer === riddles.question) {
         alert('Верно, Вы выиграли!');
         break;
         } else if (riddles.answer !== riddles.question) {
            alert(`Неверно, ${riddles.hints[i]}`);
      }
   }  
};

console.log('riddles =', riddles);
riddles.askQuestion();
