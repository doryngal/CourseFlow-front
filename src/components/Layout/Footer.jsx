// components/Layout/Footer.jsx
import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from './Footer.module.css';

function Footer() {
    return (
        <AppBar position="static" className={styles.footer}>
            <Toolbar style={{ justifyContent: 'center' }}>
                <Typography variant="body1" className={styles.footerText}>
                    © {new Date().getFullYear()} ENUpik
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
