const Country = ({country, addVisitedCountry, countriesHaveBeenVisited}) => {
    
    const onButtonClick = () => {
        addVisitedCountry(country)
    }

    const conditionalButton = () => {
        if(!countriesHaveBeenVisited){
            return <button onClick={onButtonClick}>Visited</button>
        }
        return <></>
    }
    
    return (
        <section className="country">
            <div>
                <h3>{country.name.common}</h3>
                <p>Population: {country.population}</p>
                {conditionalButton()}
            </div>
            <img className="flag" src={country.flags.png} />
        </section>
    )
}

export default Country;