// Имитируем отправляемый контент, для этого создаем свой пост для отправки

let post = {
        name: 'Alex',
        surname: "Piatrou",
        id: 99
}

// Описываем post запрос

async function putResourse(url, post) {  

    const res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();    
 };

 putResourse('https://jsonplaceholder.typicode.com/posts/', post)            
            .then(data => console.log(data))
            .catch(err => console.error(err));



// Для передачи данных из форм используется интерфейс FormData (https://developer.mozilla.org/ru/docs/Web/API/FormData).

// Источник инфо - https://www.youtube.com/watch?v=4HVmj5LffgM&t=925s