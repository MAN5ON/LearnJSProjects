import React from "react";
import s from './hex.module.css'

function generateHex() {
    const hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexCode1 = ''
    let hexCode2 = ''
    let random_index = 0;

    for (let i = 0; i < 6; i++) {
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexCode1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexCode2 += hex_numbers[random_index];
    }

    document.body.style.background = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`
    document.getElementById('colorNow').textContent = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`
}


export const HexColors = () => {
    return (
        <div className={s.hexColors}>
            <label> Этот проект создан, чтобы продемонстрировать генерацию HEX цветов</label>
            <label> Нажми на кнопку, чтобы сгенерировать случайный линейный градиент</label>
            <button id='generateHex' className={s.generateHex} onClick={generateHex}> Сгенерировать </button>
            <label>Текущий цвет:</label>
            <label id='colorNow' className={s.colorNow}> #FFFFFF </label>
        </div>
    )
}
