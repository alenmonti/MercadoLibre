import React from "react";
import ProductItem from "./ProductItem";

const ProductsContainer = ({ title, products, cartItems, setCartItems, productsFilter=""}) => {

    return (
        <div id="Productos" className="max-w-[1400px] mx-auto lg:px-[100px]">
            <h1 className="text-2xl font-semibold text-gray-700 my-3 text-center lg:text-left">{productsFilter ? productsFilter : title}</h1>
            <div className="flex gap-5 justify-start lg:justify-between px-2 w-full overflow-x-scroll scroll">
                {products.map((product, index) =>
                    (productsFilter === "" || productsFilter === product.category) ? (
                        <ProductItem key={index} product={{ ...product, amount: 0 }} cartItems={cartItems} setCartItems={setCartItems} />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default ProductsContainer;
