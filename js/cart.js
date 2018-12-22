function $(Nid){
 return document.getElementById(Nid);
}
window.onload = init;
function init (){
productCount();

}

//更新总金额
function productCount(){

	var price = document.getElementsByName('goodsprice');
	var num = document.getElementsByName('goodsnum');
	var sum = document.getElementsByName('goodssum');
	var allmoney = 0;
	for(var i = 0;i<num.length;i++){
		sum[i].innerHTML = price[i].innerHTML*num[i].value;
		allmoney+=Number(sum[i].innerHTML);
	}
	$("allmoney").innerHTML = allmoney;
}


//全选框
function changeProductObj(){
	var objInput = document.getElementsByName('product');
	for(var i = 0;i<objInput.length;i++){
		objInput[i].checked = $("allcheck").checked;
	}
}

//删除效果
function deleteRow(){
	var r=confirm("您确定要删除选中的商品么");
	if (r==true)
	  {}
	else
	  {
	  	return;
	  }
	var objInput = document.getElementsByName('product');
	for(var i = objInput.length-1;i>=0;i--){
		if (objInput[i].checked) {
			var index = Number(i+1);
		$("tablestyle").deleteRow(index);
		productCount();
		}
	}
}

//增加商品数目
function addGoodsNum(obj){
	var numText = obj.nextSibling;
	while(numText.nodeType!=1){ numText=numText.nextSibling;}
	numText.value -=1;
	if(numText.value<1||numText.value==null)numText.value=1;
	productCount();

}

//修改商品数目
function changeGoodsNum(obj){
	if(obj.value<1||obj.value==null)obj.value=1;
	productCount();
}

//减少商品数目
function reduceGoodsNum(obj){
	var numText = obj.previousSibling;
	while(numText.nodeType!=1){ numText=numText.previousSibling;}
	numText.value = numText.value*1+1;
	productCount();
}