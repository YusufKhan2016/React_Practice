
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

const Fetch = () => {
    const [description, setDescription] = useState(null);
    const [loading, setloading] = useState(true);
    
    useEffect(() => {
        try {

            const fetchDescription = async () =>{
                const res = await axios.get("https://server.zaiqabd.com/api/category");
                
                setDescription(res.data);
            }

            fetchDescription();
            
        } catch (error) {
            console.error(error,"there is an error");
        } finally{
            setInterval(() => {
                setloading(false)
            }, 2000);
        }
    
        
    }, [])

    console.log(description);
    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>getting data in the basic fetch way</div>
            <div>{JSON.parse(description[0].description)}</div>
        </>
    )
}

export default Fetch