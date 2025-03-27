
import React from 'react'
import { useState,useEffect } from 'react'

const Fetch = () => {
    const [description, setDescription] = useState(null);
    const [loading, setloading] = useState(true);
    
    useEffect(() => {
        try {

            const fetchDescription = async () =>{
                const res = await fetch("https://server.zaiqabd.com/api/category");
                const response = await res.json();
                setDescription(response);
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