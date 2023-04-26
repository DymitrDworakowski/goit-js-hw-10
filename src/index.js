import './css/styles.css';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo  = document.querySelector(".country-info");

input.addEventListener("input", fetchCountries);

