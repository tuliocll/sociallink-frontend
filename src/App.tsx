import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { store, persistor } from "./Store";
import Routes from "./routes";
import history from "./Services/history";

import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
