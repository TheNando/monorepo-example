import { Product } from '@react-monorepo/shared-data';
import { type ImageAsset, IMAGES } from './product-images';
import { Badge, Button } from 'react-daisyui';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card group bg-white text-primary-content w-64 shadow-xl">
      <figure className="mt-6 min-h-52">
        <img src={IMAGES[product.imageKey as ImageAsset]} alt="Shoes" />
        <div className="absolute translate-y-24">
          <Button className="group-hover:opacity-100 hover:bg-slate-500 border-0 opacity-0">
            Add to cart
          </Button>
        </div>
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title m-0">{product.name}</h2>${product.price}
        <p>{product.description}</p>
        <div className="card-actions justify-between">
          <Badge color="secondary">{product.category}</Badge>
          <Badge outline>In stock: {product.quantity}</Badge>
        </div>
      </div>
    </div>
  );
}
