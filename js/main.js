playing=false;
playingduration = 1500;
page=0;
initial=true;

var scrollFunc=function(event){ 
    event=event || window.event; 
    if (!playing) {
    	if (event.wheelDelta<0 || event.detail> 0) {
    		motion(true);
    	}else if(event.wheelDelta>0 || event.detail<0){
    		motion(false);
    	}
    };
} 

//监听事件
if(document.addEventListener){ 
document.addEventListener('DOMMouseScroll',scrollFunc,false); 
}/*firefox*/
window.onmousewheel=document.onmousewheel=scrollFunc;

document.onkeydown=function(event){
	event=event || window.event;
	var key=event.keyCode;
	if(key==40){
		motion(true);
	}else if(key==38){
		motion(false);
	}
}


function playingdelay(){
	playing = true;
	setTimeout(function(){playing = false;},playingduration);
}
//按小按钮翻页
function changepage(pg){
		core(pg);
		playingdelay();
}

function motion (direction) {
	if (direction == true) {
		if (page == 2) {
			page = 0;
			core(0);
			playingdelay();
		}else{
			page += 1;
			core(page);
			playingdelay();
		}
	}else{
		if(page==0){
			page = 2;
			core(2);
			playingdelay();
		}else{ 
			page -= 1;
			core(page);
			playingdelay(); 
	    }
	}
	
}

function core (page){
	$('.dot').removeClass('on');
	$('.dot').eq(page).addClass('on');

    if(page==0){
    	$('#scrolling,#scrolling>span').css({'cursor':'pointer'}).velocity({opacity:1},{duration:1500});
		$('#page3 a').css('cursor','default');
    	if(initial==true){
            $('#page2,#page3').css('visibility','hidden');
            initial=false;
    	}

     //page3 back
    	var page3back=function(){
        	$('#works').velocity({opacity:0},{duration:800});
			$('h2').velocity({translateY:'720px',opacity:0},{duration:800});
        	$('#page3 hr, .divider').velocity({scale:0},{duration:800});
    	}
    	page3back();
    	$('#page3').velocity({scale:2,opacity:0},{duration:800});

    	setTimeout(function(){ 
    	    $('#page3').css('visibility','hidden');
    },1000)

    //page1 init && back
		$('#intro').velocity({opacity:0,rotateX:'720deg'},{duration:0});
		$('#page1 hr').velocity({opacity:0,rotateY:'360deg'},{duration:0});
		$('.intro1,.intro2,.intro3').velocity({opacity:0,translateY:1000},{duration:0});
		$('.r1,.r2,.r3').velocity({rotateY:'30deg',translateZ:'1000px',rotateX:'90deg',opacity:0},{duration:0});
	//page1 in
	    $('#intro').velocity({opacity:1,rotateX:0},{duration:500,delay:500});
	    $('.r1').velocity({rotateY:'0deg',translateZ:'0px',rotateX:'0deg',scale:1,opacity:1},{duration:1200});
		$('.r2').velocity({rotateY:'0deg',translateZ:'0px',rotateX:'0deg',scale:1,opacity:1},{duration:1600});
		$('.r3').velocity({rotateY:'0deg',translateZ:'0px',rotateX:'0deg',scale:1,opacity:1},{duration:2000});
		$('.intro1').velocity({opacity:1,translateY:0,rotateY:0},{duration:2000});
		$('.intro2').velocity({opacity:1,translateY:0,rotateY:0},{duration:2200});
		$('.intro3').velocity({opacity:1,translateY:0,rotateY:0},{duration:2400});
		$('#page1 hr').velocity({opacity:1,rotateY:0},{duration:1500});
	// page2 back
	    $('#skills').velocity({rotateX:'0deg',translateY:'-400px',opacity:0},{duration:1000});
	    $('#page2 hr').velocity({opacity:0,translateY:'400px'},{duration:1000});
	    $('#sketch p').velocity({opacity:0, translateZ:'1000px'},{duration:1000});
	    $('.s1,.s2,.s3,.s4,.s5,.s6,.s7,.s8,.s9').velocity({opacity:0,rotateY:'180deg',translateZ:'1000px'},{duration:1000});
    }else if(page==1){
    	$('#scrolling,#scrolling>span').css({'cursor':'default'}).velocity({opacity:0});
    	$('#page2').css('visibility','visible');
    	$('#page3 a').css('cursor','default');
    	setTimeout(function(){
    		$('#page3').css('visibility','hidden');
    	},800);
    	//page1 away
    	var page1away=function(){
    		$('.r1').velocity({rotateY:'-10deg',translateZ:'1000px',rotateX:'30deg',scale:3,opacity:0},{duration:700});
			$('.r2').velocity({rotateY:'-5deg',translateZ:'1300px',rotateX:'60deg',scale:3,opacity:0},{duration:1000});
			$('.r3').velocity({rotateY:'0deg',translateZ:'1600px',rotateX:'90deg',scale:3,opacity:0},{duration:1300});
			$('#intro').velocity({rotateX:'0deg',translateZ:'0px',opacity:0},{duration:500});
			$('.intro1').velocity({opacity:0,translateY:720,rotateY:'360deg'},{duration:1300});
		    $('.intro2').velocity({opacity:0,translateY:720,rotateY:'360deg'},{duration:1000});
		    $('.intro3').velocity({opacity:0,translateY:720,rotateY:'360deg'},{duration:700});
			$('#page1 hr').velocity({opacity:0},{duration:1200});
    	}
    	page1away();
    	//page2 in
    	var page2in=function(){
    		$('#skills').velocity({translateY:'0px',opacity:1},{duration:1500});
	        $('#page2 hr').velocity({opacity:1,translateY:'0px'},{duration:1500});
	        $('#sketch p').eq(0).velocity({opacity:1,translateZ:'0px'},{duration:1800, timing:'ease-in'});
	        $('#sketch p').eq(1).velocity({opacity:1,translateZ:'0px'},{duration:2100, timing:'ease-in'});
	        $('#sketch p').eq(2).velocity({opacity:1,translateZ:'0px'},{duration:2400, timing:'ease-in'});
	        $('.s1').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:2000});
	        $('.s2').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:2200});
	        $('.s3').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:2400});
	        $('.s4').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:2600});
	        $('.s5').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:2800});
	        $('.s6').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:3000});
	        $('.s7').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:3200});
	        $('.s8').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:3400});
	        $('.s9').velocity({opacity:1,rotateY:0,translateZ:0,scale:1},{duration:3600});
    	}
    	page2in();
    	//page3 back
    	var page3back=function(){
        	$('#works').velocity({opacity:0},{duration:800});
			$('h2').velocity({translateY:'720px',opacity:0},{duration:800});
        	$('#page3 hr, .divider').velocity({scale:0},{duration:800});
    	}
    	page3back();
    	$('#page3').velocity({scale:2,opacity:0},{duration:800});
    }else if(page==2){
    	$('#scrolling,#scrolling>span').css({'cursor':'default'}).velocity({opacity:0});
    	$('#page3').css('visibility','visible');
    	$('#page3 a').css('cursor','pointer');
    	//page2 away
        var page2away=function(){
    		$('#skills').velocity({translateY:'-400px',opacity:0},{duration:1200});
	        $('#page2 hr').velocity({opacity:0,translateY:'400px'},{duration:1200});
	        $('#sketch p').velocity({opacity:0,translateZ:'1000px'},{duration:1000, timing:'ease-in'});
	        $('.s1,.s2,.s3').velocity({opacity:0,scale:0,rotateY:'180deg',translateZ:'1000px'},{duration:600});
	        $('.s4,.s5,.s6').velocity({opacity:0,scale:0,rotateY:'180deg',translateZ:'1000px'},{duration:800});
	        $('.s7,.s8,.s9').velocity({opacity:0,scale:0,rotateY:'180deg',translateZ:'1000px'},{duration:1000});
    	}
    	page2away();
    	//page1 away
    	var page1away=function(){
    		$('.r1').velocity({rotateY:'-10deg',translateZ:'1000px',rotateX:'30deg',scale:3,opacity:0},{duration:700});
			$('.r2').velocity({rotateY:'-5deg',translateZ:'1300px',rotateX:'60deg',scale:3,opacity:0},{duration:1000});
			$('.r3').velocity({rotateY:'0deg',translateZ:'1600px',rotateX:'90deg',scale:3,opacity:0},{duration:1300});
			$('#intro').velocity({rotateX:'0deg',translateZ:'0px',opacity:0},{duration:500});
			$('.intro1').velocity({opacity:0,translateY:720,rotateY:'360deg'},{duration:1300});
		    $('.intro2').velocity({opacity:0,translateY:720,rotateY:'360deg'},{duration:1000});
		    $('.intro3').velocity({opacity:0,translateY:720,rotateY:'360deg'},{duration:700});
			$('#page1 hr').velocity({opacity:0},{duration:1200});
    	}
    	page1away();
    	//page3 in
    	$('#page3').velocity({scale:1,opacity:1},{duration:1500});
    	var page3in=function(){
        	$('#works').velocity({opacity:1},{duration:1500});
			$('h2').velocity({translateY:0,opacity:1},{duration:1800});
        	$('#page3 hr, .divider').velocity({scale:1},{duration:2000,delay:1500});
    	}
    	page3in();
    }
};

$(document).ready(function(){
    core(0);
});