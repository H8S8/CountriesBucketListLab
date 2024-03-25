import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async() => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(
        () => {
            loadCountries();
        }, []
    )

    useEffect(
        () => {
            console.log(`countries: ${countries}`);
        }, [countries]
    )

    useEffect(
        () => {
            const newCountries = [];
            countries.forEach(country => {
                if(!visitedCountries.includes(country)){
                    newCountries.push(country);
                }
            })
            setCountries(newCountries);
        }, [visitedCountries]
    )

    const addVisitedCountry = (country) => {
        setVisitedCountries([...visitedCountries, country]);
    }

    return(
        <>
            <h1>Countries Bucket List</h1>
            <section id="countryLists">
                <div id="bucketListCountries" className="countryList">
                    <h2>Bucket List Countries</h2>
                    <CountryList countries={countries} addVisitedCountry={addVisitedCountry} countriedHaveBeenVisited={false}/>
                </div>
                <div id="visitedCountries" className="countryList">
                    <h2>Visited Countries</h2>
                    <CountryList countries={visitedCountries} countriesHaveBeenVisited={true}/>
                </div>
            </section>
        </>
    )
}

export default CountryContainer;