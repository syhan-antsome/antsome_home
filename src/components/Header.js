import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import Link from 'src/components/Link';

import CancelIcon from '@mui/icons-material/Cancel';

import logo_wPng from "/public/images/logos/logo_w.png";
import logo_bPng from "/public/images/logos/logo_b.png";

const AntSmMenuBlackButton = styled(Button)`
  color: #000;
  font-weight: bold;
  padding: 0;
  border-radius: 0;
  &:hover {
    background-color: transparent;
  };
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    bottom: -18px;
    left: 50%;
    transform: translate(-50%,0%);
    background-color: black;
    transform-origin: center;
    visibility: hidden;
    transition: all 0.5s ease-out;
  };
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`;

const AntSmMenuWhiteButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  padding: 0;
  border-radius: 0;
  &:hover {
    background-color: transparent;
    color: #0C254B;
  };
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    bottom: -18px;
    left: 50%;
    transform: translate(-50%,0%);
    background-color: #fff;
    transform-origin: center;
    visibility: hidden;
    transition: all 0.5s ease-out;
  };
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`;

const AntMdMenuBlackButton = styled(Button)`
  color: #000;
  font-weight: bold;
  padding: 0;
  border-radius: 0;
  &:hover {
    background-color: transparent;
  };
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    bottom: -32px;
    left: 50%;
    transform: translate(-50%,0%);
    background-color: black;
    transform-origin: center;
    visibility: hidden;
    transition: all 0.5s ease-out;
  };
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`;

const AntMdMenuWhiteButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  padding: 0;
  border-radius: 0;
  &:hover {
    background-color: transparent;
    color: #0C254B;
  };
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    bottom: -32px;
    left: 50%;
    transform: translate(-50%,0%);
    background-color: #fff;
    transform-origin: center;
    visibility: hidden;
    transition: all 0.5s ease-out;
  };
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`;

export default function Header(props) {

  const isWhite = props.isWhite ? props.isWhite : false;
  const borderStyle = isWhite ? { borderBottom: "1px solid #fff", position: "absolute", top: "0px", width: "100%" } :
    { borderBottom: "1px solid #000", position: "absolute", top: "0px", width: "100%" };
  const menuStyle = isWhite ? { color: "#fff", fontWeight: 600, padding: "0px" } :
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
            <Box onClick={toggleDrawer(anchor, false)} component={Link} noLinkStyle href={"/"}>
              <img src="/images/logo_t.png" alt="antsome" width="100px" height="14px" style={{ marginTop: 26 }} />
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
          {[['ABOUT US', '/aboutus'], ['PROJECTS', '/projects'], ['RECRUIT', '/recruit'], ['CONTACT', '/contactus']].map((m, index) => (
            <Box key={index} style={{ borderBottom: "2px solid #fff", height: "67px", paddingTop: "16px" }}>
              <Box style={{ width: "100%" }} component={Link} noLinkStyle href={m[1]}>
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
        <img src="/images/logo_t.png" alt="antsome" width="108px" height="14px" />
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
                {isWhite &&
                  <Image src={logo_wPng} alt="antsome" width="100%" />
                }
                {!isWhite &&
                  <Image src={logo_bPng} alt="antsome" width="100%" />
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
              {isWhite &&
                <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                  <AntSmMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/aboutus">ABOUT US</AntSmMenuWhiteButton>
                  <AntSmMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/projects">PROJECTS</AntSmMenuWhiteButton>
                  <AntSmMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/recruit">RECRUIT</AntSmMenuWhiteButton>
                  <AntSmMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/contactus">CONTACT</AntSmMenuWhiteButton>
                </Stack>
              }
              {!isWhite &&
                <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                  <AntSmMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/aboutus">ABOUT US</AntSmMenuBlackButton>
                  <AntSmMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/projects">PROJECTS</AntSmMenuBlackButton>
                  <AntSmMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/recruit">RECRUIT</AntSmMenuBlackButton>
                  <AntSmMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/contactus">CONTACT</AntSmMenuBlackButton>
                </Stack>
              }
            </Paper>
            <Paper elevation={0} style={{ border: 0, backgroundColor: "#ffffff00" }}
              sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              {isWhite &&
                <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                  <AntMdMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/aboutus">ABOUT US</AntMdMenuWhiteButton>
                  <AntMdMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/projects">PROJECTS</AntMdMenuWhiteButton>
                  <AntMdMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/recruit">RECRUIT</AntMdMenuWhiteButton>
                  <AntMdMenuWhiteButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/contactus">CONTACT</AntMdMenuWhiteButton>
                </Stack>
              }
              {!isWhite &&
                <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0} >
                  <AntMdMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/aboutus">ABOUT US</AntMdMenuBlackButton>
                  <AntMdMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/projects">PROJECTS</AntMdMenuBlackButton>
                  <AntMdMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/recruit">RECRUIT</AntMdMenuBlackButton>
                  <AntMdMenuBlackButton disableRipple={true} sx={{
                    marginLeft: { sm: "40px", md: "60px" },
                    fontSize: { sm: "18px", md: "20px" }
                  }} component={Link} noLinkStyle href="/contactus">CONTACT</AntMdMenuBlackButton>
                </Stack>
              }
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
