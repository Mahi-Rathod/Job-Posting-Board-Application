import { useState } from 'react';
import CreateInterview from '../Pages/CreateInterview';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
