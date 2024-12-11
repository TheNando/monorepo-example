import { Button, Link } from 'react-daisyui';

import {
  Container,
  PageTitle,
  UiInput,
  UiSelect,
  UiTextarea,
} from '@react-monorepo/shared-ui';
import {
  Product,
  upsertRecord,
  useObjectState,
} from '@react-monorepo/shared-data';

const DEFAULT_PRODUCT: Partial<Product> = {
  category: undefined,
  description: '',
  imageKey: '',
  name: '',
  price: '0.00',
  quantity: 0,
};

export function AddProduct() {
  const data = useObjectState({ ...DEFAULT_PRODUCT });

  const addProduct = async () => {
    try {
      await upsertRecord('products', { value: data[0] });

      const { category, ...reset } = DEFAULT_PRODUCT;
      data[1](reset);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <PageTitle text="Add a product" />

      <UiInput id="name" label="Name" state={data} />

      <UiInput id="imageKey" label="Image Key" state={data} />

      <UiSelect
        id="category"
        label="Category"
        options={['router', 'gpu', 'cpu']}
        placeholder="Select a category"
        state={data}
      />

      <UiTextarea id="description" label="Description" state={data} />

      <UiInput id="price" label="Price" state={data} />

      <UiInput id="quantity" label="Quantity" state={data} />

      <div className="flex items-center justify-end mt-6 gap-4">
        <Link href="/inventory-table">To Inventory Table</Link>
        <Button className="text-white" color="primary" onClick={addProduct}>
          Add Product
        </Button>
      </div>
    </Container>
  );
}
