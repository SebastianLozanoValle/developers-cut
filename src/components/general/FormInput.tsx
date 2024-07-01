import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

interface FormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label: string;
  name: Path<T>;
}

export const FormInput = <T extends FieldValues>({ register, errors, label, name }: FormInputProps<T>) => {
  return (
    <div className="flex flex-col items-start w-full">
      <label className="font-extrabold" htmlFor={name}>{label} *</label>
      <input className="border border-[#ccc] w-full rounded-full px-4" type="text" id={name} {...register(name)} />
      {errors[name] && (
        <p className="max-w-[220px] text-sm text-[#ccc] font-light">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
