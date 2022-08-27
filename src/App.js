import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import * as Pages from "./components/pages";
import { LayoutRoute , EmptyLayout} from "./components/Layout";
import { History } from "./utilities/func";
const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};
class App extends Component {
  render() {
    return (
      <Router basename={getBasename()} history={History}>
        <Switch>
          <LayoutRoute
            exact
            path="/"
            layout={EmptyLayout}
            component={Pages.home}
            />
            <LayoutRoute
            exact
            path="/foodType"
            layout={EmptyLayout}
            component={Pages.foodType}
          />
           <LayoutRoute
            exact
            path="/form"
            layout={EmptyLayout}
            component={Pages.form}
          />
          <LayoutRoute
            exact
            path="/rooms"
            layout={EmptyLayout}
            component={Pages.rooms}
          />
          <LayoutRoute
            exact
            path="/facilities"
            layout={EmptyLayout}
            component={Pages.facilities}
          />
          <LayoutRoute
            exact
            path="/address"
            layout={EmptyLayout}
            component={Pages.address}
          />
          <LayoutRoute
            exact
            path="/pictures"
            layout={EmptyLayout}
            component={Pages.pictures}
          />
          <LayoutRoute
            exact
            path="/details"
            layout={EmptyLayout}
            component={Pages.details}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
