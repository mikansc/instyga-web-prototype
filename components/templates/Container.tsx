import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="container mx-auto h-100"
      style={{
        paddingTop: "60px",
      }}
    >
      {children}
    </div>
  );
};
