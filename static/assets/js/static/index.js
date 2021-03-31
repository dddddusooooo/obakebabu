/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/srcjs/static/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/srcjs/static/index.js":
/*!***********************************!*\
  !*** ./src/srcjs/static/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 関数\n\nfunction fadeIn(ob, dl) {\n    setTimeout(function () {\n        ob.animate({ opacity: [0, 1] }, {\n            duration: 1000,\n            fill: 'forwards'\n        });\n    }, dl);\n}\n\nfunction fadeOut(ob, dl) {\n    setTimeout(function () {\n        ob.animate({ opacity: [1, 0] }, {\n            duration: 1000,\n            fill: 'forwards'\n        });\n    }, dl);\n}\n\nfunction zIndex(ob, nm) {\n    ob.style.zIndex = nm;\n}\n\nfunction addClass(ob, name, dl) {\n    setTimeout(function () {\n        ob.classList.add(name);\n    }, dl);\n}\n\nfunction fadeInTxt(ob, dl) {\n    setTimeout(function () {\n        if (ob.length == 0) return;\n        param = ob[0];\n        fadeIn(param, 0);\n        ob.shift();\n\n        setTimeout(function () {\n            fadeInTxt(ob);\n        }, 2000);\n    }, dl);\n}\n\nfunction fadeImg(ob, num, dl) {\n    setTimeout(function () {\n        if (num == 0) {\n            fadeIn(ob[num], 0);\n        } else {\n            fadeOut(ob[num - 1], 0);\n            fadeIn(ob[num], 400);\n        }\n    }, dl);\n}\n\n// ページ切り替え\n\nvar slider = document.getElementById('js-slidePage');\nvar index = 0;\nvar pageArray = slider.getElementsByClassName('js-slide');\nvar pageBtn = document.getElementsByClassName('js-next');\nvar pageBtnList = Array.from(pageBtn);\n\nfadeIn(pageArray[index], 0);\nzIndex(pageArray[index], 10);\n\nfunction nextPage(idName) {\n    fadeOut(pageArray[index], 0);\n    zIndex(pageArray[index], 1);\n\n    index++;\n\n    fadeIn(pageArray[index], 0);\n    zIndex(pageArray[index], 10);\n\n    var ob = document.getElementById(idName);\n    var pageNum = index + 1;\n    var bodyId = 'page0' + pageNum;\n    ob.id = bodyId;\n\n    if (bodyId == 'page01') {\n        scene01Func();\n    } else if (bodyId == 'page02') {\n        scene02Func();\n    } else if (bodyId == 'page03') {\n        scene03Func();\n    } else if (bodyId == 'page04') {\n        scene04Func();\n    } else if (bodyId == 'page05') {\n        scene05Func();\n    } else if (bodyId == 'page06') {\n        scene06Func();\n    }\n}\n\npageBtnList.forEach(function (el) {\n    el.addEventListener('click', function () {\n        var idName = el.getAttribute(\"data-page\");\n        nextPage(idName);\n    });\n});\n\n// ロード時の処理\n\nwindow.onload = function () {\n    scene01Func();\n};\n\n// リロード（もう一度見る）\n\nvar reload = document.getElementById('js-reload');\nreload.addEventListener('click', function () {\n    window.location.reload();\n});\n\n//マウスストーカー\n\nvar stalker = document.getElementById('js-stalker');\ndocument.addEventListener('mousemove', function (e) {\n    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';\n});\n\n// scene01\n\nvar scene01AnmObjKvTtl = document.querySelector('.kvArea .kvTtl');\nvar scene01AnmObjBtn = document.querySelector('.kvArea .pageBtnWrap');\n\nfunction scene01Func() {\n    fadeIn(scene01AnmObjKvTtl, 1000);\n    fadeIn(scene01AnmObjBtn, 2000);\n    addClass(scene01AnmObjBtn, 'is-click', 2000);\n}\n\n// scene02\n\nvar scene02AnmObjTxt = document.querySelectorAll('.getUpArea .textBlc');\nvar scene02AnmObjTxtList = Array.from(scene02AnmObjTxt);\n\nvar scene02AnmObjTxtBlc01 = document.querySelectorAll('.getUpArea .textBlc01 p');\nvar scene02AnmObjTxtBlcList01 = Array.from(scene02AnmObjTxtBlc01);\n\nvar scene02AnmObjTxtBlc02 = document.querySelectorAll('.getUpArea .textBlc02 p');\nvar scene02AnmObjTxtBlcList02 = Array.from(scene02AnmObjTxtBlc02);\n\nvar scene02AnmObjTxtBlc03 = document.querySelectorAll('.getUpArea .textBlc03 p');\nvar scene02AnmObjTxtBlcList03 = Array.from(scene02AnmObjTxtBlc03);\n\nvar scene02AnmObjImgBlc = document.querySelectorAll('.getUpArea .imgBlc');\nvar scene02AnmObjImgBlcList = Array.from(scene02AnmObjImgBlc);\n\nvar scene02AnmObjBtn = document.querySelector('.getUpArea .pageBtnWrap');\n\nfunction scene02AnmTxt() {\n    fadeIn(scene02AnmObjTxtList[0], 1000);\n    fadeInTxt(scene02AnmObjTxtBlcList01, 1000);\n    fadeOut(scene02AnmObjTxtList[0], 3000);\n    fadeIn(scene02AnmObjTxtList[1], 4000);\n    fadeInTxt(scene02AnmObjTxtBlcList02, 4000);\n    fadeOut(scene02AnmObjTxtList[1], 8000);\n    fadeIn(scene02AnmObjTxtList[2], 9000);\n    fadeInTxt(scene02AnmObjTxtBlcList03, 9000);\n}\n\nfunction scene02AnmImg() {\n    fadeImg(scene02AnmObjImgBlcList, 0, 0);\n    fadeImg(scene02AnmObjImgBlcList, 1, 2000);\n    fadeImg(scene02AnmObjImgBlcList, 2, 9000);\n}\n\nfunction scene02AnmBtn() {\n    fadeIn(scene02AnmObjBtn, 13000);\n    addClass(scene02AnmObjBtn, 'is-click', 13000);\n}\n\nfunction scene02Func() {\n    setTimeout(function () {\n        scene02AnmTxt();\n        scene02AnmImg();\n        scene02AnmBtn();\n    }, 300);\n}\n\n// scene03\n\nvar scene03AnmObjTxt = document.querySelectorAll('.walkArea .textBlc');\nvar scene03AnmObjTxtList = Array.from(scene03AnmObjTxt);\n\nvar scene03AnmObjTxtBlc01 = document.querySelectorAll('.walkArea .textBlc01 p');\nvar scene03AnmObjTxtBlcList01 = Array.from(scene03AnmObjTxtBlc01);\n\nvar scene03AnmObjImgBlc = document.querySelectorAll('.walkArea .imgBlc');\nvar scene03AnmObjImgBlcList = Array.from(scene03AnmObjImgBlc);\n\nvar scene03AnmObjImgBox = document.querySelector('.walkArea .imgBox');\n\nvar scene03AnmObjBtn = document.querySelector('.walkArea .pageBtnWrap');\n\nfunction scene03AnmMove(ob, dl) {\n    setTimeout(function () {\n        ob.animate({ right: [0, '500px'] }, {\n            duration: 3000,\n            easing: 'ease-in-out',\n            fill: 'forwards'\n        });\n    }, dl);\n}\n\nfunction scene03AnmTxt() {\n    fadeIn(scene03AnmObjTxtList[0], 1000);\n    fadeInTxt(scene03AnmObjTxtBlcList01, 1000);\n}\n\nfunction scene03AnmImg() {\n    fadeImg(scene03AnmObjImgBlcList, 0, 2000);\n    scene03AnmMove(scene03AnmObjImgBox, 5000);\n}\n\nfunction scene03AnmBtn() {\n    fadeIn(scene03AnmObjBtn, 9000);\n    addClass(scene03AnmObjBtn, 'is-click', 9000);\n}\n\nfunction scene03Func() {\n    setTimeout(function () {\n        scene03AnmTxt();\n        scene03AnmImg();\n        scene03AnmBtn();\n    }, 300);\n}\n\n// scene04\n\nvar scene02AnmObjBg = document.querySelectorAll('.buyArea .pageBg');\n\nvar scene04AnmObjTxt = document.querySelectorAll('.buyArea .textBlc');\nvar scene04AnmObjTxtList = Array.from(scene04AnmObjTxt);\n\nvar scene04AnmObjTxtBlc01 = document.querySelectorAll('.buyArea .textBlc01 p');\nvar scene04AnmObjTxtBlcList01 = Array.from(scene04AnmObjTxtBlc01);\n\nvar scene04AnmObjTxtBlc02 = document.querySelectorAll('.buyArea .textBlc02 p');\nvar scene04AnmObjTxtBlcList02 = Array.from(scene04AnmObjTxtBlc02);\n\nvar scene04AnmObjImgBlc = document.querySelectorAll('.buyArea .imgBlc');\nvar scene04AnmObjImgBlcList = Array.from(scene04AnmObjImgBlc);\n\nvar scene04AnmObjBtn = document.querySelector('.buyArea .pageBtnWrap');\n\nfunction scene04AnmTxt() {\n    fadeIn(scene04AnmObjTxtList[0], 1000);\n    fadeInTxt(scene04AnmObjTxtBlcList01, 1000);\n    fadeOut(scene04AnmObjTxtList[0], 3000);\n    fadeIn(scene04AnmObjTxtList[1], 6500);\n    fadeInTxt(scene04AnmObjTxtBlcList02, 6500);\n}\n\nfunction scene04AnmImg() {\n    fadeImg(scene04AnmObjImgBlcList, 0, 0);\n    fadeImg(scene04AnmObjImgBlcList, 1, 3000);\n    fadeImg(scene04AnmObjImgBlcList, 2, 6000);\n}\n\nfunction scene04AnmBtn() {\n    fadeIn(scene04AnmObjBtn, 10500);\n    addClass(scene04AnmObjBtn, 'is-click', 10500);\n}\n\nfunction scene04Func() {\n    setTimeout(function () {\n        scene04AnmTxt();\n        scene04AnmImg();\n        scene04AnmBtn();\n    }, 300);\n}\n\n// scene05\n\nvar scene05AnmObjTxt = document.querySelectorAll('.eatArea .textBlc');\nvar scene05AnmObjTxtList = Array.from(scene05AnmObjTxt);\n\nvar scene05AnmObjTxtBlc01 = document.querySelectorAll('.eatArea .textBlc01 p');\nvar scene05AnmObjTxtBlcList01 = Array.from(scene05AnmObjTxtBlc01);\n\nvar scene05AnmObjTxtBlc02 = document.querySelectorAll('.eatArea .textBlc02 p');\nvar scene05AnmObjTxtBlcList02 = Array.from(scene05AnmObjTxtBlc02);\n\nvar scene05AnmObjTxtBlc03 = document.querySelectorAll('.eatArea .textBlc03 p');\nvar scene05AnmObjTxtBlcList03 = Array.from(scene05AnmObjTxtBlc03);\n\nvar scene05AnmObjHumanImgBlc = document.querySelectorAll('.eatArea .imgBoxHuman .imgBlc');\nvar scene05AnmObjHumanImgBlcList = Array.from(scene05AnmObjHumanImgBlc);\n\nvar scene05AnmObjGhostImgBlc = document.querySelectorAll('.eatArea .imgBoxGhost .imgBlc');\nvar scene05AnmObjGhostImgBlcList = Array.from(scene05AnmObjGhostImgBlc);\n\nvar scene05AnmObjOnmtBlc01 = document.querySelectorAll('.eatArea .imgBoxOnmt01 .imgBlc');\nvar scene05AnmObjOnmtBlcList01 = Array.from(scene05AnmObjOnmtBlc01);\n\nvar scene05AnmObjOnmtBlc02 = document.querySelectorAll('.eatArea .imgBoxOnmt02 .imgBlc');\nvar scene05AnmObjOnmtBlcList02 = Array.from(scene05AnmObjOnmtBlc02);\n\nvar scene05AnmObjHumanImgBox = document.querySelector('.eatArea .imgBoxHuman');\n\nvar scene05AnmObjBtn = document.querySelector('.eatArea .pageBtnWrap');\n\nfunction scene05AnmMove(ob, dl) {\n    setTimeout(function () {\n        var max = 200;\n        var min = 130;\n        var count = 130;\n        var direction = 'top';\n        var time = 1;\n        var index = 0;\n        var bound = function bound() {\n            if (direction == 'top' && count > max) {\n                direction = 'bottom';\n            } else if (direction == 'bottom' && count < min) {\n                direction = 'top';\n            }\n            if (direction == 'top') {\n                count++;\n            } else if (direction == 'bottom') {\n                count--;\n            }\n            ob.style.bottom = count + 'px';\n            index++;\n            var repeat = setTimeout(bound, time);\n            if (index > 560) {\n                clearTimeout(repeat);\n            }\n        };\n        bound();\n    }, dl);\n}\n\nfunction scene05AnmTxt() {\n    fadeIn(scene05AnmObjTxtList[0], 5000);\n    fadeInTxt(scene05AnmObjTxtBlcList01, 5000);\n    fadeOut(scene05AnmObjTxtList[0], 7000);\n    fadeIn(scene05AnmObjTxtList[1], 11000);\n    fadeInTxt(scene05AnmObjTxtBlcList02, 11000);\n    fadeOut(scene05AnmObjTxtList[1], 14000);\n    fadeIn(scene05AnmObjTxtList[2], 15000);\n    fadeInTxt(scene05AnmObjTxtBlcList03, 15000);\n}\n\nfunction scene05AnmHumanImg() {\n    fadeImg(scene05AnmObjHumanImgBlcList, 0, 0);\n    fadeImg(scene05AnmObjHumanImgBlcList, 1, 1000);\n    fadeImg(scene05AnmObjHumanImgBlcList, 2, 8500);\n    fadeImg(scene05AnmObjHumanImgBlcList, 3, 11000);\n    scene05AnmMove(scene05AnmObjHumanImgBox, 12000);\n}\n\nfunction scene05AnmGhostImg() {\n    fadeImg(scene05AnmObjGhostImgBlcList, 0, 8500);\n}\n\nfunction scene05AnmOnmt01() {\n    fadeImg(scene05AnmObjOnmtBlcList01, 0, 2300);\n    fadeImg(scene05AnmObjOnmtBlcList01, 1, 3300);\n    fadeOut(scene05AnmObjOnmtBlcList01[1], 4300);\n}\n\nfunction scene05AnmOnmt02() {\n    fadeImg(scene05AnmObjOnmtBlcList02, 0, 8500);\n    fadeOut(scene05AnmObjOnmtBlcList02[0], 9500);\n}\n\nfunction scene05AnmBtn() {\n    fadeIn(scene05AnmObjBtn, 17000);\n    addClass(scene05AnmObjBtn, 'is-click', 17000);\n}\n\nfunction scene05Func() {\n    setTimeout(function () {\n        scene05AnmTxt();\n        scene05AnmHumanImg();\n        scene05AnmOnmt01();\n        scene05AnmGhostImg();\n        scene05AnmOnmt02();\n        scene05AnmBtn();\n    }, 300);\n}\n\n// scene06\n\nvar scene06AnmObjTxt = document.querySelectorAll('.talkArea .textBlc');\nvar scene06AnmObjTxtList = Array.from(scene06AnmObjTxt);\n\nvar scene06AnmObjTxtBlc01 = document.querySelectorAll('.talkArea .textBlc01 p');\nvar scene06AnmObjTxtBlcList01 = Array.from(scene06AnmObjTxtBlc01);\n\nvar scene06AnmObjTxtBlc02 = document.querySelectorAll('.talkArea .textBlc02 p');\nvar scene06AnmObjTxtBlcList02 = Array.from(scene06AnmObjTxtBlc02);\n\nvar scene06AnmObjTxtBlc03 = document.querySelectorAll('.talkArea .textBlc03 p');\nvar scene06AnmObjTxtBlcList03 = Array.from(scene06AnmObjTxtBlc03);\n\nvar scene06AnmObjTxtBlc04 = document.querySelectorAll('.talkArea .textBlc04 p');\nvar scene06AnmObjTxtBlcList04 = Array.from(scene06AnmObjTxtBlc04);\n\nvar scene06AnmObjImgBlc = document.querySelectorAll('.talkArea .imgBlc');\nvar scene06AnmObjImgBlcList = Array.from(scene06AnmObjImgBlc);\n\nvar scene06AnmObjBg = document.querySelector('.talkArea .pageBg');\n\nvar scene06AnmObjEnd = document.querySelector('.talkArea .endBox');\n\nvar scene06AnmObjBtn = document.querySelector('.talkArea .pageBtnWrap');\n\nfunction scene06AnmTxt() {\n    fadeIn(scene06AnmObjTxtList[0], 1000);\n    fadeInTxt(scene06AnmObjTxtBlcList01, 1000);\n    fadeOut(scene06AnmObjTxtList[0], 7000);\n    fadeIn(scene06AnmObjTxtList[1], 8000);\n    fadeInTxt(scene06AnmObjTxtBlcList02, 8000);\n    fadeOut(scene06AnmObjTxtList[1], 12000);\n    fadeIn(scene06AnmObjTxtList[2], 13000);\n    fadeInTxt(scene06AnmObjTxtBlcList03, 13000);\n    fadeOut(scene06AnmObjTxtList[2], 17000);\n    fadeIn(scene06AnmObjTxtList[3], 19000);\n    fadeInTxt(scene06AnmObjTxtBlcList04, 19000);\n    fadeOut(scene06AnmObjTxtList[3], 23000);\n}\n\nfunction scene06AnmImg() {\n    fadeImg(scene06AnmObjImgBlcList, 0, 0);\n    fadeImg(scene06AnmObjImgBlcList, 1, 8000);\n    fadeImg(scene06AnmObjImgBlcList, 2, 17000);\n    fadeOut(scene06AnmObjImgBlcList[2], 23000);\n}\n\nfunction scene06AnmBg() {\n    fadeOut(scene06AnmObjBg, 23000);\n}\n\nfunction scene06AnmEnd() {\n    fadeIn(scene06AnmObjEnd, 25000);\n}\n\nfunction scene06AnmBtn() {\n    fadeIn(scene06AnmObjBtn, 26000);\n    addClass(scene06AnmObjBtn, 'is-click', 26000);\n}\n\nfunction scene06Func() {\n    setTimeout(function () {\n        scene06AnmTxt();\n        scene06AnmImg();\n        scene06AnmBg();\n        scene06AnmEnd();\n        scene06AnmBtn();\n    }, 300);\n}\n\n//# sourceURL=webpack:///./src/srcjs/static/index.js?");

/***/ })

/******/ });