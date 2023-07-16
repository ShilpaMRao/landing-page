import React from "react";
import "../styles.css";
import { Box, Grid } from "@mui/material";
import { DataList } from "../data/data";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";

const FavoriteBooks = (checked) => {
  return (
    <Box sx={{ overflowY: "scroll", maxHeight: "100vh" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",

          width: "100%",
        }}
      >
        {DataList.map((list) => (
          <Grid item key={list.id} xs={12} sm={8} md={4}>
            <Collapse in={checked} {...(checked ? { timeOut: 1000 } : {})}>
              <Card
                sx={{
                  marginLeft: "45px",
                  marginRight: "25px",
                  marginBottom: "25px",
                  maxWidth: 350,
                  minHeight: 400,
                  ":hover": {
                    boxShadow: 20,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 310 }}
                  src={list.image}
                  alt={list.name}
                />
                <CardContent sx={{ bgcolor: "beige" }}>
                  <Typography
                    className="cardContent"
                    sx={{
                      fontSize: "15px",
                      color: "gray",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {list.name}
                  </Typography>
                  <Typography
                    className="cardContent"
                    variant="body2"
                    sx={{
                      fontSize: "15px",
                      color: "gray",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {list.description}
                  </Typography>
                </CardContent>
              </Card>
            </Collapse>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FavoriteBooks;
