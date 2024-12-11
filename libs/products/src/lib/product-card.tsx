import { Product } from '@react-monorepo/shared-data';
import { type ImageAsset, IMAGES } from './product-images';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card bg-white w-80 shadow-xl pt-8">
      <figure>
        <img src={IMAGES[product.imageKey as ImageAsset]} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title m-0">
          {product.name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          {product.quantity}
          <div className="badge badge-outline">{product.category}</div>
          {/* <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
    </div>
  );
}
