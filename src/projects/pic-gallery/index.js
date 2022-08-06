import React from "react";
import s from "./gallery.module.css"

export const PicGallery = () => {
    return (
        <div className={s.galleryApp}>
            <label />Галерея
            <img src="./photos/1.jpg" alt="photo1"/>
        </div>
    )
}