import React from "react";

export const CheckBoxTest = ({ label, id, handleCheck, nomCategorie }) => {
  const handleChange = () => {
    handleCheck(nomCategorie, id);
  };
  return (
    <div className="flex gap-3">
      <label htmlFor={id} className="text-[1.2rem]">
        {label}
      </label>
      <input type="checkbox" id={id} onChange={handleChange} />
    </div>
  );
};
