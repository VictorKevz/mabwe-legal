import { FieldProps } from "@/app/types/form";

export const MessageField = ({ field, onChange, error }: FieldProps) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={field.name}
        className="font-semibold mb-1 text-[var(--color-text-on-primary)]"
      >
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
        className={`resize-none bg-[var(--color-bg-faded)] w-full pl-5 pt-4 rounded-lg border text-[var(--color-text-on-primary)] placeholder:text-[var(--color-text-on-primary)] placeholder:opacity-70 ${
          error
            ? "border-[var(--color-error)] focus:border-[var(--color-error)]"
            : "border-[var(--border)] focus:border-[var(--color-accent)]"
        }`}
      ></textarea>
      {error && (
        <span className="text-[var(--color-error)] text-sm mt-1 opacity-90">
          {error}
        </span>
      )}
    </div>
  );
};
