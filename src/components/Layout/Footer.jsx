// components/Layout/Footer.jsx
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
    return (
        <AppBar position="static" color="default">
            <Toolbar style={{ justifyContent: 'center' }}>
                <Typography variant="body1" color="textSecondary">
                    © {new Date().getFullYear()} MyCourses
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;