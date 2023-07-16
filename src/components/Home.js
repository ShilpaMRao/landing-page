import React from "react";
import "../styles.css";

import { useEffect, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  AppBar,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FavoriteBooks from "./FavoriteBooks";

const Home = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(!checked);
  }, []);
  const [clickExpandIcon, setClickExpandIcon] = useState(false);
  const handleExpandIconClick = () => {
    setClickExpandIcon((prevState) => !prevState);
  };

  return (
    <div className="header" id="header">
      <AppBar className="appBar" elevation={0}>
        <Toolbar className="headerWrapper">
          <h1 className="appBarTitle">
            MyBook
            <span className="colortoSubtext">Shelf.</span>
          </h1>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeOut: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className="body">
          <p className="descText">
            Welcome to MyBook
            <span className="colortoSubTxt">Shelf.</span>
            <br />
            where stories come to life...
          </p>

          <IconButton onClick={handleExpandIconClick}>
            <ExpandMore className="downArrow" />
          </IconButton>
          {clickExpandIcon && <FavoriteBooks />}
          {/* {clickExpandIcon && <CardComponent />} */}
        </div>
      </Collapse>
    </div>
  );
};

export default Home;
