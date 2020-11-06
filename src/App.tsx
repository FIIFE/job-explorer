import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import JobDetails from "./components/JobDetails/JobDetails";
import JobList from "./components/JobList/JobList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <JobList />
        </Route>
        <Route path="/:jobId">
          <JobDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
