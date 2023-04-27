import Notiflix from "notiflix";

// Функція для виконання HTTP-запиту на ресурс name і отримання масиву країн
function fetchCountries(name) {
    
    const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
    return fetch(url)
        .then(resp => {
    if (resp.status === 404) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return resp.json();
    },
);
}; 



export { fetchCountries };

