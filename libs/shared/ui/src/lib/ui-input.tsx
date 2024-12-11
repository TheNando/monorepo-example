import { Input } from 'react-daisyui';
import { identity, type ObjectState } from '@react-monorepo/shared-data';
import { FormEvent } from 'react';

export interface UiInputProps {
  id: string;
  label: string;
  onUpdate?: (newState: any) => any;
  placeholder?: string;
  state: ObjectState;
}

export function UiInput({
  id,
  label,
  onUpdate = identity,
  placeholder,
  state,
}: UiInputProps) {
  const [data, updateData] = state;

  const updateInput = (event: FormEvent<HTMLInputElement>) => {
    const newValue = onUpdate(event.currentTarget.value);
    updateData({ [id]: newValue });
  };

  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      <Input placeholder={placeholder} value={data[id]} onInput={updateInput} />
    </label>
  );
}
