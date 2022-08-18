import React, { useState } from "react";
import s from "./calc.module.css"

export const Calculator = () => {
    const [expr, setExpr] = useState('')
    
    return (
        <div className={s.calculator}>
            <span id='outField' className={s.outField}> {expr} </span>
            <div className={s.buttons}>
                <button className={s.operand} onClick={() => setExpr(expr + 1)}>1</button>
                <button className={s.operand} onClick={() => setExpr(expr + 2)}>2</button>
                <button className={s.operand} onClick={() => setExpr(expr + 3)}>3</button>
                <button className={s.operator} onClick={() => setExpr(expr + '+')}>+</button>
                <button className={s.operand} onClick={() => setExpr(expr + 4)}>4</button>
                <button className={s.operand} onClick={() => setExpr(expr + 5)}>5</button>
                <button className={s.operand} onClick={() => setExpr(expr + 6)}>6</button>
                <button className={s.operator} onClick={() => setExpr(expr + '-')}>-</button>
                <button className={s.operand} onClick={() => setExpr(expr + 7)}>7</button>
                <button className={s.operand} onClick={() => setExpr(expr + 8)}>8</button>
                <button className={s.operand} onClick={() => setExpr(expr + 9)}>9</button>
                <button className={s.operator} onClick={() => setExpr(expr + '*')}>*</button>
                <button className={s.dot} onClick={() => setExpr(expr + '.')}>.</button>
                <button className={s.operand} onClick={() => setExpr(expr + 0)}>0</button>
                <button className={s.clear} onClick={() => setExpr('')}>C</button>
                <button className={s.operator} onClick={() => setExpr(expr + '/')}>/</button>
                <button className={s.equal}>=</button>
            </div>
        </div>
    )
}