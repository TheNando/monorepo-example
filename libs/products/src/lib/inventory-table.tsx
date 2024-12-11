import {
  upsertRecord,
  useStore,
  type Product,
} from '@react-monorepo/shared-data';
import { Container, PageTitle, useToast } from '@react-monorepo/shared-ui';
import { Button, Table } from 'react-daisyui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrashCan,
  faSquareMinus,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';

export function InventoryTable() {
  const { data: allProducts, refetch } = useStore<Product>('products');
  const { Toast, showError, showSuccess } = useToast();

  const editProduct = async (data: Product) => {
    try {
      await upsertRecord('products', { key: 'id', value: data });
      showSuccess('Product updated!');
      refetch();
    } catch (error) {
      showError('Error updating product');
      console.error(error);
    }
  };

  const modify = (product: Product, operation: 'dec' | 'inc') => {
    const data = {
      ...product,
      quantity: product.quantity + (operation === 'inc' ? 1 : -1),
    };

    if (data.quantity < 0) {
      return;
    }

    editProduct(data);
  };

  return (
    <Container>
      <PageTitle text="Inventory Table" />

      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <span>Id</span>
            <span>Name</span>
            <span>Category</span>
            <span>Image Key</span>
            <span>Count</span>
            <span>Actions</span>
          </Table.Head>

          <Table.Body>
            {allProducts?.map((product) => (
              <Table.Row key={product.id}>
                <span>{product.id}</span>
                <span>{product.name}</span>
                <span>{product.category}</span>
                <span>{product.imageKey}</span>
                <span>
                  <FontAwesomeIcon
                    className="mr-2 cursor-pointer"
                    icon={faSquareMinus}
                    onClick={() => modify(product, 'dec')}
                    size="lg"
                  />
                  {product.quantity}
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer"
                    icon={faSquarePlus}
                    onClick={() => modify(product, 'inc')}
                    size="lg"
                  />
                </span>
                <span>
                  <Button
                    color="ghost"
                    tag="a"
                    // @ts-expect-error: using Link props
                    href={`/edit-product?id=${product.id}`}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                  </Button>
                  <Button color="ghost">
                    {/* STORY: Implement delete */}
                    <FontAwesomeIcon color="red" icon={faTrashCan} size="lg" />
                  </Button>
                </span>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <Toast />
    </Container>
  );
}
