import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Link from 'src/components/Link';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Image from 'next/image';

import iotPng from "public/images/iot.png";
import o2oPng from "public/images/o2o.png";
import socialPng from "public/images/social.png";

import project01_mPng from "public/images/projects/project01_m.png";
import project02_mPng from "public/images/projects/project02_m.png";
import project03_mPng from "public/images/projects/project03_m.png";
import project04_mPng from "public/images/projects/project04_m.png";

import project01_tPng from "public/images/projects/project01_t.png";
import project02_tPng from "public/images/projects/project02_t.png";
import project03_tPng from "public/images/projects/project03_t.png";
import project04_tPng from "public/images/projects/project04_t.png";

import project01_wPng from "public/images/projects/project01_w.png";
import project02_wPng from "public/images/projects/project02_w.png";
import project03_wPng from "public/images/projects/project03_w.png";
import project04_wPng from "public/images/projects/project04_w.png";

import culture01Png from "public/images/culture/culture01.png";
import culture02Png from "public/images/culture/culture02.png";
import culture03Png from "public/images/culture/culture03.png";
import culture04Png from "public/images/culture/culture04.png";
import culture05Png from "public/images/culture/culture05.png";

import mapPng from "public/images/map.png";

const useStyles = makeStyles(theme => ({
  index_button: {
    border: '2px solid #ffffff',
    color: '#fff',
    fontWeight: '700',
    backgroundColor: '#fff0',
    textAlign: 'center',
    borderRadius: '46px',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#0C254B'
    }
  },
}));

const getFuncCard = (pImg, pTitle, pContent) => {
  return <Paper elevation={0} style={{ textAlign: "-webkit-center" }}>
    <Image src={pImg} alt={pTitle} />
    <div style={{
      marginTop: 28,
      fontSize: "30px",
      color: "#0C254B",
      textAlign: "center",
      fontFamily: '"Nanum Square", 나눔스퀘어, sans-serif',
      fontWeight: 700,
    }}>{pTitle}</div>
    <Box style={{ paddingTop: 17, color: "#707070", textAlign: "center" }}
      sx={{
        marginBottom: { xs: "70px", sm: "0px", md: "0px" },
      }}>
      {pContent.map((e, index) => (<Typography key={index}
        sx={{
          // fontSize: { xs: "12px", sm: "12px", md: "18px" },
          width: { xs: "100%", sm: "100%", md: "100%" },
        }}>{e}</Typography>))}
    </Box>
  </Paper>
}

const cultureMedia = [
  culture01Png,
  culture02Png,
  culture03Png,
  culture04Png,
  culture05Png
];

// const IndexButton = styled(Button)`
//   border: 2px solid #ffffff;
//   color: #fff;
//   font-weight: 700;
//   background-color: #fff0;
//   text-align: center;
//   border-radius: 46px;
//   &:hover {
//     background-color: #ffffff;
//     color: #0C254B;
//   };
//   `;

export default function Index() {
  const classes = useStyles();
  const [cultureEmblaRef, cultureEmblaApi] = useEmblaCarousel({
    slidesToScroll: 1, loop: true, speed: 2
  }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false
    })
  ]);
  const [cultureSmallEmblaRef, cultureSmallEmblaApi] = useEmblaCarousel({ loop: true, speed: 5 }, [Autoplay({
    delay: 3000,
    stopOnInteraction: false
  })]);

  // no
  const [projectMNo, setProjectMNo] = useState(1);
  const [projectTNo, setProjectTNo] = useState(1);
  const [projectWNo, setProjectWNo] = useState(1);

  return (
    <Box style={{ width: "100%", textAlign: "-webkit-center" }}>
      {/* video area */}
      <Paper elevation={0} style={{ border: 0 }} variaznt='outlined'
        sx={{ display: { xs: 'block', sm: 'none' } }}>
        <video style={{ width: '100%' }} playsInline autoPlay muted loop>
          <source src="videos/banner_mobile.mp4" />
          Your browser does not support the video tag.
        </video>
      </Paper>
      <Paper elevation={0} style={{ border: 0 }} variaznt='outlined'
        sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
        <video style={{ width: '100%' }} playsInline autoPlay muted loop>
          <source src="videos/banner_tablet.mp4" />
          Your browser does not support the video tag.
        </video>
      </Paper>
      <Paper elevation={0} style={{ border: 0 }} variaznt='outlined'
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <video style={{ width: '100%' }} playsInline autoPlay muted loop>
          <source src="videos/banner_web.mp4" />
          Your browser does not support the video tag.
        </video>
      </Paper>

      <Header isWhite={true} />

      <Box style={{ maxWidth: 1400, paddingLeft: 10, paddingRight: 10, }}>
        {/* "ANTSOME" title  */}
        <Typography style={{ fontWeight: "bold", color: "#0C254B", textAlign: "center" }}
          sx={{
            fontSize: { xs: "30px", sm: "50px", md: "80px" },
            marginTop: { xs: "80px", sm: "124px", md: "70px" }
          }}>
          ANTSOME
        </Typography>
        {/* slogan  */}
        <Typography style={{ fontWeight: "normal", color: "#707070" }}
          sx={{
            fontSize: { xs: "15px", sm: "30px", md: "35px" },
            marginTop: { xs: "30px", sm: "37px", md: "45px" },
            marginBottom: { xs: "80px", sm: "134px", md: "193px" },
            width: { xs: "308px", sm: "616px", md: "100%" }
          }}>
          Discover elegant solution for your online business fast, reliable, affordable.
        </Typography>
        {/* technologies by antsome  */}
        <Grid container spacing={4} direction="row" justifyContent="space-around" alignItems="flex-start">
          <Grid item xs={12} sm={4}>
            {getFuncCard(iotPng, "IOT", ["인터넷을 기반으로 모든 사물을", "블루투스와 근거리무선통신(NFC) 등으로 연결하여", "상호 소통하는 지능형 기술 및 서비스"])}
          </Grid>
          <Grid item xs={12} sm={4}>
            {getFuncCard(o2oPng, "O2O", ["온라인 플랫폼을 통해 실제로 오프라인에서 일어나는", "소비자와 판매처 간의 비즈니스 연결을", "가능하게 하는 기술 및 서비스"])}
          </Grid>
          <Grid item xs={12} sm={4}>
            {getFuncCard(socialPng, "Social", ["사용자 간의 자유로운 의사소통과", "정보 공유를 통해 사회적 관계를 형성하고", "강화해주는 온라인 플랫폼"])}
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ height: { xs: "30px", sm: "100px", md: "150px", } }} />

      <Box style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box style={{
            width: "100%", height: "100%", position: "absolute",
            fontSize: "40px", fontWeight: 700, zIndex: 99, color: "#fff", top: "400px",
          }}>PROJECTS<br />
            <Button className={classes.index_button} style={{
              textTransform: "lowercase",
              width: "120px", height: "48px",
              fontSize: "20px", padding: "13px 0",
            }} component={Link} noLinkStyle href="/projects">more</Button>
          </Box>
          <Box style={{
            width: "100%", height: "100%", position: "absolute",
            fontSize: "90px", zIndex: 88, color: "#fff",
            display: "flex", justifyContent: "center",
          }}><Box style={{
            position: "relative", height: "100%",
            width: "1400px", textAlign: "left",
            fontSize: "30px", zIndex: 88, color: "#fff",
            marginTop: "50px", marginLeft: "30px",
          }}>
              <Typography style={{ fontSize: "20px", fontWeight: 700 }}>{'0' + projectMNo}/04</Typography>
              <Typography style={{ fontSize: "20px" }}>Mobile Application</Typography>
            </Box>
          </Box>
          <Box style={{
            width: "100%",
            height: "100%",
            overflow: 'hidden'
          }}>
            <Slider {...{
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              speed: 3000,
              autoplaySpeed: 4000,
              afterChange: (current) => { setProjectMNo(current + 1); },
              cssEase: "linear",
            }}>
              <Image src={project01_mPng} alt="project01" />
              <Image src={project02_mPng} alt="project02" />
              <Image src={project03_mPng} alt="project03" />
              <Image src={project04_mPng} alt="project04" />
            </Slider>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
          <Box style={{
            width: "90%", height: "100%", position: "absolute",
            fontSize: "60px", fontWeight: 700, zIndex: 99, color: "#fff", top: "400px",
          }}>PROJECTS<br />
            <Button className={classes.index_button} style={{
              textTransform: "lowercase",
              width: "120px", height: "48px",
              fontSize: "20px", padding: "13px 0",
            }} component={Link} noLinkStyle href="/projects">more</Button>
          </Box>
          <Box style={{
            width: "100%", height: "100%", position: "absolute",
            fontSize: "90px", zIndex: 88, color: "#fff",
            display: "flex", justifyContent: "center",
          }}><Box style={{
            position: "relative", height: "100%",
            width: "1400px", textAlign: "left",
            fontSize: "30px", zIndex: 88, color: "#fff",
            marginTop: "50px", marginLeft: "50px",
          }}>
              <Typography style={{ fontSize: "26px", fontWeight: 700 }}>{'0' + projectTNo}/04</Typography>
              <Typography style={{ fontSize: "26px" }}>Mobile Application</Typography>
            </Box>
          </Box>
          <Box style={{
            width: "100%",
            height: "100%",
            overflow: 'hidden'
          }}>
            <Slider {...{
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              speed: 3000,
              autoplaySpeed: 4000,
              afterChange: (current) => { setProjectTNo(current + 1); },
              cssEase: "linear",
            }}>
              <Image src={project01_tPng} alt="project01" />
              <Image src={project02_tPng} alt="project02" />
              <Image src={project03_tPng} alt="project03" />
              <Image src={project04_tPng} alt="project04" />
            </Slider>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Box style={{
            width: "100%", height: "100%", position: "absolute",
            fontSize: "90px", fontWeight: 900, zIndex: 99, color: "#fff", top: "300px",
          }}>PROJECTS<br />
            <Button className={classes.index_button} style={{ textTransform: "lowercase" }} sx={{
              width: { xs: "89px", sm: "119px", md: "180px" },
              height: { xs: "35px", sm: "47px", md: "70px" },
              fontSize: { xs: "12px", sm: "16px", md: "26px" },
              padding: { xs: "16px 0", sm: "13px 22px 10px 22px", md: "12px 30px 10px 30px" },
            }} component={Link} noLinkStyle href="/projects">more</Button>
          </Box>
          <Box style={{
            width: "100%", height: "100%", position: "absolute",
            fontSize: "90px", zIndex: 88, color: "#fff",
            display: "flex", justifyContent: "center",
          }}><Box style={{
            position: "relative", height: "100%",
            width: "1400px", textAlign: "left",
            fontSize: "30px", zIndex: 88, color: "#fff",
            marginTop: "50px",
          }}>
              <Typography style={{ fontSize: "30px", fontWeight: 800 }}>{'0' + projectWNo}/04</Typography>
              <Typography style={{ fontSize: "30px" }}>Mobile Application</Typography>
            </Box>
          </Box>
          <Box style={{
            width: "100%",
            height: "100%",
            overflow: 'hidden'
          }}>
            <Slider {...{
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              speed: 3000,
              autoplaySpeed: 4000,
              afterChange: (current) => { setProjectWNo(current + 1); },
              cssEase: "linear",
            }}>
              <Image src={project01_wPng} alt="project01" />
              <Image src={project02_wPng} alt="project02" />
              <Image src={project03_wPng} alt="project03" />
              <Image src={project04_wPng} alt="project04" />
            </Slider>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: { xs: "80px", sm: "150px", md: "230px", } }} />

      {/* culture  */}
      <Box sx={{
        marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px", xl: "0px" }
      }}>
        <Grid container direction="row" justifyContent="space-around" alignItems="flex-start">
          <Grid item sm={12} md={4}>
            <Typography style={{ fontWeight: 800, color: "#0C254B" }}
              sx={{ fontSize: { xs: "30px", sm: "60px", md: "90px" } }}>
              CULTURE
            </Typography>
          </Grid>
          <Grid item sm={12} md={8}>
            <Paper elevation={0} style={{ border: 0 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <div className="embla">
                <div className="embla__viewport" ref={cultureEmblaRef}>
                  <div className="embla__container">
                    {cultureMedia.map((e, index) => (
                      <div className="embla__slide" key={index}>
                        <div className="embla__slide__inner">
                          <Image className="embla__slide__img" src={e}
                            alt="antsome culture"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Paper>
            <Paper elevation={0} style={{ border: 0, marginTop: 30 }} sx={{ display: { xs: 'block', sm: 'none' } }}>
              <div style={{ overflow: 'hidden' }} ref={cultureSmallEmblaRef}>
                <div style={{ display: 'flex' }}>
                  {cultureMedia.map((e, index) => (
                    <div key={index} style={{ position: 'relative', flex: '0 0 100%' }}>
                      <Image src={e} alt="antsome culture" style={{ width: '100%', padding: '0px 20px' }} />
                    </div>
                  ))}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ width: "100%", background: "#F7F9F9" }} sx={{
        marginTop: { xs: "80px", sm: "107px", md: "150px" },
        height: { xs: "600px", sm: "600px", md: "700px" },
        paddingLeft: { xs: "0px", sm: "50px", md: "50px" }
      }}>
        <Box sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px", } }}>
          <Grid style={{ height: "100%" }} container direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} style={{ background: "#ffffff00" }} sx={{
                maxWidth: { xs: "335px", sm: "550px", md: "700px" },
                marginTop: { xs: "80px", sm: "142px", md: "150px" }
              }}>
                <Image src={mapPng} alt="약도" width="100%" />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box style={{ textAlign: "left" }}
                sx={{
                  marginLeft: { xs: "20px", sm: "30px", md: "50px" },
                }}>
                <Typography style={{ fontWeight: "bold", color: "#12366E" }}
                  sx={{
                    fontSize: { xs: "20px", sm: "25px", md: "35px" },
                    marginTop: { xs: "80px", sm: "151px", md: "150px" },
                  }}>CONTACT US</Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                    marginTop: { xs: "25px", sm: "64px", md: "61px" },
                  }}>서울특별시 구로구 디지털로 288, 511호</Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                  }}>(구로동, 대륭포스트타워 1차)</Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", md: "20px" },
                    marginTop: { xs: "20px", sm: "42px", md: "30px" },
                  }}>TEL. 02-2135-5538</Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", md: "20px" },
                  }}>E-MAIL. service@antsome.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px", } }}>

        {/* <Box style={{ display: "flex", flexDirection: "column-reverse" }} sx={{ */}

        <Box style={{ display: "flex" }} sx={{
          marginTop: { xs: "56px", sm: "150px", md: "150px" },
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "center" },
          alignItems: { xs: "center", sm: "center", md: "center" },
        }}>
          <Box style={{ backgroundColor: "#0C254B", borderRadius: 30, textAlign: "-webkit-left" }}
            sx={{
              width: { xs: "335px", sm: "446px", md: "675px" },
              height: { xs: "160px", sm: "198px", md: "300px" },
              paddingLeft: { xs: "20px", sm: "27px", md: "50px" },
              paddingRight: { xs: "20px", sm: "27px", md: "50px" },
            }}>
            <Typography style={{ color: "#E8E8E8" }}
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "20px" },
                paddingTop: { xs: "31px", sm: "32px", md: "47px" },
              }}>CONTACT US</Typography>
            <Typography style={{ color: "#fff", fontWeight: 600 }}
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "30px" },
                marginTop: { xs: "0px", sm: "3px", md: "10px" },
              }}>앤트썸에게 궁금한 사항이 있으신가요?</Typography>
            <Box style={{ borderRadius: 30, textAlign: "-webkit-right" }}
              sx={{
                marginTop: { xs: "27px", sm: "39px", md: "52px" },
              }}>
              <Button className={classes.index_button} style={{ textTransform: "lowercase" }} sx={{
                width: { xs: "89px", sm: "119px", md: "180px" },
                height: { xs: "35px", sm: "47px", md: "70px" },
                fontSize: { xs: "12px", sm: "16px", md: "26px" },
                padding: { xs: "16px 0", sm: "13px 22px 10px 22px", md: "12px 30px 10px 30px" },
              }} component={Link} noLinkStyle href="/contactus">문의하기</Button>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#00327E", borderRadius: 30, textAlign: "-webkit-left" }}
            sx={{
              width: { xs: "335px", sm: "446px", md: "675px" },
              height: { xs: "160px", sm: "198px", md: "300px" },
              paddingLeft: { xs: "20px", sm: "27px", md: "50px" },
              paddingRight: { xs: "20px", sm: "27px", md: "50px" },
              marginTop: { xs: "20px", sm: "0px", md: "0px" },
              marginLeft: { xs: "0px", sm: "33px", md: "50px" },
            }}>
            <Typography style={{ color: "#E8E8E8" }}
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "20px" },
                paddingTop: { xs: "31px", sm: "32px", md: "47px" },
              }}>RECRUIT</Typography>
            <Typography style={{ color: "#fff", fontWeight: 600 }}
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "30px" },
                marginTop: { xs: "0px", sm: "3px", md: "10px" },
              }}>우리는 앤트맨을 기다립니다</Typography>
            <Box style={{ borderRadius: 30, textAlign: "-webkit-right" }}
              sx={{
                marginTop: { xs: "27px", sm: "39px", md: "52px" },
              }}>
              <Button className={classes.index_button} style={{ textTransform: "lowercase" }} sx={{
                width: { xs: "89px", sm: "119px", md: "180px" },
                height: { xs: "35px", sm: "47px", md: "70px" },
                fontSize: { xs: "12px", sm: "16px", md: "26px" },
                padding: { xs: "16px 0", sm: "13px 22px 10px 22px", md: "12px 30px 10px 30px" },
              }} component={Link} noLinkStyle href="/recruit#apply">지원하기</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: { xs: "100px", sm: "137px", md: "190px" } }}></Box>

      <Footer isWhite={false} />
    </Box >
  );
}
