import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Alert: React.FunctionComponent<IProps> = ({ children }) => (
  <div className="mt-5 p-3 bg-red-50 border border-red-500 rounded-lg">
    <span className="text-red-400">{children}</span>
  </div>
);
