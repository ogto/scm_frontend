
// 사용자 리스트 api 데이터 making 20210918 ogto🤪
const userTrial = () => {
    let data = "";
    let url = "http://scmback.wadint.com/api/users/";
    // let url = "http://127.0.0.1:5000/api/users/";
    let type = "GET";
    const reData = getDataApi(data, url, type, null, null);

    // 그룹 가지고 오는 부분
    let groupUrl = "http://scmback.wadint.com/api/groups/";
    const reData_group = getDataApi(data, groupUrl, type, null, null);

    // 스토어 가지고 오는 부분
    let storeUrl = "http://scmback.wadint.com/api/store/";
    const reData_store = getDataApi(data, storeUrl, type, null, null);

    let html = "";
    for(let i in reData.users) {
        html += '<tr style="text-align: center;">';
            html += '<td>'+reData.users[i].id+'</td>';
            html += '<td>'+reData.users[i].store_id+'</td>';
            html += '<td>'+reData.users[i].user_group+'</td>';
            html += '<td>'+reData.users[i].username+'</td>';
            html += '<td>'+reData.users[i].email+'</td>';
            html += '<td>'+reData.users[i].created_at+'</td>';
            html += '<td></td>';
        html += '</tr>';
    }
    $("#prdGrid").append(html);

    html = "";
    for(let i in reData_group.data) {
        html += '<option value='+reData_group.data[i].id+'>'+reData_group.data[i].group_name+'</option>';
    }
    $("#addGroup").append(html);

    html = "";
    for(let i in reData_store.data) {
        html += '<option value='+reData_store.data[i].id+'>'+reData_store.data[i].store_id+'</option>';
    }
    $("#addStore").append(html);
};

window.addEventListener("DOMContentLoaded", function() {
    userTrial();
});

// 사용자 추가 api 데이터 making 20210925 ogto🤪
const userAdd = () => {
    const _id = document.getElementById("addId").value;
    const _pwd = document.getElementById("addPwd").value;
    const _name = document.getElementById("addName").value;
    const _store = document.getElementById("addStore").value;
    const _group = document.getElementById("addGroup").value;
    let data = JSON.stringify({
                    'email': _id,
                    'username': _name,
                    'password': _pwd,
                    'store_id': _store,
                    'user_group': _group
                });
    let url = "http://scmback.wadint.com/api/users/";
    let type = "POST";
    let href = "/pages/account/userList.html";
    getDataApi(data, url, type, href, null);
};