import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        className="footer"
        sx={{
          textAlign: "center",
          bgcolor: "rgb(0,0,0,0.5)",
          color: "white",
          p: 3,
        }}
      >
        <Typography
          variant="body2"
          sx={{ "@media: (max-width:600)": { fontSize: "10px" } }}
        >
          My love for reading reflects in my writings. This is the link to my
          blog page.
        </Typography>
        <Link to="https://shilpa-musings.blogspot.com/" className="linktoblog">
          <Typography color={"black"} fontSize={"20px"} fontWeight={"bold"}>
            My Blog Page
          </Typography>
        </Link>
        <Routes>
          <Route
            path="https://shilpa-musings.blogspot.com/"
            element={"https://shilpa-musings.blogspot.com/"}
          />
        </Routes>
      </Box>
    </>
  );
};

export default Footer;
