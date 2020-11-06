import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import JobList from "./components/JobList/JobList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <JobList />
        </Route>
        <Route path="/:jobId">job details</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
