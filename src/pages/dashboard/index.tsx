import React from 'react';
import DashboardLayout from '../../component/dashboard.layout';
import UsersPage from '../Customers/users';


const Dashboard = () => {


  const logout = () => {
    console.log('out');
  };
  return (
    <DashboardLayout>
      <UsersPage/>
    </DashboardLayout>
  );
};

export default Dashboard;
