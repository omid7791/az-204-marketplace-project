import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import WelcomeName from "./WelcomeName";
import SignInSignOutButton from "./SignInSignOutButton";

const NavBar = () => {
    return (
        <div sx={{ flexGrow: 1}}>
            <AppBar position="static">
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} fontWeight="bold">
                    AZ 204 - Online Marketplace
                </Typography>
                {/* <WelcomeName /> */}
                <SignInSignOutButton />
            </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;