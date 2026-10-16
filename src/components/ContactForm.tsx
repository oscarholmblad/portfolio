import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormField from "./FormField";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (values.name.trim() === "") {
    errors.name = "Fyll i ditt namn";
  }

  if (values.email.trim() === "") {
    errors.email = "Fyll i din e-postadress";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Skriv en giltig e-postadress, t.ex. namn@exempel.se";
  }

  if (values.phone.trim() === "") {
    errors.phone = "Fyll i ditt telefonnummer";
  }

  if (values.subject.trim() === "") {
    errors.subject = "Fyll i ett ämne";
  }

  if (values.message.trim() === "") {
    errors.message = "Skriv ett meddelande";
  }

  return errors;
};

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: undefined });
    setIsSent(false);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSent(true);
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Namn"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <FormField
          label="E-post"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <FormField
          label="Telefon"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
        <FormField
          label="Ämne"
          name="subject"
          value={values.subject}
          error={errors.subject}
          onChange={handleChange}
        />
      </div>

      <FormField
        label="Meddelande"
        name="message"
        multiline
        value={values.message}
        error={errors.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full cursor-pointer rounded-full bg-accent px-6 py-3 font-semibold text-zinc-950 transition-colors hover:bg-accent-strong sm:w-auto"
      >
        Skicka meddelande
      </button>

      {isSent && (
        <p
          role="status"
          className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-accent"
        >
          Tack! Ditt meddelande är skickat. Jag hör av mig så snart jag kan.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
