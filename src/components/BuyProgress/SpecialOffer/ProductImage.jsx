import React from "react";

import productImg from "../../../assets/Product_Image.png";

const ProductImage = () => {
  return (
    <img src={productImg} alt="product_image" className="rounded-[10px]" />
  );
};

export default ProductImage;
