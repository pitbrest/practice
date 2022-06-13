// Способ 1 - используя устаревший метод XMLHttpRequest()

window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append('id', Math.random());

        // formData нельзя напрямую перевести в формат JSON, потому делаем следующее -        
        let obj = {};
        formData.forEach((value, key) => { 
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        const request = new XMLHttpRequest();        
        request.open('POST', 'https://jsonplaceholder.typicode.com/posts/');          
        request.setRequestHeader('Content-type', 'application/json; charset=utf8');     
        request.send(json);    
        
        request.addEventListener('load', () => {
            if(request.status == 200 ) {                
                let data = JSON.parse(request.response);               
                console.log(data);
            } else {
                console.error('Что-то пошло не так');
            }
        });        
    }
    // Передаем в req эвент(через фу-ю обертку), чтобы выше могли отменить стандартное поведение кнопки сабмит, т.е. перезагрузку страницы
    form.addEventListener('submit', (e) => req(e), {'once': true});   
})  


// Для передачи данных из форм используется интерфейс FormData (https://developer.mozilla.org/ru/docs/Web/API/FormData).

// Источник инфо - https://www.youtube.com/watch?v=4HVmj5LffgM&t=925s