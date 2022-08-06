import React from "react";
import s from './quotes.module.css'
import state from './state.js'


const generateQuote = () => {
    let author = state.quotes[Math.floor(Math.random() * state.quotes.length)]

    document.getElementById('textQuotes').textContent = `"${author.quote}"`
    document.getElementById('author').textContent = `- ${author.name}`
}


export const RandomQuotes = () => {

    return (
        <div className={s.randomQuotes}>
            <label className={s.textQuotes} id='textQuotes' />
            <label className={s.author} id='author' />
            <button className={s.generateQuote} onClick={generateQuote}>Получить цитату</button>
        </div>
    )
}