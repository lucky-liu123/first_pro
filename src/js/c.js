	window.onload = function(){
		getcartList()
		function getcartList(){
			var cart = document.querySelector('.cart');
			var cartList = JSON.parse(localStorage.getItem('cc'))||[];
			var str = `<tr>
				<th>id</th>
				<th>名称</th>
				<th>价格</th>
				<th>数量</th>
				<th>图标</th>
				<th>操作</th>
			</tr>`
				for(var k=0;k<cartList.length;k++){
					str+=`<tr>
				<td>${cartList[k].id}</td>
				<td>${cartList[k].name}</td>
				<td>${cartList[k].price}</td>
				<td><span class="add">+</span>${cartList[k].num}
				<span class="reduce">-</span>
				</td>
				<td><img src="${cartList[k].pic}"></td>
				<td class="delete"><span class="delete1">删除</span></td>
			</tr>`	
			}	
			cart.innerHTML = str
			var deleteBtnArr = document.querySelectorAll('.delete');
			for(var d=0;d<deleteBtnArr.length;d++){
				deleteBtnArr[d].onclick = function(){
					var id = this.parentNode.children[0].innerHTML
					var cartList = JSON.parse(localStorage.getItem('cc'))||[];
					for(var i=0;i<cartList.length;i++){
						if(cartList[i].id == id){
							cartList.splice(i,1);
							localStorage.setItem('cc',JSON.stringify(cartList))
							getcartList()
							return
						}
					}
				}
			}
			addCart()
			reduceCart()
			}
			
		function addCart(){
			var addArr = document.querySelectorAll('.add');
			for(var i=0;i<addArr.length;i++){
				addArr[i].onclick = function(){
					var id = this.parentNode.parentNode.children[0].innerHTML;
					// console.log(id)
					var cartList = JSON.parse(localStorage.getItem('cc'))||[];
					// num++
					for( var j=0;j<cartList.length;j++){
						if(cartList[j].id == id){
							cartList[j].num++
							localStorage.setItem('cc',JSON.stringify(cartList))
							getcartList()
							return
						}
					}
				}
			}
		}	
		
		function reduceCart(){
			var reduceArr = document.querySelectorAll('.reduce');
			for(var i=0;i<reduceArr.length;i++){
				reduceArr[i].onclick = function(){
					var id = this.parentNode.parentNode.children[0].innerHTML;
					// console.log(id)
					var cartList = JSON.parse(localStorage.getItem('cc'))||[];
					// num++
					for( var j=0;j<cartList.length;j++){
						if(cartList[j].id == id){
							cartList[j].num--
							// if(cartList[j].num<=0){
								
							// }
							localStorage.setItem('cc',JSON.stringify(cartList))
							getcartList()
							return
						}
					}
				}
			}
		}		
		
			
			
		var products = [
					{
						id:1,
						name:"乐视运动蓝牙耳机 红色",
						price:129,
						pic:"./img/erji.jpg"
					},
					{
						id:2,
						name:"云瞳底座 YUNT55A",
						price:325,
						pic:"./img/shopimg.jpg"
					},
					{
						id:3,
						name:"云豹底座 YUNB43A",
						price:412,
						pic:"./img/shopimg.jpg"
					}
				]
		var shopList = document.querySelector('.shop');
		shopList.innerHTML =`<tr>
					<th>图片</th>	
		 			<th>名称</th>
		 			<th>编号</th>
		 			<th>价格</th>
		 			<th>操作</th>
		 		</tr>`
		for(var i=0;i<products.length;i++){
			shopList.innerHTML+=`<tr>
				<td><img src="${products[i].pic}"></td>
		 			<td>${products[i].name}</td>
		 			<td>${products[i].id}</td>
		 			<td>${products[i].price}</td>
		 			<td class="addtoCart"><span class="add1">加入购物车</span></td>
		 		</tr>`
		}
		
		var addtoCartArr = document.querySelectorAll('.addtoCart');
		
		for(var j=0;j<addtoCartArr.length;j++){
			addtoCartArr[j].onclick = function(){
				var currert = {
					name:this.parentNode.children[1].innerHTML,
					id:this.parentNode.children[2].innerHTML,
					price:this.parentNode.children[3].innerHTML,
					pic:this.parentNode.children[0].children[0].src,
				}
				var cartList = JSON.parse(localStorage.getItem('cc'))||[];
				for(var i=0;i<cartList.length;i++){
					if(cartList[i].id == currert.id){
						cartList[i].num ++
						// cartList.push(currert)
						localStorage.setItem('cc',JSON.stringify(cartList))
						getcartList()
						return
					}
				}
				currert.num = 1
				cartList.push(currert)
				localStorage.setItem('cc',JSON.stringify(cartList))
				getcartList()
				}
			}
	}
	
	
	
	
	
	
	
