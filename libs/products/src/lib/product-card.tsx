import { ordersAtom, Product } from '@react-monorepo/shared-data';
import { type ImageAsset, IMAGES } from './product-images';
import { Badge, Button, Card } from 'react-daisyui';
import { useAtom } from 'jotai';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [orders, setOrders] = useAtom(ordersAtom);

  const isOrdered = orders.some((item) => item.id === product.id);

  const css = `group-hover:opacity-100 border-0 ${
    isOrdered ? 'opacity-70' : 'hover:bg-slate-500 opacity-0'
  }`;

  const addToCart = () => {
    setOrders([...orders, product]);
  };

  const removeFromCart = () => {
    setOrders([...orders.filter((item) => item.id !== product.id)]);
  };

  return (
    <Card className="group w-64 shadow-xl" data-theme="emerald">
      <Card.Image
        className="mt-6 h-48 max-w-40"
        src={IMAGES[product.imageKey as ImageAsset]}
        alt="Shoes"
      />

      {/* Add / Remove from cart */}
      <div className="absolute flex h-full w-full justify-center items-center">
        <Button
          className={css}
          color={isOrdered ? 'error' : 'neutral'}
          onClick={isOrdered ? removeFromCart : addToCart}
        >
          {isOrdered ? 'Remove' : 'Add to cart'}
        </Button>
      </div>

      <Card.Body className="card-body p-6">
        <Card.Title>{product.name}</Card.Title>${product.price}
        <p>{product.description}</p>
        <Card.Actions className="justify-between">
          <Badge color="secondary">{product.category}</Badge>
          <Badge outline>In stock: {product.quantity}</Badge>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
