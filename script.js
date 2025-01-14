// window.addEventListener(
//   'visibilitychange', 
//   function() { 
//       if (document.hidden === true) return;
//       console.log('Вернулся');
//   }, 
//   false
// );

// window.onhashchange = function() {
//   console.log('Вернулся');
// }

// window.addEventListener('popstate', function(event) {
//   // Событие popstate запускается каждый раз при изменении текущей записи истории.

//   // var r = confirm("You pressed a Back button! Are you sure?!");

//   if (event == true) {
//     window.location.href="https://vk.com/"
//     console.log(window.location.replace);
//       // Кнопка обратного звонка программно активируется после подтверждения пользователя.
//       // history.back();
//       // Раскомментируйте строку ниже, чтобы перейти на предыдущую страницу.
//       // window.location = document.referrer // Примечание: IE11 не поддерживает это.
//   } else {
//       // Остаться на текущей странице.
//       history.pushState(null, null, window.location.pathname);
//     console.log(history.pushState(null, null, window.location.pathname));
//   }

//   history.pushState(null, null, window.location.pathname);

// }, false);

function pushStateWithSource(state, title, url, source) {
  history.pushState({ ...state, source }, title, url);
}

// Задаём направление как 'назад' или 'вперёд'
// Это можно сравнить с тем, как если бы вы дали пользователю компас
pushStateWithSource({}, '', 'https://vk.com/', 'back');

// Отслеживаем событие popstate
window.addEventListener('popstate', function(event) {
  // По событию можем определить, в каком направлении двигался пользователь
  if(event.state?.source === 'back') {
    console.log(`Переход ${event.state.source}`); // Выведет 'Переход назад' или 'Переход вперёд'
  }
});
