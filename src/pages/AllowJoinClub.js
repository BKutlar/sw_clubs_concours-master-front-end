import React, {useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Switch from '@mui/material/Switch';
import {Form} from 'formik';
import './filter.css';


export default function AllowJoinOrgs() {

    const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmdTVSIsImlhdCI6MTY1NTY0MDY0M30.P2Tzrn9FM1uqlZFvOMsP_dMU8U6DPF6e4HMOqHM86wk');



var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };



    useEffect(() => {
        fetch("http://localhost:8080/api/memberOrga", myInit)
        .then((response) => response.json())
        .then((data) => console.log(data));
        });
    


        

 


    const [users, setUsers] = useState([
        {mail : "abc@abc.com",pass:"abc", nom:"Robert", prenom:"Mike", pseudo:"Mike123",role:"utilisateur",orgs:"BrayanCorp", id:0, canJoin: false,isAllowedToJoinOtherOrgs:1 },
        {mail : "def@abc.com",pass:"abc", nom:"Bice", prenom:"Pete", pseudo:"student65",role:"ADMI",orgs:"BrayanCorp", id:1, canJoin: true,isAllowedToJoinOtherOrgs:0 },
        {mail : "TRTT@abc.com",pass:"abc", nom:"BLMIKice", prenom:"Nick", pseudo:"Robery568",role:"ADMI",orgs:"BrayanCorp", id:2, canJoin: true,isAllowedToJoinOtherOrgs:0},
        {mail : "FGHTHdef@abc.com",pass:"abc", nom:"PPRI", prenom:"Sloane", pseudo:"Alme",role:"ADMI",orgs:"BrayanCorp", id:3, canJoin: true,isAllowedToJoinOtherOrgs:0 }
      ]);
      const [search, setSearch] = useState("");
      const [filter, setFilter] = useState({ field: 'period', order: 'DESC' });
  
  
  
  
      const filteredUsers = users
          .filter((user) => user.nom.startsWith(search))
          .sort((a, b) =>
              (a[filter.field] > b[filter.field])
                  ? (filter.order === 'ASC') ? 1 : -1
                  : (filter.order === 'ASC') ? -1 : 1
          );
  
      console.log(filteredUsers);
      return <>
          {/* <div className='App'> */}
          <div className='App'>
                <div className="colortop">
                    <img src="Collecty'form.png" alt='' className="logo" />
                    <h1>Allow Joins Other Club</h1>
                    <img src='avatar.png' alt='' className='logos' />
                </div>
              <div className="search">
                  <br />
                  <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      label="Search"
                      onChange={(event) => setSearch(event.target.value)}
                      style={{ display: 'flex', flexDirection: 'row', width: '350px', flexWrap: 'nowrap', justifyContent: 'flex-start', alignItems: 'center', alignContent: 'stretch' }}
                  />
                  <br />
                  <br />
                  <div className='allButton'>
                      <button style={{ backgroundColor: 'white', cursor:'pointer' }} onClick={() => setFilter({ field: 'nom', order: (filter.order === 'ASC') ? 'DESC' : 'ASC' })}> Name <ArrowUpwardIcon /></button>
                      <button style={{ backgroundColor: 'white', cursor:'pointer'}} onClick={() =>  setFilter({ field: 'prenom', order: (filter.order === 'ASC') ? 'DESC' : 'ASC' })}> Can Join Other <ArrowUpwardIcon /></button>
                  </div>
                
  
  
              </div>
  
              <div style={{ display: "flex", margin: "1rem 0" }}>
                  <div name='nom' />
              </div>
  
              <table>
                  <thead>
                      <tr>
                          <th>Nom</th>
                          <th>Prenom</th>
                          <th>Peut rejoindre autre club</th>
                      </tr>
                  </thead>
  
                  <tbody>
                      {filteredUsers.map((row, index) => {
                          
                          return (
                              <tr key={index}>
                                  <td>{row.nom || "--"}</td>
                                  <td>{row.prenom || "--"}</td>
                                  <td>
                                  <Switch checked={row.canJoin} onClick={() => setUsers((users) => users.map((user) => (user.id === row.id) ? { ...row, canJoin: !row.canJoin } : user ))}>
                                      change
                                  </Switch>
                                  {row.canJoin ? 'Oui' : 'Non'}
                                  </td>
  
                                 
                              </tr>
                          );
                      })}
                  </tbody>
              </table>
  
          </div>
      </>;
  

    
}