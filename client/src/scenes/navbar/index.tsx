// Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme, MenuItem, Menu, Button } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import { transactions as familyMember1Transactions } from "../../data/data"; // Import transactions for family member 1
import { kpis as familyMember2Kpis } from "../../data/data2"; // Import KPIs for family member 2

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Define family members
  const familyMembers = [
    { name: "Family Member 1", data: familyMember1Transactions },
    { name: "Family Member 2", data: familyMember2Kpis },
    // Add more family members as needed
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchUser = (name: string, data: any) => {
    // You can implement logic to switch user here
    // For now, let's just log the selected user's data
    console.log(`Switched to ${name}:`, data);
    handleClose();
  };

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          MYM
        </Typography>
      </FlexBetween>
      
      <FlexBetween gap="2rem">
        {/* Dropdown menu to switch users */}
        <Button
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
          sx={{ textTransform: "none" }}
        >
          Switch User
        </Button>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {familyMembers.map((member, index) => (
            <MenuItem key={index} onClick={() => handleSwitchUser(member.name, member.data)}>
              {member.name}
            </MenuItem>
          ))}
        </Menu>

        {/* Render links for dashboard and predictions */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
