import React, { useEffect } from 'react';

const Message = ({ type, message }) => {
  useEffect(() => {
    const error = document.querySelector('.alert');

    setTimeout(() => {
      error.style.display = 'none';
    }, 2000);
  }, []);
  return <div className={`alert alert-${type}`}>{message}</div>;
};

export default Message;
