$(document).ready(function(){
//---------轮播图-------------------
    //取值函数
    var oWid;
    function getVal(){
    	// 获取轮播图可视区域的宽度
        oWid = $(".r-wrap").width();
        return oWid;
    }
    var i = 0;
    // 将第一张图片复制到最后一张图片后面
    var clone = $(".slide li").first().clone();
    $(".slide").append(clone);
    var size = $(".slide li").length;

//当浏览器窗口大小改变时，触发resize事件
    $(window).resize(function(){
        // 清除定时器，停止图片运动
        clearInterval(t);
        var oWid = $(".r-wrap").width();
        var wid = size*oWid;
        $(".slide li").css("width",oWid);
        $(".slide").css("width",wid);
        t = setInterval(moveR, 2000);
        return oWid;
    })

    // 自动轮播
    var t = setInterval(moveR, 2000);

   // 鼠标悬停在图片区域自动轮播暂停，鼠标离开图片区域自动轮播继续
    $(".r-wrap").hover(function(){
        clearInterval(t);
    }, function(){
        t = setInterval(moveR, 2000);
    });

    // pre运动函数
    function moveL(){
        i--;
        if (i == -1){
            $(".slide").css({left: -(size-1)*oWid});
            i = size-2;
        }
        $(".slide").stop().animate({left:-i*oWid},700);
    }

    // next运动函数
    function moveR(){
        getVal();
        i++;
        if (i == size){
            $(".slide").css({left: 0});
            i = 1;
        }
        $(".slide").stop().animate({left:-i*oWid},700);
    }

    // 点击左右按钮控制轮播切换
    // 左右按钮就不在html里写了
    $(".pre").click(function(){
        moveL();
    });
    $(".next").click(function(){
        moveR();
    });
})
