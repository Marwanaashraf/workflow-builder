interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  formik: any;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
}

export default function FormField({
  label,
  name,
  type = "text",
  textarea,
  formik,
  placeholder,
  readOnly = false,
  required,
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label className={"capitalize font-semibold"} htmlFor={name}>
        {label}
      </label>

      <div className="relative">
        {textarea ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            className={"w-full h-24 py-3 form-input"}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            autoComplete={name}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            readOnly={readOnly}
            required={required}
            className={"w-full h-10 pr-10 form-input"}
          />
        )}
      </div>
    </div>
  );
}
