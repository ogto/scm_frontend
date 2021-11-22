
// 로그인 세션체크 20210916 ogto🤪
window.addEventListener("DOMContentLoaded", function() {
    const thisUrl = window.location.href;
    if(!thisUrl.includes("login")) { //현재 페이지가 로그인 페이지가 아니라면 세션체크
        const userInfo = sessionStorage.getItem("auth");
        if(userInfo == null || userInfo == "") {
            location.href = "/login/login.html";
        }
        includeHTML();
    } else { //만약 무슨 방법을 써서 로그인 페이지로 돌아 왔다면 세션 청~소
        sessionStorage.clear();
    }
});

// 화면 만들기 사이드메뉴, 헤더 푸터 등 모든페이지에서 불러옴 20210917 ogto🤪
const includeHTML = () => {
    let z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if(file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                elmnt.removeAttribute("include-html");
                includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();

            //html 불러 오고나서 실행되는 함수 여기넣으면 됨 20210917 ogto🤪


            return;
        }
    }
}

// API 공통함수 20210916 ogto🤪
const getDataApi = (data, url, type, href, mes) => {
    let rtData;
    $.ajax({
        type: type,
        url: url,
        data: data,
        accept: "application/json",
        contentType: "application/json; charset=utf-8",
        async: false,
        success: function (data) {
            if(sessionStorage.getItem("auth") == null) { //이 조건을 타면 로그인 api인것임 or 세션 나갔음
                sessionStorage.setItem("auth", data.Authorization);
            }
            //api통신은 성공 했으나, 실패한 경우. 400번대에러 말고 200임 || 20210918추가) 아이디나 비밀번호 틀리면 400에러 탈때도있고 이거 탈때도 있음;;;
            if(data.status != "success") {
                if(mes != null) {
                    alert(mes);
                } else {
                    alert(data.message);
                }
            } else if(href != null) { //location 이 필요한 경우
                window.location.href = href;
            } else { //데이터를 화면에 뿌려주자!_!
                rtData = data;
            }
        },
        error: function (xhr, status, err) {
            if(xhr.status == 401 && url.includes("login")) {
                alert("아이디 또는 비밀번호를 확인해주세요.");
            } else {
                alert("관리자에게 문의 바랍니닷.");
            }
        },
    });
    return rtData;
}

// request 파라미터 값 가져오는 로직 쓸일 있을거같아서 만들어놈 20210917 ogto🤪
const getParameterByName = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Enter Event 20210917 ogto🤪
const enterKey = (_flag) => {
    if(window.event.keyCode == 13) {
        if(_flag == "login") {
            loginTrial();
        }
    }
}

// money format!! 20210918 ogto🤪
const formatComma = (money) => {
    return Number(money).toLocaleString('en');
}
