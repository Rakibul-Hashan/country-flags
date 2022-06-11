const loadCountries = () => {
    // fetch('https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all')
    // fetch('https://api.countrylayer.com/v2/all?5dc76241d54ca2d34a815cda71f23baa')
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))


}

const displayCountries = (countries) => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    countries.forEach(country => {
        const countryDivContainer = document.getElementById('countries');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
            <img src="${country.flags.svg}" class="card-img-top" alt="${country.name.common}">
            <div class="card-meta">
                <h4>${country.name.common}</h4>
                <div onclick="loadCountriesByName('${country.name.common}')" class="button">
                    Details
                    <div></div>
                </div>
            </div>
        </div>
        `;
        countryDivContainer.appendChild(div);
        // console.log(country)
    });
}
const loadCountriesByName = (name) => {
    url = (`https://restcountries.com/v3.1/name/${name}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesByName(data[0]))
    // console.log(url)


}
const displayCountriesByName = (countryDetails) => {
    const countryDetailsDiv = document.getElementById('country-details');
    // const div = document.createElement('div');
    countryDetailsDiv.innerHTML = `
    <div class="container">
        <div class="interior">
            <a class="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
        </div>
        </div>
        <div id="open-modal" class="modal-window">
        <div>
            <a href="#" title="Close" class="modal-close">Close</a>
            <div>
                <img src="${countryDetails.flags.svg}" width="200" />
                <h5>${countryDetails.name.common}</h5>
                <p>Capital: ${countryDetails.capital[0]}</p>
            </div>
        </div>
        </div>
    </div>


        
    `;
    // countryDetailsDiv.appendChild(div);
    console.log(countryDetails)
}
loadCountries()
