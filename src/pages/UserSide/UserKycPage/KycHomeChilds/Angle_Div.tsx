import React from "react";
import { Box, Button, Typography } from "@mui/material";

const AngledDivMUI = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        // maxWidth: "900px",
        margin: "50px auto",
        height:"330px",
        // border: "1px solid #ddd",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* Left Section with Angled Background */}
      <Box
        sx={{
          width: "60%",
          height: "100%",
          backgroundColor: "#ffe5e5", // light red
          maxWidth:"90%",
          padding: "20px",
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)", // Custom angle
        }}
      >
        <Typography variant="h6" sx={{ color: "red", fontWeight: "bold" }}>
          YOUR KYC IS REJECTED
        </Typography>
        <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
          We are currently reviewing your submitted documents. This process may
          take up to [expected time, e.g., 24-48 hours]. Thank you for your
          patience.
        </Typography>
        <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
          For any queries, please contact [support email or hotline].
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff4b4b",
            color: "white",
            marginTop: "15px",
            ":hover": { backgroundColor: "#e33e3e" },
          }}
        >
          REVIEW YOUR KYC
        </Button>
      </Box>

      {/* Right Section with Image */}
      <Box
        sx={{
          width: "35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        //   padding: "20px",
        }}
      >
        <img
          src="https://via.placeholder.com/200"
          alt="Stack of clothes"
          style={{ borderRadius: "8px", maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default AngledDivMUI;
