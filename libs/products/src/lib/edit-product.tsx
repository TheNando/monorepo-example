import { Button, Link } from 'react-daisyui';

import {
  Container,
  PageTitle,
  UiInput,
  UiSelect,
  UiTextarea,
  useToast,
} from '@react-monorepo/shared-ui';
import {
  type Product,
  upsertRecord,
  useObjectState,
  useStore,
} from '@react-monorepo/shared-data';
import { useEffect } from 'react';

const DEFAULT_PRODUCT: Partial<Product> = {
  category: undefined,
  description: '',
  id: 0,
  imageKey: '',
  name: '',
  price: '0.00',
  quantity: 0,
};

export function EditProduct() {
  const { data: allProducts } = useStore<Product>('products');
  const data = useObjectState({ ...DEFAULT_PRODUCT });
  const { Toast, showError, showSuccess } = useToast();

  const editProduct = async () => {
    try {
      await upsertRecord('products', { key: 'id', value: data[0] });
      showSuccess('Product updated!');
    } catch (error) {
      showError('Error updating product');
      console.error(error);
    }
  };

  // Check for search params to set initially selected product
  useEffect(() => {
    if (allProducts === undefined) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id') || '-1');

    const selectedProduct = allProducts?.find((product) => product.id === id);

    if (!selectedProduct) {
      return;
    }

    data[1](selectedProduct);
  }, [allProducts]);

  // When a product name is selected, load the rest of that product's details
  useEffect(() => {
    if (allProducts === undefined) {
      return;
    }

    const selectedProduct = allProducts?.find(
      (product) => product.name === data[0].name
    );

    if (!selectedProduct) {
      return;
    }

    data[1](selectedProduct);
  }, [allProducts, data[0].name]);

  return (
    <Container>
      <PageTitle text="Edit product" />

      <div className="mb-6">
        <UiSelect
          id="name"
          label="Select Product"
          options={allProducts?.map((product) => product.name) ?? []}
          placeholder="Select a product"
          state={data}
        />
      </div>

      <UiInput id="name" label="Name" state={data} />

      <UiInput id="price" label="Price" state={data} />

      <UiInput id="imageKey" label="Image Key" state={data} />

      <UiSelect
        id="category"
        label="Category"
        options={['router', 'gpu', 'cpu']}
        placeholder="Select a category"
        state={data}
      />

      <UiTextarea id="description" label="Description" state={data} />

      <UiInput
        id="quantity"
        label="Quantity"
        onUpdate={(str) => parseInt(str) || 0}
        state={data}
      />

      <div className="flex items-center justify-end mt-6 gap-4">
        <Link href="/inventory-table">To Inventory Table</Link>
        <Button className="text-white" color="primary" onClick={editProduct}>
          Save
        </Button>
      </div>

      <Toast />
    </Container>
  );
}
