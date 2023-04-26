import Notiflix from "notiflix";

// Функція для виконання HTTP-запиту на ресурс name і отримання масиву країн
function fetchCountries(name) {
    // Побудова URL для запиту
    const url = `https://restcountries.com/v3.1/name/${name}`;
    // Виконання fetch-запиту та повернення промісу з результатом
    return fetch(url)
        .then(resp => {
            // Перевірка статусу відповіді
            if (!resp.ok) {
               Notiflix.Notify.failure(`ERROR ${resp.status}`);
            }
            // Парсинг відповіді у форматі JSON та повернення результату    
            return resp.json();
            
        })
       
};

// Експорт функції fetchCountries як іменованого експорту

export { fetchCountries };

