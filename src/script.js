// import { render } from './utils'
console.log("E");
// render("=100");
System.register("utils", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function add(first, second) {
        return first + second;
    }
    exports_1("add", add);
    function subtract(first, second) {
        return second - first;
    }
    exports_1("subtract", subtract);
    function product(first, second) {
        return first * second;
    }
    exports_1("product", product);
    function divide(first, second) {
        return second / first;
    }
    exports_1("divide", divide);
    function render(result) {
        const e = document.querySelector("#resultHere");
        console.log(e);
        e.innerText = result;
    }
    exports_1("render", render);
    return {
        setters: [],
        execute: function () {
        }
    };
});
