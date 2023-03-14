import * as React from 'react';
import { makeStyles } from '@mui/styles';

import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import Link from 'next/link';

import booksomePng from "public/images/portfolio/booksome.png";
import busPng from "public/images/portfolio/bus.png";
import freshPng from "public/images/portfolio/fresh.png";
import gymsomePng from "public/images/portfolio/gymsome.png";
import homePng from "public/images/portfolio/home.png";
import husomePng from "public/images/portfolio/husome.png";
import jjinPng from "public/images/portfolio/jjin.png";
import korexPng from "public/images/portfolio/korex.png";
import linksomePng from "public/images/portfolio/linksome.png";
import plantPng from "public/images/portfolio/plant.png";
import samsungPng from "public/images/portfolio/samsung.png";
import smartsuitPng from "public/images/portfolio/smartsuit.png";
import tcarPng from "public/images/portfolio/tcar.png";

const useStyles = makeStyles(theme => ({
  link_button: {
    border: '2px solid #0C254B',
    padding: '10px 30px 10px 30px',
    color: '#000',
    fontWeight: '800',
    backgroundColor: '#fff0',
    textAlign: 'center',
    borderRadius: '46px',
    '&:hover': {
      backgroundColor: '#0C254B',
      color: '#fff'
    }
  },
}));

const getProjectCard = (pImg, propObj, index, st) => {
  return <Grid key={index} style={{ height: "100%" }} spacing={1} container direction="row" justifyContent="center" alignItems="flex-start">
    <Grid item xs={12} sm={6}>
      <Paper elevation={0} style={{ border: "0px solid red", background: "#ffffff00" }} sx={{
        marginTop: { xs: "119px", sm: "183px", md: "150px" },
        width: { xs: "100%", sm: "466px", md: "700px" },
        height: { xs: "100%", sm: "306px", md: "460px" },
      }}>
        <Image src={pImg} alt={propObj.name} style={{ width: '100%', height: 'auto'}} />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box style={{ border: "0px solid red" }}
        sx={{
          textAlign: { xs: "center", sm: "left", md: "left" },
          marginLeft: { xs: "0px", sm: "30px", md: "100px" },
          marginTop: { xs: "20px", sm: "213px", md: "250px" },
        }}>
        <Typography style={{ fontWeight: "bold", color: "#0C254B" }}
          sx={{
            fontSize: { xs: "25px", sm: "35px", md: "50px" },
          }}>{propObj.title}</Typography>
        <Box sx={{
          marginTop: { xs: "20px", sm: "14px", md: "14px" },
        }}>
          {propObj.subTitle.map((e, index) => (
            <Typography key={index} style={{ color: "#707070", fontWeight: 600 }}
              sx={{
                fontSize: { xs: "15px", sm: "20px", md: "30px" },
              }}>{e}</Typography>
          ))}
        </Box>
        <Box sx={{
          marginTop: { xs: "15px", sm: "12px", md: "8px" },
        }}>
          {propObj.content.map((e, index) => (
            <Typography key={index} style={{ color: "#707070" }}
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "20px" },
              }}>{e}</Typography>
          ))}
        </Box>
        <Box style={{ padding: "50px 10px 0 0" }}
          sx={{
            float: { xs: "center", sm: "left", md: "left" },
          }}
        >
          {!propObj.isExist &&
            <Button className={st}
              sx={{ 
                fontSize: { xs: "12px", sm: "15px", md: "26px" }, 
                width: { xs: "120px", sm: "177px", md: "268px" }, 
                height: { xs: "32px", sm: "47px", md: "70px" }, 
              }}
            >coming soon</Button>
          }
          {propObj.isExist && propObj.infoButton &&
            <Button className={st}
            sx={{ 
              fontSize: { xs: "12px", sm: "15px", md: "26px" }, 
              width: { xs: "120px", sm: "177px", md: "268px" }, 
              height: { xs: "32px", sm: "47px", md: "70px" }, 
            }}
          component={Link} noLinkStyle href={propObj.infoUrl}>Information</Button>
          }
          {propObj.isExist && propObj.appButton &&
            <Button className={st}
            sx={{ 
              fontSize: { xs: "12px", sm: "15px", md: "26px" }, 
              width: { xs: "98px", sm: "118px", md: "180px" }, 
              height: { xs: "38px", sm: "46px", md: "70px" },
              marginRight: { xs: "6px", sm: "7px", md: "10px" },
            }}
            component={Link} noLinkStyle href={propObj.appUrl}>APP</Button>
          }
          {propObj.isExist && propObj.webButton &&
            <Button className={st}
            sx={{ 
              fontSize: { xs: "12px", sm: "15px", md: "26px" }, 
              width: { xs: "101px", sm: "121px", md: "180px" }, 
              height: { xs: "38px", sm: "46px", md: "70px" }, 
              marginRight: { xs: "6px", sm: "7px", md: "10px" },
            }}
            component={Link} noLinkStyle href={propObj.webUrl}>WEB</Button>
          }
        </Box>
      </Box>
    </Grid>
  </Grid>;
}

const projects = [{
  name: "linksome",
  img: linksomePng,
  title: "링크썸(linksome)",
  subTitle: ["간단하게 만드는 나의 멀티큐브"],
  content: ["예약까지 되는 멀티링크 서비스"],
  infoButton: true, infoUrl: "http://link.antsome.com",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "gymsome",
  img: gymsomePng,
  title: "짐썸(gymsome)",
  subTitle: ["나와 트레이너의 커뮤니케이션 서비스"],
  content: ["PT관리에 대한 모든 것"],
  infoButton: true, infoUrl: "/service/gymsomeintro/index.html",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "booksome",
  img: booksomePng,
  title: "북썸(booksome)",
  subTitle: ["내 손안의 독서관리 앱"],
  content: ["독서 관리, 소셜네트워크, 소모임"],
  infoButton: true, infoUrl: "/service/booksomeintro/index.html",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "husome",
  img: husomePng,
  title: "휴썸(husome)",
  subTitle: ["내 손안의 휴가관리 앱"],
  content: ["휴가 신청, 알림, 설문, 서비스 플랫폼"],
  infoButton: true, infoUrl: "https://hu.antsome.com/intro",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "freshgo24",
  img: freshPng,
  title: "프레시고 24",
  subTitle: ["스마트 공급망 관리 시스템(SCM)과 사물인터넷", "(IOT) 기술에 기반한 무인 자동판매 키오스크"],
  content: ["RFID 센서 기술을 바탕으로 실시간 재고파악 및 입출고 기능", "PG사와의 결제 연동을 통한 결제 및 매출,수익 자동 정산 시스템 구축"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "korex",
  img: korexPng,
  title: "KOREX",
  subTitle: ["러시아, 우크라이나 지역을 대상으로 한", "중고차 수출 웹,모바일 플랫폼"],
  content: ["현지 바이어를 위한 다국어 지원, 수출에 필요한 과정을 처리하기 위한", "외부업체용 앱, 수출건의 대한 입금 및 주문 확인, 여권인식 OCR 서비스"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "삼성생명 건강관리 서비스",
  img: samsungPng,
  title: "삼성생명 건강관리 서비스",
  subTitle: ["삼성생명의 특정보험상품", "가입 고객을 위한 건강관리 서비스"],
  content: ["프리미엄 건강관리서비스인 '건강한 몸' 서비스는 근골격계질환 예방 및", "부상 재발방지에 도움되는 전문 운동 프로그램"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "Tcar Tacar",
  img: tcarPng,
  title: "Tcar Tacar",
  subTitle: ["내 차를 티끌없이 깨끗하게 해주는 티카타카"],
  content: ["주차장 정보를 지도기반으로 조회하여 사전 주차예약 및 출장세차 서비스"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "안흥찐",
  img: jjinPng,
  title: "안흥찐",
  subTitle: ["지역 정보 소식 공유 서비스"],
  content: ["횡성군 안흥면 내의 지역 소식 정보 공유"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "플랜트 케어",
  img: plantPng,
  title: "플랜트 케어",
  subTitle: ["스마트 농장 센서/제어 솔루션"],
  content: ["농장에서 식물 재배 시 필요한 온도, 습도, 양분, 조도", "정보를 측정하는 센서 설계, 생산"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "영덕군 버스 관제 시스템",
  img: busPng,
  title: "영덕군 버스 관제 시스템",
  subTitle: ["영덕군 지역 시내버스 정보 단말기"],
  content: ["영덕군 지역 시내버스에 설치되는 버스 정보 단말기", "버스 승객 승/하차 정보를 체크하는 앞/뒷문에 설치되어 있는", "카메라와 통신하여 현재 승객의 수와 하루 총 승객의 수를 표현"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "Smart Suit",
  img: smartsuitPng,
  title: "Smart Suit",
  subTitle: ["NFC 스마트 패션 Application"],
  content: ["태깅 방식으로 명함 전송, SOS, 회의모드, 드라이브모드, 날씨, 설정 등", "사용자가 Application에서 미리 설정해둔 기능이 동작되도록 구현"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
}, {
  name: "T-broad Home CCTV",
  img: homePng,
  title: "T-broad Home CCTV",
  subTitle: ["스마트홈캠 솔루션"],
  content: ["홈캠의 실시간 모니터링, 움직임 감지, 캠 시각 변동,", "간편녹화, 양방향 워키토키, 적외선 모드 등의 기능에 대응"],
  infoButton: false, infoUrl: "",
  appButton: false, appUrl: "",
  webButton: false, webUrl: "",
  isExist: true,
},];

export default function Projects() {
  const classes = useStyles();
  return (
    <Box style={{ width: "100%", textAlign: "-webkit-center" }}>

      <Header isWhite={false} />

      <Box style={{
        width: "100%",
        background: "url('/images/pro_banner.jpg') no-repeat center top / cover",
      }} sx={{
        height: { xs: "221px", sm: "266px", md: "500px" },
        marginTop: { xs: "60px", sm: "70px", md: "100px" },
      }}>
      </Box>
      <Box style={{ textAlign: "left" }}
        sx={{
          maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
        }}>
        <Typography style={{
          fontWeight: "bold",
          color: "#0C254B"
        }} sx={{
          marginTop: { xs: "-25px", sm: "-40px", md: "-55px" },
          marginLeft: { xs: "20px", sm: "0px", md: "0px" },
          fontSize: { xs: "35px", sm: "60px", md: "80px" },
        }}
        >SERVICES</Typography>
        <div>
          {projects.map((e, index) => { return getProjectCard(e.img, e, index, classes.link_button); })}
        </div>
      </Box>

      <Box sx={{ height: { xs: "100px", sm: "137px", md: "190px" } }}></Box>

      <Footer isWhite={false} />

    </Box >
  );
}
