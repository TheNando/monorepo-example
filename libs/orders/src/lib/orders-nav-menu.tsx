import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Button, Indicator, Badge, Card } from 'react-daisyui';

export function OrdersNavMenu() {
  return (
    <Dropdown end>
      <Button tag="label" tabIndex={0} color="ghost" shape="circle">
        <Indicator>
          <Badge size="sm" className={Indicator.Item.className()}>
            8
          </Badge>
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </Indicator>
      </Button>

      <Dropdown.Menu className="card card-compact bg-white text-primary-content w-52 mt-3 !p-0 z-[1]">
        <Card.Body>
          <span className="font-bold text-lg">8 Items</span>
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
