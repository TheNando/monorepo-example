import { Route, Routes } from 'react-router-dom';
import { ProductList } from '@react-monorepo/products';
import { OrderList, OrdersNavMenu } from '@react-monorepo/orders';
import { FullPage, Nav, UserNavMenu } from '@react-monorepo/shared-ui';

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
