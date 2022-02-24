import Item from "../Item/Item";
import './itemList.css';


export default function ItemList({ products }) {
  return (
    <div >
      <div className="itemList">
        {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}