import React, { useState } from "react";
import s from "./calc.module.css"
import { calcState } from "./state";

export const Calculator = () => {
    const [expr, setExpr] = useState('')
    console.log(calcState.operands);


    return (
        <div className={s.calculator}>
            <span id='outField' className={s.outField}> {expr} </span>
            <div className={s.buttons}>
                <div className={s.operands}>
                    {Object.values(calcState.operands).map( value => <button id={value} className={s.operand} onClick={() => setExpr(expr + value)}>{value}</button>)}
                </div>
                <div className={s.operators}>
                    {Object.entries(calcState.operators).map(([key, value]) => <button id={key} className={s.operator} onClick={() => setExpr(expr + value)}>{value}</button>)}
                </div>
                <button className={s.clear} onClick={() => setExpr('')}>C</button>
                <button className={s.equal} onClick={() => setExpr(eval(expr))}>=</button>
            </div>
        </div>
    )
}
