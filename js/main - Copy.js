const btn=document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
   var btnItem=event.target
   var product=btnItem.parentElement
   var productImg=product.querySelector(".card-img-top").src
   var productName=product.querySelector(".card-title").innerText
   var productPrice=product.querySelector(".cart-gia").innerText
   addcart(productPrice,productImg,productName)


}})

})
function addcart(productPrice,productImg,productName) {
   var addtr = document.createElement("tr")
   var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
      var productT = document.querySelectorAll(".title")
      if(productT[i].innerHTML==productName) {
         alert("Sản phẩm của bạn đã có trong giỏ hàng")
         return
      }
    }
   var trcontent = '<tr><td style="display: gn-items:center;"><img style="width: 170px;" src="'+productImg+'"alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none; text-align: center;" type="number"value="1"min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
   addtr.innerHTML = trcontent
   var cartTable = document.querySelector("tbody")
   // console.log(cartTable)
   cartTable.append(addtr)
   carttotal()
   deleteCart()


}
//--------------------totalPrice-----------------------
function carttotal (){
   var cartItem = document.querySelectorAll("tbody tr")
   var totalC = 0
   // console.log(cartItem.length)
   for(var i=0;i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input").value
      var productPrice = cartItem[i].querySelector(".prices").innerHTML
      totalA = productPrice*inputValue*1000
      totalC = totalC + totalA
      //totalD = totalC.toLocaleString('de-DE')
   }
   var cartTotalA = document.querySelector(".price-total span")
   cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
   inputchange ()
}
//--------------------delete cart-----------------------
function deleteCart() {
   var cartItem = document.querySelectorAll("tbody tr")
   for(var i=0;i<cartItem.length;i++){
      var productT = document.querySelectorAll(".cart-delete")
      productT[i].addEventListener("click",function(event){
         var cartDelete = event.target
         var cartItemR =  cartDelete.parentElement.parentElement
         cartItemR.remove()
         carttotal ()
      })
      
    }
}
function inputchange () {
   var cartItem = document.querySelectorAll("tbody tr")
   for(var i=0;i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input")
      inputValue.addEventListener("change",function(){
         carttotal ()
      })
      
    }
}
