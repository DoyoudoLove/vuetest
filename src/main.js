//1、获取dom对象
var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var bt = document.querySelector('#bt');
var res = document.querySelector('#res');

//2、导入site.css
require('../static/css/site.css');
//3、导入site1.scss
require('../static/css/site1.scss');
//3、导入site2.less
require('../static/css/site2.less');

bt.onclick = function () {
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);

    var add = require('./calc.js');
    res.value = add(v1value, v2value);
};