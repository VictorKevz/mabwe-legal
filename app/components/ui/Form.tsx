"use client";
import {
  EmptyFormState,
  FormField,
  FormState,
  OnChangeType,
} from "@/app/types/form";
import React, { useCallback, useState } from "react";
import { InputField } from "./InputField";
import { MessageField } from "./MessageField";

export const Form = () => {
  const [form, setForm] = useState<FormState>(EmptyFormState);
  const [errors, setErrors] = useState<FormState>(EmptyFormState);

  const handleChange = useCallback(
    (e: OnChangeType) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name as keyof FormState]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );

  const handleValidation = (): boolean => {
    const newErrors: FormState = { ...EmptyFormState };

    for (const [fieldName, fieldValue] of Object.entries(form)) {
      const key = fieldName as keyof FormState;
      const value = fieldValue.trim();

      // Common validation: required field
      if (!value) {
        newErrors[key] = `${
          fieldName.charAt(0).toUpperCase() +
          fieldName.slice(1).replace(/([A-Z])/g, " $1")
        } is required`;
        setErrors(newErrors);
        return false;
      }

      // Field-specific validation
      switch (key) {
        case "firstName":
        case "lastName":
          if (value.length < 2) {
            newErrors[key] = `${
              key === "firstName" ? "First" : "Last"
            } name must be at least 2 characters`;
            setErrors(newErrors);
            return false;
          }
          if (!/^[a-zA-Z\s'-]+$/.test(value)) {
            newErrors[key] = `${
              key === "firstName" ? "First" : "Last"
            } name can only contain letters, spaces, apostrophes, and hyphens`;
            setErrors(newErrors);
            return false;
          }
          break;

        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            newErrors[key] = "Please enter a valid email address";
            setErrors(newErrors);
            return false;
          }
          break;

        case "phone":
          const phoneDigits = value.replace(/\D/g, "");
          if (phoneDigits.length < 10) {
            newErrors[key] = "Phone number must be at least 10 digits";
            setErrors(newErrors);
            return false;
          }
          if (phoneDigits.length > 15) {
            newErrors[key] = "Phone number cannot exceed 15 digits";
            setErrors(newErrors);
            return false;
          }
          break;

        case "message":
          if (value.length < 10) {
            newErrors[key] = "Message must be at least 10 characters";
            setErrors(newErrors);
            return false;
          }
          if (value.length > 1000) {
            newErrors[key] = "Message cannot exceed 1000 characters";
            setErrors(newErrors);
            return false;
          }
          break;
      }
    }

    // All validations passed
    setErrors(newErrors);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (handleValidation()) {
      console.log("Form submitted:", form);
    } else {
      console.log("Form has errors:", errors);
    }
  };

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
      value: form.phone,
      name: "phone",
      label: "Phone Number",
      placeholder: "(263) 771 154 299",
      id: "phoneNum-04",
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
    <form
      className="max-w-xl w-full glass-card py-6 px-5"
      onSubmit={handleSubmit}
    >
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
              <MessageField
                field={field}
                onChange={handleChange}
                error={errors[field.name as keyof FormState]}
              />
            ) : (
              <InputField
                field={field}
                onChange={handleChange}
                error={errors[field.name as keyof FormState]}
              />
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
