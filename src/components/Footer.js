import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

import Link from 'next/link';

import logo_gPng from "/public/images/logos/logo_g.png";

const useStyles = makeStyles(theme => ({
  foot_text: {
    textDecoration: 'none',
    color: '#707070',
    '&:hover': {
      color: '#000'
    }
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box style={{ width: "100%", textAlign: "-webkit-center" }}>
      {/* 앤트썸 선 */}
      <Stack direction="row" spacing={0}>
        <Box elevation={0} style={{ width: "50%" }}
          sx={{
            height: { xs: 45, sm: 62, md: 103 },
            background: { xs: "url('/images/sun/sun_ml.png')", sm: "url('/images/sun/sun_tl.png')", md: "url('/images/sun/sun_wl.png')" },
          }}></Box>
        <Box style={{
          width: "100%",
          backgroundSize: "cover",
          border: "0px solid red"
        }} sx={{
          height: { xs: 45, sm: 62, md: 103 },
          minWidth: { xs: "375px", sm: "1024px", md: "1400px" },
          maxWidth: { xs: "376px", sm: "1025px", md: "1401px" },
          background: { xs: "url('/images/sun/sun_m.png')", sm: "url('/images/sun/sun_t.png')", md: "url('/images/sun/sun_w.png')" },
        }}></Box>
        <Box elevation={0} style={{ width: "50%" }}
          sx={{
            height: { xs: 45, sm: 62, md: 103 },
            background: { xs: "url('/images/sun/sun_mr.png')", sm: "url('/images/sun/sun_tr.png')", md: "url('/images/sun/sun_wr.png')" },
          }}></Box>
      </Stack>
      <Box style={{ textAlign: "right", display: "flex", flexDirection: "row-reverse" }} sx={{
        marginTop: { xs: "-30px", sm: "-40px", md: "-60px" },
        minWidth: { xs: "100%", sm: "1024px", md: "1400px" },
        maxWidth: { xs: "376px", sm: "1025px", md: "1401px" },
      }}>
        <Typography className={classes.foot_text}
          sx={{
            marginRight: { xs: "10px", sm: "0px", md: "0px" },
            marginLeft: { xs: "0px", sm: "27px", md: "32px" },
            fontSize: { xs: "15px", sm: "17px", md: "21px" },
          }} component={Link} href="/privaterule">개인정보처리방침</Typography>
        <Typography className={classes.foot_text}
          sx={{
            display: { xs: "none", sm: "block" },
            marginLeft: { xs: "10px", sm: "27px", md: "32px" },
            fontSize: { xs: "21px", sm: "17px", md: "21px" },
          }} component={Link} href="/contactus">CONTACT</Typography>
        <Typography className={classes.foot_text}
          sx={{
            display: { xs: "none", sm: "block" },
            marginLeft: { xs: "10px", sm: "27px", md: "32px" },
            fontSize: { xs: "21px", sm: "17px", md: "21px" },
          }} component={Link} href="/recruit">RECRUIT</Typography>
        <Typography className={classes.foot_text}
          sx={{
            display: { xs: "none", sm: "block" },
            marginLeft: { xs: "10px", sm: "27px", md: "32px" },
            fontSize: { xs: "21px", sm: "17px", md: "21px" },
          }} component={Link} href="/projects">PROJECTS</Typography>
        <Typography className={classes.foot_text}
          sx={{
            display: { xs: "none", sm: "block" },
            marginLeft: { xs: "10px", sm: "27px", md: "32px" },
            fontSize: { xs: "21px", sm: "17px", md: "21px" },
          }} component={Link} href="/aboutus">ABOUT US</Typography>
      </Box>

      {/* 하단의 앤트썸 로고 */}
      <Box sx={{
        marginTop: { xs: "70px", sm: "78px", md: "99px" },
        maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
        textAlign: { xs: "center", sm: "left", md: "left" },
        height: { xs: "15px", sm: "25px", md: "37px" }
      }}>
        <Image src={logo_gPng} alt="antsome" style={{ height: '100%', width: 'auto'}} />
      </Box>

      <Box style={{ color: "#707070", }} sx={{
        maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
        textAlign: { xs: "center", sm: "left", md: "left" },
      }}>
        <Typography style={{ fontWeight: "600", marginTop: 4 }} sx={{
          fontSize: { xs: "16px", sm: "28px", md: "40px" },
        }}>주식회사 앤트썸</Typography>
        <Box style={{ color: "#707070", }} sx={{
          marginTop: { xs: "8px", sm: "32px", md: "35px" }
        }}>
          <Typography sx={{ fontSize: { xs: "11px", sm: "18px", md: "20px" } }}>서울특별시 구로구 디지털로 288, 511호(구로동, 대륭포스트타워 1차)</Typography>
          <Typography sx={{ fontSize: { xs: "11px", sm: "18px", md: "20px" } }}>대표: 박경호 &nbsp; | &nbsp; 연락처: 02-2135-5538 &nbsp; | &nbsp; 이메일: service@antsome.com</Typography>
          <Typography sx={{ fontSize: { xs: "11px", sm: "18px", md: "20px" } }}>Copyright ⓒ Antsome All Rights Reserved.</Typography>
        </Box>
      </Box>

      <Box style={{ border: '0px solid red', height: 30 }}></Box>

    </Box >
  );
}
