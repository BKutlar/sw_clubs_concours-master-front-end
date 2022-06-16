import React from 'react';

//Pages

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateClub from './pages/createClub';
import CreateOrga from './pages/createOrga';
import Acceuil from './pages/Acceuil';

//styled components

import {StyledContainer} from './components/Styles';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreContext } from './contexts/store.context';

function App() {
  const [user, setUser] = React.useState({});
console.log(StoreContext)
  return (
    <>

      <div className='front' />
      <StoreContext.Provider value={{ user, setUser }} />
      <Router>
          <StyledContainer>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login setUser={setUser}/>}/> {/*setUser={setUser}  */}
              <Route path='/register' element={<Register/>}/>
              <Route path='/createClub' element={<CreateClub />}/>
              <Route path='/createOrga' element={<CreateOrga />}/>
              <Route path='/acceuil' element={<Acceuil  user={user}/>}/> {/**user={user} */}
            </Routes>
          </StyledContainer>
        </Router>
      <StoreContext.Provider />
    </>
  );
}

export default App;
