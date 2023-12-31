import React, { useState } from 'react'
import cl from '../styles/Gallary.module.css';
import cls from '../assets/cls.jpg';
import money from '../assets/money.jpg';
import sport from '../assets/sport.jpg';
import sport2 from '../assets/sport2.jpg';
import olya from '../assets/olya.jpg';
import nails from '../assets/nails.jpg';
import lic from '../assets/lic.jpg';
import flower from '../assets/flower.jpg';
import happy from '../assets/happy.jpg';

export default function Gallary() {
    const items = [
        {image: olya, text: "Поздравляю тебя с новым годом💫, желаю тебе в этом году..."},
        {image: money, text: "🤑Больше денег для своих хотелок💸"},
        {image: sport, text: "Чтоб была мотивация заниматься спортом💪"},
        {image: sport2, text: "ЕЩЕ БОЛЬШЕ МОТИВАЦИИ!!!"},
        {image: nails, text: "Самых красивых когтей"},
        {image: lic, text: "Получить желанные права в этом году как можно скорее"},
        {image: cls, text: "Сесть за руль этого монстра"},
        {image: flower, text: "Чтоб оставалась такой же прекрасной😍"},
        {image: happy, text: "И в конце концов больше добра и позитива в этом году❤️"},
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const prev = () => {
        if (currentImage !== 0) {
            setCurrentImage(currentImage - 1)
        }
    }

    const next = () => {
        if (currentImage !== items.length - 1) {
            setCurrentImage(currentImage + 1)
        }
    }

    const Buttons = () => {
        return (
            <div className={cl.buttons}>
                {currentImage !== 0 && <button onClick={prev}>Назад</button>}
                {currentImage !== items.length - 1 && <button onClick={next}>Вперед</button>}
            </div>
        );
    }

  return (
    <div className={cl.content}>
        <div className={cl.gallary}>
            <div className={cl.item}>
                <div className={cl.image}>
                    <img src={items[currentImage]?.image} alt="" />
                </div>
                <div className={cl.text}>{items[currentImage]?.text}</div>
            </div>
            <Buttons></Buttons>
        </div>
    </div>
  )
}
