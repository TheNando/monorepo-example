import { type ObjectState } from '@react-monorepo/shared-data';
import { FormEvent } from 'react';
import { Textarea } from 'react-daisyui';

export interface UiTextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  state: ObjectState;
}

export function UiTextarea({ id, label, placeholder, state }: UiTextareaProps) {
  const [data, updateData] = state;

  const updateTextarea = (event: FormEvent<HTMLTextAreaElement>) => {
    updateData({ [id]: event.currentTarget.value });
  };

  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      <Textarea
        placeholder={placeholder}
        value={data[id]}
        onInput={updateTextarea}
      />
    </label>
  );
}
