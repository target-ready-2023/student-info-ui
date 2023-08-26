import React, { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || '');
  const [studentId, setStudentId] = useState(localStorage.getItem('studentId') || '');

  useEffect(() => {
    localStorage.setItem('userRole', userRole);
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem('studentId', studentId);
  }, [studentId]);

  return (
    <RoleContext.Provider value={{ userRole, setUserRole, studentId, setStudentId }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => {
  return useContext(RoleContext);
};
