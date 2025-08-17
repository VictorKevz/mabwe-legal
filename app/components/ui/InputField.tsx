import { FieldProps } from "@/app/types/form";

export const InputField = ({ field, onChange, error }: FieldProps) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={field.name}
        className="font-semibold mb-1 text-[var(--color-text-on-primary)]"
      >
        {field.label}{" "}
        <span className="text-[var(--color-error)] opacity-80">*</span>
      </label>
      <input
        type={
          field.name === "email"
            ? "email"
            : field.name === "phone"
            ? "tel"
            : "text"
        }
        value={field.value}
        onChange={onChange}
        name={field.name}
        id={field.name}
        placeholder={field.placeholder}
        className={`w-full bg-[var(--color-bg-faded)] h-12 rounded-lg border pl-4 placeholder:text-[var(--color-text-on-primary)] text-[var(--color-text-on-primary)] placeholder:opacity-70 ${
          error
            ? "border-[var(--color-error)] focus:border-[var(--color-error)]"
            : "border-[var(--border)] focus:border-[var(--color-accent)]"
        }`}
      />
      {error && (
        <span className="text-[var(--color-error)] text-sm mt-1 opacity-90">
          {error}
        </span>
      )}
    </div>
  );
};
