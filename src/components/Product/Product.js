import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import './Product.scss';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product mb-4">
      <Link to={`/products/${product.id}`}>
        <div className="product__image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product__image"
          />
        </div>
      </Link>
      <div className="product__footer">
        <div className="product__footer-heading">
          <Link to={`/products/${product.id}`}>
            <h3 className="product__footer-title">{product.name}</h3>
          </Link>
        </div>
     
      </div>
    </div>
  );
};

export default Product;
