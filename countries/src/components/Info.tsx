import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Info: React.FunctionComponent<IProps> = ({ children }) => (
  <div className="mt-5 p-5 bg-gray-50 border border-gray-300 rounded-lg">
    <span className="text-gray-500">{children}</span>
  </div>
);
