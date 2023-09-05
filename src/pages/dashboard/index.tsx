import React from 'react';
import DashboardLayout from '../../component/dashboard.layout';
import UsersPage from '../Customers/users';
import UserDetails from '../Customers/users/userDetails';
import LoginPages from '../login';


const Dashboard = () => {

  return (
    <DashboardLayout>
      <UsersPage/>
    </DashboardLayout>
  );
};

export default Dashboard;
