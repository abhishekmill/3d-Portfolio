import React, { useEffect, useState } from "react";
import Product from "./Product";

const Overlay = ({ animation, clickedlement }) => {
  const [selectedData, setSelectedData] = useState(null);

  const data = [
    {
      name: "chair",
      price: "3590.00",
      description:
        "TEODORES Chair, Steel, Epoxy/Polyester Powder Coating (White)",
      brand: "IKEEA",
      star: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX59KIamrvJs9T8YIgboWn-JbTlqGXiV2MTA&s",
    },
    {
      name: "table",
      price: "9,999.002",
      description: "FURNISHIAA White Wooden Study and Computer Table",
      brand: "Furnishiaa",
      star: 5,
      image:
        "https://furnishiaa.com/cdn/shop/products/2-6-646ee78f-4edc-487b-b7ca-426d839bb6b5-_3.jpg?v=1688111805&width=360",
    },
    {
      name: "jhoomar",
      price: "2300.00",
      description: "Pundhir Glass Lights Thali Pendant Ceiling Lights Lamp",
      brand: "Pundhir",
      star: 3,
      image:
        "https://images.jdmagicbox.com/v2/comp/chennai/v6/044pxx44.xx44.170106123741.u1v6/catalogue/plk-led-solutions-shenoy-nagar-chennai-led-light-dealers-kfytoye8cy.jpg",
    },
    {
      name: "bed",
      price: "95000.00",
      description:
        "Bed structure of high grade BWR ply and cedar wood as required",
      brand: "Minoti Bed",
      star: 4,
      image: "https://m.media-amazon.com/images/I/81s0B-PBY+L._SL1500_.jpg",
    },
    {
      name: "painting",
      price: "3300.00",
      description: "Just a wallpaper",
      brand: "Nature",
      star: 4,
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/1002556983888864785/2AB2AC0F87C616A9A9E7D5126C2719D8A9257027/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    },
    {
      name: "mat",
      price: "5000",
      description:
        "New design jacquard floor mat non-slip living room carpet wilton bedroom mat ",
      brand: "Ningbo Hapton",
      star: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeejQHQnGVmuI2e0RHKxnR5clrzzGw_31oyA&s",
    },
    {
      name: "mirror",
      price: "5000",
      description: "Golden Frame Round Lighted Mirror for Bathroom ",
      brand: "ARUMMA",
      star: 5,
      image:
        "https://m.media-amazon.com/images/I/71UUr6uzJrL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "sink",
      price: "20000",
      description: "RADBAY Elena 24 Inch Wall Mounted Bath Vanity Washbasin  ",
      brand: "RUVATI",
      star: 5,
      image:
        "https://www.ruvati.com/wp-content/uploads/Category_Tile_Bathroom.jpg",
    },
    {
      name: "light",
      price: "2000",
      description: "CUSTO 3818/1 LED Pendant Light ",
      brand: "ACB",
      star: 4,
      image: "https://m.media-amazon.com/images/I/31R9EspRorS._AC_SL1000_.jpg",
    },
    {
      name: "toilet",
      price: "5,999",
      description: "Plantex Ceramic Rimless Western Toilet ",
      brand: "PlantexIndia",
      star: 4,
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/commode/4/x/r/64-51-8-aps-748-plantex-71-original-imah4qrs273fwrgh.jpeg?q=70&crop=false",
    },
  ];

  useEffect(() => {
    handleHoverFun();
  }, [clickedlement]);

  const handleHoverFun = () => {
    if (clickedlement) {
      setSelectedData(data.find((item, idx) => item.name == clickedlement));
    }
  };

  return (
    <div
      className={` ${
        animation == "anim0" ? "pointer-events-auto" : "pointer-events-none"
      }  absolute w-full h-screen overflow-hidden`}
    >
      <div
        className={` ${
          animation == "anim0" ? "bg-opacity-40 " : " bg-opacity-0 "
        }   absolute z-10 w-full  h-screen bg-gray-800   duration-1000  flex justify-center text-center  items-center  `}
      >
        {/* // anim 0 */}

        <div
          className={`${
            animation == "anim0" ? "opacity-100" : "opacity-0 mb-14 "
          } w-1/2 max-w-[50vw] content-center  text-center h-[250px] duration-700 border`}
        >
          <h1 className="text-6xl capitalize  font-bold  text-white ">
            WHERE HOME DEFINE CLASS{" "}
            <p className="text-xl py-5 "> created with Three.js</p>{" "}
          </h1>
        </div>
      </div>

      {/* anim1 */}
      <div className="absolute z-10 w-full  h-screen   duration-1000  flex justify-center text-center  items-center  ">
        <div
          className={` ${
            animation == "anim1" ? "opacity-100 pt-0" : "opacity-0 pt-10 "
          } duration-500 delay-100 w-1/2 max-w-[600px] h-1/6 border bg-white bg-opacity-15 drop-shadow-xl mt-[80vh] rounded  overflow-hidden text-ellipsis text-white px-5 `}
        >
          <h1 className=" font-bold capitalize text-4xl">
            Welcome to our workspace
          </h1>
          <p className="p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
            porro officiis quam. Ipsum, alias odio illum in labore
          </p>
        </div>
      </div>

      {/* anim 2 */}
      <div className="absolute z-10 w-full  h-screen   duration-1000  flex justify-center text-center  items-center  ">
        <div
          className={` ${
            animation == "anim2"
              ? "opacity-100 mt-[80vh]"
              : "opacity-0 mt-[100vh]  "
          } duration-700 delay-300 w-1/2 max-w-[600px] h-1/6 border bg-white bg-opacity-15 drop-shadow-xl  rounded overflow-hidden text-ellipsis  text-white  `}
        >
          <h1 className=" font-bold capitalize text-4xl">
            Guest accommodation
          </h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
            modi, ullam pariatur laboriosam fugit ratione
          </p>
        </div>
      </div>

      {/* anim 3 */}

      <div className="absolute z-10 w-full overflow-hidden h-screen   duration-1000  flex justify-center text-center  items-center  ">
        <div
          className={` ${
            animation == "anim3"
              ? "opacity-100 mt-[80vh]"
              : "opacity-0 mt-[90vh] "
          } duration-700 delay-300 w-1/2 max-w-[600px] h-1/6 border bg-white bg-opacity-15 drop-shadow-xl  rounded  overflow-hidden text-ellipsis text-white   `}
        >
          <h1 className=" font-bold capitalize text-4xl">Restroom area</h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
            rum cum ratione quo.
          </p>
        </div>
      </div>

      {/* product view  */}

      <div>
        {selectedData ? (
          <Product selectedData={selectedData} />
        ) : (
          <div className="absolute z-10 hidden w-full overflow-hidden h-screen   duration-1000  flex justify-center text-center    ">
            <div
              className={` ${
                animation == "anim0"
                  ? "opacity-0"
                  : "opacity-100  animate-pulse   "
              }
                delay-300  h-fit py-3 px-10 border mt-[5vh] bg-white bg-opacity-15 drop-shadow-xl  rounded  overflow-hidden text-ellipsis  `}
            >
              <h1 className="text-white font-bold capitalize text-xl">
                hover Mouse
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overlay;
