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
          <Typography variant="subtitle2" sx={{ mt: 1 }} gutterbottom>
            The Resources below may help keep you safe.{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ResourcesHeader;
