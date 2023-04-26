import './css/styles.css';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo  = document.querySelector(".country-info");

input.addEventListener("input", fetchCountries);

function showCountryInfo(country) {
    countryInfo.innerHTML = `
    <h2>${country.name}</h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Languages: ${country.languages.join(", ")}</p>
    `;

};

function showCountryList(countries) {
    countryList.innerHTML = "";
    countries.forEach(showCountryInfo);
};