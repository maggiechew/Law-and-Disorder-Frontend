import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ResourcesHeader from "./ResourcesHeader";
import "./Resources.css";

function AdditionalResources() {
  return (
    <div className="ur-mom">
      <ResourcesHeader />
      <div className="krang">
        <iframe
          title="mypage"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnKwPx18oS1Em_FHu6-xa8_wWGPLFwsBw_LPAY26vbEdumipcSVNshEtfctCQgiw/pubhtml?widget=true&amp;headers=false"
        ></iframe>
      </div>
    </div>
  );
}

export default AdditionalResources;
