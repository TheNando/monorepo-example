import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="container mx-auto">{children}</div>;
}
