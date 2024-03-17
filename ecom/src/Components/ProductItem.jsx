// import React from "react";
// import { FaCartArrowDown } from "react-icons/fa6";

// const ProductItem = ({ image, title, category, price }) => {
//   return (
//     <div className="grid-container">
//       <div className="image">
//         <img src={image} alt={title} />
//       </div>

//       <h4>
//         <span>Category : </span>
//         {category}
//       </h4>

//       <div className="bt">
//         <p className="info">
//           <span>Price :</span>${price}
//         </p>
//         <button className="card-btn">
//           <span>
//             <FaCartArrowDown style={{ marginRight: "0.5em" }} />
//           </span>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default React.memo(ProductItem);
// ProductItem.jsx
import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";

 

const ProductItem = ({ image, title, category, price, addToCart }) => {
  
  return (
    <div className="grid-container">
      <div className="image">
        <img src={image} alt={title} />
      </div>

      <h4>
        <span>Category : </span>
        {category}
      </h4>

      <div className="bt">
        <p className="info">
          <span>Price :</span>${price}
        </p>
        <button className="card-btn" onClick={addToCart}>
          <span>
            <FaCartArrowDown style={{ marginRight: "0.5em" }} />
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
