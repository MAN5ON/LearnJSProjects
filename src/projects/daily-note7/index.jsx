import React from "react";
import s from "./daily.module.css"

export const DailyNote = () => {
    return (
        <div className={s.appWrapper}>
            <div className={s.note}>
                <input placeholder="Заголовок" />
                <span className={s.bodyCase}>
                    <input />
                    <button> - </button>
                </span>
                <button> + </button>
            </div>
            <button> Save </button>
        </div>
    )
}