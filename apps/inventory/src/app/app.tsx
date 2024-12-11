import { Route, Routes } from 'react-router-dom';
import {
  AddProduct,
  EditProduct,
  InventoryTable,
  ProductNavMenu,
} from '@react-monorepo/products';
import { FullPage, Nav } from '@react-monorepo/shared-ui';

export function App() {
  return (
    <>
      <Nav
        title="Inventory"
        options={[<ProductNavMenu key="product-menu" />]}
      />

      <FullPage>
        <Routes>
          <Route path="/" element={<InventoryTable />}></Route>
          <Route path="/add-product" element={<AddProduct />}></Route>
          <Route path="/edit-product" element={<EditProduct />}></Route>
          <Route path="/inventory-table" element={<InventoryTable />}></Route>
        </Routes>
      </FullPage>
    </>
  );
}

export default App;
