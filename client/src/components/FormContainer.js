import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className="container">
      <div className="login-form">{children}</div>
    </div>
  );
};

export default FormContainer;
