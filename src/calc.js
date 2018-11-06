function add(x,y) {
    return x+y;
}
export function substrict(x,y) {
    alert(x - y);
}
// module.exports =add;
export default { //es6导出写法
    add
}