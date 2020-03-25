import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Common/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboard/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpense/AddExpensePage";
import EditExpensePage from "../components/EditExpense/EditExpensePage";
import HelpPage from "../components/Help/HelpPage";
import NotFoundPage from "../components/Common/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} exact />
        <Route path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={NotFoundPage} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;