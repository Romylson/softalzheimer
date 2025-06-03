import * as React from "react";

export function Card({ className, ...props }) {
  return (
    <div
      className={
        "rounded-2xl border bg-white shadow-md p-4 " +
        (className || "")
      }
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div className={"p-0 " + (className || "")} {...props} />
  );
}
