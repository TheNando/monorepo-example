import { Route, Routes } from 'react-router-dom';
import { ProductList } from '@react-monorepo/products';
import { OrderList, OrdersNavMenu } from '@react-monorepo/orders';
import { Nav, UserNavMenu } from '@react-monorepo/shared-ui';

function Home() {
  return <h1 className="text-3xl font-bold underline">Home</h1>;
}

export function App() {
  return (
    <>
      <Nav
        title="Microtech"
        options={[
          <OrdersNavMenu key="orders-menu" />,
          <UserNavMenu key="user-menu" />,
        ]}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/orders" element={<OrderList />}></Route>
      </Routes>
    </>
  );
}

export default App;
