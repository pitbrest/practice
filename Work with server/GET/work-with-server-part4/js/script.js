window.addEventListener('DOMContentLoaded', () => {

    function req() {

        // Используем библиотеку - axios
    
        getResourse('https://api.unsplash.com/search/photos?query=girls&per_page=12&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8')   

            // тут дописали data из за отличного от fetch представления данных
            .then(data => createCards(data.data.results))  
            .catch(err => console.error(err));

         this.remove();
    }

    document.querySelector('button').addEventListener('click', req, {'once': true});

    async function getResourse(url) {
        const res = await  axios(`${url}`);

        if(res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        // тут убираем JSON() т.к. библиотека автоматически конвертирует файлы формата JSON
        return await res;
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