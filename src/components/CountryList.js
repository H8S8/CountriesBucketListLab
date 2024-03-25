import Country from "./Country";

const CountryList = ({countries, addVisitedCountry, countriesHaveBeenVisited}) => {
    
    const mappedCountries = countries.map(country => {
        return <Country country={country} key={country.name.common} addVisitedCountry={addVisitedCountry}
        countriesHaveBeenVisited={countriesHaveBeenVisited}/>
    })
    
    return(
        <div>
            {mappedCountries}
        </div>
    )
}

export default CountryList;