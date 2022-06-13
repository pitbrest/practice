// Тут используем устаревший метод XMLHttpRequest, для эмуляции работы сервера используем Json-server (https://www.npmjs.com/package/json-server)

window.addEventListener('DOMContentLoaded', () => {

    function req() {
        const request = new XMLHttpRequest();

        // настраиваем запрос
        request.open('GET', 'http://localhost:3000/people');  
        // настраиваем заголовки запроса
        request.setRequestHeader('Content-type', 'application/json; charset=utf8'); 
        // отправляем запрос
        request.send();

        // обрабатываем запрос  - 1 способ      
        // request.addEventListener('readystatechange', () => {
        //     if(request.readyState === 4 && request.status == 200 ) {
        //         // ответ от сервера
        //         let data = JSON.parse(request.response); 
        //         console.log(data);
        //     } else {
        //         console.error('Что-то пошло не так');
        //     }
        // });

        // обрабатываем запрос  - 2 способ   
        
        request.addEventListener('load', () => {
            if(request.status == 200 ) {                
                let data = JSON.parse(request.response); 

                // console.log(data);
                // выведем в html данные из полученного ответа сервера в виде карточек

                data.forEach(item => {
                    let card = document.createElement('div');
                    card.classList.add('card');

                    let icon;
                    if(item.sex === 'male') {
                        icon = './icons/mars.png';
                    } else {
                        icon = './icons/female.png';
                    }

                    card.innerHTML = 
                    `
                        <img src='${item.photo}' alt='photo'>
                        <div class='name'>${item.name} ${item.surname}</div>
                        <div class='sex'>
                            <img src=${icon} alt='male'>
                        </div>
                        <div class='age'>${item.age}</div>                    
                    `;
                    document.querySelector('.app').appendChild(card);               
                });
                console.log(this);
                this.remove();

            } else {
                console.error('Что-то пошло не так');
            }
        });

    }

    document.querySelector('button').addEventListener('click', req, {'once': true});

})  