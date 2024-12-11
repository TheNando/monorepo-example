import { Select } from 'react-daisyui';
import { type ObjectState } from '@react-monorepo/shared-data';
import { ChangeEvent } from 'react';

export interface UiSelectProps {
  id: string;
  label: string;
  options: string[];
  placeholder?: string;
  state: ObjectState;
}

export function UiSelect({
  id,
  label,
  options,
  placeholder,
  state,
}: UiSelectProps) {
  const [data, updateData] = state;
  const value = data[id] || placeholder;

  const selectOptions = options.map((option) => (
    <Select.Option key={option} value={option}>
      {option}
    </Select.Option>
  ));

  if (placeholder) {
    selectOptions.unshift(
      <Select.Option key="placeholder" value={placeholder} disabled>
        {placeholder}
      </Select.Option>
    );
  }

  const updateSelect = (event: ChangeEvent<HTMLSelectElement>) =>
    updateData({ [id]: event.currentTarget.value });

  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      <Select value={value} onChange={updateSelect}>
        {selectOptions}
      </Select>
    </label>
  );
}
