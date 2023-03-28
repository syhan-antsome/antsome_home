## 프로젝트 구성
- 프론트엔드는 nextjs 를 사용하여 개발. (현 프로젝트)
  : git@github.com:syhan-antsome/antsome_home.git
- 백엔드는 node 서버를 이용함
  : git@github.com:antsomePDT/antsome-homepage.git

## 서버 구성
- 프론트엔드와 백엔드 각각 다른 폴더에 설치하여 실행
- 포트는 각각 두개씩 사용함.
- 프론트엔드 80, 443
- 백엔드 8030, 3010
- 운영에서는 모두 https 사용.

1. 프론트엔드 빌드-실행
   - 소스 수정작업후 빌드-익스포트 실행
     : "build": "next build && next export" 사용 한다.
   - ./out 폴더에 파일 생성됨
   - out 폴더에서 tar로 묶는다.
     : tar -zcvf antsome_v20.tar.gz *
   - 약 141메가짜리 tar 파일 생성 됨.
   - 서버에 전송
     : 운영서버 폴더위치 > /service/source/anthome
     : (폴더이름 조심 !!! antsome은 백엔드, anthome은 프론트엔드)
   - 위 폴더에 파일 모두 삭제하고 위에서 생성-전송한 tar 파일을 압축해제한다.
   - 아파치 리스타트 - 웹서버의 document root 를 지정하여 실행 되는 방식

2. 백엔드 빌드-실행
   - node 프로젝트로 만든 백엔드는 별도의 빌드 없이 소스 폴더을 tar로 묶어서 서버로 전송
   - 소스 루트 폴더로 이동하여 tar 로 파일들을 묶는다.
     : package.json, server.js, src/  이 세개만 묶어서 사용해도 됨
     : tar -zcvf antsome_home_230328.tar.gz package.json server.js src/
   - 서버에 전송
     : 운영서버 폴더위치 > /service/source/antsome
     : (폴더이름 조심 !!! antsome은 백엔드, anthome은 프론트엔드)
   - 위 폴더에 파일 모두 삭제하고 위에서 생성-전송한 tar 파일을 압축해제한다.
   - 모듈 다운로드
     : node_modules 가 없다면 모듈 다운로드를 한다. npm, yarn 모두 가능
     : npm -i 또는 yarn 
   - 실행 -------------
   - pm2 툴을 사용한다.
   - package.json 에 start_prod_pm2 이용
   - 명령어 : npm run start_prod_pm2

@ 프론트엔드에서 서버로 호출하는 주소와 경로 지정은
  아래 파일에서 설정 또는 환경 파일로 처리하면 됨.
   - frontend/src/common/services/AntsRequester.js

@ pm2 설치
   - https://pm2.keymetrics.io/docs/usage/quick-start/
   - 멀티쓰레드 가능.
   - 설치 : npm install -g pm2


## 개발시 개발-실행하는 법
- 
- src/indexjs 대신에 server.js 를 사용함.
- pm2 툴을 이용하여 서비스가 실행 되도록 함

1. 프론트엔드 개발-실행
   - git 레포티토리를 clone 한다.
     : git@github.com:syhan-antsome/antsome_home.git
   - 모듈 다운로드
     : yarn 또는 npm -i
   - 'dev' 항목을 이용하여 실행
     : yarn dev 또는 npm run dev

2. 백엔드 개발-실행
   - git 레포티토리를 clone 한다.
     : git@github.com:antsomePDT/antsome-homepage.git
   - 모듈 다운로드
     : yarn 또는 npm -i
   - 'dev' 항목을 이용하여 실행
     : yarn dev 또는 npm run dev
