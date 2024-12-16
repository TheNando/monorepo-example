import { atom } from 'jotai';
import { type Product } from './data-store';

export const ordersAtom = atom<Product[]>([]);
