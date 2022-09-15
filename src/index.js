import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import * as serviceWorker from './serviceWorker';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode >
);

serviceWorker.unregister();
