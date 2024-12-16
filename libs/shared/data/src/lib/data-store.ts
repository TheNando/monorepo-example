import { openDB, type DBSchema, type IDBPDatabase } from 'idb';
import { useEffect, useState } from 'react';

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
  const reader = new FileReader();

  reader.onload = async function () {
    if (typeof reader.result !== 'string') {
      return;
    }

    const data = JSON.parse(reader.result);

    if (!Array.isArray(data)) {
      return;
    }

    data.forEach((item) => {
      upsertRecord('products', item);
    });
  };

  if (file) {
    reader.readAsText(file);
  }
}

export async function upsertRecord(
  store: StoreName,
  { key, value }: RecordParam
) {
  const db = await initializeDb();

  if (key === undefined) {
    return db.add(store, value);
  }

  return db.put(store, value);
}

export async function getStore(store: StoreName) {
  const db = await initializeDb();

  return db.getAll(store);
}

export const useStore = <T>(store: StoreName) => {
  const [data, setData] = useState<T[]>();
  const [shouldRefetch, setShouldRefetch] = useState(true);

  const refetch = () => setShouldRefetch(true);

  useEffect(() => {
    if (!shouldRefetch) {
      return;
    }

    getStore(store).then((response) => setData(response as T[]));
    setShouldRefetch(false);
  }, [shouldRefetch]);

  return { data, refetch };
};
