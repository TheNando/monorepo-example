import { useState } from 'react';

export type ObjectState = ReturnType<typeof useObjectState>;

/**
 * Custom hook which works like useState but for objects. State may be updated
 * by providing a partial object which will be merged with the current state.
 */
export function useObjectState<T extends Record<string, any>>(initialState: T) {
  const [state, setState] = useState<T>(initialState);

  // Update method merges new key-value pairs on top of the current state
  const updateState = (newState: Partial<T>) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return [state, updateState] as const;
}
