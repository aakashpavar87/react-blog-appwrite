import React, { useId } from "react";

const Select = React.forwardRef(
  ({ options, label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && <label htmlFor={id}></label>}
        <select
          id={id}
          {...props}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
          {options?.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
);

export default Select;
