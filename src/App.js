import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/signIn/signIn.component'
import SignUp from './routes/signUp/signUp.component'
import { Routes, Route } from 'react-router-dom';
import Shop from './routes/shop/shop.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Route>

    </Routes>
  );
}

export default App;
