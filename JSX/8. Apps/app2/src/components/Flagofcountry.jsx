import React from 'react';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import './Flagofcountry.css'

function Flagofcountry(){
    var params = useParams();
    const [country, setCountry] = React.useState()
    {console.log(params)}
    React.useEffect(() => {
        fetch(`https://restcountries.com/v2/alpha/${params.ac}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[params.ac]);
    return (
            <div  className="frag">
                {
                    country && (
                            <Fragment>
                                <h1>{country.name}</h1>
                                <img src={country.flag} width="300px"></img>
                            </Fragment>
                        
                    )
                }
            </div>
    )
}

export default Flagofcountry;