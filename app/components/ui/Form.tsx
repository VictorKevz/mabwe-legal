"use client";
import {
  EmptyFormState,
  FormField,
  FormState,
  FieldProps,
  OnChangeType,
} from "@/app/types/form";
import React, { useCallback, useState } from "react";

export const Form = () => {
  const [form, setForm] = useState<FormState>(EmptyFormState);

  const handleChange = useCallback((e: OnChangeType) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const formData: FormField[] = [
    {
      value: form.firstName,
      name: "firstName",
      label: "First Name",
      placeholder: "Allen",
      id: "firstName-01",
    },
    {
      value: form.lastName,
      name: "lastName",
      label: "Last Name",
      placeholder: "Johnson",
      id: "lastName-02",
    },
    {
      value: form.email,
      name: "email",
      label: "Email Address",
      placeholder: "allen.johnson@example.com",
      id: "email-03",
    },
    {
      value: form.whatsApp,
      name: "whatsApp",
      label: "WhatsApp Number",
      placeholder: "(263) 771 154 299",
      id: "whatsAppNum-04",
    },
    {
      value: form.message,
      name: "message",
      label: "Your Message",
      placeholder: "Please describe your legal matter...",
      id: "message-05",
    },
  ];
  return (
    <form className="max-w-xl w-full glass-card py-6 px-5">
      <header>
        <h2 className="text-2xl lg:text-4xl text-[var(--color-text-on-primary)]!">
          Here to Help
        </h2>
        <p className="mt-0.5 text-[var(--color-text-on-primary)]! opacity-90">
          Fill out the form below and we’ll get back to you soon.
        </p>
      </header>
      <fieldset className="w-full grid md:grid-cols-2 gap-5 mt-4">
        {formData.map((field) => (
          <div
            key={field.id}
            className={`w-full ${field.name === "message" && "col-span-2"}`}
          >
            {field.name === "message" ? (
              <MessageField field={field} onChange={handleChange} />
            ) : (
              <InputField field={field} onChange={handleChange} />
            )}
          </div>
        ))}
      </fieldset>
      <div className="w-full mt-4 flex justify-end">
        <button
          type="submit"
          className="h-12 max-w-[12rem] w-full rounded-lg bg-[var(--color-primary)]"
        >
          Contact Us
        </button>
      </div>
    </form>
  );
};

const InputField = ({ field, onChange }: FieldProps) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={field.name} className="font-semibold mb-1">
        {field.label}{" "}
        <span className="text-[var(--color-error)] opacity-80">*</span>
      </label>
      <input
        type="text"
        value={field.value}
        onChange={onChange}
        name={field.name}
        id={field.name}
        placeholder={field.placeholder}
        className="w-full bg-[var(--color-bg-secondary)] h-12 rounded-lg border border-[var(--border)] pl-4"
      />
    </div>
  );
};
const MessageField = ({ field, onChange }: FieldProps) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={field.name} className="font-semibold mb-1">
        {field.label}{" "}
        <span className="text-[var(--color-error)] opacity-80">*</span>
      </label>
      <textarea
        value={field.value}
        onChange={onChange}
        name={field.name}
        id={field.name}
        placeholder={field.placeholder}
        rows={3}
        className="resize-none bg-[var(--color-bg-secondary)] w-full pl-5 pt-4 rounded-lg border border-[var(--border)]"
      ></textarea>
    </div>
  );
};
