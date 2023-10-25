import React, { useEffect, useState} from 'react'

const Photo = () => {

    const[photos, setPhotos] = useState([])

    const fetchPhoto=() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((ans)=>ans.json())
        .then((photo)=> setPhotos(photo) )

    }





    useEffect(()=>{ fetchPhoto()}, [])





  return (
<div className='d-flex flex-wrap gap-5 justify-content-center' >
    {
        photos.map((p,index) => (
            <div key={index} class="card" style={{width:'15rem'}}>
            <img src={p.thumbnailUrl} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.id}</p>
                    <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                </div>
        </div>
        ))
    }
</div>
  )
}

export default Photo