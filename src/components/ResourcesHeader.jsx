import React from "react";
import Typography from "@mui/material/Typography";

function ResourcesHeader() {
  return (
    <div className="resources">
      <div className="resource-header">
        <div className="page-title">
          <Typography variant="h3" gutterbottom>
            Additional Resources
          </Typography>
          <Typography variant="subtitle1" gutterbottom>
            Please check out these resources to see what's available online!
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ResourcesHeader;
