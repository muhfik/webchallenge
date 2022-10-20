import { useDispatch } from 'react-redux';

import Stars from '../../Stars/Stars';

import { formatPrice } from '../../../utils/formatPrice';
import { addToCart } from '../../../redux/products/products_actions';

import './SingleProductInfo.scss';

const SingleProductInfo = ({ name, brand, price, stars, desription, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="singleProduct">
        <h3 className="singleProduct__title">{name}</h3>
        <p className="singleProduct__brand">
          {' '}
          <span className="singleProduct__brand--span">BRAND:</span> {brand}
        </p>
        <p className="singleProduct__desc">{desription}</p>
      </div>
      
    </>
  );
};

export default SingleProductInfo;
