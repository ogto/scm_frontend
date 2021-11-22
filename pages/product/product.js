
// 상품리스트 api 데이터 making 20210918 ogto🤪
const productTrial = () => {
    // let data = JSON.stringify({'username': userId, 'password':userPw});
    let data = "";
    let url = "http://scmback.wadint.com/api/product/";
    let type = "GET";
    let mes = "response status 에 success 부탁드립니닷.";
    const reData = getDataApi(data, url, type, null, mes);
    let html = "";
    for(let i in reData.products) {
        html += '<tr style="text-align: center; font-size:12px;">';
            html += '<td style=""><input type="checkbox" name='+reData.products[i].id+'"/></td>';
            html += '<td><img src="'+reData.products[i].prd_img+'" style="width:20px;"></td>';
            html += '<td style="">'+reData.products[i].store_id+'</td>';
            html += '<td style="">'+reData.products[i].prd_code+'</td>';
            html += '<td style="">'+reData.products[i].prd_name_org+'</td>';
            html += '<td style="text-align:right;">'+formatComma(reData.products[i].price_excluding_tax)+'</td>';
            html += '<td style="text-align:right;">'+formatComma(reData.products[i].price)+'</td>';
            html += '<td style="text-align:right;">'+formatComma(reData.products[i].retail_price)+'</td>';
            html += '<td style="text-align:right;">'+formatComma(reData.products[i].supply_price)+'</td>';
        html += '</tr>';
    }
    $("#prdGrid").append(html);
};

window.addEventListener("DOMContentLoaded", function() {
    productTrial();
});

const getHDProduct = () => {
    if(confirm("HD get ok?")) {
        // let data = "";
        // let url = "http://scmback.wadint.com/api/product/";
        // let type = "GET";
        // let mes = "response status 에 success 부탁드립니닷.";
        // const reData = getDataApi(data, url, type, null, mes);

        alert("상품 가져왔다.");
    }
}

const setJingDong = () => {
    if(confirm("선택하신 상품 업로드 하시겠나요ㅗ?")) {
        let data = 2012133095;
        let url = "http://127.0.0.1:5000/api/product/transfer";
        let type = "POST";
        let mes = "완료.";
        getDataApi(data, url, type, null, mes);
    }
}