import { useState } from "react";
import React from 'react';
import './Countries.css'
import Flagofcountry from "./Flagofcountry";
import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

function Countries(){
    const [countries,setCountries] = React.useState([])
    React.useEffect(() => {
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=>setCountries([...data]))
    },[]);
    return <div className="coursemain">
                <div className="countriescoursesubdiv">
                    {
                        countries.map((c,i) => {
                            return <li>
                                        <Link to={`/countries/${c.alpha2Code}`}>{c.name}</Link>
                                    </li>
                        })
                    }
                </div>
                <div className="flagscoursesubdiv">
                    <Outlet></Outlet>
                </div>
            </div>
}

export default Countries;
