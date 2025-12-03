import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import Product from "../pages/Product";
import ProductIteam from "./ProductIteam";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          aliquid praesen
        </p>
      </div>
      {/*Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductIteam
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

// export default LatestCollection;
// import React, { useContext, useEffect, useState } from "react";
// import ShopContext from "../contexts/ShopContext";
// import Title from "./Title";
// import ProductIteam from "./ProductIteam";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext); // FIXED: Destructuring products from context
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     if (products && products.length) {
//       setLatestProducts(products.slice(0, 10));
//     }
//   }, [products]); // add products as a dependency

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"COLLECTIONS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquid praesen
//         </p>
//       </div>

//       {/* Rendering Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts.map((item, index) => (
//           <ProductIteam
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default LatestCollection;
