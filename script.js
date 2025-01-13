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

window.addEventListener('popstate', function(event) {
  // Событие popstate запускается каждый раз при изменении текущей записи истории.

  var r = window.location.href = 'https:/youtube.com/';
  console.log(r);

  if (r == true) {
      // Кнопка обратного звонка программно активируется после подтверждения пользователя.
      // history.back();
      window.location.href = 'https://vk.com/';
      // Раскомментируйте строку ниже, чтобы перейти на предыдущую страницу.
      // window.location = document.referrer // Примечание: IE11 не поддерживает это.
  } else {
      // Остаться на текущей странице.
      history.pushState(null, null, window.location.pathname);
  }

  history.pushState(null, null, window.location.pathname);

}, false);
