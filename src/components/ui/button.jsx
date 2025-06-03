import React from "react";

const Button = ({ className = "", variant = "default", ...props }) => {
  let styles =
    "px-4 py-2 rounded-xl text-sm font-semibold transition shadow ";
  if (variant === "destructive") {
    styles += "bg-red-600 text-white hover:bg-red-700 ";
  } else if (variant === "outline") {
    styles += "border border-gray-400 bg-transparent hover:bg-gray-100 ";
  } else if (variant === "secondary") {
    styles += "bg-gray-200 hover:bg-gray-300 ";
  } else {
    styles += "bg-green-700 text-white hover:bg-green-800 ";
  }
  return (
    <button className={styles + className} {...props} />
  );
};

export { Button };
