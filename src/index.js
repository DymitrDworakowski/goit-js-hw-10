import './css/styles.css';  
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const input = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo  = document.querySelector(".country-info");

input.addEventListener("input", debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
    const inputValue = evt.target.value.trim();
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";

if (inputValue !=="") {
    fetchCountries(inputValue)
      .then(data => {
       if (2 <= data.length  || data.length <=10){
        const markup = data.map(country => 
            `
            <li class="list-group-item" clas = "flag" src =${country.flag.png} width = 80px> ${country.name.official}</li>
            `
        ).join(" ");
        countryList.insertAdjacentHTML('beforeend',markup);
       }
      
       if (data.length > 10){
        Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
};
console.log(data);  

if (data.length === 1) {
    const countryI = data.map(country => 
        `<h2><img clas = "flag" src=${
            country.flags.png
          } width = 80px>  ${country.name.common} </h2>
          <p>Capital: ${country.capital}</p>
          <p>Population: ${country.population}</p>
          <p>Languages: ${Object.values(country.languages)}</p>
          <p>Region: ${country.region}</p>`
            ).join('');
            countryList.insertAdjacentHTML('beforeend',countryI);
}
}).catch(error => {
    // Обробка помилок
    Notiflix.Notify.failure('Oops, there is no country with that name');
});
}
};




        // function showCountryInfo(country) {
        //     countryInfo.innerHTML = `
        //     <h2>${country.name}</h2>
        //     <p>Capital: ${country.capital}</p>
        //     <p>Population: ${country.population}</p>
        //     <p>Region: ${country.region}</p>
        //     <p>Languages: ${country.languages.join(", ")}</p>
        //     `;
        
        // };
        