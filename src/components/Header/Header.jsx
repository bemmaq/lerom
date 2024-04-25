import React, { useState } from "react";
import vertor from "../../assets/ocloc.svg";
import vertor2 from "../../assets/navigator.svg";
import logo from "../../assets/logo.svg";
import tel from "../../assets/tel.svg";
import {Link} from 'react-router-dom'

const Header = () => {
  const [popup, setPopup] = useState(false);

  const oppened = () => {
    setPopup(false);
  };
  return (
    <div className="w-[1300px] m-auto pt-10">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-3">
            <img src={vertor} alt="" />
            <p>Пн-Пт с 10:00 до 20:00</p>
          </div>
          <p className="pl-8">Сб-Вс с 10:00 до 19:00</p>

          <div className="flex gap-3 pt-1">
            <img src={vertor2} alt="" />
            <p>Наши салоны</p>
          </div>
        </div>

        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <div className="flex gap-5">
            <p>Отдел продаж:</p>
            <div className="pt-2">
              <img src={tel} alt="" />
            </div>
            <p>8 (495) 664-54-57</p>
          </div>
          <p className="pl-40">8 (929) 928-86-35</p>

          <div className="flex gap-5">
            <p>Звонки по Росии: </p>
            <div className="pt-2">
              <img src={tel} alt="" />
            </div>

            <p>8-800-000-00-00</p>
          </div>
          <p className="text-red-800 pl-40">Бесплатно</p>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <div className="flex gap-2">
          <h3
            onClick={() => {
              setPopup(!popup);
            }}
          >
            Каталог
          </h3>
          {popup && (
            <div>
              <Link to={'/new'}>
                <p onClick={oppened}>Новинки</p>
              </Link>
              <Link to={'/room'}>
                <p onClick={oppened}>Гостинные</p>
              </Link>
              <Link to={'/hall'}>
                <p onClick={oppened}>Прихожие</p>
              </Link>
            </div>
          )}
          <span className="text-red-800 w-[10px]">&#9660;</span>
        </div>
        <div>
          <h2>О нас</h2>
        </div>

        <div>
          <h2>3D-моделирование</h2>
        </div>

        <div>
          <h2>Покупателю</h2>
        </div>

        <div>
          <h2>Доставка и оплата</h2>
        </div>

        <div className="border-2 rounded-3xl w-60 pl-5 h-10 pt-1">
          <input type="text" placeholder="Поиск по сайту..." />
        </div>
      </div>
    </div>
  );
};

export default Header;
