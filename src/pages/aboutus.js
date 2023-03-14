import * as React from 'react';

import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

import aboutPng from "public/images/about_img.png";
import baeksiyoonPng from "public/images/members/baeksiyoon.png";
import chohyeminPng from "public/images/members/chohyemin.png";
import hansangyongPng from "public/images/members/hansangyong.png";
import hwangjaeminPng from "public/images/members/hwangjaemin.png";
import jeonghyejiPng from "public/images/members/jeonghyeji.png";
import kimjinheePng from "public/images/members/kimjinhee.png";
import kimseulkiPng from "public/images/members/kimseulki.png";
import kochangwooPng from "public/images/members/kochangwoo.png";
import leekangyoonPng from "public/images/members/leekangyoon.png";
import limJeongyeopPng from "public/images/members/limJeongyeop.png";
import parkkyunghoPng from "public/images/members/parkkyungho.png";
import seomingyuPng from "public/images/members/seomingyu.png";
import shinjiyePng from "public/images/members/shinjiye.png";
import songgyeolPng from "public/images/members/songgyeol.png";
import yoowonyoungPng from "public/images/members/yoowonyoung.png";

const getMemberFlipCard = (pImg, propObj) => {
  return <Flippy flipOnHover={true} flipDirection="horizontal">
    <FrontSide style={{ padding: "0px", borderRadius: "15px" }} >
      <Paper elevation={8}
        style={{ background: "#fff", borderRadius: "15px" }} sx={{
          width: { xs: "162px", sm: "221px", md: "332px" },
          height: { xs: "209px", sm: "284px", md: "430px" },
          paddingLeft: { xs: "20px", sm: "27px", md: "40px" },
        }}>
        <Typography style={{ textAlign: "left", fontWeight: "bold", color: "#0C254B" }} sx={{
          fontSize: { xs: "15px", sm: "19px", md: "30px" },
          paddingTop: { xs: "18px", sm: "27px", md: "40px" },
        }}>{propObj.major}</Typography>
        <Typography style={{ textAlign: "left", color: "#0C254B", fontWeight: 600 }} sx={{
          fontSize: { xs: "12px", sm: "13px", md: "20px" },
          marginTop: { xs: "8px", sm: "9px", md: "10px" },
        }}>{propObj.name}</Typography>
        <Typography style={{ textAlign: "left", color: "#0C254B", fontWeight: 600 }} sx={{
          fontSize: { xs: "12px", sm: "12px", md: "20px" },
          paddingBottom: { xs: "15px", sm: "15px", md: "2px" },
        }}>{propObj.engname}</Typography>
        <Box sx={{
          marginTop: { xs: "0px", sm: "0px", md: "26px" },
          marginLeft: { xs: "34px", sm: "36px", md: "56px" },
          width: { xs: "110px", sm: "160px", md: "250px" },
        }}><Image src={pImg} alt={propObj.name} style={{ width: '100%', height: '100%' }} /></Box>
      </Paper>
    </FrontSide>
    <BackSide style={{ padding: "0px", borderRadius: "15px" }}>
      <Paper elevation={8}
        style={{ background: "#0C254B", borderRadius: "15px" }} sx={{
          width: { xs: "162px", sm: "221px", md: "332px" },
          height: { xs: "209px", sm: "284px", md: "430px" },
          paddingLeft: { xs: "14px", sm: "18px", md: "30px" },
          paddingRight: { xs: "14px", sm: "0px", md: "0px" },
        }}>
        <Typography style={{ textAlign: "left", fontWeight: "bold", color: "#fff", letterSpacing: "0px" }} sx={{
          fontSize: { xs: "15px", sm: "19px", md: "30px" },
          paddingTop: { xs: "18px", sm: "20px", md: "30px" },
        }}>{propObj.nature}</Typography>
        <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 600 }} sx={{
          fontSize: { xs: "12px", sm: "13px", md: "20px" },
          marginTop: { xs: "8px", sm: "9px", md: "10px" },
        }}>{propObj.name}</Typography>
        <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 600 }} sx={{
          fontSize: { xs: "12px", sm: "12px", md: "20px" },
          paddingBottom: { xs: "15px", sm: "15px", md: "2px" },
        }}>{propObj.engname}</Typography>
        <Box style={{ display: "flex", height: "50%", flexDirection: "column-reverse" }} sx={{
          marginTop: { xs: "0px", sm: "26px", md: "26px" },
          marginLeft: { xs: "0px", sm: "0px", md: "0px" },
          paddingRight: { xs: "10px", sm: "17px", md: "20px" },
          paddingBottom: { xs: "10px", sm: "20px", md: "0px" },
        }}>
          <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 500, lineHeight: "123%" }} sx={{
            fontSize: { xs: "10px", sm: "13px", md: "18px" },
          }}>{propObj.tag}</Typography>
          <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 400, lineHeight: "123%" }} sx={{
            fontSize: { xs: "10px", sm: "13px", md: "18px" },
            marginBottom: { xs: "5px", sm: "10px", md: "10px" },
          }}>{propObj.info}</Typography>
        </Box>
      </Paper>
    </BackSide>
  </Flippy>;
}

const getManagerFlipCard = (pImg, propObj) => {
  return <Flippy flipOnHover={true} flipDirection="vertical">
    <FrontSide style={{ padding: "0px", borderRadius: "15px" }}>
      <Paper elevation={8}
        style={{ background: "#fff", borderRadius: "15px" }} sx={{
          width: { xs: "335px", sm: "600px", md: "750px" },
          height: { xs: "150px", sm: "250px", md: "336px" },
          paddingLeft: { xs: "17px", sm: "30px", md: "44px" },
        }}>
        <Typography style={{ textAlign: "left", fontWeight: "bold", color: "#0C254B" }} sx={{
          fontSize: { xs: "15px", sm: "26px", md: "35px" },
          paddingTop: { xs: "16px", sm: "21px", md: "22px" },
        }}>{propObj.team}</Typography>
        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }} sx={{
          marginTop: { xs: "0px", sm: "4px", md: "10px" },
        }}>
          <Typography style={{ textAlign: "left", color: "#0C254B", fontWeight: 500 }} sx={{
            fontSize: { xs: "12px", sm: "18px", md: "25px" },
          }}>{propObj.grade}</Typography>
          <Typography style={{ textAlign: "left", color: "#0C254B", fontWeight: 500 }} sx={{
            fontSize: { xs: "10px", sm: "14px", md: "20px" },
            marginLeft: { xs: "8px", sm: "15px", md: "10px" },
            paddingBottom: { xs: "2px", sm: "3px", md: "2px" },
          }}>{propObj.name}</Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }} sx={{
          marginTop: { xs: "-2px", sm: "4px", md: "0px" },
        }}>
          <Typography style={{ textAlign: "left", color: "#0C254B", fontWeight: 500 }} sx={{
            fontSize: { xs: "12px", sm: "18px", md: "25px" },
          }}>{propObj.enggrade}</Typography>
          <Typography style={{ textAlign: "left", color: "#0C254B", fontWeight: 500 }} sx={{
            fontSize: { xs: "10px", sm: "14px", md: "20px" },
            marginLeft: { xs: "8px", sm: "15px", md: "10px" },
            paddingBottom: { xs: "2px", sm: "3px", md: "2px" },
          }}>{propObj.engname}</Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }} sx={{
        }}>
          <Typography style={{ textAlign: "left", color: "#707070", lineHeight: "123%", fontWeight: 400 }} sx={{
            fontSize: { xs: "11px", sm: "18px", md: "23px" },
            marginTop: { xs: "8px", sm: "13px", md: "30px" },
            width: { xs: "194px", sm: "348px", md: "467px" },
          }}>{propObj.teaminfo}</Typography>
          <Box sx={{
            marginTop: { xs: "-45px", sm: "-80px", md: "-100px" },
            marginLeft: { xs: "12px", sm: "0px", md: "0px" },
            width: { xs: "100px", sm: "180px", md: "250px" },
          }}><Image src={pImg} alt={propObj.name} style={{ width: '100%', height: '100%' }} /></Box>
        </Box>
      </Paper>
    </FrontSide>
    <BackSide style={{ padding: "0px", borderRadius: "15px" }}>
      <Paper elevation={8}
        style={{ background: "#0C254B", borderRadius: "15px" }} sx={{
          width: { xs: "335px", sm: "600px", md: "750px" },
          height: { xs: "150px", sm: "250px", md: "336px" },
          paddingLeft: { xs: "17px", sm: "30px", md: "40px" },
        }}>
        <Typography style={{ textAlign: "left", fontWeight: "bold", color: "#fff" }} sx={{
          fontSize: { xs: "15px", sm: "26px", md: "35px" },
          paddingTop: { xs: "16px", sm: "21px", md: "22px" },
        }}>{propObj.team}</Typography>
        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }} sx={{
          marginTop: { xs: "0px", sm: "4px", md: "10px" },
        }}>
          <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 500 }} sx={{
            fontSize: { xs: "12px", sm: "18px", md: "25px" },
          }}>{propObj.grade}</Typography>
          <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 500 }} sx={{
            fontSize: { xs: "10px", sm: "14px", md: "20px" },
            marginLeft: { xs: "8px", sm: "15px", md: "10px" },
            paddingBottom: { xs: "2px", sm: "3px", md: "2px" },
          }}>{propObj.name}</Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }} sx={{
          marginTop: { xs: "-2px", sm: "4px", md: "0px" },
        }}>
          <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 500 }} sx={{
            fontSize: { xs: "12px", sm: "18px", md: "25px" },
          }}>{propObj.enggrade}</Typography>
          <Typography style={{ textAlign: "left", color: "#fff", fontWeight: 500 }} sx={{
            fontSize: { xs: "10px", sm: "14px", md: "20px" },
            marginLeft: { xs: "8px", sm: "15px", md: "10px" },
            paddingBottom: { xs: "2px", sm: "3px", md: "2px" },
          }}>{propObj.engname}</Typography>
        </Box>
        <Box style={{ display: "flex", }} sx={{
        }}>
          <Typography style={{ textAlign: "left", color: "#fff", lineHeight: "123%", fontWeight: 400 }} sx={{
            fontSize: { xs: "11px", sm: "15px", md: "23px" },
            marginTop: { xs: "8px", sm: "23px", md: "28px" },
            width: { xs: "267px", sm: "467px", md: "467px" },
          }}>{propObj.info}</Typography>
        </Box>
      </Paper>
    </BackSide>
  </Flippy>;
}

export default function AboutUs() {

  return (
    <Box style={{ width: "100%", textAlign: "-webkit-center" }}>

      <Header isWhite={false} />

      {/* 배너 */}
      <Box style={{
        width: "100%",
        background: "url('/images/about.png') no-repeat center top / cover",
      }} sx={{
        height: { xs: "221px", sm: "266px", md: "500px" },
        marginTop: { xs: "60px", sm: "70px", md: "100px" },
      }}>
      </Box>
      <Box style={{ textAlign: "left" }}
        sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px" }, }}>
        <Typography style={{
          fontWeight: "bold",
          color: "#0C254B"
        }} sx={{
          marginTop: { xs: "-25px", sm: "-40px", md: "-55px" },
          marginLeft: { xs: "20px", sm: "0px", md: "0px" },
          fontSize: { xs: "35px", sm: "60px", md: "80px" },
        }}>ABOUT US</Typography>

        {/* SLOGAN */}
        <Box style={{ textAlign: "-webkit-center" }}>
          <Box style={{ textAlign: "-webkit-left" }} sx={{
            marginLeft: { xs: "20px", sm: "50%", md: "50%" },
            marginRight: { xs: "20px", sm: "0px", md: "0px" },
          }}>
            <Typography style={{
              fontWeight: 600,
              color: "#0C254B"
            }} sx={{
              marginTop: { xs: "59px", sm: "40px", md: "100px" },
              fontSize: { xs: "20px", sm: "30px", md: "35px" },
            }}
            >세상의 모든 개미(ANT)</Typography>
            <Typography style={{
              color: "#707070"
            }} sx={{
              marginTop: { xs: "39px", sm: "20px", md: "39px" },
              fontSize: { xs: "15px", sm: "18px", md: "20px" },
            }}>세상에는 많은 개미들이 존재합니다. 오프라인에서 온라인에서 장사하는 개미분들, 좋은 아이디어를 가지고 사업체를 운영하는 개미분들, 운영하려 하는 개미분들 등등 이들 모두가 저희에게는 고객이며 파트너입니다. 이분들이 어려워 하시는 IT에 대하여 도움을 드리고자 회사를 설립했고, 이분들과 함께 운영하려 합니다.</Typography>
          </Box>
        </Box>
      </Box>

      {/* 그들과의 썸 */}
      <Box style={{
        width: "100%",
        background: "#0C254B",
      }} sx={{
        marginTop: { xs: "152px", sm: "276px", md: "300px" },
        height: { xs: "375px", sm: "680px", md: "650px" },
      }}>
        <Box style={{ textAlign: "-webkit-center" }}
          sx={{
            maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
            paddingTop: { xs: "50px", sm: "70px", md: "-84px" },
          }}>

          {/* 그들과의 썸 - 이미지 */}
          <Box sx={{
            width: { xs: "335px", sm: "650px", md: "1000px" },
            marginTop: { xs: "-130px", sm: "-208px", md: "-310px" }
          }}><Image src={aboutPng} alt="회사이미지" /></Box>

          {/* 그들과의 썸 - TITLE */}
          <Typography style={{
            fontWeight: "bold",
            color: "#FFFFFF"
          }} sx={{
            fontSize: { xs: "20px", sm: "35px", md: "35px" },
            marginTop: { xs: "80px", sm: "85px", md: "83px" },
          }}>그들과의 썸(SOME)</Typography>

          {/* 그들과의 썸 - CONTENT */}
          <Box sx={{
            width: { xs: "256px", sm: "700px", md: "700px" },
            marginTop: { xs: "20px", sm: "50px", md: "62px" },
          }}>
            <Typography style={{
              color: "#FFFFFF"
            }} sx={{
              fontSize: { xs: "15px", sm: "20px", md: "20px" },
            }}>요즘 모든 일들이 IT를 기반으로 융합하는 시대에 살고 있습니다. 많은 개미분들이 고민하시는 IT를 쉽게 이해하고 편하게 쓸 수 있도록 만드려고 합니다.</Typography>
          </Box>
        </Box>
      </Box>

      <Box style={{ textAlign: "left" }}
        sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px" }, }}>
        {/* VALUE FOR ANTSOME */}
        <Box sx={{
          paddingLeft: { xs: "20px", sm: "0px", md: "0px" },
          paddingRight: { xs: "20px", sm: "0px", md: "0px" },
        }}>
          <Typography style={{ fontWeight: 600, color: "#0C254B" }} sx={{
            marginTop: { xs: "109px", sm: "93px", md: "150px" },
            fontSize: { xs: "20px", sm: "30px", md: "35px" },
          }} >앤트썸이 원하는 가치</Typography>
        </Box>
      </Box>

      <Box style={{ textAlign: "left" }}
        sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px" }, }}>
        {/* VALUE FOR ANTSOME */}
        <Box style={{ justifyContent: "center" }} sx={{
          display: { xs: "block", sm: "flex", md: "flex" },
        }}>
          <Box sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            paddingLeft: { xs: "20px", sm: "0px", md: "0px" },
            paddingRight: { xs: "20px", sm: "0px", md: "0px" },
          }}>
            <Typography style={{ fontWeight: 600, color: "#0C254B" }} sx={{
              marginTop: { xs: "49px", sm: "36px", md: "80px" },
              fontSize: { xs: "18px", sm: "25px", md: "25px" },
            }}>longevity, 지속가능한</Typography>
            <Typography style={{ color: "#707070" }} sx={{
              marginTop: { xs: "19px", sm: "20px", md: "16px" },
              fontSize: { xs: "15px", sm: "18px", md: "18px" },
            }}>앤트썸은 끊임없이 성장하는 회사입니다. 이 가치를 이루기위해 기술개발을 위한 연구와 구성원을 위한 투자를 멈추지 않습니다.</Typography>
          </Box>
          <Box sx={{
            width: { xs: "18px", sm: "34px", md: "35px" }
          }}></Box>
          <Box sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            paddingLeft: { xs: "20px", sm: "0px", md: "0px" },
            paddingRight: { xs: "20px", sm: "0px", md: "0px" },
          }}>
            <Typography style={{ fontWeight: 600, color: "#0C254B" }} sx={{
              marginTop: { xs: "49px", sm: "36px", md: "80px" },
              fontSize: { xs: "18px", sm: "25px", md: "25px" },
            }}>moderately, 적당히</Typography>
            <Typography style={{ color: "#707070" }} sx={{
              marginTop: { xs: "20px", sm: "20px", md: "16px" },
              fontSize: { xs: "15px", sm: "18px", md: "18px" },
            }}>적당히 내멋대로 일해야 합니다. 나의 일에 계속 흥미를 가져야 하고 좋아하는 일을 계속하기 위해 모범적으로 적당히 일하면서
              조금씩 성장해야 합니다.</Typography>
          </Box>
        </Box>
      </Box>

      <Box style={{ textAlign: "left" }}
        sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px" }, }}>
        {/* VALUE FOR ANTSOME */}
        <Box style={{ justifyContent: "center" }} sx={{
          display: { xs: "block", sm: "flex", md: "flex" },
        }}>
          <Box sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            paddingLeft: { xs: "20px", sm: "0px", md: "0px" },
            paddingRight: { xs: "20px", sm: "0px", md: "0px" },
          }}>
            <Typography style={{ fontWeight: 600, color: "#0C254B" }} sx={{
              marginTop: { xs: "49px", sm: "36px", md: "80px" },
              fontSize: { xs: "18px", sm: "25px", md: "25px" },
            }} >together, 함께</Typography>
            <Typography style={{ color: "#707070" }} sx={{
              marginTop: { xs: "19px", sm: "20px", md: "16px" },
              fontSize: { xs: "15px", sm: "18px", md: "18px" },
            }}>함께 일하는 동안만큼은 함께 성장해야 합니다.
              이를 위해서는 &quot;투명하게 논의할 수 있는 환경 만들기&quot;, &quot;나부터 실천하기&quot;, &quot;서로의 다름을 인정하기&quot;
              를 추구합니다.</Typography>
          </Box>
          <Box sx={{
            width: { xs: "18px", sm: "34px", md: "35px" }
          }}></Box>
          <Box sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            paddingLeft: { xs: "20px", sm: "0px", md: "0px" },
            paddingRight: { xs: "20px", sm: "0px", md: "0px" },
          }}>
            <Typography style={{ fontWeight: 600, color: "#0C254B" }} sx={{
              marginTop: { xs: "49px", sm: "36px", md: "80px" },
              fontSize: { xs: "18px", sm: "25px", md: "25px" },
            }}>efficient, 효율</Typography>
            <Typography style={{ color: "#707070" }} sx={{
              marginTop: { xs: "20px", sm: "20px", md: "16px" },
              fontSize: { xs: "15px", sm: "18px", md: "18px" },
            }}>업무의 효율성을 높이기 위하여 절차에 얽매이지 않고 구성원들 각자의 개성과 장점을 살려 자율적으로 업무가 가능하도록 지원합니다.</Typography>
          </Box>
        </Box>
      </Box>

      {/* SLOGAN 2 */}
      <Box style={{
        width: "100%",
        background: "url('/images/sub_img.png') no-repeat center top / cover",
      }} sx={{
        height: { xs: "190px", sm: "293px", md: "550px" },
      }}>
        <Box style={{
          width: "100%",
        }} sx={{
          marginTop: { xs: "58px", sm: "97px", md: "150px" },
          height: { xs: "890px", sm: "680px", md: "650px" },
        }}>
          <Box style={{ textAlign: "-webkit-center" }}
            sx={{
              maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
            }}>
            {/* SLOGAN 2 - CONTENT */}
            <Box sx={{
              width: { xs: "330px", sm: "540px", md: "700px" },
              paddingTop: { xs: "80px", sm: "110px", md: "225px" },
            }}>
              <Typography style={{
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: "100%"
              }} sx={{
                fontSize: { xs: "16px", sm: "30px", md: "35px" },
              }}>Working with all the ants in the world,<br />We try to pioneer difficulties together.</Typography>
            </Box>
          </Box>
        </Box>

      </Box>

      {/* 앤트맨을 소개합니다 - title */}
      <Box style={{ textAlign: "left" }}
        sx={{
          maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
        }}>
        {/* 앤트맨을 소개합니다 - TITLE */}
        <Box style={{ textAlign: "-webkit-left" }} sx={{
          marginTop: { xs: "100px", sm: "100px", md: "150px" },
        }}>
          <Typography style={{
            fontWeight: "bold",
            color: "#0C254B"
          }} sx={{
            fontSize: { xs: "25px", sm: "40px", md: "60px" },
            marginLeft: { xs: "20px", sm: "50px", md: "0px" },
          }}>앤트맨을 소개합니다</Typography>
        </Box>
      </Box>

      {/* 앤트맨을 소개합니다 서비스개발팀- card */}
      <a id="team1"></a>
      <Box style={{
        width: "100%",
        background: "#ECF2FC",
      }} sx={{
        marginTop: { xs: "106px", sm: "178px", md: "278px" },
        height: { xs: "860px", sm: "960px", md: "1380px" },
      }}>
        <Box sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px" }, }}>
          <Box style={{ display: "flex" }} sx={{
            justifyContent: { xs: "center", sm: "left", md: "left" },
            marginTop: { xs: "0px", sm: "0px", md: "90px" },
          }}>
            <Box sx={{
              marginTop: { xs: "-68px", sm: "-118px", md: "-168px" },
            }}>
              {getManagerFlipCard(limJeongyeopPng, {
                team: "서비스 개발팀",
                grade: "팀장",
                enggrade: "Lead.",
                name: "임정엽",
                engname: "Lim Jeongyeop",
                info: "서비스 개발 팀장을 담당하고 있습니다. 모든 프로젝트가 마음만은 편한 프로젝트가 되도록 열심히 하고 있습니다.",
                teaminfo: "앤트썸의 사업수행을 담당하며, 다양한 고객들의 니즈를 공유하여 프로젝트를 수행합니다. 웹개발파트와 모바일개발파트로 나뉘어 있으며 자유롭게 협업 해 나가고 있습니다.",
              })}
            </Box>
          </Box>
          <Box sx={{
            marginTop: { xs: "38px", sm: "70px", md: "150px" },
            display: { xs: "block", sm: "flex", md: "flex" },
            gap: { xs: "11px", sm: "14px", md: "20px" },
          }}>
            <Box style={{ display: "flex", justifyContent: "center" }} sx={{
              gap: { xs: "11px", sm: "14px", md: "20px" },
            }}>
              {getMemberFlipCard(kochangwooPng, {
                major: "Mobile Developer",
                name: "고창우",
                engname: "Ko Changwoo",
                nature: "사색하는 개발자",
                info: "Android로 모바일 앱 개발을 시작으로 현재는 크로스플랫폼인 Flutter 앱 개발을 하고 있습니다.",
                tag: "#INFP #모바일 #Android #Flutter #앱개발"
              })}

              {getMemberFlipCard(kimjinheePng, {
                major: "Web Developer",
                name: "김진희",
                engname: "Kim Jinhee",
                nature: "논리적인 개발자",
                info: "서비스 개발팀 과장입니다. 청렴결백한 논리주의자로 주어진 임무를 철저하게 완수하려 노력하는 스타일 입니다.",
                tag: "#ISTJ #Java #Spring #JSP #웹개발 #React"
              })}

            </Box>
            <Box style={{ display: "flex", justifyContent: "center" }} sx={{
              marginTop: { xs: "40px", sm: "0px", md: "0px" },
              gap: { xs: "11px", sm: "14px", md: "20px" },
            }}>

              {getMemberFlipCard(chohyeminPng, {
                major: "Mobile Developer",
                name: "조혜민",
                engname: "Cho Hyemin",
                nature: "도파민 중독 개발자",
                info: "Flutter를 기반으로 앱개발을 합니다. 많은 것이 귀찮은 바쁘다 바빠 현대인",
                tag: "#ISTP #Flutter #앱개발"
              })}

              {getMemberFlipCard(songgyeolPng, {
                major: "Mobile Developer",
                name: "송 결",
                engname: "Song Gyeol",
                nature: "생각많은 개발자",
                info: "Swift로 시작해 현재는 Flutter를 기반으로 앱개발을 합니다. 너무 유능해서 섹시한 개발자가 되고싶은 앱개발자 입니다.",
                tag: "#INFP #Flutter #앱개발"
              })}

            </Box>
          </Box>
          <Box sx={{
            marginTop: { xs: "38px", sm: "70px", md: "50px" },
            display: { xs: "block", sm: "flex", md: "flex" },
            gap: { xs: "11px", sm: "14px", md: "20px" },
          }}>
            <Box style={{ display: "flex", justifyContent: "center" }} sx={{
              marginTop: { xs: "28px", sm: "0px", md: "0px" },
              gap: { xs: "11px", sm: "14px", md: "20px" },
            }}>

              {getMemberFlipCard(baeksiyoonPng, {
                major: "Web Developer",
                name: "백시윤",
                engname: "Baek Siyoon",
                nature: "계획적인 개발자",
                info: "React와 SpringBoot를 주로 사용해서 웹개발을 합니다. 모든 것에 계획을 세우는 계획형 개발자입니다.",
                tag: "#ISFJ #Java #SpringBoot #React #JavaScript #웹개발"
              })}

              {getMemberFlipCard(hwangjaeminPng, {
                major: "Web Developer",
                name: "황재민",
                engname: "Hwang Jaemin",
                nature: "천진난만 개발자",
                info: "React, Springboot를 주로 사용하는 개발자입니다. 천진난만 하다는 말을 많이 듣는 서울 초년생입니다.",
                tag: "#ENFP #Java #Springboot #웹개발 #React #JavaScript"
              })}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 앤트맨을 소개합니다 플랫폼개발팀- card */}
      <a id="team2"></a>
      <Box style={{
        width: "100%",
        background: "#ECF2FC",
      }} sx={{
        marginTop: { xs: "167px", sm: "222px", md: "368px" },
        height: { xs: "370px", sm: "600px", md: "900px" },
      }}>
        <Box sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px" }, }}>
          <Box style={{ display: "flex" }} sx={{
            justifyContent: { xs: "center", sm: "left", md: "left" },
            marginTop: { xs: "0px", sm: "0px", md: "90px" },
          }}>
            <Box sx={{
              marginTop: { xs: "-68px", sm: "-118px", md: "-168px" },
            }}>
              {getManagerFlipCard(hansangyongPng, {
                team: "플랫폼 개발팀",
                grade: "팀장",
                enggrade: "Lead.",
                name: "한상용",
                engname: "Han Sangyong",
                info: "연구 팀장을 담당하고 있으며, 새로운 언어와 기술 습득을 즐기며 더 나은 서비스를 만들려 노력합니다.",
                teaminfo: "다양한 IT서비스와 기술을 우리의 삶과 생활속에서 사용하기 위하여 다양한 노력과 즐거운 마음으로 업무을 진행합니다.",
              })}
            </Box>
          </Box>
          <Box sx={{
            marginTop: { xs: "40px", sm: "70px", md: "150px" },
            display: { xs: "block", sm: "flex", md: "flex" },
            gap: { xs: "11px", sm: "14px", md: "20px" },
          }}>
            <Box style={{ display: "flex", justifyContent: "center" }} sx={{
              gap: { xs: "11px", sm: "14px", md: "20px" },
            }}>
              {getMemberFlipCard(shinjiyePng, {
                major: "Mobile Developer",
                name: "신지예",
                engname: "Shin Jiye",
                nature: "달려가는 개발자",
                info: "플러터를 기반으로 모바일을 개발합니다. 개발 이외에도 아이디어를 서비스로 구체화하는 일을 하고 있습니다.",
                tag: "#ENFP #앱개발 #Flutter #Kotlin #React"
              })}

              {getMemberFlipCard(seomingyuPng, {
                major: "Mobile Developer",
                name: "서민규",
                engname: "Seo Mingyu",
                nature: "콜라 중독 개발자",
                info: "Flutter를 사용하는 크로스플랫폼 개발자입니다. 더 좋은 어플을 만들기위해 노력합니다. 콜라는 코카콜라,펩시제로만 취급합니다.",
                tag: "#INFP #앱개발 #flutter"
              })}
            </Box>
          </Box>
        </Box>
      </Box>


      {/* 앤트맨을 소개합니다 브랜드개발팀- card */}
      <a id="team3"></a>
      <Box style={{
        width: "100%",
        background: "#ECF2FC",
      }} sx={{
        marginTop: { xs: "167px", sm: "222px", md: "368px" },
        height: { xs: "370px", sm: "600px", md: "900px" },
      }}>
        <Box sx={{ maxWidth: { xs: "100%", sm: "1024px", md: "1400px" }, }}>
          <Box style={{ display: "flex" }} sx={{
            justifyContent: { xs: "center", sm: "left", md: "left" },
            marginTop: { xs: "0px", sm: "0px", md: "90px" },
          }}>
            <Box sx={{
              marginTop: { xs: "-68px", sm: "-118px", md: "-168px" },
            }}>
              {getManagerFlipCard(parkkyunghoPng, {
                team: "브랜드 개발팀",
                grade: "CEO",
                enggrade: "CEO.",
                name: "박경호",
                engname: "Park Kyungho",
                info: "개발 및 디자인을 제외하고 모든 소소한 일을 담당하고 있습니다. 열심히 직원들을 보조하도록 하겠습니다.",
                teaminfo: "다른 디자인, 삶과 생활 속 IOT제품, 지속 가능한 신 사업, 새로운 일을 찾고, 회사 및 제품의 트렌디한 브랜드를 만들어가는 일을 진행합니다.",
              })}
            </Box>
          </Box>
          <Box sx={{
            marginTop: { xs: "39px", sm: "70px", md: "150px" },
            display: { xs: "block", sm: "flex", md: "flex" },
            gap: { xs: "11px", sm: "14px", md: "20px" },
          }}>
            <Box style={{ display: "flex", justifyContent: "center" }} sx={{
              gap: { xs: "11px", sm: "14px", md: "20px" },
            }}>
              {getMemberFlipCard(jeonghyejiPng, {
                major: "Designer",
                name: "정혜지",
                engname: "Jeong Hyeji",
                nature: "아침형 디자이너",
                info: "앤트썸에서 디자인을 담당하고 있습니다. 마라탕을 좋아하는 서울 초년생 디자이너입니다.",
                tag: "#INTP #Photoshop #illustrator #XD #HTML5 #CSS"
              })}

              {getMemberFlipCard(leekangyoonPng, {
                major: "Designer",
                name: "이강윤",
                engname: "Lee Kangyoon",
                nature: "집돌이 디자이너",
                info: "앤트썸에서 디자인을 담당하고 있습니다. 카페인없이 못사는 얼죽아 디자이너입니다.",
                tag: "#INFP #illustrator #Photoshop #XD #Ae #Pr"
              })}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: { xs: "100px", sm: "137px", md: "300px" } }}></Box>

      <Footer isWhite={false} />

    </Box >
  );
}
