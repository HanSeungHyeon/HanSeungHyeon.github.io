### 학습목표(아래)

- 반응형 웹사이트 만들기
- 파이어폭스 개발자도구의 스타일 탭사용
- 기존 PC용 > 태블릿용 > 모바일용 CSS작업순서를 [모바일용 > 태블릿용 > PC용] 으로 변경작업
#### 20201106(금)
- 슬라이드 : 모바일,PC용이 분리가 되어있음
- 슬라이드를 모바일+PC용 공통으로 사용하도록 통일
- 프로그램//데이터베이스 작업 시 한글 폴더사용은 에러발생하기 때문에 폴더명은 영어로.
- vscode, 이클립스 IDE(통합개발환경)에서 깃 푸시가 안될때 
- IDE환경에서는 강제로 푸시하는 다음명령이 없습니다. git push,origin, master --force
- 그래서, command line 하는것 (아래처럼)
- git remote add origin 리모트깃주소
- git push origin master --force
- $("타겟") .bind("이벤트click",콜백함수{구현}); 바인딩(묶는다는 의미);
- j쿼리에서 내부/외부 삽입 차이점 확인.
- 반응형 웹 화면(장점.모바일,태블릿,PC)
- 단점.카메라앱X,연락처앱X
- 안드로이드 앱 화면(단점.모바일전용)-장점.카메라앱, 연락처앱, 알림앱 사용가능
- 와이어프레임(청사진=BluePrint): 선으로 만든 디자인 틀
- 순서도(Flow Chart):
- UI디자인 핵심용어
- *UI(User Interface): 유저인터페이스 2가지(아래)
- *CLI(Command Line Interface) 코맨드라인인터페이스
- *GUI(Graphic User Interface) 그래픽유저인터페이스
- Needs(니즈) 요구사항.
- *Context(맥락): 줄거리가 있는 내용. 축약본=목차본.
- 페르소나(Persona) 영화(Movie) 용어. 캐릭터(배우)
- 페르소나: 가상유저를 만들어서 사용자 요구사항 확인.
- 브레인스토밍: 무규칙으로 생각나는데로 말하는 회의방식
#### 20201105(목)
- css : 계층구조에서 > 의미는  
- $("ul.large li");  ul 안쪽의 대메뉴 + 중메뉴까지 포함
- $("ul.large > li"); ul 안쪽의 대메뉴1, 대메뉴2만 포함
- 메뉴1차, 2차
<ul class="large">
    <li> 대메뉴1
        <ul class="middle">
              <li>중메뉴1-1</li>
              <li>중메뉴1-2</li>
       </ul>
 </li>
    <li>대메뉴2
        <ul class="middle">
             <li>중메뉴2-1</li>
             <li>중메뉴2-1</li>
       </ul>
    </li>
</ul>  
- $("ul > li");
- 배열 : 데이터(자료) 구조(인덱스: 순서 0부터시작)
- 공공데이터처리(빅데이터): Json데이터로 자료가 전송받고, 전송합니다.
- Json(제이슨)데이터구조 : (아래)
- 키(key 속성) : 밸류(value 값) -> 가공(파싱)해서 화면에 뿌려주는 방식
(Rest API방식 = 파싱처리)
- {key1:value1, key2:value2, key3:value3}
- var bigData = [
- {name:'하나약국', maskcount:200, lat(위도):300, lon{위도}:200}
- {name:'둘약국', maskcount:100, lat(위도):300, lon{위도}:200}
- {name:'셋약국', maskcount:0, lat(위도):300, lon{위도}:200} ];
- 피싱하는 과정 : alert(bigData[0] ['name']); -> 하나약국
- DOM앨리먼트 : <body>, <p>, <div>, <input>, <label>
- 돔을 제어할 때 사용 : J쿼리(자바스크립트 라이브러리)
- 예) 동적으로 <label>태그같은 DOM을 추가/삭제/스타일
- $("#write_form")=document.getElementByld("write_form)
- div li{ 스타일지정; }
#### 20201104(수)
- input 입력태그 : type[text|password|radio|checkbox|list]
- 메인페이지 로고 와 슬라이드(모바일용/PC용)
- 테이블 display:none -> block
- 테이블 display:none -> table-cell처리
- 애로우함수 : 윈7에서 지원안함
- placeholder : input-ms-placeholder 윈7지원
#### 권장능력단위 +
- 융합1_노드MCU(아두이노버전)로 펌웨어 환경을 구축하고 네트웍과 연동해서 작동시키는 펌웨어를 구현해서 기기연동 및 융합을 할 수 있다.
- 융합2 라즈베리파이로 UART통신을 이용한
#### 크로스브라우징 처리
- 브라우저 E11, 크롬, 파이어폭스, 오페라
- 브라우저 교차 검사 후 처리
- display : revert(되돌아오기) IE11(윈7)지원하지 않기 때문에
- display : table-cell
- width: initial; IE11(윈7)지원하지 않기 때문에
- width: inherit; 로 처리해야함
#### 20201103(화)
- 시만텍 웹 : 의미있는 태그 == html5 사용
- header, footer, article, aside웹문서에 의미있는 영역 지정
- white-space : nowrap : (아래)
- 마지막 교시 입
- 니다.
- 만약에 white-space : wrap 이라면
- 마지막 교시
- 입니다.
- css 값에 대한 수정: 값이 3개 일때 = padding:40px 0 0;
- 40px(위), 0(좌우) , 0(아래)
- vertical(수직-세로) :top, middle, bottom
- horizontal(수평-가로): left, center, right
- table tr(table row가로줄),
- th(table header),
- td(table data)
- vertical(수직) : top , middle , bottom
-horizontal(수평) : left , center , right
- 유효성검사 : 예전에는 자바스크립트처리
- 유효성검사 : 현재는 html5속성으로 처리
- <form>태그 속성 2가지 중요 (아래)
- action 속성 : 데이터전송 위치
- method 속성 : 데이터전송 방법 (아래)
- GET(비보안-데이터노출), POST(보안-데이터숨김)방식
- GET(기본) : 검색방식
- POST(지정) : 등록폼
- 게시판리스트 : 모바일용작업
- 모바일용 -> 태블릿용 -> PC용

- 부트스트랩
###부트스트랩4.X버젼
- J쿼리기반 자바스크립트 프레임웍
- 프레임워크 : 라이브러리를 구조화시킨 것
- 그리드시스템 : 화면 레이아웃 구조
- 화면을 가로 12개로 분할해서 구성
- AdminLTE 프레임웍(부트스트랩기반)
#### 20201102(월)
- 커스터마이징 (기존 템플릿 수정)
- 자바스크립트 : 조건문안에 내용은 동일 !Ok = NotOk =false = !True
- Rest API(앱 인터페이스) : Representation          *API (App Input Output)
- 원시데이터(Raw데이터-공공데이터) 앱 인터페이스에서 받은후 
재가공해서 화면에 뿌려주는 작업 (Ex - 마스크앱, 코로나19확진자정보, SNS로그인)
- 토큰 : 네트워크로 전송되는 조각 데이터.
- 토큰 : OAuth2.0 인증데이터(SNS 로그인)
- 람다식(코드생략 : 애로우함수) : -> (자바), => (자바스크립트)
- 자바7(X), 자바8(O), 안드로이드스튜디오
- 자바스크립트 버전(아래)
- es5(엑마스크립트2015 - 네이티브자바스크립트비슷), 
- es7(엑마스크립트2017 - 람다함수식 추가 - 코드축소구현)
- 슬라이드 버튼 3초후에 플레이시 초기 진행버튼 숨기기 처리 필요
- 자바스크립트(제이쿼리)디버그 방법(아래)
- 1. 개발자도구 > 콘솔열고 > 화면실행
- 2. alert('디버그값출력');
- 3. console.log('디버그값출력');

#### 2000만원이상 프로젝트에서 진행순서
- 1.클라이언트(공개입찰올림)
- 요구사항명세서(*RFP)
- 2.개발사(업체):위 RFP를 보고 제안서제출
- 3.클라이언트(낙찰):업체선정
- 4.작업시작: 개발사 작업시작
#### 취업 IT개발회사기준 : 법인(주식회사)중소기업
(사원 10명내외, 연매출액 10억내외)
- 개발팀(제안서 작성)
- 디자인팀(제안서작성)
- 기획팀(제안서제출)
#### 20201030(금)
- background-size: cover; 속성은 영역보다 이미지가 작을 때 작동
- inherit : 상속(extends)
- @media all => screen,print 모든 미디어 포함
- 대괄호[배열], 중괄호{구현내용}, 소괄호(매개변수)
- @미디어쿼리
- @=애노테이션=지시어
- 웹 프로그램 : 기본은 게시판(아래)
- CRUD : Create(Insert) : 자료입력 /
                Read(select) : 자료조회 /
                Update          : 자료수정 /
                Delete           : 자료삭제
#### 20201029(목)
- bbs(PC통신부터 게시판 약자 bbs) board system.
- img는 가로크기를 지정하면, 세로크기는 자동으로 조절된다.
- J쿼리 : 네이티브 자바스크립트 단축키워드로 사용. 
- J쿼리 코어를 가져와서 사용.
- 자바스크립트 콜백함수 : (아래)
- 1. 이름이 없는 함수
- 2. 기본 함수는 이름을 호출해야 실행되지만, 콜백함수는 호출 없이 실행되는 함수
- nav태그 : HTML5에 추가된 태그
- ul(unorder list)태그 > li태그
-  네이밍규칙 : 카멜표기(낙타등)
- 사각형 영역 크기 : box-sizing:border-box;
- 웹접근성 : 시각장애인들을 위한 코딩추가.
- 스크린리더 프로그램용 코딩 : Ex)text-indent: -9999px;
- 햄버거메뉴 : .openMOgnb -gnb(global navigation) 글로벌 네비게이션(전체 메뉴)
Ps. Page Navigation (페이징 링크 처리)
#### 20201028(수)
- z-index: 주), 0부터 시작 , 화면에는 레이어라는 개념으로 처리(포토피아)
- CSS스타일 적용하는 3가지 방법
- 1. 인라인스타일: 태그안쪽에 style속성사용(아래) 
- 예) style="padding:10px;"
- 2. 파일안에 style태그사용(아래)
- 예) <style>내부스타일 주기</style>
- 3. 외부CSS파일 지정하기(아래)
- 예) <link href="css파일위치" />
- 깃허브 README.md(마크다운 언어)
- meta데이터: 데이터의 데이터임.(콘텐츠를 설명하는 데이터).
- 메타태그중 viewport는 반응형사이트에서 필수.
- 반응형사이트 화면설계서_학생용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/17jXgf7R2BawMt3K9eoxfnnO_8X9yClLZ/view?usp=sharing
- 반응형사이트 기획서_학생용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1dC2RMqDqNeEFtr-r-dvcsKk0YwPjk0Xy/view?usp=sharing

#### 20201022(목)

- 소스내용 교육용으로 정리
- 깃 사용시 토큰인증헤제: [윈도우 자격증명관리]에 personal access token 을 삭제 후 커밋
- 강사블로그 http://blog.daum.net/web_design 에서 익스텐션으로 검색 vscode 사용법 참조.
- 비주얼스튜디오코드 익스텐션 파일 구글드라이브 다운로드(아래):
- https://drive.google.com/file/d/1NkZ0qfr2P0tDsRKyP9qHQ3tPkafeKiPv/view?usp=sharing

#### 20201019(월)

- 반응형사이트 화면설계서_교사용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1GqBK_sKPFpfhTDd4whbLK3ZLXP1g3_Kw/view?usp=sharing
- 반응형사이트 기획서_교사용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1Wjuov4TCQjqBtCu5EbUc3SNns8PaxHSX/view?usp=sharing