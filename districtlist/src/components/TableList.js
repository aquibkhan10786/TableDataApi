import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const TableList = () => {
  const url = "https://fpcmis.demoquaeretech.in/api/districtlist";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.post(url).then((res) => 
    {
        if(res.data.status ===200){
            console.log("data from api success",res.data)
        setData(res.data.data)
        }else{
            console.log("data from api failed",res.data)
            setData([])
        }
        
    }).catch((err)=>{
        console.log("Error",err)
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>District Name</TableCell>
            <TableCell align="right">State Name</TableCell>
            <TableCell align="right">District Id</TableCell>
            <TableCell align="right">State Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((list) => (
            <TableRow
              key={list.district_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{list.district_name}</TableCell>
              <TableCell align="right">{list.state_name}</TableCell>
              <TableCell align="right">{list.district_id}</TableCell>
              <TableCell align="right">{list.state_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
