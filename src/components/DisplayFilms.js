/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import { useState } from 'react'//hook
import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'

export default function displayFilms({ films }) {
    const [filmHook, setFilm] = useState([]);
    const { theme, toggle, dark } = useContext(ThemeContext)
    console.log(theme.backgroundColor);
    return (
        <div className="films-container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div class='switch-mode-container'>
                <a className='switch-mode' href='#switch' onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid="toggle-theme-btn">
                    Switch to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>
            {films.map((films) => (
                <div className="card">
                    <div className="thumbnail">
                        <img src={films.img} alt='a films thumbnail'></img>
                    </div>
                    <div className="content">
                        <h3>{films.title}</h3>
                        <p>{films.rate}</p>
                        <p>
                            <button onClick={() => {
                                setFilm(films);
                            }}>
                                <a href='#popup-container' id='openPopUp'>Detail</a>
                            </button>
                        </p>
                    </div>
                </div>
            ))}
            <div id='popup-container' className='overlay'>
                <div className='popup'>
                    <img src={filmHook.img} alt='a man soccer player'></img>
                    <h2>{filmHook.name}</h2>
                    <a className='close' href='#close'>&times;</a>
                    <div className='content'>
                        {filmHook.info}
                    </div>
                    <button className='more-detail-btn'>
                        <Link to={`detail/${filmHook.id}`}>More Detail</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}