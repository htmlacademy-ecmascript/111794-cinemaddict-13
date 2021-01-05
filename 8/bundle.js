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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_RankUser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/presenter/RankUser.js */ "./src/presenter/RankUser.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _presenter_FilmsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/presenter/FilmsList */ "./src/presenter/FilmsList.js");





const FILMS_COUNT = 25;

const films = new Array(FILMS_COUNT).fill().map(_mock_film_js__WEBPACK_IMPORTED_MODULE_1__["generateFilm"]);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);


const filmsBoardPresenter = new _presenter_FilmsList__WEBPACK_IMPORTED_MODULE_2__["default"](siteMainElement);
const rakUserPresenter = new _presenter_RankUser_js__WEBPACK_IMPORTED_MODULE_0__["default"](siteHeaderElement);

filmsBoardPresenter.init(films);
rakUserPresenter.init(films);


/***/ }),

/***/ "./src/mock/const.js":
/*!***************************!*\
  !*** ./src/mock/const.js ***!
  \***************************/
/*! exports provided: FILM_TITLES, FILM_SNIPPETS, FILM_POSTERS, FILM_GENRES, FILM_DIRECTORS, FILM_SCREENWRITERS, FILM_ACTORS, FILM_COUNTRIES, FILM_DESCRIPTIONS, FILM_COMMENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_TITLES", function() { return FILM_TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_SNIPPETS", function() { return FILM_SNIPPETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_POSTERS", function() { return FILM_POSTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_GENRES", function() { return FILM_GENRES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_DIRECTORS", function() { return FILM_DIRECTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_SCREENWRITERS", function() { return FILM_SCREENWRITERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_ACTORS", function() { return FILM_ACTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_COUNTRIES", function() { return FILM_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_DESCRIPTIONS", function() { return FILM_DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_COMMENTS", function() { return FILM_COMMENTS; });
const FILM_TITLES = [
  `Made for each other`,
  `Popeye meets sinbad`,
  `Sagebrush trail`,
  `Santa - Claus conquers the martians`,
  `The dace of life`,
  `The great flamarion`,
  `The man with the golden arm`
];

const FILM_SNIPPETS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const FILM_POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const FILM_GENRES = [
  `Musical`,
  `Thriller`,
  `Comedy`,
  `Drama`,
  `Horrors`,
  `Fantasy`
];

const FILM_DIRECTORS = [
  `Стивен Спилберг`,
  `Питер Джексон`,
  `Мартин Скорсезе`,
  `Кристофер Нолан`,
  `Стивен Содерберг`,
];

const FILM_SCREENWRITERS = [
  `Билли Уайлдер`,
  `Итан и Джоэл Коэны`,
  `Роберт Таун`,
  `Квентин Тарантино`,
  `Фрэнсис Форд Коппола`,
  `Уильям Голдман`,
  `Чарли Кауфман`,
  `Вуди Аллен`,
  `Нора Эфрон`
];

const FILM_ACTORS = [
  `Хамфри Богарт`,
  `Кэтрин Хепбёрн`,
  `Бетт Дейвис`,
  `Кэри Грант`,
  `Джеймс Стюарт`,
  `Одри Хепбёрн`,
  `Марлон Брандо`,
  `Ингрид Бергман`,
  `Чарльз Чаплин`
];

const FILM_COUNTRIES = [
  `Австралия`,
  `Австрия`,
  `Бельгия`,
  `Гаити`,
  `Индия`,
  `Испания`,
  `Мавритания`,
  `Румыния`,
  `Сирия`
];

const FILM_DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  `Повседневная практика показывает, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что новая модель организационной деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Таким образом укрепление и развитие структуры позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения направлений прогрессивного развития.`
];

const FILM_COMMENTS = [
  {
    author: `Ivan`,
    content: `Ну неужели кто-то может не любить такой великолепный сериал?! По-моему это один из самых потрясающих сериалов - отличная режиссерская работа, отличная игра актёров, отличный юмор, всё отлично!`,
    date: `2019/12/31 23:59`,
    emoji: `angry.png`
  },
  {
    author: `John`,
    content: `И чего все расхваливают этот сериал. Это же примитив. `,
    date: `2 days ago`,
    emoji: `puke.png`
  },
  {
    author: `Mary`,
    content: `В наше время популярности различного рода телесериалов, можно лицезреть сотни, может даже тысячи, представителей данного направления, всех жанров.`,
    date: `10 days ago`,
    emoji: `sleeping.png`
  },
  {
    author: `DUD`,
    content: `Не знаю, как вы, но я всегда ассоциировала себя и своих друзей с персонажами сериала, находя ну очень знакомые черты от каждого. `,
    date: `Today`,
    emoji: `smile.png`
  },
  {
    author: `Man`,
    content: `Перечитывая на данном сайте рецензии на сериал «Игрушки», наткнулся на такую фразу: «Может лучше посмотреть „Друзей“?»`,
    date: ` 2010/10/1 13:25`,
    emoji: `puke.png`
  }
];


/***/ }),

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_film_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/film.js */ "./src/utils/film.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ "./src/mock/const.js");





const generateFilm = () => {
  return {
    id: Object(_utils_film_js__WEBPACK_IMPORTED_MODULE_1__["generateId"])(),
    title: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateValue"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_TITLES"]),
    poster: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateValue"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_POSTERS"]),
    snippet: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateValue"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_SNIPPETS"]),
    rating: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomFloat"])(0, 9),
    yearCreated: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1990, 2020),
    duration: Object(_utils_film_js__WEBPACK_IMPORTED_MODULE_1__["generateDuration"])(),
    genre: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateUniqueValues"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_GENRES"]),
    comments: Object(_utils_film_js__WEBPACK_IMPORTED_MODULE_1__["generateComments"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_COMMENTS"]),
    originalTitle: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateValue"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_TITLES"]),
    director: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateValue"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_DIRECTORS"]),
    screenwriters: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateUniqueValues"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_SCREENWRITERS"]),
    actors: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateUniqueValues"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_ACTORS"]),
    releaseDate: Object(_utils_film_js__WEBPACK_IMPORTED_MODULE_1__["generateDate"])(),
    country: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateValue"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_COUNTRIES"]),
    description: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateValue"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["FILM_DESCRIPTIONS"]),
    ageRating: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomFloat"])(0, 18),
    inQueueForViewing: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBool"])(),
    isWatch: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBool"])(),
    favorite: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomBool"])()
  };
};


/***/ }),

/***/ "./src/presenter/Film.js":
/*!*******************************!*\
  !*** ./src/presenter/Film.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Film; });
/* harmony import */ var _view_film_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/film.js */ "./src/view/film.js");
/* harmony import */ var _view_popup_film_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/popup-film-details */ "./src/view/popup-film-details.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/render.js */ "./src/utils/render.js");




const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

const siteBody = document.querySelector(`body`);

class Film {
  constructor(filmListContainer, changeData, _changeMode) {
    this._filmListContainer = filmListContainer;
    this._changeData = changeData;
    this._changeMode = _changeMode;
    this._mode = Mode.DEFAULT;

    this._popupFilmDetailsComponent = null;
    this._filmComponent = null;

    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._openPopup = this._openPopup.bind(this);
    this._addToWatchlist = this._addToWatchlist.bind(this);
    this._markAsViewed = this._markAsViewed.bind(this);
    this._addToFavorite = this._addToFavorite.bind(this);
    this._closePopup = this._closePopup.bind(this);
  }

  init(film) {
    this._film = film;
    const prevFilmComponent = this._filmComponent;
    const prevPopupFilmDetails = this._popupFilmDetailsComponent;

    this._filmComponent = new _view_film_js__WEBPACK_IMPORTED_MODULE_0__["default"](film);
    this._popupFilmDetailsComponent = new _view_popup_film_details__WEBPACK_IMPORTED_MODULE_1__["default"](film);

    this._filmComponent.setOpenPopupClickHandler(this._openPopup);
    this._filmComponent.setAddToWatchlistClickHandler(this._addToWatchlist);
    this._filmComponent.setMarkAsViewedClickHandler(this._markAsViewed);
    this._filmComponent.setAddToFavoritesClickHandler(this._addToFavorite);

    if (prevFilmComponent === null || prevPopupFilmDetails === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._filmListContainer, this._filmComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    if (siteBody.contains(prevFilmComponent.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmComponent, prevFilmComponent);
    }

    if (siteBody.contains(prevPopupFilmDetails.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._popupFilmDetailsComponent, prevPopupFilmDetails);
      this._popupFilmDetailsComponent.setClosePopupClickHandler(this._closePopup);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPopupFilmDetails);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._popupFilmDetailsComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._closePopup();
    }
  }

  _openPopup() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(siteBody, this._popupFilmDetailsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
    this._popupFilmDetailsComponent.setClosePopupClickHandler(this._closePopup);
    this._popupFilmDetailsComponent.setAddToWatchlistClickHandler(this._addToWatchlist);
    this._popupFilmDetailsComponent.setMarkAsViewedClickHandler(this._markAsViewed);
    this._popupFilmDetailsComponent.setAddToFavoritesClickHandler(this._addToFavorite);
    siteBody.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = Mode.POPUP;
  }


  _closePopup() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._popupFilmDetailsComponent);
    siteBody.classList.remove(`hide-overflow`);
    this._mode = Mode.DEFAULT;
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _addToWatchlist() {
    this._changeData(Object.assign(
        {},
        this._film,
        {
          inQueueForViewing: !this._film.inQueueForViewing
        }
    ));
  }

  _markAsViewed() {
    this._changeData(Object.assign(
        {},
        this._film,
        {
          isWatch: !this._film.isWatch
        }
    ));
  }

  _addToFavorite() {
    this._changeData(Object.assign(
        {},
        this._film,
        {
          favorite: !this._film.favorite
        }
    ));
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._closePopup();
    }
  }
}


/***/ }),

/***/ "./src/presenter/FilmsList.js":
/*!************************************!*\
  !*** ./src/presenter/FilmsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _view_group_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/group-menu.js */ "./src/view/group-menu.js");
/* harmony import */ var _view_sorting_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/sorting-menu.js */ "./src/view/sorting-menu.js");
/* harmony import */ var _view_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/view/board.js */ "./src/view/board.js");
/* harmony import */ var _view_board_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/view/board-main.js */ "./src/view/board-main.js");
/* harmony import */ var _view_film_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/view/film-list.js */ "./src/view/film-list.js");
/* harmony import */ var _view_button_load_more_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/view/button-load-more.js */ "./src/view/button-load-more.js");
/* harmony import */ var _view_no_film_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/view/no-film.js */ "./src/view/no-film.js");
/* harmony import */ var _presenter_Film_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/presenter/Film.js */ "./src/presenter/Film.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/const */ "./src/utils/const.js");
/* harmony import */ var _utils_film_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/film.js */ "./src/utils/film.js");













const FILMS_ITERATOR = 5;

class FilmsList {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;
    this._renderedFilmCount = FILMS_ITERATOR;
    this._filmPresenter = {};
    this._currentSortType = _utils_const__WEBPACK_IMPORTED_MODULE_10__["SortType"].DEFAULT;

    this._sortingMenuComponent = new _view_sorting_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._boardComponent = new _view_board_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._boardMainComponent = new _view_board_main_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._filmsListComponent = new _view_film_list_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._buttonLoadMoreComponent = new _view_button_load_more_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._noFilmComponent = new _view_no_film_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

    this._handleButtonLoadMoreClick = this._handleButtonLoadMoreClick.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handlePopupVisibleChange = this._handlePopupVisibleChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(films) {
    this._films = films.slice();
    this._sourceFilms = films.slice();
    this._groupMenuComponent = new _view_group_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._films);
    this._renderBoard();
  }

  _handleFilmChange(updateFilm) {
    this._films = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_9__["updateItem"])(this._films, updateFilm);
    this._filmPresenter[updateFilm.id].init(updateFilm);
  }

  _handlePopupVisibleChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _renderGroupMenu() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._boardContainer, this._groupMenuComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  }

  _renderSortingMenu() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._boardContainer, this._sortingMenuComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
    this._sortingMenuComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderBoardContainer() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._boardContainer, this._boardComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._boardComponent, this._boardMainComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._boardMainComponent, this._filmsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((item) => Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._renderFilm(item)));
  }

  _renderFilmsList() {
    this._renderFilms(0, Math.min(this._films.length, FILMS_ITERATOR));

    if (this._films.length > FILMS_ITERATOR) {
      this._renderButtonLoadMore();
    }
  }

  _renderFilm(film) {
    const filmPresenter = new _presenter_Film_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._filmsListComponent, this._handleFilmChange, this._handlePopupVisibleChange);
    filmPresenter.init(film);
    this._filmPresenter[film.id] = filmPresenter;
  }

  _handleButtonLoadMoreClick() {
    this._renderFilms(this._renderedFilmCount, this._renderedFilmCount + FILMS_ITERATOR);
    this._renderedFilmCount += FILMS_ITERATOR;

    if (this._renderedFilmCount >= this._films.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._buttonLoadMoreComponent);
    }
  }

  _renderButtonLoadMore() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._boardMainComponent, this._buttonLoadMoreComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
    this._buttonLoadMoreComponent.setClickHandler(this._handleButtonLoadMoreClick);
  }

  _renderNoFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._boardContainer, this._noFilmComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
  }

  _renderBoard() {
    this._renderGroupMenu();

    if (!this._films.length) {
      this._renderNoFilms();
      return;
    }
    this._renderSortingMenu();
    this._renderBoardContainer();
    this._renderFilmsList();
  }

  _clearFilmsList() {
    Object
        .values(this._filmPresenter)
        .forEach((presenterItem) => presenterItem.destroy());
    this._filmPresenter = {};
    this._renderedFilmCount = FILMS_ITERATOR;
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._buttonLoadMoreComponent);
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._sortFilms(sortType);
    this._clearFilmsList();
    this._renderFilmsList();
  }

  _sortFilms(sortType) {
    switch (sortType) {
      case _utils_const__WEBPACK_IMPORTED_MODULE_10__["SortType"].DATE:
        this._films.sort(_utils_film_js__WEBPACK_IMPORTED_MODULE_11__["sortByDate"]);
        break;
      case _utils_const__WEBPACK_IMPORTED_MODULE_10__["SortType"].RATING:
        this._films.sort(_utils_film_js__WEBPACK_IMPORTED_MODULE_11__["sortByRating"]);
        break;
      default:
        this._films = this._sourceFilms.slice();
    }
    this._currentSortType = sortType;
  }
}


/***/ }),

/***/ "./src/presenter/RankUser.js":
/*!***********************************!*\
  !*** ./src/presenter/RankUser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RankUser; });
/* harmony import */ var _view_rank_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/rank-user.js */ "./src/view/rank-user.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/render.js */ "./src/utils/render.js");



class RankUser {
  constructor(container) {
    this._container = container;
  }

  init(films) {
    this._filmsWatchingCount = 0;
    this._films = films;
    this._getCountWatchedFilms();
    this._rankUserComponent = new _view_rank_user_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._filmsWatchingCount);
    if (this._filmsWatchingCount > 0) {

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._rankUserComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    }
  }

  _getCountWatchedFilms() {
    this._filmsWatchingCount = this._films.filter(({isWatch}) => isWatch).length;
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomFloat, generateUniqueValues, generateValue, getRandomBool, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomFloat", function() { return getRandomFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueValues", function() { return generateUniqueValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateValue", function() { return generateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBool", function() { return getRandomBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomFloat = (a = 0, b = 10) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return (lower + Math.random() * (upper - lower + 1)).toFixed(1);
};


const generateUniqueValues = (items) => {
  const str = [];
  for (let i = 0; i < getRandomInteger(1, items.length - 1); i++) {
    str.push(items[Math.floor(Math.random() * items.length)]);
  }
  const unique = new Set(str);

  return Array.from(unique);
};

const generateValue = (items) => {
  const randomIndex = getRandomInteger(0, items.length - 1);

  return items[randomIndex];
};

const getRandomBool = () => {
  return !!getRandomInteger();
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: RankUserList, SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankUserList", function() { return RankUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
const RankUserList = [
  `novice`,
  `fan`,
  `movie buff`
];

const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`
};




/***/ }),

/***/ "./src/utils/film.js":
/*!***************************!*\
  !*** ./src/utils/film.js ***!
  \***************************/
/*! exports provided: generateDuration, generateDate, generateComments, generateId, sortByDate, sortByRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDuration", function() { return generateDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDate", function() { return generateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComments", function() { return generateComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return generateId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByRating", function() { return sortByRating; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/utils/common.js");
const dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");


const generateDuration = () => {

  const randomDuration = `${Object(_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 3)}h ${Object(_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 59)}m`;

  return randomDuration;
};

const generateDate = () => {
  const date = dayjs(`1950`)
    .add(Object(_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 12), `month`)
    .add(Object(_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 80), `year`);

  return date.format(`d MMMM YYYY`);
};

const generateComments = (data) => {
  const randomIndex = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, data.length - 1);
  return data.slice(0, randomIndex);
};

const generateId = () => {
  return Date.now() + parseInt(Math.random() * 10000, 10);
};

const sortByDate = (a, b) => {
  return b.yearCreated - a.yearCreated;
};

const sortByRating = (a, b) => {
  return b.rating - a.rating;
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/board-main.js":
/*!********************************!*\
  !*** ./src/view/board-main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoardMain; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createBoardMainTemplate = () => {
  return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`;
};

class BoardMain extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createBoardMainTemplate();
  }
}


/***/ }),

/***/ "./src/view/board.js":
/*!***************************!*\
  !*** ./src/view/board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createBoardTemplate = () => {
  return `<section class="films"></section>`;
};

class Board extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createBoardTemplate();
  }
}


/***/ }),

/***/ "./src/view/button-load-more.js":
/*!**************************************!*\
  !*** ./src/view/button-load-more.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonLoadMore; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createButtonLoadMoreTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ButtonLoadMore extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createButtonLoadMoreTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-list.js":
/*!*******************************!*\
  !*** ./src/view/film-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmList; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createBoardMainTemplate = () => {
  return `<div class="films-list__container"></div>`;
};

class FilmList extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createBoardMainTemplate();
  }
}


/***/ }),

/***/ "./src/view/film.js":
/*!**************************!*\
  !*** ./src/view/film.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Film; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const getStringValues = (items) => {
  return items.join(`, `);
};

const createFilmTemplate = ({title, poster, snippet, rating, yearCreated, duration, genre, comments, inQueueForViewing, isWatch, favorite}) => {
  return `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${yearCreated}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${getStringValues(genre)}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${snippet}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${inQueueForViewing ? `film-card__controls-item--active` : ``}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatch ? `film-card__controls-item--active` : ``}" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favorite ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
      </div>
    </article>`;
};


class Film extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._openPopupClickHandler = this._openPopupClickHandler.bind(this);
    this._addToWatchlistClickHandler = this._addToWatchlistClickHandler.bind(this);
    this._markAsViewedClickHandler = this._markAsViewedClickHandler.bind(this);
    this._addToFavoritesClickHandler = this._addToFavoritesClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmTemplate(this._film);
  }

  _openPopupClickHandler(evt) {
    evt.preventDefault();
    this._callback.openPopupClick();
  }

  _addToWatchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.addToWatchlistClick();
  }

  _markAsViewedClickHandler(evt) {
    evt.preventDefault();
    this._callback.markAsViewedClick();
  }

  _addToFavoritesClickHandler(evt) {
    evt.preventDefault();
    this._callback.addToFavoritesClick();
  }

  setOpenPopupClickHandler(callback) {
    this._callback.openPopupClick = callback;
    const elementsClickedOpenPopup = [
      this.getElement().querySelector(`.film-card__title`),
      this.getElement().querySelector(`.film-card__poster`),
      this.getElement().querySelector(`.film-card__comments`)
    ];

    elementsClickedOpenPopup.forEach((item) => {
      item.addEventListener(`click`, this._openPopupClickHandler);
    });
  }

  setAddToWatchlistClickHandler(callback) {
    this._callback.addToWatchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._addToWatchlistClickHandler);
  }

  setMarkAsViewedClickHandler(callback) {
    this._callback.markAsViewedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._markAsViewedClickHandler);
  }

  setAddToFavoritesClickHandler(callback) {
    this._callback.addToFavoritesClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._addToFavoritesClickHandler);
  }
}


/***/ }),

/***/ "./src/view/group-menu.js":
/*!********************************!*\
  !*** ./src/view/group-menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupMenu; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const getCount = (items, field) => {
  return items.filter((item) => item[field]).length;
};

const createGroupMenuTemplate = (data) => {
  return `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${getCount(data, `isWatch`)}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${getCount(data, `inQueueForViewing`)}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${getCount(data, `favorite`)}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`;
};

class GroupMenu extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
  }

  getTemplate() {
    return createGroupMenuTemplate(this._film);
  }
}


/***/ }),

/***/ "./src/view/no-film.js":
/*!*****************************!*\
  !*** ./src/view/no-film.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilm; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoFilmTemplate = () => {
  return `<p class="board__no-tasks">
    No films
  </p>`;
};

class NoFilm extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoFilmTemplate();
  }
}


/***/ }),

/***/ "./src/view/popup-film-details.js":
/*!****************************************!*\
  !*** ./src/view/popup-film-details.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupFilmDetails; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const getGeneresGenres = (items) => {
  const newItems = items.map((item) => {
    return `<span class="film-details__genre">${item}</span>`;
  });
  return newItems.join(``);
};

const getStringValues = (items) => {
  return items.join(`, `);
};

const getComments = (items) => {
  const comments = items.map(({author, content, date, emoji}) => {
    return `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emoji}" width="55" height="55" alt="emoji-angry">
        </span>
        <div>
          <p class="film-details__comment-text">${content}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${date}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`;
  });
  return comments.join(``);
};

const createPopupFilmDetailsTemplate = ({poster, ageRating, title, originalTitle, rating, director, screenwriters, actors, genre, releaseDate, duration, country, description, comments, inQueueForViewing, isWatch, favorite}) => {
  return `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
    
              <p class="film-details__age">${ageRating}+</p>
            </div>
    
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${originalTitle}</p>
                </div>
    
                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>
    
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${getStringValues(screenwriters)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${getStringValues(actors)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${releaseDate}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genre${getGeneresGenres(genre).length ? `s` : ``}</td>
                  <td class="film-details__cell">
                    ${getGeneresGenres(genre)}
                </tr>
              </table>
    
              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>
    
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${inQueueForViewing ? `checked` : ``}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatch ? `checked` : ``}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
    
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${favorite ? `checked` : ``}>
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>
    
        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
    
            <ul class="film-details__comments-list">
              ${getComments(comments)}
            </ul>
    
            <div class="film-details__new-comment">
              <div class="film-details__add-emoji-label"></div>
    
              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>
    
              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>
    
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>
    
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>
    
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`;
};

class PopupFilmDetails extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._closePopupClickHandler = this._closePopupClickHandler.bind(this);
    this._addToWatchlistClickHandler = this._addToWatchlistClickHandler.bind(this);
    this._markAsViewedClickHandler = this._markAsViewedClickHandler.bind(this);
    this._addToFavoritesClickHandler = this._addToFavoritesClickHandler.bind(this);
  }

  getTemplate() {
    return createPopupFilmDetailsTemplate(this._film);
  }

  _closePopupClickHandler(evt) {
    evt.preventDefault();
    this._callback.closePopup();
  }

  _addToWatchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.addToWatchlistClick();
  }

  _markAsViewedClickHandler(evt) {
    evt.preventDefault();
    this._callback.markAsViewedClick();
  }

  _addToFavoritesClickHandler(evt) {
    evt.preventDefault();
    this._callback.addToFavoritesClick();
  }

  setClosePopupClickHandler(callback) {
    this._callback.closePopup = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._closePopupClickHandler);
  }

  setAddToWatchlistClickHandler(callback) {
    this._callback.addToWatchlistClick = callback;
    this.getElement().querySelector(`#watchlist`).addEventListener(`input`, this._addToWatchlistClickHandler);
  }

  setMarkAsViewedClickHandler(callback) {
    this._callback.markAsViewedClick = callback;
    this.getElement().querySelector(`#watched`).addEventListener(`input`, this._markAsViewedClickHandler);
  }

  setAddToFavoritesClickHandler(callback) {
    this._callback.addToFavoritesClick = callback;
    this.getElement().querySelector(`#favorite`).addEventListener(`input`, this._addToFavoritesClickHandler);
  }
}


/***/ }),

/***/ "./src/view/rank-user.js":
/*!*******************************!*\
  !*** ./src/view/rank-user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RankUser; });
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");



const getRank = (count) => {
  let i = ``;
  if (count >= 1 && count <= 10) {
    i = 0;
  } else if (count >= 11 && count <= 20) {
    i = 1;
  } else if (count > 20) {
    i = 2;
  }
  return _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["RankUserList"][i];
};

const createRankUserTemplate = (count) => {
  return `<section class="header__profile profile">
      <p class="profile__rating">${getRank(count)}</p>
      <img class="profile__avatar" src="./images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`;
};

class RankUser extends _abstract__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(count) {
    super();
    this._countFilms = count;
  }

  getTemplate() {
    return createRankUserTemplate(this._countFilms);
  }
}


/***/ }),

/***/ "./src/view/sorting-menu.js":
/*!**********************************!*\
  !*** ./src/view/sorting-menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortingMenu; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/const.js */ "./src/utils/const.js");



const createSortingListTemplate = () => {
  return `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active" data-sort-type="${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}">Sort by default</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE}">Sort by date</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].RATING}">Sort by rating</a></li>
    </ul>`;
};

class SortingMenu extends _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortingListTemplate();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map