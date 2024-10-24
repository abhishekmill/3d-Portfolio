import React from "react";
import star from "/star-fill.png";
const Product = ({ selectedData }) => {
  const arrayImg = [];

  return (
    <div className=" flex justify-center mt-14   w-full  h-60 absolute z-10 ">
      <div className="  border w-1/2 h-[20vh] duration-200 flex backdrop-blur-sm ">
        <div className=" h-full overflow-hidden  w-1/4">
          <img
            className="object-cover h-full"
            src={selectedData.image}
            alt=""
          />
        </div>

        <div className="text-white flex flex-col justify-between  w-[30vw] ">
          <h3 className="text-xl px-5 pt-5">{selectedData.description}</h3>
          <p className="px-5 py-3">Brand: {selectedData.brand} </p>
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
