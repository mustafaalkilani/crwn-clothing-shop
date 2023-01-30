import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/authintaction/authintaction.compnent';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='authintaction' element={<Auth />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  )
}
export default App;
