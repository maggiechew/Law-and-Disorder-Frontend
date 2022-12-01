import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResourcesHeader from "./ResourcesHeader";
import "./Resources.css";

function AdditionalResources() {
  return (
    <div>
      <ResourcesHeader />
      <div className="krang">
        <div className="resource-content">
        <TableContainer component={Paper}>
          <Table className="table-style">
            <TableHead>
              <TableRow>
                <TableCell>The table header</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>The table body</TableCell>   
              </TableRow>
            <TableRow>
            <TableCell>with two columns</TableCell>                
              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
        </div>
    </div>
    </div>
  );
}

export default AdditionalResources;
