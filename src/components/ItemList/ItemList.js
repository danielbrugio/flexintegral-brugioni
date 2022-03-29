import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default React.memo(ItemList);
