
			var isios = false;
			! function(userAgent) {
				var screen_w = parseInt(window.screen.width),
					scale = screen_w / 750;
				if(/Android (\d+\.\d+)/.test(userAgent)) {
					var version = parseFloat(RegExp.$1);
					document.write(version > 2.3 ? '<meta name="viewport" content="width=750, initial-scale = ' + scale + ',user-scalable=1, minimum-scale = ' + scale + ', maximum-scale = ' + scale + ', target-densitydpi=device-dpi">' : '<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
				} else {
					isios = true;
					document.write('<meta name="viewport" content="width=750, initial-scale = ' + scale + ' ,minimum-scale = ' + scale + ', maximum-scale = ' + scale + ', user-scalable=no">');
				}
			}(navigator.userAgent);

function selectmenu(n){
var eleMore = document.getElementById("menu_"+n);
if(eleMore.style.display=="none"){
eleMore.style.display = 'block';
$("#cell_"+n).removeClass("icon-74");
$("#cell_"+n).addClass("icon-35 ");
}else{
eleMore.style.display = 'none';
$("#cell_"+n).removeClass("icon-35");
$("#cell_"+n).addClass("icon-74");
}
}
function goTop(acceleration, time) {
acceleration = acceleration || 0.1;
time = time || 16;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
if (document.documentElement) {
x1 = document.documentElement.scrollLeft || 0;
y1 = document.documentElement.scrollTop || 0;
}
if (document.body) {
x2 = document.body.scrollLeft || 0;
y2 = document.body.scrollTop || 0;
}
var x3 = window.scrollX || 0;
var y3 = window.scrollY || 0;
// 滚动条到页面顶部的水平距离
var x = Math.max(x1, Math.max(x2, x3));
// 滚动条到页面顶部的垂直距离
var y = Math.max(y1, Math.max(y2, y3));
// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
var speed = 1 + acceleration;
window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
// 如果距离不为零, 继续调用迭代本函数
if (x > 0 || y > 0) {
var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
window.setTimeout(invokeFunction, time);
}
}
function deletedom(dom,ev){
 
 $(ev).parent().remove();
 $("#"+dom).prop("checked",false);
}
$(function() {
    $('.js-category').click(function() {//debugger;
        $parent = $(this).parent('li');
        if ($parent.hasClass('js-show')) {
            $parent.removeClass('js-show');
            $(this).children('i').removeClass('icon-jiantou2').addClass('icon-jiantou3');
        } else {
            //$parent.siblings().removeClass('js-show');
            $parent.addClass('js-show');
            $(this).children('i').removeClass('icon-jiantou3').addClass('icon-jiantou2');
            // $parent.siblings().find('i').removeClass('icon-jiantou3').addClass('icon-jiantou2');
        }
    });
    $(".weui_cells").click(function(event) {
    	if($(this).hasClass('weui_cells_radio')){
    		return;
    	}
    	$(this).css('background',"#f6f6f6")
    });
});

