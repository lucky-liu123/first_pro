window.onload = function(){
		var loginBtn = document.querySelector('.loginBtn')
		loginBtn.onclick = function(){
			var xhr = new XMLHttpRequest();
			xhr.open('GET','./js/a.json')
			xhr.send(null)
			var that = this
			xhr.onload = function(){
				var data = xhr.response;
				data = JSON.parse(data);
				if(data[0]==0){
					$(that).parent().css({'display':'none'})
					$(that).parent().siblings().css({'display':'block'})
				}
			}
		}
}