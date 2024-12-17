import { QueryClient, useQuery } from '@tanstack/react-query';
import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

export const queryClient = new QueryClient();

export type StoreName = 'products';

export interface Product {
  category: 'cpu' | 'gpu' | 'mainboard';
  description: string;
  id: number;
  imageKey: string;
  name: string;
  price: string;
  quantity: number;
}

interface ReactStore extends DBSchema {
  products: {
    indexes: { 'by-name': string };
    key: string;
    value: Product;
  };
}

let db: IDBPDatabase<ReactStore> | null = null;

async function initializeDb() {
  if (db === null) {
    db = await openDB<ReactStore>('products', 1, {
      upgrade(db, _prevVersion) {
        if (!db.objectStoreNames.contains('products')) {
          const productStore = db.createObjectStore('products', {
            autoIncrement: true,
            keyPath: 'id',
          });
          productStore.createIndex('by-name', 'name');
        }
      },
    });
  }

  return db;
}

interface RecordParam {
  key?: string;
  value: any;
}

export function importData(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async function () {
      if (typeof reader.result !== 'string') {
        return;
      }

      const data = JSON.parse(reader.result);

      if (!Array.isArray(data)) {
        return;
      }

      await Promise.all(
        data.map(async (item) => await upsertRecord('products', item))
      );

      queryClient.invalidateQueries({ queryKey: ['products'] });

      resolve(true);
    };

    reader.onerror = () => {
      reject(new Error('Error importing data'));
    };

    if (file) {
      reader.readAsText(file);
    }
  });
}

export async function upsertRecord(
  store: StoreName,
  { key, value }: RecordParam
) {
  const db = await initializeDb();

  if (key === undefined) {
    await db.add(store, value);
  } else {
    await db.put(store, value);
  }
}

export async function getStore(store: StoreName) {
  const db = await initializeDb();

  return db.getAll(store);
}

export const useProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: () => getStore('products'),
  });
