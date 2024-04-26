import React from "react";
import { Link } from "react-router-dom";

const Hallways = () => {
  const oppened = () => {
    setPopup(false);
  };
  return (
    <div>
      <div className="w-[1300px] m-auto">
        <div className="flex">
          <div>
            <div className="mt-[30px] border-2 leading-[50px] w-[200px] cursor-pointer absolute z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold ">
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
          </div>

          <div className="ml-[250px]">
            <h2 className="text-4xl pt-[22px]">Прихожие</h2>
            <div className="flex gap-10">
              <div>
                <div className="pt-10">
                  <img
                    width={320}
                    src="https://www.lerom.ru/upload/iblock/614/5q130ixyfb84817f1ea3jxx90cfc7z5m.jpg"
                    alt=""
                  />
                </div>
                <p className="text-center text-xl pt-2">Карина</p>
              </div>

              <div>
                <div className="pt-10">
                  <img
                    width={320}
                    src="https://www.lerom.ru/upload/iblock/96b/96b0bf87fa75c6b908430a711f8311a3.jpg"
                    alt=""
                  />
                </div>
                <p className="text-center text-xl pt-2">Грэйс</p>
              </div>

              <div>
                <div className="pt-10">
                  <img
                    width={320}
                    src="https://www.lerom.ru/upload/iblock/fe5/fe5af1d06a24fb46210e004077eab665.jpg"
                    alt=""
                  />
                </div>
                <p className="text-center text-xl pt-2">Мелисса</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>


      <div className="bg-gray-200">
        <div className="w-[1300px] m-auto mt-10">
          <h2 className="text-3xl pt-10">Прихожие</h2>
          <p className="pt-5 text-xl">
            Прихожая является лицом любого жилища, так как именно от этой
            комнаты зависит первое впечатление гостей. Интерьер прихожей
            провожает вас при уходе из дома и встречает при возвращении домой.
            Поэтому, мебель для прихожей должна сочетать в себе массу
            особенностей: функциональность и эстетичность, практичность и
            надёжность, компактность и эргономичность.
          </p>
          <p className="text-xl pt-5">
            Мебельная компания "Лером" предлагает широкий ассортимент мебели для
            прихожей для больших и маленьких, широких и узких помещений. Вся
            мебель модульная, т.е. состоит из отдельных модулей, которые можно
            переставлять и использовать в разных сочетаниях друг с другом или по
            отдельности.
          </p>
          <p className="text-xl pt-5">
            Три вида обувниц со специальными полками-решетками из нержавеющего
            материала, открытые вешалки для верхней одежды, множество вариантов
            шкафов с глухими и зеркальными фасадами, адаптированных под любые
            помещения, зеркала с фацетом, комоды с многочисленными ящиками -
            все, для создания идеальной прихожей.
          </p>
          <div className="pt-5 pb-5">
          <img width={1500} src="https://www.lerom.ru/upload/medialibrary/fad/fad2813cca62319028cb76819fc7a535.jpg" alt="" />

          </div>
        </div>
        </div>
    </div>
  );
};

export default Hallways;
