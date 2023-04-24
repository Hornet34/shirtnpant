import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component'
import SignUp from './routes/sign-up/sign-up.component'
import { Routes, Route } from 'react-router-dom';
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>

    </Routes>
  );
}

export default App;
