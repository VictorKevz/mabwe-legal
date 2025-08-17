import React from "react";

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};
export const EmptyFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};
export type FormField = {
  value: string;
  name: string;
  label: string;
  placeholder: string;
  id: string;
};
export type OnChangeType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;
export type FieldProps = {
  field: FormField;
  onChange: (e: OnChangeType) => void;
  error?: string;
};
