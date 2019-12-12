$(function(){
	//顶部菜单栏
	$('.header_banner>ul').children().has('div').mouseenter(function(){
		$(this).children().has('div').css({'display':'block','position':'absolute','zIndex':1000})
	})
	$('.header_banner>ul').children().has('div').mouseleave(function(){
		$(this).children().has('div').css({'display':'none'})
	})
	
	// $('.header_banner>ul').children().children().has('div').mouseenter(function(){
	// 	$(this).children().has('div').css({'display':'block','position':'absolute','zIndex':1000})
	// })
	
	$('.header_banner>ul').children().children().has('div').mouseleave(function(){
		$(this).css({'display':'none'})
	})
	
	// $('.header_banner>ul').children().has('div').mouseleave(function(){
	// 	$(this).children().css({'display':'none'})
	// })
	//ajax假数据列表
	var liArr = $('.list>ul>li');
	var ul = $('.listtwo>ul');
	var liArr2 = $('.listtwo>ul>li');
		liArr.on('mouseenter',function(){
			var xhr = new XMLHttpRequest();
			xhr.open('GET','./js/list.json')
			xhr.send(null)
			xhr.onload = function(){
				var data = xhr.response;
				data = JSON.parse(data);
				console.log(data)
				var str = "";
				// for(var j=0;j<liArr.length;j++){
					for(var i=0;i<data.length;i++){
						str+="<li>"+data[i].tuijian+"<span>"+data[i].type+"</span>"+</li>"
					}
				// }
				ul.append(str)
				$('.listtwo').fadeIn(10)
				$('.login').fadeOut(10)
			}	
		})
	liArr.on('mouseleave',function(){
		$('.listtwo').fadeOut(10)
		$('.login').fadeIn(10)
		$('.listtwo').fadeOut(10)
	})
	
	$('.listtwo').on('mouseenter',function(){
				$('.listtwo').fadeIn(10)
				$('.login').fadeOut(10)
			})
			
	$('.listtwo').on('mouseleave',function(){
		$('.listtwo').fadeOut(10)
		$('.login').fadeIn(10)
		$('.listtwo').fadeOut(10)
	})
			
	
	//滚动距离超过100显示回到顶部按钮
	$(window).scroll(function(){
		var windowScorllTop = $(window).scrollTop()
		if(windowScorllTop>100){
			$('.backTop').fadeIn(1000)
			//css({'display':'block'})
		}else{
			$('.backTop').fadeOut(1000)
		}
	})
	
	//回到顶部按钮功能
	$('.backTop').on('click',function(){
		$('body,html').animate({
			scrollTop:0
		},700);
		return false
	})
	
	//div向上动画	
	$('.move').on('mouseenter',function(){
		$('.buy').animate({
			bottom:50
		},500);
		$('.buy').css({'display':'block'})
	})
	
	$('.move').on('mouseleave',function(){
		$('.buy').animate({
			bottom:-30
		},500);
		$('.buy').css({'display':'none'})
	})	
		
	//swiper轮播图	
	var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal', // 水平切换选项
		    loop: true, // 循环模式选项
			// autoplay : 1000,
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
			  clickable :true,
		    },
		    // 如果需要前进后退按钮
		    // navigation: {
		    //   nextEl: '.swiper-button-next',
		    //   prevEl: '.swiper-button-prev',
		    // },
		    // speed:800,
		    autoplay : true,
			autoplay: {
			    disableOnInteraction: false,
			  }
			// slidesPerView : 1,
			// centeredSlides : true,
			// autoHeight: true,
		    // // 如果需要滚动条
		    // scrollbar: {
		    //   el: '.swiper-scrollbar',
		    // },
		})  
})
			
// $(function(){
	
// })			
			 
	