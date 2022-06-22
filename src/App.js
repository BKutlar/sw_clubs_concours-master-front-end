import React from 'react';
import './index.css'

//Pages

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateClub from './pages/createClub';
import CreateOrga from './pages/createOrga';
import Acceuil from './pages/Acceuil';
import Clubmembers from './pages/ClubMemebers';
import AllowJoinOrgs from './pages/AllowJoinClub';
import CreateEvent from './pages/createEvent';
//styled components

import { StyledContainer } from './components/Styles';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreContext } from './contexts/store.context';
import Club from './pages/Club';

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
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login setUser={setUser} />} /> {/*setUser={setUser}  */}
            <Route path='/register' element={<Register />} />
            <Route path='/createClub' element={<CreateClub />} />
            {/* <Route path='/createOrga' element={<CreateOrga />} /> */}
            <Route path='/club' element={<Club />} />
            <Route path='/Clubmembers' element={<Clubmembers/>}/>
            <Route path='/allowJoinOrgs' element={<AllowJoinOrgs/>}/>
            <Route path='/createEvent' element={<CreateEvent/>}/>
            {/* <Route path='/acceuil' element={<Acceuil user={user} />} /> *user={user} */}
          </Routes>
        </StyledContainer>
      </Router>
      <StoreContext.Provider />
    </>
  );
}

export default App;
