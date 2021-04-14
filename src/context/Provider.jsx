import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isdisabled, setIsdisabled] = useState(true);

  useEffect(() => {
    const checkEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
    const checkPassword = /^(?=.*?[0-9]).{8,}$/i.test(password);
    if (checkEmail === true && checkPassword === true) {
      setIsdisabled(false);
    } else {
      setIsdisabled(true);
    }
  }, [email, password]);
  const contextValue = {
    id,
    setId,
    email,
    setEmail,
    password,
    setPassword,
    isdisabled,
    setIsdisabled,
  };

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default Provider;
