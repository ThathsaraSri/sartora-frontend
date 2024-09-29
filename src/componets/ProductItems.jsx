import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover-scale transition ease-in-out"
          src={image[0]} // Access the first image in the array
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="font-medium text-sm">{currency}{price}</p>
    </Link>
  );
};

export default ProductItems;
