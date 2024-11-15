import React from "react";
import star from "/star-fill.png";
const Product = ({ selectedData }) => {
  const arrayImg = [];

  return (
    <div className=" flex justify-center mt-14    w-full  h-60 absolute z-10 ">
      <div className="  border w-full md:w-1/2 m-2 md:h-[20vh] h-fit duration-200 flex backdrop-blur-sm bg-slate-400 bg-opacity-30 ">
        <div className="  overflow-hidden  w-1/2  md:w-1/4">
          <img
            className="object-cover h-full"
            src={selectedData.image}
            alt=""
          />
        </div>

        <div className="text-white flex flex-col justify-between  md:w-[30vw] w-full  ">
          <h3 className="md:text-xl h-16 md:h-auto overflow-hidden text-lg px-2 md:p-5 pt-2">
            {selectedData.description}
          </h3>
          <p className="px-5 font-bold md:text-lg text-sm  py-3">
            Brand: {selectedData.brand}{" "}
          </p>
          <div className="flex pb-5   px-5 justify-between">
            <div className="flex ">
              {Array(selectedData.star)
                .fill("x")
                .map((item, idx) => (
                  <svg
                    className="w-5 fill-yellow-400"
                    key={idx + "star"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                ))}
            </div>
            <h5 className="text-end   text-xl "> ₹ {selectedData.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
