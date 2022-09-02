import React from "react";
import { BTN_ACTIONS, btns } from './state'
import s from './calc2.module.css'

export const RightCalculator = () => {
    return (
        <div className={s.calculator2}>
            <div className={s.outResult}>
                <div className={s.outResultHistory}>
                    prev
                </div>
                <div className={s.outResultNow}>
                    now
                </div>
            </div>

            <div className={s.calcBTNS}>
                {
                    btns.map((item, index) => (
                        <button key={index} className={s[item.class]}>
                            {item.display}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}