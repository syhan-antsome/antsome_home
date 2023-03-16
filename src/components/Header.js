import * as React from 'react';
import { makeStyles } from '@mui/styles';

import Image from 'next/image';

import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import CancelIcon from '@mui/icons-material/Cancel';

import logo_wPng from "/public/images/logos/logo_w.png";
import logo_bPng from "/public/images/logos/logo_b.png";
import logo_tPng from "/public/images/logos/logo_t.png";

const useStyles = makeStyles(theme => ({
  ant_md_menu_white_button: {
    color: '#fff',
    fontWeight: 'bold',
    padding: '0',
    borderRadius: '0',
    marginLeft: '60px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#0C254B',
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '0px',
      height: '4px',
      bottom: '-32px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: '#fff',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.5s ease-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%'
    }
  },
  ant_md_menu_black_button: {
    color: '#000',
    fontWeight: 'bold',
    padding: '0',
    borderRadius: '0',
    marginLeft: '60px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '0',
      height: '4px',
      bottom: '-32px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: '#000',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.5s ease-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%'
    }
  },
  ant_sm_menu_white_button: {
    color: '#fff',
    fontWeight: 'bold',
    padding: '0',
    borderRadius: '0',
    marginLeft: '40px',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#0C254B',
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '0',
      height: '4px',
      bottom: '-18px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: '#fff',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.5s ease-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%'
    }
  },
  ant_sm_menu_black_button: {
    color: '#000',
    fontWeight: 'bold',
    padding: '0',
    borderRadius: '0',
    marginLeft: '40px',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '0',
      height: '4px',
      bottom: '-18px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: '#000',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.5s ease-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%'
    }
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const whiteBtn = props.isWhite === true ? true : false;
  const borderStyle = whiteBtn ? { borderBottom: "1px solid #fff", position: "absolute", top: "0px", width: "100%" } :
    { borderBottom: "1px solid #000", position: "absolute", top: "0px", width: "100%" };
  const menuStyle = whiteBtn ? { color: "#fff", fontWeight: 600, padding: "0px" } :
    { color: "#000", fontWeight: 600, padding: "0px" };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const drawerMenuContent = (anchor) => (
    <Box style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Box style={{
          borderBottom: "2px solid #fff", height: "67px",
          padding: "0px 20px"
        }}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Box onClick={toggleDrawer(anchor, false)} component={Link} href={"/"}>
              <Image src={logo_tPng} alt="antsome" style={{ marginTop: 26, width: '100%', height: '14px' }} />
            </Box>
            <CancelIcon style={{ marginTop: "15px", color: "#fff", fontSize: "40px" }} onClick={toggleDrawer(anchor, false)}></CancelIcon>
          </Box>
        </Box>
        <Box
          style={{ width: "100%", color: "#fff" }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          {[['ABOUT US', '/aboutus'], ['SERVICES', '/services'], ['RECRUIT', '/recruit'], ['CONTACT', '/contactus']].map((m, index) => (
            <Box key={index} style={{ borderBottom: "2px solid #fff", height: "67px", paddingTop: "16px" }}>
              <Box style={{ width: "100%" }} component={Link} href={m[1]}>
                <Typography
                  style={{
                    marginLeft: "20px",
                    color: "#fff", fontSize: "25px", fontWeight: 800
                  }}>{m[0]}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        style={{ width: "100%", color: "#fff", marginLeft: "20px" }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Image src={logo_tPng} alt="antsome" style={{ width: '108px', height: '14px' }} />
        <Typography style={{ color: "#fff", fontSize: "17px", fontWeight: 700, marginTop: "-3px" }}>주식회사 앤트썸</Typography>
        <Typography style={{ color: "#fff", fontSize: "13px", marginTop: "15px" }}>
          서울특별시 구로구 디지털로 288, 511호<br />(구로동, 대륭포스트타워 1차)
        </Typography>
        <Typography style={{ color: "#fff", fontSize: "13px", marginBottom: "45px" }}>
          02-2135-5538 service@antsome.com
        </Typography>
      </Box>
    </Box>
  );


  return (
    <Box style={borderStyle}
      sx={{
        height: { xs: "60px", sm: "68px", md: "98px" }
      }}
    >
      <Drawer
        style={{ backgroundColor: "#12366E" }}
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        PaperProps={{
          style: { backgroundColor: "#12366E" },
          sx: { width: "100%" },
        }}
      >
        {drawerMenuContent('right')}
      </Drawer>
      <Box style={{ border: "0px solid red" }}
        sx={{
          maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
          paddingLeft: { xs: "20px", sm: "50px", md: "0px" }
        }}>
        <Grid container spacing={0} direction="row" justifyContent="space-between" alignItems="flex-start">
          <Grid item xs={4} style={{ textAlign: "left" }}
            sx={{
              paddingTop: { xs: "23px", sm: "24px", md: "29px" }
            }}>
            <Box sx={{
              width: { xs: "100px", sm: "180px", md: "265px" }
            }}><Link href="/" color="primary">
                {whiteBtn &&
                  <Image src={logo_wPng} alt="antsome" style={{width: '100%', height: 'auto'}} />
                }
                {!whiteBtn &&
                  <Image src={logo_bPng} alt="antsome" style={{width: '100%', height: 'auto'}} />
                }
              </Link>
            </Box>
          </Grid>
          <Grid item xs={8} style={{ textAlign: "right" }}
            sx={{
              paddingTop: { xs: "16px", sm: "21px", md: "34px" },
              paddingRight: { xs: "20px", sm: "0px", md: "0px" }
            }}>
            <Paper elevation={0} style={{ border: "0px solid green", backgroundColor: "#ffffff00" }}
              sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton aria-label="delete" style={menuStyle} onClick={toggleDrawer('right', true)}>
                <MenuIcon />
              </IconButton>
            </Paper>
            <Paper elevation={0} style={{ border: 0, backgroundColor: "#ffffff00" }}
              sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
              {whiteBtn && <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                <Button className={classes.ant_sm_menu_white_button} disableRipple={true} component={Link} href="/aboutus">ABOUT US</Button>
                <Button className={classes.ant_sm_menu_white_button} disableRipple={true} component={Link} href="/services">SERVICES</Button>
                <Button className={classes.ant_sm_menu_white_button} disableRipple={true} component={Link} href="/recruit">RECRUIT</Button>
                <Button className={classes.ant_sm_menu_white_button} disableRipple={true} component={Link} href="/contactus">CONTACT</Button>
              </Stack>
              }
              {!whiteBtn && <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                <Button className={classes.ant_sm_menu_black_button} disableRipple={true} component={Link} href="/aboutus">ABOUT US</Button>
                <Button className={classes.ant_sm_menu_black_button} disableRipple={true} component={Link} href="/services">SERVICES</Button>
                <Button className={classes.ant_sm_menu_black_button} disableRipple={true} component={Link} href="/recruit">RECRUIT</Button>
                <Button className={classes.ant_sm_menu_black_button} disableRipple={true} component={Link} href="/contactus">CONTACT</Button>
              </Stack>
              }
            </Paper>
            <Paper elevation={0} style={{ border: 3, backgroundColor: "#ffffff00" }}
              sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              {whiteBtn && <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                <Button className={classes.ant_md_menu_white_button} disableRipple={true} component={Link} href="/aboutus">ABOUT US</Button>
                <Button className={classes.ant_md_menu_white_button} disableRipple={true} component={Link} href="/services">SERVICES</Button>
                <Button className={classes.ant_md_menu_white_button} disableRipple={true} component={Link} href="/recruit">RECRUIT</Button>
                <Button className={classes.ant_md_menu_white_button} disableRipple={true} component={Link} href="/contactus">CONTACT</Button>
              </Stack>
              }
              {!whiteBtn && <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                <Button className={classes.ant_md_menu_black_button} disableRipple={true} component={Link} href="/aboutus">ABOUT US</Button>
                <Button className={classes.ant_md_menu_black_button} disableRipple={true} component={Link} href="/services">SERVICES</Button>
                <Button className={classes.ant_md_menu_black_button} disableRipple={true} component={Link} href="/recruit">RECRUIT</Button>
                <Button className={classes.ant_md_menu_black_button} disableRipple={true} component={Link} href="/contactus">CONTACT</Button>
              </Stack>
              }
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
