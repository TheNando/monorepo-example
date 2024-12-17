import { OrderList, OrdersNavMenu } from '@react-monorepo/orders';
import { ProductList } from '@react-monorepo/products';
import { FullPage, Nav } from '@react-monorepo/shared-ui';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Nav
        title="Microtech PC Store"
        options={[<OrdersNavMenu key="orders-menu" />]}
      />

      <FullPage>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/orders" element={<OrderList />}></Route>
        </Routes>
      </FullPage>
    </>
  );
}

export default App;
