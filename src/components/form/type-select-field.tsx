"use client";

import { cn } from "@/utils";
import { useField } from ".";

type Props = {
  name: string;
  onChange?: (value: string) => void;
  required?: boolean;
  options: { value: string; label: string }[];
};

const TypeSelectField = ({
  name,
  onChange: $onChange,
  options,
  required,
}: Props) => {
  const { onChange, error, value } = useField(name);

  return (
    <div>
      <div className="relative mt-1 rounded-md">
        <div
          className={cn(
            "flex items-center border rounded-full p-[1px] bg-gray-50",
            error && "border-red-200",
          )}
        >
          {options.map((item) => (
            <button
              type="button"
              key={item.value}
              onClick={() => onChange(item.value)}
              className={cn(
                "w-1/2 p-2 rounded-full",
                value === item.value ? "bg-white border" : "",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {error && (
        <p id="email-error" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

TypeSelectField.displayName = "TypeSelectField";

export default TypeSelectField;
