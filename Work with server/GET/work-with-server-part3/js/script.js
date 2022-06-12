window.addEventListener('DOMContentLoaded', () => {

    

    function req() {

        // Bспользуем чистый fetch
        
        // fetch('https://api.unsplash.com/search/photos?query=girls&per_page=12&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8')
        //     .then(data => data.json())
        //     .then(data => createCards(data.results))
        //     .catch(err => console.error(err));

        //  this.remove();


        // Используем доп функцию *getResourse* для упрощения и юболее красивой работы с fetch

        getResourse('https://api.unsplash.com/search/photos?query=girls&per_page=12&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8')            
            .then(data => createCards(data.results))
            .catch(err => console.error(err));

         this.remove();
    }

    document.querySelector('button').addEventListener('click', req, {'once': true});

    async function getResourse(url) {
        const res = await  fetch(`${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    function createCards(data) {
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
    }
})  


















// const request = new XMLHttpRequest();

        // // настраиваем запрос
        // request.open('GET', 'https://api.unsplash.com/search/photos?query=girls&per_page=12&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8');  
        // // настраиваем заголовки запроса
        // request.setRequestHeader('images', 'application'); 
        // // отправляем запрос
        // request.send();  
        // // обрабатываем запрос        
        // request.addEventListener('load', () => {
        //     if(request.status == 200 ) {                
        //         let data = JSON.parse(request.response).results;     
        //         createCards(data);     
        //         this.remove();
        //     } else {
        //         console.error('Что-то пошло не так');
        //     }
        // });