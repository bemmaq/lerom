import React, { useState } from "react";
import vertor from "../../assets/ocloc.svg";
import vertor2 from "../../assets/navigator.svg";
import logo from "../../assets/logo.svg";
import tel from "../../assets/tel.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [popup, setPopup] = useState(false);

  const oppened = () => {
    setPopup(false);
  };
  return (
    <div className="w-[1300px] m-auto pt-10 font-semibold">
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
          <Link to={"/"}>
           <Link to={'/'}>
         <img src={logo} alt="" />
          </Link>
         </Link>
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
      <hr className="mt-[20px]" />
      <div className="flex justify-between mt-[10px]">
        <div className=" cursor-pointer flex gap-2 ">
          <h3
            className="hover:text-red-700 focus:text-red-700"
            onClick={() => {
              setPopup(!popup);
            }}
          >
            Каталог
          </h3>
          {popup && (
            <div className="mt-[59px] border-2 leading-[50px] w-[200px] cursor-pointer absolute z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold ">
              <Link to={"/new"}>
                <div className="flex gap-[90px]">
                  <p
                    className="pl-[15px] hover:text-red-700 focus:text-red-700"
                    onClick={oppened}
                  >
                    Новинки
                  </p>
                  <span className="text-black-800 w-[10px] ">&#9660;</span>
                </div>
                <hr />
              </Link>
              <Link to={"/room"}>
                <div className="flex gap-[80px]">
                  <p
                    className="pl-[15px] hover:text-red-700 focus:text-red-700"
                    onClick={oppened}
                  >
                    Гостинные
                  </p>
                  <span className="text-black-800 w-[10px]">&#9660;</span>
                </div>
                <hr />
              </Link>
              <Link to={"/hall"}>
                <div className="flex gap-[80px]">
                  <p
                    className="pl-[15px] hover:text-red-700 focus:text-red-700"
                    onClick={oppened}
                  >
                    Прихожие
                  </p>
                  <span className="text-black-800 w-[10px]">&#9660;</span>
                </div>
              </Link>
            </div>
          )}
          <div>
            <span className="text-red-800 w-[10px]">&#9660;</span>
          </div>
        </div>

        <div className="hover:text-red-700 focus:text-red-700">
          <Link to={"/about"}>
            <h2>О нас</h2>
          </Link>
        </div>

        <div className="hover:text-red-700 focus:text-red-700">
          <Link to={"/modell"}>
            <h2>3D-моделирование</h2>
          </Link>
        </div>

        <div className="hover:text-red-700 focus:text-red-700">
          <h2>Покупателю</h2>
        </div>

        <div className="hover:text-red-700 focus:text-red-700">
          <h2>Доставка и оплата</h2>
        </div>

        <div className="border-2 rounded-3xl w-60 pl-5 h-10 pt-1">
          <input type="text" placeholder="Поиск по сайту..." />
        </div>
      </div>
      <hr className="mt-[10px]" />
    </div>
  );
};

export default Header;
