
// 카테고리 api 데이터 making 20210918 ogto🤪
const categoryTrial = () => {
    let data = "";
    let url = "http://scmback.wadint.com/api/category/";
    let type = "GET";
    let mes = "response status 에 success 부탁드립니닷.";
    const reData = getDataApi(data, url, type, null, mes);
    let html = "";
    for(let i in reData.data) {
        html += '<tr style="text-align: center;">';
            html += '<td>'+reData.data[i].parent_category_no+'</td>';
            html += '<td>'+reData.data[i].full_category_name+'</td>';
            html += '<td>'+reData.data[i].category_no+'</td>';
            html += '<td>'+reData.data[i].category_name+'</td>';
        html += '</tr>';
    }
    $("#cateGrid").append(html);
};

window.addEventListener("DOMContentLoaded", function() {
    categoryTrial();
});