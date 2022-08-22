import React from 'react'
import { Link } from 'react-router-dom';



function CardComic(
    {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }
)
{
    const ImgUrl =` /assets/${id}.jpg`;
    return (

        <div className='col-6'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                    <img src={ImgUrl} className= "card-img" alt="Nohay imagen ps" />
                    </div>
                    <div className='col-8'>
                        <h6 className='card-title'>{superhero}</h6>
                        <p className='card-text'>{alter_ego}</p>
                        <p>{characters==alter_ego?'':characters}</p>
                        <Link to={`/heroes/${id}`}>Mas..</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardComic