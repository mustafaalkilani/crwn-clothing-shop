import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/authintaction/authintaction.compnent';


const Shop = () => {
  return(
    <div>
      <h1>Shop Page!!</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='authintaction' element={<Auth />} />
      </Route>
    </Routes>
  )
}
export default App;
