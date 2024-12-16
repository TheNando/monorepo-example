import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Button, Indicator, Badge, Card } from 'react-daisyui';
import { useAtomValue } from 'jotai';
import { ordersAtom } from '@react-monorepo/shared-data';

export function OrdersNavMenu() {
  const orders = useAtomValue(ordersAtom);

  return (
    <Dropdown end>
      <Button tag="label" tabIndex={0} color="ghost" shape="circle">
        <Indicator>
          <Badge size="sm" className={Indicator.Item.className()}>
            {orders.length}
          </Badge>
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </Indicator>
      </Button>

      <Dropdown.Menu className="card card-compact bg-white text-primary-content w-52 mt-3 !p-0 z-[1]">
        <Card.Body>
          <span className="font-bold text-lg">{orders.length} Items</span>
          {/* TASK: Hide subtotal if there are no orders */}
          {/* TASK: Show the correct subtotals */}
          <span className="text-info">Subtotal: $999</span>
          <Card.Actions>
            <Button color="primary" fullWidth>
              View cart
            </Button>
          </Card.Actions>
        </Card.Body>
      </Dropdown.Menu>
    </Dropdown>
  );
}
