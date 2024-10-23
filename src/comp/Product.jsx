import React from "react";
import star from "/star-fill.png";
const Product = () => {
  const arrayImg = [];

  return (
    <div className=" flex justify-center mt-14  w-full h-60 absolute z-10 ">
      <div className="border w-1/2 h-[20vh] flex ">
        <div className=" h-full overflow-hidden  w-1/3 bg-slate-700">
          <img
            className="object-cover h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX59KIamrvJs9T8YIgboWn-JbTlqGXiV2MTA&s"
            alt=""
          />
        </div>

        <div className="text-white flex flex-col justify-between  w-[30vw] ">
          <h3 className="text-xl px-5 pt-5">
            TEODORES Chair, Steel, Epoxy/Polyester Powder Coating (White)
          </h3>
          <p className="px-5 py-3">brand: IKEA </p>
          <div className="flex pb-5   px-5 justify-between">
            <div className="flex ">
              {Array(5)
                .fill("x")
                .map((item, idx) => (
                  <img key={idx + "star"} src={star} />
                ))}
            </div>
            <h5 className="text-end   text-xl "> ₹ 3,837</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
