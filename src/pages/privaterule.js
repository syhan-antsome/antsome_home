import * as React from 'react';
import Box from '@mui/material/Box';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

export default function PrivateRule() {

    return (
        <Box style={{ width: "100%", textAlign: "-webkit-center" }}>

            <Header isWhite={false} />

            <Box style={{ padding: 20, textAlign: "-webkit-left" }} sx={{
                marginTop: { xs: "80px", sm: "90px", md: "120px" },
            }}>
                <Box style={{ fontWeight: 800, fontSize: 30, borderBottom: "2px solid #000" }}>
                    개인정보처리방침
                </Box>
                <Box style={{ fontSize: 16, marginTop: 40, border: "1px solid #ababab", padding: 20 }}>
                    <Box style={{ marginTop: 0 }}>
                        <b>&quot;(주)앤트썸&quot;(&apos;www.antsome.com&apos;이하 &apos;(주)앤트썸 홈페이지&apos;)</b>은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                        <br /><br />
                        ○ 이 개인정보처리방침은 2022년 1월 1부터 적용됩니다.
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제1조(개인정보의 처리 목적)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            <b>&quot;(주)앤트썸&quot;(&apos;www.antsome.com&apos;이하 &apos;(주)앤트썸 홈페이지&apos;)</b>은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                            <br /><br />
                            1. 민원사무 처리
                            <br />
                            민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제2조(개인정보의 처리 및 보유 기간)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            ① <b>&quot;(주)앤트썸&quot;</b>은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                            <br /><br />
                            ② 개인정보 처리 및 보유 기간은 다음과 같습니다.
                            <br /><br />
                            1. 민원사무 처리
                            <br />
                            민원사무 처리와 관련한 개인정보는 수집.이용에 관한 동의일로부터 3년까지 위 이용목적을 위하여 보유.이용됩니다.<br />
                            보유근거 : 부정방지및 서비스정보확인<br />
                            관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br />
                            예외사유 : 없음<br />
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제3조(처리하는 개인정보의 항목)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            ① <b>&quot;(주)앤트썸&quot;</b>은 다음의 개인정보 항목을 처리하고 있습니다.
                            <br /><br />
                            1. 민원사무 처리<br />
                            필수항목 : 이메일, 휴대전화번호, 이름<br />
                            선택항목 : 입사지원자료<br />
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제4조(개인정보의 파기절차 및 파기방법)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            ① <b>&quot;(주)앤트썸&quot;</b>은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                            <br /><br />
                            ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                            <br />
                            1. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
                            <br /><br />
                            ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                            <br />
                            1. 파기절차<br />
                            <b>&quot;(주)앤트썸&quot;</b>은 파기 사유가 발생한 개인정보를 선정하고, <b>&quot;(주)앤트썸&quot;</b> 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                            <br />
                            2. 파기방법<br />
                            전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            ① 정보주체는 <b>&quot;(주)앤트썸&quot;</b>에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                            <br /><br />
                            ② 제1항에 따른 권리 행사는<b>&quot;(주)앤트썸&quot;</b>에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 <b>&quot;(주)앤트썸&quot;</b>은 이에 대해 지체 없이 조치하겠습니다.
                            <br /><br />
                            ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                            <br /><br />
                            ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
                            <br /><br />
                            ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                            <br /><br />
                            ⑥ <b>&quot;(주)앤트썸&quot;</b>은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제6조(개인정보의 안전성 확보조치에 관한 사항)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            <b>&quot;(주)앤트썸&quot;</b>은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                            <br /><br />
                            1. 개인정보 취급 직원의 최소화 및 교육
                            <br />
                            개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
                            <br /><br />
                            2. 내부관리계획의 수립 및 시행
                            <br />
                            개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
                            <br /><br />
                            3. 개인정보에 대한 접근 제한
                            <br />
                            개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제7조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            <b>&quot;(주)앤트썸&quot;</b>은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제8조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            행태정보의 수집·이용·제공 및 거부등에 관한 사항
                            <br />
                            &quot;개인정보처리자명&quot;은 온라인 맞춤형 광고 등을 위한 행태정보를 수집·이용·제공하지 않습니다.
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제9조 (개인정보 보호책임자에 관한 사항)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            ① <b>&quot;(주)앤트썸&quot;</b>은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                            <br /><br />
                            ▶ 개인정보 보호책임자<br />
                            성명 :한상용<br />
                            직책 :팀장<br />
                            직급 :부장<br />
                            연락처 :02-2135-5538, service@antsome.com, 02-2135-5539<br />
                            ※ 개인정보 보호 담당부서로 연결됩니다.<br />
                            <br />
                            ② 정보주체께서는 <b>&quot;(주)앤트썸&quot;</b>의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. <b>&quot;(주)앤트썸&quot;</b>은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                        </Box>
                    </Box>
                    <Box style={{ marginTop: 40 }}>
                        <Box style={{ fontSize: 18, fontWeight: 700 }}>제10조(정보주체의 권익침해에 대한 구제방법)</Box>
                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                            <br /><br />
                            1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br />
                            2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br />
                            3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br />
                            4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)<br />
                            <br />
                            「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br />
                            <br />
                            ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
                            <br /><br />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ height: { xs: "60px", sm: "100px", md: "150px" } }}></Box>
            <Footer isWhite={false} />
        </Box >
    );
}