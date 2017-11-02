n=0;
function resizehandler(){
    console.log(new Date().getTime());
    console.log(++n);
}

function throttle(method,context){
    clearTimeout(method.tId);
    method.tId=setTimeout(function(){
        method.call(context);
    },300);
}

window.onmousewheel=function(){
    throttle(resizehandler,window);
};