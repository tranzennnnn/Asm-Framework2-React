import { useContext } from 'react'
import type { IProduct } from '../../interface/product'
import { Button } from 'antd';
import { countCT } from '../../layouts/ClientLayout';
import { Link } from 'react-router-dom';

type Props = {
  product: IProduct;
};

const ProductItem = ({ product }: Props) => {
  const { cartstate, dispath } = useContext(countCT) as any;

  return (
    <div>
      <Link to={`/detail/${product.id}`}>
        <img src={product.image} />
        <h3>{product.name}</h3>
      </Link>


      <Button onClick={() => {
        dispath({ type: 'addtocart', payload: product  });
        // dispath({ type: 'closeOpen', payload: true });
      }} type="primary">Thêm giở hàng</Button>
    </div>
  )
  // cartstate.count + 1
}

export default ProductItem
