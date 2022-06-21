import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {useNavigate} from 'react-router-dom';
import './filter.css'


const records = [
    { name: "Lord", total_point: 200, },
    { name: "Name", total_point: 2000}
];


export default function Club() {
    // const [search, setSearch] = useState("");
    const [filter, setFilter] = useState({ field: 'period', order: 'DESC' })


    const navigate = useNavigate();

    // async function ClubD(event) {
    //     event.preventDefault()

    //     const response = await fetch('http://localhost:8080/cre')
    // }
  

    const filteredRecords = records
        // .filter((record) => record.name.toLowerCase().startsWith(search.toLowerCase()))
        .sort((a, b) =>
            (a[filter.field] > b[filter.field])
                ? (filter.order === 'ASC') ? 1 : -1
                : (filter.order === 'ASC') ? -1 : 1
        );

    console.log(filteredRecords);
    return (
        <>
            {/* <div className='App'> */}
            <div className='App'>
                <div className="colortop">
                    <img src="Collecty'form.png" alt='' className="logo" />
                    <h1>Members</h1>
                    <img src='avatar.png' alt='' className='logos' />
                </div>
                <div className="search">
                    <br />
                   
                    <br />
                    <br />
                    <div className='allButton'>
                        <button style={{ backgroundColor: 'white', cursor:'pointer' }} onClick={() => setFilter({ field: 'name', order: (filter.order === 'ASC') ? 'DESC' : 'ASC' })}> Name <ArrowUpwardIcon sx={{fontSize: 14}}/></button>
                        <button style={{ backgroundColor: 'white', cursor:'pointer'}} onClick={() =>  setFilter({ field: 'total_point', order: (filter.order === 'ASC') ? 'DESC' : 'ASC' })}> Point <ArrowUpwardIcon sx={{fontSize: 14}}/></button>
                    </div>
                  


                </div>

                <div style={{ display: "flex", margin: "1rem 0" }}>
                    <div name='name' />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Nom</th>
                            <th>Point</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredRecords.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.avatar || <img src='avatar.png' alt='' className='logos'/>}</td>
                                    <td>{row.name || "--"}</td>
                                    <td>{row.total_point || "--"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        </>
    )
}