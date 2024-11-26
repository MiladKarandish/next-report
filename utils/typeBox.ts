import { TSchema, Type } from "@sinclair/typebox";

// nullable
export const Nullable = <T extends TSchema>(schema: T, defaultValue?: any) =>
  Type.Union([Type.Null(), schema], { default: defaultValue ?? null });

// nullable or undefined
export const Maybe = <T extends TSchema>(schema: T) => Type.Optional(Type.Union([schema, Type.Null()]));

// string union
export function StringEnum<T extends string[]>(values: [...T], defaultValue?: string) {
  if (defaultValue)
    return Type.Unsafe<T[number]>({
      type: "string",
      enum: values,
      default: defaultValue,
    });
  return Type.Unsafe<T[number]>({ type: "string", enum: values });
}
