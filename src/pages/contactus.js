import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import { requestPostWidthJsonAPI } from 'src/common/services/AntsRequester';

import Image from 'next/image';
import callPng from "public/images/call.png";
import companyPng from "public/images/company.png";
import emailPng from "public/images/email.png";

const MyComponent = styled(Button)`
border: 2px solid #0C254B;
padding: 10px 30px 10px 30px;
color: #fff;
font-weight: 800;
background-color: #0C254B;
border-radius: 46px;
margin-right: 20px;
&:hover {˜
  background-color: #fff;
  color: #0C254B;
},
`;

const InputComponent = styled(OutlinedInput)`
padding: 0;
font-weight: 800;
width: 100%;
height: 100%;
border-radius: 10px;
margin-right: 20px;
align-items: start;
& .MuiOutlinedInput-root input: {
  padding: 100px;
};
& .MuiOutlinedInput-input: {
  padding: 100px;
}
`;

const EmailValidation = (enteredEmail) => {
  const mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (enteredEmail.match(mail_format)) {
    return true;
  } else {
    return false;
  }
}

export default function ContactUs() {

  // email
  const [email, setEmail] = useState('');
  // title
  const [title, setTitle] = useState('');
  // content
  const [content, setContent] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  }

  // "문의하기" 생성
  const handleClickCreateInquire = () => {
    // validate - email
    if (!EmailValidation(email)) {
      alert("이메일 형식이 잘못되었습니다.");
      return;
    }
    // validate
    if (title === null || title.trim() === '') {
      alert("제목을 입력하세요.");
      return;
    }
    if (title.length > 140) {
      alert("제목의 길이가 140자 보다 큽니다. 줄여 주세요.");
      return;
    }
    // validate
    if (content === null || content.trim() === '') {
      alert("내용을 입력하세요.");
      return;
    }
    if (content.length > 4000) {
      alert("내용의 길이가 4000자 보다 큽니다. 줄여 주세요.");
      return;
    }

    requestPostWidthJsonAPI('setInquireDataCreate', {
      "title": title,
      "email": email,
      "content": content
    }).then((response) => {
      if (response && response.status && response.status === 200) {
        if (response.data.status.result === 'success') {
          alert("귀하의 소중한 문의사항이 등록되었습니다. 검토 후 정확한 답변을 보내드리겠습니다.");
          setEmail('');
          setTitle('');
          setContent('');
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
        background: "url('/images/c_banner.png') no-repeat center top / cover",
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
        >CONTACT</Typography>

        {/* 본문 */}
        <Box style={{ textAlign: "-webkit-center" }}>
          <Typography style={{
            fontWeight: "bold",
            color: "#0C254B"
          }} sx={{
            marginTop: { xs: "59px", sm: "40px", md: "100px" },
            fontSize: { xs: "18px", sm: "25px", md: "40px" },
          }}
          >앤트썸에게 궁금한 사항이 있으신가요?</Typography>

          <Box style={{ border: "0px solid red" }}
            sx={{
              width: { xs: "100%", sm: "924px", md: "1400px" },
              height: { xs: "650px", sm: "629px", md: "950px" },
              textAlign: { xs: "-webkit-center", sm: "left", md: "left" },
            }}>
            <Box style={{
              background: "#0C254B",
              borderRadius: "20px",
              textAlign: "left",
            }} sx={{
              width: { xs: "270px", sm: "363px", md: "550px" },
              height: { xs: "250px", sm: "396px", md: "600px" },
              marginTop: { xs: "60px", sm: "164px", md: "240px" },
              position: { xs: "relative", sm: "absolute", md: "absolute" },
            }}>
              <Box >
                <Typography style={{
                  fontWeight: 900,
                  color: "#fff",
                }} sx={{
                  paddingTop: { xs: "26px", sm: "46px", md: "70px" },
                  paddingLeft: { xs: "20px", sm: "46px", md: "70px" },
                  fontSize: { xs: "25px", sm: "33px", md: "50px" },
                }}>CONTACT US</Typography>
                <Box style={{ float: "left", }}
                  sx={{
                    marginTop: { xs: "40px", sm: "52px", md: "60px" },
                    marginLeft: { xs: "20px", sm: "52px", md: "79px" },
                  }}>
                  <Box sx={{
                    paddingTop: { xs: "0px", sm: "35px", md: "35px" },
                    width: { xs: "18px", sm: "23px", md: "35px" }
                  }}><Image src={companyPng} alt="회사주소" style={{width: '100%', height: '100%'}} /></Box>
                  <Box sx={{
                    paddingTop: { xs: "21px", sm: "28px", md: "45px" },
                    width: { xs: "18px", sm: "23px", md: "35px" }
                  }}><Image src={emailPng} alt="회사 이메일 주소" style={{width: '100%', height: '100%'}} /></Box>
                  <Box sx={{
                    paddingTop: { xs: "22px", sm: "28px", md: "25px" },
                    width: { xs: "18px", sm: "23px", md: "35px" }
                  }}><Image src={callPng} alt="회사 전화번호" style={{width: '100%', height: '100%'}} /></Box>
                </Box>
                <Box style={{
                  color: "#fff",
                }} sx={{
                  marginTop: { xs: "14px", sm: "60px", md: "60px" },
                  marginLeft: { xs: "56px", sm: "96px", md: "150px" },
                }}>
                  <Box sx={{
                    paddingTop: { xs: "22px", sm: "22px", md: "22px" },
                    fontSize: { xs: "12px", sm: "15px", md: "20px" },
                  }}>서울특별시 구로구 디지털로 288, 511호<br />
                    (구로동, 대륭포스트타워 1차)</Box>
                  <Box sx={{
                    paddingTop: { xs: "14px", sm: "16px", md: "46px" },
                    fontSize: { xs: "15px", sm: "20px", md: "20px" },
                  }}>service@antsome.com</Box>
                  <Box sx={{
                    paddingTop: { xs: "26px", sm: "28px", md: "36px" },
                    fontSize: { xs: "15px", sm: "20px", md: "20px" },
                  }}>02-2135-5538</Box>
                </Box>
              </Box>
            </Box>
            <Box style={{
              boxShadow: "0px 0px 15px #c2c2c2",
              borderRadius: "10px",
            }} sx={{
              width: { xs: "335px", sm: "795px", md: "1205px" },
              height: { xs: "570px", sm: "528px", md: "800px" },
              marginTop: { xs: "-176px", sm: "100px", md: "140px" },
              float: { xs: "none", sm: "right", md: "right" },
            }}>
              <Box style={{
              }} sx={{
                textAlign: "-webkit-right",
                textAlign: { xs: "-webkit-center", sm: "-webkit-right", md: "-webkit-right" },
                margin: { xs: "0px", sm: "65px 66px 0 0", md: "99px 100px 0 0" },
                paddingTop: { xs: "225px", sm: "0px", md: "0px" },
              }}>
                <Box style={{ marginBottom: "15px" }}
                  sx={{
                    width: { xs: "295px", sm: "429px", md: "650px" },
                    height: { xs: "36px", sm: "53px", md: "80px" },
                  }}>
                  <InputComponent type="email" placeholder="email" value={email}
                    inputProps={{ style: { padding: "3%" } }}
                    onChange={handleChangeEmail} sx={{
                      fontSize: { xs: "13px", sm: "16px", md: "18px" },
                    }} />
                </Box>
                <Box style={{ marginBottom: "15px"}} 
                  sx={{
                    width: { xs: "295px", sm: "429px", md: "650px" },
                    height: { xs: "36px", sm: "53px", md: "80px" },
                  }}>
                  <InputComponent placeholder="subject" value={title}
                    inputProps={{ style: { padding: "3%" } }}
                    onChange={handleChangeTitle} sx={{
                      fontSize: { xs: "13px", sm: "16px", md: "18px" },
                    }} />
                </Box>
                <Box style={{ marginBottom: "15px" }}
                  sx={{
                    width: { xs: "295px", sm: "429px", md: "650px" },
                    height: { xs: "113px", sm: "165px", md: "250px" },
                  }}>
                  <InputComponent placeholder="message" value={content}
                    multiline={true}
                    inputProps={{ style: { padding: "3%" } }}
                    onChange={handleChangeContent} sx={{
                      fontSize: { xs: "13px", sm: "16px", md: "18px" },
                    }} />
                </Box>
              </Box>
              <MyComponent style={{ textTransform: "lowercase" }} sx={{
                width: { xs: "119px", sm: "119px", md: "180px" },
                height: { xs: "46px", sm: "46px", md: "70px" },
                marginTop: { xs: "50px", sm: "50px", md: "81px" },
                marginLeft: { xs: "0px", sm: "300px", md: "455px" },
                fontSize: { xs: "16px", sm: "16px", md: "25px" },
              }}
                onClick={handleClickCreateInquire}>send</MyComponent>
            </Box>
          </Box>
        </Box>

      </Box>
      <Box sx={{ height: { xs: "100px", sm: "150px", md: "249px" } }}></Box>

      <Footer isWhite={false} />

    </Box >
  );
}
