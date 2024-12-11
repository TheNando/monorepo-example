import { useState } from 'react';
import { Indicator } from 'react-daisyui';
import {
  faPlusSquare,
  faListAlt,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let timeout: NodeJS.Timer;

export function ProductNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    clearInterval(timeout);
    setIsOpen(true);
  };

  const closeAfterDuration = () => {
    timeout = setInterval(() => setIsOpen(false), 500);
  };

  return (
    <ul
      className="menu menu-horizontal px-1 z-50"
      onMouseEnter={open}
      onMouseLeave={closeAfterDuration}
    >
      <li>
        <details open={isOpen}>
          <summary>
            <Indicator className="text-neutral-100">Products</Indicator>
          </summary>
          <ul className="bg-white rounded-t-none p-2">
            <li>
              <a href="/inventory-table">
                <FontAwesomeIcon icon={faListAlt} size="lg" />
                List
              </a>
            </li>
            <li>
              <a href="/add-product">
                <FontAwesomeIcon icon={faPlusSquare} size="lg" />
                Add
              </a>
            </li>
            <li>
              <a href="/edit-product">
                <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                Edit
              </a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}
