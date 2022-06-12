window.addEventListener('DOMContentLoaded', () => {

    function req() {
        const request = new XMLHttpRequest();

        // настраиваем запрос
        request.open('GET', 'https://api.unsplash.com/search/photos?query=girls&per_page=12&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8');  
        // настраиваем заголовки запроса
        request.setRequestHeader('images', 'application'); 
        // отправляем запрос
        request.send();  
        // обрабатываем запрос        
        request.addEventListener('load', () => {
            if(request.status == 200 ) {                
                let data = JSON.parse(request.response).results; 
                
                // выведем в html данные из полученного ответа сервера в виде карточек

                for(let item of data) {                     
                    
                    let card = document.createElement('div');
                    card.classList.add('card');  
                    let img = document.createElement('img'); 
                    img.src = item.urls.regular;  
                    img.alt = 'photo';  
                    img.style.marginBottom = '10px';                   
                    let altDescription = '';
                    if(item.alt_description) {
                        altDescription = item.alt_description;
                    }
                    let description = '';
                    if(item.description) {
                        description = item.description;
                    }
                    let subTitle = document.createElement('p');
                    subTitle.textContent = altDescription;
                    subTitle.style.textAlign = 'center';
                    let title = document.createElement('p');
                    title.textContent = description;
                    title.style.textAlign = 'center';
                    

                    card.appendChild(img);
                    card.appendChild(subTitle);
                    card.appendChild(title);
                    
                    document.querySelector('.app').appendChild(card);               
                };
                console.log(this);
                this.remove();

            } else {
                console.error('Что-то пошло не так');
            }
        });

    }
    document.querySelector('button').addEventListener('click', req, {'once': true});
})  