import { ReactNode } from 'react';

export interface FullPageProps {
  children: ReactNode;
}

export function FullPage({ children }: FullPageProps) {
  return <div className="px-6 w-full">{children}</div>;
}
