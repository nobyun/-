// Add your JavaScript code here

function adjustText() {
    // 取得學號和姓名的h1元素
    var studentIdElement = document.querySelector('h1:nth-of-type(1)');
    var nameElement = document.querySelector('h1:nth-of-type(2)');

    // 調整字體和顏色
    studentIdElement.style.fontFamily = 'Arial, sans-serif'; // 更改字體
    studentIdElement.style.color = 'blue'; // 更改字體顏色

    nameElement.style.fontFamily = 'Arial, sans-serif'; // 更改字體
    nameElement.style.color = 'green'; // 更改字體顏色
}


function adjustImage() {
    // 取得大頭照的img元素
    var selfieImage = document.getElementById('selfie');

    // 調整大頭照為圓邊、紅色粗框
    selfieImage.style.borderRadius = '50%'; // 圓邊
    selfieImage.style.border = '2px solid red'; // 紅色粗框
}


function changeImage() {
    // 取得大頭照的img元素
    var selfieImage = document.getElementById('selfie');

    // 換成新的圖片路徑
    selfieImage.src = '02.jpg';  // 將 'new_selfie.jpg' 替換為你的新圖片路徑
}
