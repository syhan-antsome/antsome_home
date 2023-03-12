import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import Link from 'src/components/Link';

import { requestMultipartFormAPI } from 'src/common/services/AntsRequester';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Image from 'next/image';
import benefit01Png from "public/images/benefits/benefit01.png";
import benefit02Png from "public/images/benefits/benefit02.png";
import benefit03Png from "public/images/benefits/benefit03.png";
import benefit04Png from "public/images/benefits/benefit04.png";

import process01Png from "public/images/recruit/process01.png";
import process02Png from "public/images/recruit/process02.png";
import process03Png from "public/images/recruit/process03.png";
import process04Png from "public/images/recruit/process04.png";

const useStyles = makeStyles(theme => ({
  recruit_button: {
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
  apply_button: {
    border: '2px solid #ffffff',
    color: '#fff',
    fontWeight: '700',
    backgroundColor: '#fff0',
    textAlign: 'center',
    borderRadius: '46px',
    '&:hover': {
      backgroundColor: '#0C254B',
      color: '#fff'
    }
  },
  apply_select: {
    border: '0px solid #ABABAB',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#0C254B'
    },
    '& .MuiSelect-outlined': {
      padding: '0px'
    }
  },
}));


const EmailValidation = (enteredEmail) => {
  const mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (enteredEmail.match(mail_format)) {
    return true;
  } else {
    return false;
  }
}

export default function Recruit() {
  const classes = useStyles();
  const hiddenFileInput = React.useRef(null);

  const handleChangeApplyFile = event => {
    const fileUploaded = event.target.files[0];
    setApplyFile(fileUploaded);
    // props.onClickUploadSheet(fileUploaded);
  };

  const handleUploadSheet = () => {
    hiddenFileInput.current.click();
  }

  // part
  const [part, setPart] = useState('1');
  // name
  const [name, setName] = useState('');
  // telNo
  const [telNo, setTelNo] = useState('');
  // email
  const [email, setEmail] = useState('');
  // url
  const [url, setUrl] = useState('');
  // file
  const [applyFile, setApplyFile] = useState();

  const handleChangePart = (e) => {
    console.log(e.target.value);
    setPart(e.target.value);
  }
  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeTelNo = (e) => {
    setTelNo(e.target.value);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  }


  // "지원하기" 생성
  const handleClickCreateApply = () => {

    // validate - email
    if (!EmailValidation(email)) {
      alert("이메일 형식이 잘못되었습니다.");
      return;
    }

    // validate - name
    if (name === null || name.trim() === '') {
      alert("이름을 입력하세요.");
      return;
    }
    if (name.length > 140) {
      alert("이름의 길이가 30자 보다 큽니다. 줄여 주세요.");
      return;
    }

    const data = new FormData();
    data.append('apply_file', applyFile);
    data.append('file_name', (applyFile) ? applyFile.name : '');
    data.append('part', part);
    data.append('name', name);
    data.append('email', email);
    data.append('tel_no', telNo);
    data.append('url', url);

    requestMultipartFormAPI('setApplyDataCreate', data)
      .then((response) => {
        if (response && response.status && response.status === 200) {
          if (response.data.status.result === 'success') {
            alert("귀하의 소중한 지원정보가 등록되었습니다. 검토 후 정확한 답변을 보내드리겠습니다.");
            setName('');
            setEmail('');
            setTelNo('');
            setUrl('');
            setApplyFile(null);
          }
        }
      });
  }



  return (
    <Box style={{ width: "100%", textAlign: "-webkit-center" }}>

      <Header isWhite={false} />

      {/* 배너 */}
      <Box style={{
        width: "100%",
        background: "url('/images/re_banner.png') no-repeat center top / cover",
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
          marginLeft: { xs: "20px", sm: "50px", md: "0px" },
          fontSize: { xs: "35px", sm: "60px", md: "80px" },
        }}>RECRUIT</Typography>

        {/* SLOGAN & TEAMS */}
        <Box style={{ textAlign: "-webkit-center" }}>
          <Box style={{ textAlign: "-webkit-left" }} sx={{
            marginLeft: { xs: "20px", sm: "50%", md: "50%" },
          }}>
            <Typography style={{
              fontWeight: 600,
              color: "#0C254B"
            }} sx={{
              marginTop: { xs: "59px", sm: "60px", md: "140px" },
              fontSize: { xs: "18px", sm: "34px", md: "35px" },
            }}
            >앤트썸은 사람을 먼저 생각합니다.</Typography>
            <Typography style={{
              color: "#707070"
            }} sx={{
              marginTop: { xs: "39px", sm: "20px", md: "39px" },
              fontSize: { xs: "18px", sm: "21px", md: "20px" },
            }}>앤트썸은 앤트맨들의 생각을 지원하고 실현해가며, 함께 가치를 만들 수 있는 회사가 되기위해 노력합니다. 자유롭고 편안한 분위기에서 열정적인 자세로 함께 일하고 싶은 모든 앤트맨을 기다립니다.</Typography>
          </Box>

          {/* OUR TEAM - TITLE */}
          <Box style={{ textAlign: "-webkit-left" }} sx={{
            marginTop: { xs: "60px", sm: "100px", md: "100px" },
          }}>
            <Typography style={{
              fontWeight: "bold",
              color: "#0C254B"
            }} sx={{
              fontSize: { xs: "25px", sm: "40px", md: "60px" },
              marginLeft: { xs: "20px", sm: "50px", md: "0px" },
            }}>OUR TEAM</Typography>
          </Box>
          {/* TEAMS */}
          <Box style={{ justifyContent: "center", alignItems: "center" }} sx={{
            display: { xs: "inline-block", sm: "flex", md: "flex" },
            marginTop: { xs: "54px", sm: "40px", md: "64px" },
          }}>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} sx={{
              width: { xs: "335px", sm: "297px", md: "450px" },
              height: { xs: "343px", sm: "304px", md: "460px" },
              background: { xs: "url('images/team/re_service_m.png') no-repeat", sm: "url('images/team/re_service_t.png') no-repeat", md: "url('images/team/re_service.png') no-repeat" },
            }}>
              <Box>
                <Typography style={{ textAlign: "left", fontWeight: "bold", color: "#fff" }} sx={{
                  fontSize: { xs: "25px", sm: "25px", md: "40px" },
                  paddingTop: { xs: "63px", sm: "50px", md: "80px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                }}>서비스 개발</Typography>
                <Typography style={{ textAlign: "left", color: "#fff" }} sx={{
                  fontSize: { xs: "15px", sm: "15px", md: "20px" },
                  marginTop: { xs: "0px", sm: "-2px", md: "0px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                }}>Service Development Team</Typography>
                <Typography style={{ textAlign: "left", color: "#fff", lineHeight: "133%" }} sx={{
                  fontSize: { xs: "15px", sm: "15px", md: "20px" },
                  marginTop: { xs: "23px", sm: "13px", md: "40px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                  marginRight: { xs: "30px", sm: "40px", md: "40px" },
                }}>모바일, 웹 서비스를 고객 니즈에 맞춰 신규 개발, 운영/유지보수 등 고객과의 신뢰를 기반으로 최적의 서비스를 위해 고군분투하는 (주)앤트썸 서비스 개발팀입니다.</Typography>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }} sx={{
                marginBottom: { xs: "20px", sm: "20px", md: "20px" },
              }}>
                <Button className={classes.recruit_button}
                  style={{ textTransform: "lowercase" }} sx={{
                  width: { xs: "134px", sm: "118px", md: "178px" },
                  height: { xs: "46px", sm: "41px", md: "62px" },
                  fontSize: { xs: "14px", sm: "13px", md: "20px" },
                  padding: { xs: "16px 0", sm: "11px 22px 10px 22px", md: "13px 30px 10px 30px" },
                }} component={Link} noLinkStyle href="/aboutus#team1">자세히보기</Button>
                <Box sx={{
                  width: { xs: "10px", sm: "14px", md: "14px" },
                }}></Box>
                <Button className={classes.recruit_button} style={{ textTransform: "lowercase" }} sx={{
                  width: { xs: "134px", sm: "118px", md: "178px" },
                  height: { xs: "46px", sm: "41px", md: "62px" },
                  fontSize: { xs: "14px", sm: "13px", md: "20px" },
                  padding: { xs: "16px 0", sm: "11px 22px 10px 22px", md: "13px 30px 10px 30px" },
                }} component={Link} noLinkStyle href="#apply">지원하기</Button>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} sx={{
              width: { xs: "335px", sm: "297px", md: "450px" },
              height: { xs: "343px", sm: "304px", md: "460px" },
              background: { xs: "url('images/team/re_platform_m.png') no-repeat", sm: "url('images/team/re_platform_t.png') no-repeat", md: "url('images/team/re_platform.png') no-repeat" },
              marginTop: { xs: "10px", sm: "0px", md: "0px" },
              marginLeft: { xs: "0px", sm: "16px", md: "25px" },
              marginRight: { xs: "0px", sm: "16px", md: "25px" },
            }}>
              <Box>
                <Typography style={{ textAlign: "left", fontWeight: "bold", color: "#fff" }} sx={{
                  fontSize: { xs: "25px", sm: "25px", md: "40px" },
                  paddingTop: { xs: "63px", sm: "50px", md: "80px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                }}>플랫폼 개발</Typography>
                <Typography style={{ textAlign: "left", color: "#fff" }} sx={{
                  fontSize: { xs: "15px", sm: "15px", md: "20px" },
                  marginTop: { xs: "0px", sm: "-2px", md: "0px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                }}>Platform Development Team</Typography>
                <Typography style={{ textAlign: "left", color: "#fff", lineHeight: "133%" }} sx={{
                  fontSize: { xs: "15px", sm: "15px", md: "20px" },
                  marginTop: { xs: "23px", sm: "13px", md: "40px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                  marginRight: { xs: "30px", sm: "40px", md: "40px" },
                }}>다양한 IT서비스와 기술을 우리의 삶과 생활속에서 사용하기 위하여 다양한 노력과 즐거운 마음으로 업무을 진행합니다.</Typography>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }} sx={{
                marginBottom: { xs: "20px", sm: "20px", md: "20px" },
              }}>
                <Button className={classes.recruit_button} style={{ textTransform: "lowercase" }} sx={{
                  width: { xs: "134px", sm: "118px", md: "178px" },
                  height: { xs: "46px", sm: "41px", md: "62px" },
                  fontSize: { xs: "14px", sm: "13px", md: "20px" },
                  padding: { xs: "16px 0", sm: "11px 22px 10px 22px", md: "13px 30px 10px 30px" },
                }} component={Link} noLinkStyle href="/aboutus#team2">자세히보기</Button>
                <Box sx={{
                  width: { xs: "14px", sm: "14px", md: "14px" },
                }}></Box>
                <Button className={classes.recruit_button} style={{ textTransform: "lowercase" }} sx={{
                  width: { xs: "134px", sm: "118px", md: "178px" },
                  height: { xs: "46px", sm: "41px", md: "62px" },
                  fontSize: { xs: "14px", sm: "13px", md: "20px" },
                  padding: { xs: "16px 0", sm: "11px 22px 10px 22px", md: "13px 30px 10px 30px" },
                }} component={Link} noLinkStyle href="#apply">지원하기</Button>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} sx={{
              width: { xs: "335px", sm: "297px", md: "450px" },
              height: { xs: "343px", sm: "304px", md: "460px" },
              background: { xs: "url('images/team/re_brand_m.png') no-repeat", sm: "url('images/team/re_brand_t.png') no-repeat", md: "url('images/team/re_brand.png') no-repeat" },
              marginTop: { xs: "10px", sm: "0px", md: "0px" },
            }}>
              <Box>
                <Typography style={{ textAlign: "left", fontWeight: "bold", color: "#fff" }} sx={{
                  fontSize: { xs: "25px", sm: "25px", md: "40px" },
                  paddingTop: { xs: "63px", sm: "50px", md: "80px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                }}>브랜드 개발</Typography>
                <Typography style={{ textAlign: "left", color: "#fff" }} sx={{
                  fontSize: { xs: "15px", sm: "15px", md: "20px" },
                  marginTop: { xs: "0px", sm: "-2px", md: "0px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                }}>Brand Development Team</Typography>
                <Typography style={{ textAlign: "left", color: "#fff", lineHeight: "133%" }} sx={{
                  fontSize: { xs: "15px", sm: "15px", md: "20px" },
                  marginTop: { xs: "23px", sm: "13px", md: "40px" },
                  marginLeft: { xs: "30px", sm: "27px", md: "40px" },
                  marginRight: { xs: "30px", sm: "40px", md: "40px" },
                }}>다른 디자인, 삶과 생활 속 IOT제품, 지속 가능한 신 사업 새로운 일을 찾고, 회사 및 제품의 트렌디한 브랜드를 만들어가는 일을 진행합니다.</Typography>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }} sx={{
                marginBottom: { xs: "20px", sm: "20px", md: "20px" },
              }}>
                <Button className={classes.recruit_button} style={{ textTransform: "lowercase" }} sx={{
                  width: { xs: "134px", sm: "118px", md: "178px" },
                  height: { xs: "46px", sm: "41px", md: "62px" },
                  fontSize: { xs: "14px", sm: "13px", md: "20px" },
                  padding: { xs: "16px 0", sm: "11px 22px 10px 22px", md: "13px 30px 10px 30px" },
                }} component={Link} noLinkStyle href="/aboutus#team3">자세히보기</Button>
                <Box sx={{
                  width: { xs: "14px", sm: "14px", md: "14px" },
                }}></Box>
                <Button className={classes.recruit_button} style={{ textTransform: "lowercase" }} sx={{
                  width: { xs: "134px", sm: "118px", md: "178px" },
                  height: { xs: "46px", sm: "41px", md: "62px" },
                  fontSize: { xs: "14px", sm: "13px", md: "20px" },
                  padding: { xs: "16px 0", sm: "11px 22px 10px 22px", md: "13px 30px 10px 30px" },
                }} component={Link} noLinkStyle href="#apply">지원하기</Button>
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>

      {/* OUR BENEFITS */}
      <Box style={{
        width: "100%",
        background: "#ECF2FC",
      }} sx={{
        marginTop: { xs: "100px", sm: "100px", md: "150px" },
        height: { xs: "890px", sm: "680px", md: "923px" },
      }}>
        <Box style={{ textAlign: "-webkit-left" }}
          sx={{
            maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
            paddingTop: { xs: "60px", sm: "70px", md: "84px" },
            paddingLeft: { xs: "20px", sm: "50px", md: "0px" },
          }}>
          {/* OUR BENEFITS - TITLE */}
          <Typography style={{
            fontWeight: "bold",
            color: "#0C254B"
          }} sx={{
            fontSize: { xs: "25px", sm: "40px", md: "60px" },
          }}>OUR BENEFITS</Typography>

          <Box style={{ display: "flex" }} sx={{
            marginTop: { xs: "60px", sm: "70px", md: "90px" },
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} sx={{
              marginTop: { xs: "0px", sm: "0px", md: "0px" },
              height: { xs: "138px", sm: "188px", md: "258px" },
            }}>
              <Box sx={{
                width: { xs: "130px", sm: "180px", md: "250px" },
                marginLeft: { xs: "0px", sm: "0px", md: "0px" }
              }}><Image src={benefit01Png} alt="자유로운 근무환경" style={{width: '100%', height: '100%'}} /></Box>
              <Box sx={{
                width: { xs: "210px", sm: "265px", md: "290px" },
                marginLeft: { xs: "48px", sm: "50px", md: "99px" },
                marginRight: { xs: "0px", sm: "23px", md: "99px" }
              }}>
                <Typography style={{
                  fontWeight: 600,
                  color: "#0C254B"
                }} sx={{
                  fontSize: { xs: "15px", sm: "20px", md: "25px" },
                  marginTop: { xs: "10px", sm: "15px", md: "20px" },
                }}>자유로운 근무환경</Typography>
                <Typography style={{
                  color: "#707070"
                }} sx={{
                  fontSize: { xs: "12px", sm: "15px", md: "20px" },
                  marginTop: { xs: "6px", sm: "12px", md: "25px" },
                }}>-주 1회 재택근무<br />-유연근무제<br />-자유로운 연차사용<br />-샌드위치 연휴는 재택근무<br />-연말, 명절 조기퇴근</Typography>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} sx={{
              marginTop: { xs: "0px", sm: "0px", md: "0px" },
              height: { xs: "138px", sm: "188px", md: "258px" },
            }}>
              <Box sx={{
                width: { xs: "130px", sm: "180px", md: "250px" },
              }}><Image src={benefit02Png} alt="성장을 위한 지원" style={{width: '100%', height: '100%'}} /></Box>
              <Box sx={{
                width: { xs: "210px", sm: "230px", md: "290px" },
                marginLeft: { xs: "48px", sm: "50px", md: "99px" }
              }}>
                <Typography style={{
                  fontWeight: 600,
                  color: "#0C254B"
                }} sx={{
                  fontSize: { xs: "15px", sm: "20px", md: "25px" },
                  marginTop: { xs: "10px", sm: "15px", md: "20px" },
                }}>성장을 위한 지원</Typography>
                <Typography style={{
                  color: "#707070"
                }} sx={{
                  fontSize: { xs: "12px", sm: "15px", md: "20px" },
                  marginTop: { xs: "6px", sm: "12px", md: "25px" },
                }}>-도서구입비 지원<br />-웰컴키트 지원<br />-청년내일채움공제 시행</Typography>
              </Box>
            </Box>
          </Box>

          <Box style={{ display: "flex" }} sx={{
            marginTop: { xs: "0px", sm: "35px", md: "73px" },
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} sx={{
              marginTop: { xs: "0px", sm: "0px", md: "0px" },
            }}>
              <Box sx={{
                width: { xs: "130px", sm: "180px", md: "250px" },
                marginLeft: { xs: "0px", sm: "0px", md: "0px" }
              }}><Image src={benefit03Png} alt="즐겁게 일하는 환경" style={{width: '100%', height: '100%'}} /></Box>
              <Box sx={{
                width: { xs: "210px", sm: "265px", md: "290px" },
                marginLeft: { xs: "48px", sm: "50px", md: "99px" },
                marginRight: { xs: "0px", sm: "23px", md: "99px" }
              }}>
                <Typography style={{
                  fontWeight: 600,
                  color: "#0C254B"
                }} sx={{
                  fontSize: { xs: "15px", sm: "20px", md: "25px" },
                  marginTop: { xs: "8px", sm: "16px", md: "20px" },
                }}>즐겁게 일하는 환경</Typography>
                <Typography style={{
                  color: "#707070"
                }} sx={{
                  fontSize: { xs: "12px", sm: "15px", md: "20px" },
                  marginTop: { xs: "6px", sm: "12px", md: "25px" },
                }}>-생일자를 위한 파티와 선물지급<br />-스낵데이(월 1회)<br />-워크샵(연 2회)<br />-간식, 음료, 커피 제공<br />-창립기념일 휴무</Typography>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} sx={{
              marginTop: { xs: "0px", sm: "0px", md: "0px" },
            }}>
              <Box sx={{
                width: { xs: "130px", sm: "180px", md: "250px" },
              }}><Image src={benefit01Png} alt="업무 몰입을 위한 지원" style={{width: '100%', height: '100%'}} /></Box>
              <Box sx={{
                width: { xs: "210px", sm: "230px", md: "290px" },
                marginLeft: { xs: "48px", sm: "50px", md: "99px" }
              }}>
                <Typography style={{
                  fontWeight: 600,
                  color: "#0C254B"
                }} sx={{
                  fontSize: { xs: "15px", sm: "20px", md: "25px" },
                  marginTop: { xs: "10px", sm: "15px", md: "20px" },
                }}>업무 몰입을 위한 지원</Typography>
                <Typography style={{
                  color: "#707070"
                }} sx={{
                  fontSize: { xs: "12px", sm: "15px", md: "20px" },
                  marginTop: { xs: "6px", sm: "12px", md: "25px" },
                }}>-인센티브<br />-야근 식대 제공<br />-야근 택시비 지원</Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>


      {/* 앤트맨이 되는 과정 */}
      <Box style={{ textAlign: "-webkit-left" }}
        sx={{
          maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
          paddingTop: { xs: "80px", sm: "90px", md: "150px" },
        }}>
        <Typography style={{
          fontWeight: 600,
          color: "#0C254B"
        }} sx={{
          fontSize: { xs: "25px", sm: "44px", md: "60px" },
          marginLeft: { xs: "20px", sm: "50px", md: "0px" },
        }}>앤트맨이 되는 과정</Typography>
      </Box>
      <Box sx={{
        display: { xs: "none", sm: "block", md: "block" },
      }}>
        {/* 앤트맨이 되는 과정 - 가로줄 */}
        <Box style={{
          width: "100%",
          borderBottom: " 2px solid #0C254B"
        }} sx={{
          height: { xs: "23px", sm: "23px", md: "23px" },
          marginTop: { xs: "100px", sm: "124px", md: "170px" },
        }}></Box>
        {/* 앤트맨이 되는 과정 - 단계 이미지 */}
        <Box style={{ textAlign: "-webkit-center", display: "flex", justifyContent: "center" }}
          sx={{
            maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
            marginTop: { xs: "-100px", sm: "-80px", md: "-125px" },
          }}>
          <Box sx={{
            width: { xs: "18px", sm: "156px", md: "224px" },
          }}><Image src={process01Png} alt="입사지원" style={{width: '100%', height: '70%'}} />
            <Typography style={{
              color: "#0C254B"
            }} sx={{
              fontSize: { xs: "18px", sm: "24px", md: "35px" },
              marginTop: { xs: "18px", sm: "25px", md: "20px" },
            }}>입사지원</Typography>
          </Box>
          <Box sx={{ width: { xs: "14px", sm: "43px", md: "62px" }, }}></Box>
          <Box sx={{
            width: { xs: "18px", sm: "156px", md: "224px" },
          }}><Image src={process02Png} alt="서류전형" style={{width: '100%', height: '70%'}} />
            <Typography style={{
              color: "#0C254B"
            }} sx={{
              fontSize: { xs: "18px", sm: "24px", md: "35px" },
              marginTop: { xs: "18px", sm: "25px", md: "20px" },
            }}>서류전형</Typography>
          </Box>
          <Box sx={{ width: { xs: "14px", sm: "43px", md: "62px" }, }}></Box>
          <Box sx={{
            width: { xs: "18px", sm: "156px", md: "224px" },
          }}><Image src={process03Png} alt="면접" style={{width: '100%', height: '70%'}} />
            <Typography style={{
              color: "#0C254B"
            }} sx={{
              fontSize: { xs: "18px", sm: "24px", md: "35px" },
              marginTop: { xs: "18px", sm: "25px", md: "20px" },
            }}>면접</Typography>
          </Box>
          <Box sx={{ width: { xs: "14px", sm: "43px", md: "62px" }, }}></Box>
          <Box sx={{
            width: { xs: "18px", sm: "156px", md: "224px" },
          }}><Image src={process04Png} alt="최종합격" style={{width: '100%', height: '70%'}} />
            <Typography style={{
              color: "#0C254B"
            }} sx={{
              fontSize: { xs: "18px", sm: "24px", md: "35px" },
              marginTop: { xs: "18px", sm: "25px", md: "20px" },
            }}>최종합격</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: { xs: "block", sm: "none", md: "none" },
      }}>
        {/* 앤트맨이 되는 과정 - 단계 이미지 */}
        <Box style={{
          textAlign: "-webkit-center", display: "flex", justifyContent: "center",
          maxWidth: "100%", marginTop: "54px"
        }}>
          <Box style={{ width: "95px" }}>
            <img src="/images/recruit/process01.png" alt="입사지원" width="100%" />
            <Typography style={{
              color: "#0C254B",
              fontSize: "14px",
              marginTop: "11px",
            }}>입사지원</Typography>
          </Box>
          <Box style={{ width: "6px", margin: "0px 16px", paddingTop: "38px" }}>
            <img src="/images/arrow_right.png" alt="next" width="100%" />
          </Box>
          <Box style={{ width: "95px" }}>
            <img src="/images/recruit/process02.png" alt="서류전형" width="100%" />
            <Typography style={{
              color: "#0C254B",
              fontSize: "14px",
              marginTop: "11px",
            }}>서류전형</Typography>
          </Box>
          <Box style={{ width: "6px", margin: "0px 16px", paddingTop: "38px" }}>
            <img src="/images/arrow_right.png" alt="next" width="100%" />
          </Box>
        </Box>
        <Box style={{
          textAlign: "-webkit-center", display: "flex", justifyContent: "center",
          maxWidth: "100%", marginTop: "19px"
        }}>
          <Box style={{ width: "95px" }}>
            <img src="/images/recruit/process03.png" alt="면접" width="100%" />
            <Typography style={{
              color: "#0C254B",
              fontSize: "14px",
              marginTop: "11px",
            }}>면접</Typography>
          </Box>
          <Box style={{ width: "6px", margin: "0px 16px", paddingTop: "38px" }}>
            <img src="/images/arrow_right.png" alt="next" width="100%" />
          </Box>
          <Box style={{ width: "95px" }}>
            <img src="/images/recruit/process04.png" alt="최종합격" width="100%" />
            <Typography style={{
              color: "#0C254B",
              fontSize: "14px",
              marginTop: "11px",
            }}>최종합격</Typography>
          </Box>
        </Box>
      </Box>

      {/* 지원하기 */}
      <Box style={{
        width: "100%",
        background: "#ECF2FC",
      }} sx={{
        marginTop: { xs: "60px", sm: "130px", md: "150px" },
        paddingLeft: { xs: "20px", sm: "50px", md: "0px" },
        paddingRight: { xs: "20px", sm: "50px", md: "0px" },
      }}>
        {/* 지원하기 - TITLE */}
        <a id="apply"></a>
        <Box style={{ textAlign: "-webkit-left" }}
          sx={{
            maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
            paddingTop: { xs: "60px", sm: "65px", md: "150px" },
          }}>
          <Typography style={{
            fontWeight: 600,
            color: "#0C254B"
          }} sx={{
            fontSize: { xs: "25px", sm: "40px", md: "60px" },
          }}>지원하기</Typography>
        </Box>
        <Box sx={{
          marginTop: { xs: "60px", sm: "150px", md: "150px" },
          maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
          paddingBottom: { xs: "30px", sm: "50px", md: "80px" },
        }}>
          <Box style={{ backgroundColor: "#fff", borderRadius: "20px" }} sx={{
            padding: { xs: "100px 10px", sm: "100px 40px", md: "100px 40px" },
          }}>
            <Grid container >
              <Grid item xs={12} sm={6} style={{ display: "flex" }}>
                <Box sx={{
                  width: { xs: "115px", sm: "100px", md: "150px" },
                  marginTop: { xs: "8px", sm: "8px", md: "14px" },
                }}>
                  <Typography style={{ fontWeight: 600, textAlign: "left" }} sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                  }}>지원분야</Typography>
                </Box>
                <Box style={{ border: "0px solid #cdcdcd" }} sx={{
                  width: { xs: "200px", sm: "310px", md: "470px" },
                  height: { xs: "35px", sm: "39px", md: "60px" },
                }}>
                  <FormControl fullWidth>
                    <Select className={classes.apply_select}
                      style={{ textAlign: "left", borderRadius: "0px" }}
                      sx={{
                        width: { xs: "200px", sm: "310px", md: "470px" },
                        height: { xs: "35px", sm: "39px", md: "60px" },
                        paddingLeft: { xs: "10px", sm: "10px", md: "10px" },
                      }}
                      value={part}
                      onChange={handleChangePart}
                    >
                      <MenuItem value={1}>서비스개발</MenuItem>
                      <MenuItem value={2}>플랫폼개발</MenuItem>
                      <MenuItem value={3}>브랜드개발</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: "flex", marginTop: "20px" }}>
                <Box sx={{
                  width: { xs: "115px", sm: "100px", md: "150px" },
                  marginTop: { xs: "8px", sm: "8px", md: "14px" },
                }}>
                  <Typography style={{ fontWeight: 600, textAlign: "left" }} sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                  }}>이름</Typography>
                </Box>
                <Box sx={{
                  width: { xs: "200px", sm: "310px", md: "470px" },
                  height: { xs: "35px", sm: "39px", md: "60px" },
                }}>
                  <input style={{
                    border: "1px solid #ABABAB",
                    padding: "10px 10px",
                    width: "100%",
                    height: "100%",
                  }}
                    type="text" placeholder="이름을 입력하세요."
                    value={name}
                    onChange={handleChangeName} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: "flex", marginTop: "20px" }}>
                <Box sx={{
                  width: { xs: "115px", sm: "100px", md: "150px" },
                  marginTop: { xs: "8px", sm: "8px", md: "14px" },
                }}>
                  <Typography style={{ fontWeight: 600, textAlign: "left" }} sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                  }}>전화번호</Typography>
                </Box>
                <Box sx={{
                  width: { xs: "200px", sm: "310px", md: "470px" },
                  height: { xs: "35px", sm: "39px", md: "60px" },
                }}>
                  <input style={{
                    border: "1px solid #ABABAB",
                    padding: "10px 10px",
                    width: "100%",
                    height: "100%",
                  }}
                    type="text" placeholder="전화번호를 입력하세요."
                    value={telNo}
                    onChange={handleChangeTelNo} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: "flex", marginTop: "20px" }}>
                <Box sx={{
                  width: { xs: "115px", sm: "100px", md: "150px" },
                  marginTop: { xs: "8px", sm: "8px", md: "14px" },
                }}>
                  <Typography style={{ fontWeight: 600, textAlign: "left" }} sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                  }}>이메일</Typography>
                </Box>
                <Box sx={{
                  width: { xs: "200px", sm: "310px", md: "470px" },
                  height: { xs: "35px", sm: "39px", md: "60px" },
                }}>
                  <input style={{
                    border: "1px solid #ABABAB",
                    padding: "10px 10px",
                    width: "100%",
                    height: "100%",
                  }}
                    type="text" placeholder="이메일을 입력하세요."
                    value={email}
                    onChange={handleChangeEmail} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ width: "100%", marginTop: "50px" }}>
                  <Typography style={{ fontWeight: 600, textAlign: "left" }} sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                  }}>첨부자료 유의사항</Typography>
                </Box>
                <Box style={{ width: "100%", marginTop: "20px" }}>
                  <Typography style={{ textAlign: "left", color: "#646464" }} sx={{
                    fontSize: { xs: "10px", sm: "18px", md: "18px" },
                  }}>-본인이 작성한 자료(이력서, 포트폴리오 등)를 첨부하거나 URL을 기입할 수 있습니다.<br />-첨부파일은 .zip 형식으로 업로드 가능하며, 업로드 할 수 있는 첨부파일의 최대용량은 20Mbytes입니다.</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: "flex", marginTop: "40px" }}>
                <Box sx={{
                  width: { xs: "115px", sm: "100px", md: "150px" },
                  marginTop: { xs: "8px", sm: "8px", md: "14px" },
                }}>
                  <Typography style={{ fontWeight: 600, textAlign: "left" }} sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                  }}>첨부자료</Typography>
                </Box>
                <Box style={{ border: "1px solid #ABABAB", display: "flex", justifyContent: "space-between", alignContent: "center" }} sx={{
                  width: { xs: "200px", sm: "310px", md: "470px" },
                  height: { xs: "35px", sm: "39px", md: "60px" },
                  fontSize: { xs: "9px", sm: "11px", md: "14px" },
                }}><Box style={{ height: "100%", paddingLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>{(applyFile) ? applyFile.name : ''}</Box>
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChangeApplyFile}
                    style={{ display: 'none' }}
                  />
                  <Button
                    style={{
                      color: "#fff", backgroundColor: "#0C254B",
                      borderRadius: "0px",
                      marginRight: "-1px",
                      marginTop: "-1px",
                    }}
                    sx={{
                      width: { xs: "58px", sm: "88px", md: "126px" },
                      fontSize: { xs: "10px", sm: "13px", md: "14px" },
                      height: { xs: "35px", sm: "39px", md: "60px" },
                    }}
                    onClick={handleUploadSheet}>
                    파일추가
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: "flex" }} sx={{
                marginTop: { xs: "20px", sm: "40px", md: "40px" },
              }}>
                <Box sx={{
                  width: { xs: "115px", sm: "100px", md: "150px" },
                }}>
                  <Typography style={{ fontWeight: 600, textAlign: "left" }} sx={{
                    fontSize: { xs: "15px", sm: "18px", md: "25px" },
                    marginTop: { xs: "8px", sm: "8px", md: "14px" },
                  }}>URL</Typography>
                </Box>
                <Box sx={{
                  width: { xs: "200px", sm: "310px", md: "470px" },
                  height: { xs: "35px", sm: "39px", md: "60px" },
                }}>
                  <input style={{
                    border: "1px solid #ABABAB",
                    padding: "10px 10px",
                    width: "100%",
                    height: "100%",
                  }}
                    type="text" placeholder="URL 주소를 입력하세요."
                    value={url}
                    onChange={handleChangeUrl} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Button className={classes.apply_button} style={{ textTransform: "lowercase" }} sx={{
          marginBottom: { xs: "40px", sm: "93px", md: "200px" },
          width: { xs: "105px", sm: "259px", md: "259px" },
          height: { xs: "28px", sm: "70px", md: "70px" },
          fontSize: { xs: "12px", sm: "25px", md: "25px" },
          padding: { xs: "11px 12px 10px 12px", sm: "11px 22px 10px 22px", md: "13px 30px 10px 30px" },
        }} onClick={handleClickCreateApply}>지원서 제출</Button>
      </Box>

      {/* 유의사항 */}
      <Box style={{ textAlign: "-webkit-left" }}
        sx={{
          maxWidth: { xs: "100%", sm: "1024px", md: "1400px" },
          paddingTop: { xs: "60px", sm: "80px", md: "96px" },
        }}>
        <Typography style={{
          fontWeight: 600,
          color: "#0C254B"
        }} sx={{
          fontSize: { xs: "25px", sm: "25px", md: "25px" },
          marginLeft: { xs: "20px", sm: "50px", md: "0px" },
        }}>유의사항</Typography>
        <Typography style={{
          color: "#707070"
        }} sx={{
          marginTop: { xs: "18px", sm: "25px", md: "25px" },
          marginLeft: { xs: "20px", sm: "0px", md: "0px" },
          fontSize: { xs: "12px", sm: "18px", md: "18px" },
        }}>-입사 지원 시 본인의 성명, 연락처, 이메일주소 등을 정확하게 기재합니다.<br />
          -면접 대상과 일정은 서류전형 합격자에 한해 개별 안내할 예정입니다.<br />
          -최종 심사를 거친 결과는 합격자에게 개별 통보합니다.<br />
          -지원 관련 문의는 이메일로 보내주시기 바랍니다.<br />
          -이력서에 기재된 학력 및 경력 사항 등의 허위가 판명될 경우, 합격이 취소될 수 있습니다.</Typography>
      </Box>

      <Box sx={{ height: { xs: "100px", sm: "137px", md: "190px" } }}></Box>

      <Footer isWhite={false} />

    </Box >
  );
}
