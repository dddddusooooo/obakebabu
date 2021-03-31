function fadeIn(ob, dl) {
    setTimeout(function() { 
        ob.animate(
            {opacity: [0, 1]}, {
                duration: 1000,
                fill: 'forwards'
            }
        )
    }, dl);
}

function fadeOut(ob, dl) {
    setTimeout(function() { 
        ob.animate(
            {opacity: [1, 0]}, {
                duration: 1000,
                fill: 'forwards'
            }
        )
    }, dl);
}

function zIndex(ob, nm) {
    ob.style.zIndex = nm;
}

function addClass(ob, name, dl) {
    setTimeout(function() { 
        ob.classList.add(name);
    }, dl);
}

function fadeInTxt(ob, dl) {
    setTimeout(function() {
        if(ob.length　==　0) return;
        param = ob[0];
        fadeIn(param, 0);
        ob.shift();

        setTimeout(function(){ 
            fadeInTxt(ob);
        }, 2000);
    }, dl);
}

function fadeImg(ob, num, dl) {
    setTimeout(function() {
        if(num == 0) {
            fadeIn(ob[num], 0);
        } else {
            fadeOut(ob[num - 1], 0);
            fadeIn(ob[num], 400);
        }
    }, dl);
}

// ページ切り替え

let slider = document.getElementById('js-slidePage');
let index = 0;

let pageArray = slider.getElementsByClassName('pageArea');
fadeIn(pageArray[index], 0);
zIndex(pageArray[index], 10);

function nextPage(idName) {
    fadeOut(pageArray[index], 0);
    zIndex(pageArray[index], 1);

    index++;

    fadeIn(pageArray[index], 0);
    zIndex(pageArray[index], 10);

    let ob = document.getElementById(idName);
    let pageNum = index + 1;
    let bodyId = 'page0' + pageNum;
    ob.id = bodyId;

    if(bodyId == 'page01') {
        scene01Func();
    } else if(bodyId == 'page02') {
        scene02Func();
    } else if(bodyId == 'page03') {
        scene03Func();
    } else if(bodyId == 'page04') {
        scene04Func();
    } else if(bodyId == 'page05') {
        scene05Func();
    } else if(bodyId == 'page06') {
        scene06Func();
    }
}

// ロード時の処理

window.onload = function(){
    scene01Func();
}

// リロード（もう一度見る）

let reload =　document.getElementById('js-reload');
reload.addEventListener('click', function() {
    window.location.reload();
});

//マウスストーカー

let stalker = document.getElementById('js-stalker'); 
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// scene01

let scene01AnmObjKvTtl = document.querySelector('.kvArea .kvTtl');
let scene01AnmObjBtn = document.querySelector('.kvArea .pageBtnWrap');

function scene01Func() {
    fadeIn(scene01AnmObjKvTtl, 1000);
    fadeIn(scene01AnmObjBtn, 2000);
    addClass(scene01AnmObjBtn, 'is-click', 2000);
}

// scene02

let scene02AnmObjTxt = document.querySelectorAll('.getUpArea .textBlc');
let scene02AnmObjTxtList = Array.from(scene02AnmObjTxt);

let scene02AnmObjTxtBlc01 = document.querySelectorAll('.getUpArea .textBlc01 p');
let scene02AnmObjTxtBlcList01 = Array.from(scene02AnmObjTxtBlc01);

let scene02AnmObjTxtBlc02 = document.querySelectorAll('.getUpArea .textBlc02 p');
let scene02AnmObjTxtBlcList02 = Array.from(scene02AnmObjTxtBlc02);

let scene02AnmObjTxtBlc03 = document.querySelectorAll('.getUpArea .textBlc03 p');
let scene02AnmObjTxtBlcList03 = Array.from(scene02AnmObjTxtBlc03);

let scene02AnmObjImgBlc = document.querySelectorAll('.getUpArea .imgBlc');
let scene02AnmObjImgBlcList = Array.from(scene02AnmObjImgBlc);

let scene02AnmObjBtn = document.querySelector('.getUpArea .pageBtnWrap');

function scene02AnmTxt() {
    fadeIn(scene02AnmObjTxtList[0], 1000);
    fadeInTxt(scene02AnmObjTxtBlcList01, 1000);
    fadeOut(scene02AnmObjTxtList[0], 3000);
    fadeIn(scene02AnmObjTxtList[1], 4000);
    fadeInTxt(scene02AnmObjTxtBlcList02, 4000);
    fadeOut(scene02AnmObjTxtList[1], 8000);
    fadeIn(scene02AnmObjTxtList[2], 9000);
    fadeInTxt(scene02AnmObjTxtBlcList03, 9000);
}

function scene02AnmImg() {
    fadeImg(scene02AnmObjImgBlcList, 0 , 0);
    fadeImg(scene02AnmObjImgBlcList, 1, 2000);
    fadeImg(scene02AnmObjImgBlcList, 2, 9000);
}

function scene02AnmBtn() {
    fadeIn(scene02AnmObjBtn, 13000);
    addClass(scene02AnmObjBtn, 'is-click', 13000);
}

function scene02Func() {
    setTimeout(function() {
        scene02AnmTxt();
        scene02AnmImg();
        scene02AnmBtn();
    }, 300);
}

// scene03

let scene03AnmObjTxt = document.querySelectorAll('.walkArea .textBlc');
let scene03AnmObjTxtList = Array.from(scene03AnmObjTxt);

let scene03AnmObjTxtBlc01 = document.querySelectorAll('.walkArea .textBlc01 p');
let scene03AnmObjTxtBlcList01 = Array.from(scene03AnmObjTxtBlc01);

let scene03AnmObjImgBlc = document.querySelectorAll('.walkArea .imgBlc');
let scene03AnmObjImgBlcList = Array.from(scene03AnmObjImgBlc);

let scene03AnmObjImgBox = document.querySelector('.walkArea .imgBox');

let scene03AnmObjBtn = document.querySelector('.walkArea .pageBtnWrap');

function scene03AnmMove(ob, dl) {
    setTimeout(function() { 
        ob.animate(
            {right: [0, '500px']}, {
                duration: 3000,
                easing: 'ease-in-out',
                fill: 'forwards'
            }
        )
    }, dl);
}

function scene03AnmTxt() {
    fadeIn(scene03AnmObjTxtList[0], 1000);
    fadeInTxt(scene03AnmObjTxtBlcList01, 1000);
}

function scene03AnmImg() {
    fadeImg(scene03AnmObjImgBlcList, 0 , 2000);
    scene03AnmMove(scene03AnmObjImgBox, 5000);
}

function scene03AnmBtn() {
    fadeIn(scene03AnmObjBtn, 9000);
    addClass(scene03AnmObjBtn, 'is-click', 9000);
}

function scene03Func() {
    setTimeout(function() {
        scene03AnmTxt();
        scene03AnmImg();
        scene03AnmBtn();
    }, 300);
}

// scene04

let scene02AnmObjBg = document.querySelectorAll('.buyArea .pageBg');

let scene04AnmObjTxt = document.querySelectorAll('.buyArea .textBlc');
let scene04AnmObjTxtList = Array.from(scene04AnmObjTxt);

let scene04AnmObjTxtBlc01 = document.querySelectorAll('.buyArea .textBlc01 p');
let scene04AnmObjTxtBlcList01 = Array.from(scene04AnmObjTxtBlc01);

let scene04AnmObjTxtBlc02 = document.querySelectorAll('.buyArea .textBlc02 p');
let scene04AnmObjTxtBlcList02 = Array.from(scene04AnmObjTxtBlc02);

let scene04AnmObjImgBlc = document.querySelectorAll('.buyArea .imgBlc');
let scene04AnmObjImgBlcList = Array.from(scene04AnmObjImgBlc);

let scene04AnmObjBtn = document.querySelector('.buyArea .pageBtnWrap');

function scene04AnmTxt() {
    fadeIn(scene04AnmObjTxtList[0], 1000);
    fadeInTxt(scene04AnmObjTxtBlcList01, 1000);
    fadeOut(scene04AnmObjTxtList[0], 3000);
    fadeIn(scene04AnmObjTxtList[1], 6500);
    fadeInTxt(scene04AnmObjTxtBlcList02, 6500);
}

function scene04AnmImg() {
    fadeImg(scene04AnmObjImgBlcList, 0 , 0);
    fadeImg(scene04AnmObjImgBlcList, 1, 3000);
    fadeImg(scene04AnmObjImgBlcList, 2, 6000);
}

function scene04AnmBtn() {
    fadeIn(scene04AnmObjBtn, 10500);
    addClass(scene04AnmObjBtn, 'is-click', 10500);
}

function scene04Func() {
    setTimeout(function() {
        scene04AnmTxt();
        scene04AnmImg();
        scene04AnmBtn();
    }, 300);
}

// scene05

let scene05AnmObjTxt = document.querySelectorAll('.eatArea .textBlc');
let scene05AnmObjTxtList = Array.from(scene05AnmObjTxt);

let scene05AnmObjTxtBlc01 = document.querySelectorAll('.eatArea .textBlc01 p');
let scene05AnmObjTxtBlcList01 = Array.from(scene05AnmObjTxtBlc01);

let scene05AnmObjTxtBlc02 = document.querySelectorAll('.eatArea .textBlc02 p');
let scene05AnmObjTxtBlcList02 = Array.from(scene05AnmObjTxtBlc02);

let scene05AnmObjTxtBlc03 = document.querySelectorAll('.eatArea .textBlc03 p');
let scene05AnmObjTxtBlcList03 = Array.from(scene05AnmObjTxtBlc03);

let scene05AnmObjHumanImgBlc = document.querySelectorAll('.eatArea .imgBoxHuman .imgBlc');
let scene05AnmObjHumanImgBlcList = Array.from(scene05AnmObjHumanImgBlc);

let scene05AnmObjGhostImgBlc = document.querySelectorAll('.eatArea .imgBoxGhost .imgBlc');
let scene05AnmObjGhostImgBlcList = Array.from(scene05AnmObjGhostImgBlc);

let scene05AnmObjOnmtBlc01 = document.querySelectorAll('.eatArea .imgBoxOnmt01 .imgBlc');
let scene05AnmObjOnmtBlcList01 = Array.from(scene05AnmObjOnmtBlc01);

let scene05AnmObjOnmtBlc02 = document.querySelectorAll('.eatArea .imgBoxOnmt02 .imgBlc');
let scene05AnmObjOnmtBlcList02 = Array.from(scene05AnmObjOnmtBlc02);

let scene05AnmObjHumanImgBox = document.querySelector('.eatArea .imgBoxHuman');

let scene05AnmObjBtn = document.querySelector('.eatArea .pageBtnWrap');

function scene05AnmMove(ob, dl) {
    setTimeout(function() {
        let max = 200;
        let min = 130;
        let count = 130;
        let direction = 'top';
        let time = 1;
        let index = 0;
        let bound = function(){
            if(direction == 'top' && count > max) {
                direction = 'bottom';
            } else if(direction == 'bottom' && count < min) {
                direction = 'top';
            }
            if(direction == 'top') {
                count++;
            } else if(direction == 'bottom') {
                count--;
            }
            ob.style.bottom = count + 'px';
            index++;
            let repeat = setTimeout(bound, time);
            if(index > 560) {
                clearTimeout(repeat);
            }
        }
        bound();
    }, dl);
}

function scene05AnmTxt() {
    fadeIn(scene05AnmObjTxtList[0], 5000);
    fadeInTxt(scene05AnmObjTxtBlcList01, 5000);
    fadeOut(scene05AnmObjTxtList[0], 7000);
    fadeIn(scene05AnmObjTxtList[1], 11000);
    fadeInTxt(scene05AnmObjTxtBlcList02, 11000);
    fadeOut(scene05AnmObjTxtList[1], 14000);
    fadeIn(scene05AnmObjTxtList[2], 15000);
    fadeInTxt(scene05AnmObjTxtBlcList03, 15000);
}

function scene05AnmHumanImg() {
    fadeImg(scene05AnmObjHumanImgBlcList, 0 , 0);
    fadeImg(scene05AnmObjHumanImgBlcList, 1, 1000);
    fadeImg(scene05AnmObjHumanImgBlcList, 2, 8500);
    fadeImg(scene05AnmObjHumanImgBlcList, 3, 11000);
    scene05AnmMove(scene05AnmObjHumanImgBox, 12000);
}

function scene05AnmGhostImg() {
    fadeImg(scene05AnmObjGhostImgBlcList, 0 , 8500);
}

function scene05AnmOnmt01() {
    fadeImg(scene05AnmObjOnmtBlcList01, 0 , 2300);
    fadeImg(scene05AnmObjOnmtBlcList01, 1 , 3300);
    fadeOut(scene05AnmObjOnmtBlcList01[1], 4300);
}

function scene05AnmOnmt02() {
    fadeImg(scene05AnmObjOnmtBlcList02, 0 , 8500);
    fadeOut(scene05AnmObjOnmtBlcList02[0], 9500);
}

function scene05AnmBtn() {
    fadeIn(scene05AnmObjBtn, 17000);
    addClass(scene05AnmObjBtn, 'is-click', 17000);
}

function scene05Func() {
    setTimeout(function() {
        scene05AnmTxt();
        scene05AnmHumanImg();
        scene05AnmOnmt01();
        scene05AnmGhostImg();
        scene05AnmOnmt02();
        scene05AnmBtn();
    }, 300);
}

// scene06

let scene06AnmObjTxt = document.querySelectorAll('.talkArea .textBlc');
let scene06AnmObjTxtList = Array.from(scene06AnmObjTxt);

let scene06AnmObjTxtBlc01 = document.querySelectorAll('.talkArea .textBlc01 p');
let scene06AnmObjTxtBlcList01 = Array.from(scene06AnmObjTxtBlc01);

let scene06AnmObjTxtBlc02 = document.querySelectorAll('.talkArea .textBlc02 p');
let scene06AnmObjTxtBlcList02 = Array.from(scene06AnmObjTxtBlc02);

let scene06AnmObjTxtBlc03 = document.querySelectorAll('.talkArea .textBlc03 p');
let scene06AnmObjTxtBlcList03 = Array.from(scene06AnmObjTxtBlc03);

let scene06AnmObjTxtBlc04 = document.querySelectorAll('.talkArea .textBlc04 p');
let scene06AnmObjTxtBlcList04 = Array.from(scene06AnmObjTxtBlc04);

let scene06AnmObjImgBlc = document.querySelectorAll('.talkArea .imgBlc');
let scene06AnmObjImgBlcList = Array.from(scene06AnmObjImgBlc);

let scene06AnmObjBg = document.querySelector('.talkArea .pageBg');

let scene06AnmObjEnd = document.querySelector('.talkArea .endBox');

let scene06AnmObjBtn = document.querySelector('.talkArea .pageBtnWrap');

function scene06AnmTxt() {
    fadeIn(scene06AnmObjTxtList[0], 1000);
    fadeInTxt(scene06AnmObjTxtBlcList01, 1000);
    fadeOut(scene06AnmObjTxtList[0], 7000);
    fadeIn(scene06AnmObjTxtList[1], 8000);
    fadeInTxt(scene06AnmObjTxtBlcList02, 8000);
    fadeOut(scene06AnmObjTxtList[1], 12000);
    fadeIn(scene06AnmObjTxtList[2], 13000);
    fadeInTxt(scene06AnmObjTxtBlcList03, 13000);
    fadeOut(scene06AnmObjTxtList[2], 17000);
    fadeIn(scene06AnmObjTxtList[3], 19000);
    fadeInTxt(scene06AnmObjTxtBlcList04, 19000);
    fadeOut(scene06AnmObjTxtList[3], 23000);
}

function scene06AnmImg() {
    fadeImg(scene06AnmObjImgBlcList, 0 , 0);
    fadeImg(scene06AnmObjImgBlcList, 1, 8000);
    fadeImg(scene06AnmObjImgBlcList, 2, 17000);
    fadeOut(scene06AnmObjImgBlcList[2], 23000);
}

function scene06AnmBg() {
    fadeOut(scene06AnmObjBg, 23000);
}

function scene06AnmEnd() {
    fadeIn(scene06AnmObjEnd, 25000);
}

function scene06AnmBtn() {
    fadeIn(scene06AnmObjBtn, 26000);
    addClass(scene06AnmObjBtn, 'is-click', 26000);
}

function scene06Func() {
    setTimeout(function() {
        scene06AnmTxt();
        scene06AnmImg();
        scene06AnmBg();
        scene06AnmEnd();
        scene06AnmBtn();
    }, 300);
}