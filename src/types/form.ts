export const FormType = {
  Add: "add",
  UPDATE: "update",
} as const;
export type FormType = (typeof FormType)[keyof typeof FormType];
