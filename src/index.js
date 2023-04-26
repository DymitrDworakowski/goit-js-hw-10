import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const BASE_URL = "https://restcountries.com/v3.1";
const ALL = "/all";
const END_POINT_NAME = "/name/{name}";
const input = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo  = document.querySelector(".country-info");

input.addEventListener("input", fetchCountries);

function fetchCountries(name) {
    const searchValue = input.value;
    fetch(`${BASE_URL}/name/${searchValue}`)
        .then(response => response.json()) // Парсинг відповіді у форматі JSON
        .then(data => {
            // Очистка списку країн перед відображенням нових результатів
            countryList.innerHTML = "";
            
            // Перебір отриманих даних та відображення їх на сторінці
            data.forEach(country => {
                const countryItem = document.createElement("li");
                countryItem.textContent = country.name.official;
                
                countryItem.addEventListener("click", () => {
                    displayCountryDetails(country);
                });
                countryList.appendChild(countryItem);
            });
        })

        .catch(error => {
            console.error("Помилка отримання даних:", error);
        });
}
function displayCountryDetails(country) {
    countryInfo.innerHTML = `
    <h2>${country.name.official}</h2>
    <p><strong>Столиця:</strong> ${country.capital}</p>
    <p><strong>Населення:</strong> ${country.population}</p>
    <p><strong>Прапор:</strong></p>
    <img src="${country.flags.svg}" alt="${country.name.official} flag"/>
    <p><strong>Мови:</strong> ${country.languages.map(lang => lang.name).join(", ")}</p>
`
}
