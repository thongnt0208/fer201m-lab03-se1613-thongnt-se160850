import { useParams } from 'react-router-dom'
import { FilmsList } from '../lists/ListOfFilms'
import React from 'react'

export default function Details() {
    const userName = useParams();
    const film = FilmsList.find(obj => {
        return obj.id == userName.id;
    });
    return (
        <div className='detail-container'>
            <div className='film-card'>
                <div className='badge'><h1>{film.title}</h1></div>
                <div className='film-tumb'>
                    <img src={`${film.img}`} alt='a film thumbnail' />
                </div>
                <div className='film-details'>
                    <h4>{film.club}</h4>
                    <p>{film.info}</p>
                </div>
            </div>
        </div>
    )
}


