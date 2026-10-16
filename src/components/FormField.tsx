import type { ChangeEvent } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  error?: string;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
  autoComplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField = ({
  label,
  name,
  value,
  error,
  type = "text",
  multiline = false,
  autoComplete,
  onChange,
}: FormFieldProps) => {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const fieldClasses = `w-full rounded-lg border bg-zinc-900 px-4 py-3 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 ${
    error ? "border-red-400" : "border-zinc-700"
  }`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={fieldClasses}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={fieldClasses}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
