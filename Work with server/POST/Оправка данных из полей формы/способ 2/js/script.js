// Способ 2 - используя fetch

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
        
        getResource('https://jsonplaceholder.typicode.com/posts/', data)
            .then(data => console.log(data))
            .catch(err => console.error(err));
            
    }
    // Передаем в req эвент(через фу-ю обертку), чтобы выше могли отменить стандартное поведение кнопки сабмит, т.е. перезагрузку страницы
    form.addEventListener('submit', (e) => req(e), {'once': true});  
    
    
    async function getResource (url, data) {
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!res.ok) {
            throw new Error(`Could not  fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
})  


// Для передачи данных из форм используется интерфейс FormData (https://developer.mozilla.org/ru/docs/Web/API/FormData).

// Источник инфо - https://www.youtube.com/watch?v=4HVmj5LffgM&t=925s