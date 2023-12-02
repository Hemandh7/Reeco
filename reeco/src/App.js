import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Orders from './components/orders';
import Navbar from './components/Navbar';
import OrderDetails from './components/OrderDetails';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar/>
        <OrderDetails/>
        <Orders />
      </div>
    </Provider>
  );
};

export default App;