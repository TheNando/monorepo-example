import { ReactNode } from 'react';

export interface FullPageProps {
  children: ReactNode;
}

export function FullPage({ children }: FullPageProps) {
  return <div className="p-3 w-full">{children}</div>;
}
