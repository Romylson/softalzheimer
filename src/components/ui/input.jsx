import * as React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={
        "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 " +
        className
      }
      {...props}
    />
  );
}
