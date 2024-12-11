import { ReactNode } from 'react';
import { Navbar } from 'react-daisyui';

interface NavProps {
  options?: ReactNode[];
  title: string;
}

export function Nav({ options, title }: NavProps) {
  return (
    <Navbar className="bg-primary mb-5">
      <div className="navbar-start">
        <h1 className="text-xl text-neutral-100 font-semibold ml-4">{title}</h1>
      </div>

      <div className="navbar-end gap-2">{options}</div>
    </Navbar>
  );
}
