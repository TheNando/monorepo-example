import { useObjectState } from '@react-monorepo/shared-data';
import { useEffect } from 'react';
import { Alert, Toast as DaisyToast } from 'react-daisyui';

interface ToastState {
  message: string;
  status: 'hidden' | 'success' | 'error';
}

const DEFAULT_TIMEOUT = 4000;
const DEFAULT_STATE: ToastState = { message: '', status: 'hidden' };

export function useToast() {
  const [state, updateState] = useObjectState<ToastState>(DEFAULT_STATE);
  const { message, status } = state;

  useEffect(() => {
    if (status === 'hidden') {
      return;
    }

    setTimeout(() => updateState(DEFAULT_STATE), DEFAULT_TIMEOUT);
  }, [state]);

  return {
    showError: (message: string) => updateState({ message, status: 'error' }),
    showSuccess: (message: string) =>
      updateState({ message, status: 'success' }),
    Toast: () =>
      status !== 'hidden' && (
        <DaisyToast className="z-50" horizontal="start" vertical="bottom">
          <Alert className="shadow-md" status={status}>
            {message}
          </Alert>
        </DaisyToast>
      ),
  };
}
