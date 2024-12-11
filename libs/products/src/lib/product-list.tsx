import { useStore, type Product } from '@react-monorepo/shared-data';
import { Container, PageTitle } from '@react-monorepo/shared-ui';
import { ProductCard } from './product-card';

export function ProductList() {
  const { data: allProducts } = useStore<Product>('products');

  return (
    <Container>
      <PageTitle text="Products" />

      {/* TASK: Fix the console error when this renders */}
      <div className="flex flex-wrap gap-4">
        {allProducts?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Container>
  );
}
