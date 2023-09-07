import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/Customers/users";
import Dashboard from "./pages/Customers/User";
import LoginPages from "./pages/login";
import User from "./pages/Customers/users/user";
import GuarantorsPage from "./pages/Customers/guarantors";
import LoansPage from "./pages/Customers/loans";
import DecisionPage from "./pages/Customers/decision";
import Savings from "./pages/Customers/savings";
import LoanRequest from "./pages/Customers/loan-request";
import WhiteListPage from "./pages/Customers/white-list";
import KarmaPage from "./pages/Customers/karma";
import OrganizationPage from "./pages/Businesses/organization";
import LoanProductPage from "./pages/Businesses/loans-products";
import SavingsProductsPage from "./pages/Businesses/savings-products";
import FeesCharge from "./pages/Businesses/fees-and-charge";
import ServicePage from "./pages/Businesses/service";
import TransactionsPage from "./pages/Businesses/transactions";
import ServiceAccountPage from "./pages/Businesses/service-account";
import SettlementPage from "./pages/Businesses/settlements";
import ReportPage from "./pages/Businesses/reports";
import PreferencesPage from "./pages/Settings/preference";
import FeesPricingPage from "./pages/Settings/fees-and-pricing";
import AuditLogsPage from "./pages/Settings/auditLogs";
import SystemMessagesPage from "./pages/Settings/systems-Messages";
import DashboardPagee from "./pages/main-dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<DashboardPagee />} />
        <Route path="/" element={<LoginPages />} />
        <Route path="/Users" element={<Dashboard />} />
        <Route path="/UsersDetails" element={<User />} />
        <Route path="/Guarantors" element={<GuarantorsPage />} />
        <Route path="/Loans" element={<LoansPage />} />
        <Route path="/Decision-Models" element={<DecisionPage />} />
        <Route path="/Savings" element={<Savings />} />
        <Route path="/Loan-Request" element={<LoanRequest />} />
        <Route path="/Whitelist" element={<WhiteListPage />} />
        <Route path="/Karma" element={<KarmaPage />} />
        <Route path="/Organization" element={<OrganizationPage />} />
        <Route path="/Loan-Product" element={<LoanProductPage />} />
        <Route path="/Savings-Product" element={<SavingsProductsPage />} />
        <Route path="/Fees-and-Service" element={<FeesCharge />} />
        <Route path="/Transactions" element={<TransactionsPage />} />
        <Route path="/Services" element={<ServicePage />} />
        <Route path="/Service-Account" element={<ServiceAccountPage />} />
        <Route path="/Settlement" element={<SettlementPage />} />
        <Route path="/Reports" element={<ReportPage />} />
        <Route path="/Preferences" element={<PreferencesPage />} />
        <Route path="/Fees-and-Pricing" element={<FeesPricingPage />} />
        <Route path="/Audit-Logs" element={<AuditLogsPage />} />
        <Route path="/Systems-Messages" element={<SystemMessagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
