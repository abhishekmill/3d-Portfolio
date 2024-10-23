import React from "react";

const Overlay = ({ animation }) => {
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
            <p className="text-xl py-5 ">welcome to my home</p>{" "}
          </h1>
        </div>
      </div>

      {/* anim1 */}
      <div className="absolute z-10 w-full  h-screen   duration-1000  flex justify-center text-center  items-center  ">
        <div
          className={` ${
            animation == "anim1" ? "opacity-100 pt-0" : "opacity-0 pt-10 "
          } duration-500 delay-100 w-1/2 h-1/6 border bg-white bg-opacity-15 drop-shadow-xl mt-[80vh] rounded   `}
        >
          <h1 className="text-[#191d21] font-bold capitalize text-4xl">
            this is office
          </h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
            porro officiis quam. Ipsum, alias odio illum in labore voluptas quam
            modi, ullam pariatur laboriosam fugit dolorum cum ratione quo.
          </p>
        </div>
      </div>

      {/* anim 2 */}
      <div className="absolute z-10 w-full  h-screen   duration-1000  flex justify-center text-center  items-center  ">
        <div
          className={` ${
            animation == "anim2"
              ? "opacity-100 mt-[80vh]"
              : "opacity-0 mt-[100vh] "
          } duration-700 delay-300 w-1/2 h-1/6 border bg-white bg-opacity-15 drop-shadow-xl  rounded   `}
        >
          <h1 className="text-white font-bold capitalize text-4xl">
            this Bedroom is here
          </h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
            porro officiis quam. Ipsum, alias odio illum in labore voluptas quam
            modi, ullam pariatur laboriosam fugit dolorum cum ratione quo.
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
          } duration-700 delay-300 w-1/2 h-1/6 border bg-white bg-opacity-15 drop-shadow-xl  rounded   `}
        >
          <h1 className="text-white font-bold capitalize text-4xl">
            this Bedroom is here
          </h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
            porro officiis quam. Ipsum, alias odio illum in labore voluptas quam
            modi, ullam pariatur laboriosam fugit dolorum cum ratione quo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
