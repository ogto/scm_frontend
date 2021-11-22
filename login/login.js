
// 로그인 api 데이터 making 20210917 ogto🤪
const loginTrial = () => {
  let userId = document.getElementById("userId").value;
  let userPw = document.getElementById("userPw").value;

  let data = JSON.stringify({'username': userId, 'password':userPw});
  let url = "http://scmback.wadint.com/api/auth/login";
  let type = "POST";
  let href = "/index.html";
  let mes = "아이디 또는 비밀번호를 확인해주세요.";
  getDataApi(data, url, type, href, mes);
};