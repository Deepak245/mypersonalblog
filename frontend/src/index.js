import React from 'react';
import ReactDOM from "react-dom/client";

//related to redux
import { Provider } from 'react-redux';
import store from "./store";


import App from './App';

import {Container} from '@mui/material';





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <React.StrictMode>
  
  
  <Provider store={store}>
  <Container maxWidth="lg"  >
      <App/>
  </Container>
  </Provider>
  </React.StrictMode>

  
);


