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

  // var r = confirm("You pressed a Back button! Are you sure?!");

  if(event.state){
    var r = confirm("You pressed a Back button! Are you sure?!");
     history.pushState(null, null, "https://vk.com");
    // window.location.href="https://vk.com/"
      // Кнопка обратного звонка программно активируется после подтверждения пользователя.
      // history.back();
      // Раскомментируйте строку ниже, чтобы перейти на предыдущую страницу.
      // window.location = document.referrer // Примечание: IE11 не поддерживает это.
  } else {
      // Остаться на текущей странице.
      history.pushState(null, null, window.location.pathname);
  }

  // history.pushState(null, null, window.location.pathname);

});

