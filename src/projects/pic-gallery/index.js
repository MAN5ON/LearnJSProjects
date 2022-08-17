import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import s from "./gallery.module.css"
import { imageData } from "./state";


export const PicGallery = () => {
    const [current, setCurrent] = useState(0)
    const length = imageData.length

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prewImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    console.log(current);

    if (!Array.isArray(imageData) || imageData.length <= 0) {
        return null;
    }


    return (
        <div className={s.galleryApp}>
            <label/>Галерея
            <FaArrowAltCircleLeft className={s.leftArrow} onClick={prewImage} />
            <FaArrowAltCircleRight className={s.rightArrow} onClick={nextImage} />
            <div id='images' className={s.images}>
                {imageData.map((item, index) => {
                    return (
                        <div className={s.activeImage} key={index}>
                            {index === current && <img className={s.image} src={require(`${item.image}`)} alt='gta' />}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}