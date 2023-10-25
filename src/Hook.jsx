import React, { useEffect, useState } from 'react'

const Hook = () => {
    const [bankData, setBankData] = useState ([])

    const fetchBankData = () => {
        fetch('https://nigerianbanks.xyz/')                        //fetching api
            .then((response) => response.json())                     //converting response to json
            .then((data) => setBankData(data))                          //updating component data
            .catch((err) => console.log(err))                            //catching error                     

    }

    useEffect(() => {
        fetchBankData()
    }, [])



    return (
        <div className='d-flex flex-wrap gap-5 justify-content-center' >
            {
                bankData.map((bd,index) => (
                    <div key={index} class="card" style={{width:'15rem'}}>
                    <img src={bd.logo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{bd.name}</h5>
                            <p class="card-text">{bd.code}</p>
                            <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                        </div>
                </div>
                ))
            }
        </div>
    )
}

export default Hook