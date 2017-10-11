(function($){

	var selects=$('.m-c-yhkselect');//获取select

	for(var i=0;i<selects.length;i++){
		createSelect(selects[i],i);
	}

	function createSelect(select_container,index){

		//创建select容器，class为select_box，插入到select标签前
		var tag_select=$('<div></div>');//div相当于select标签
		tag_select.attr('class','select_box2');
		tag_select.insertBefore(select_container);

		//显示框class为select_showbox,插入到创建的tag_select中
		var select_showbox=$('<div></div>');//显示框
		select_showbox.css('cursor','pointer').attr('class','select_showbox2').appendTo(tag_select);

		//创建option容器，class为select_option，插入到创建的tag_select中
		var ul_option=$('<ul></ul>');//创建option列表
		ul_option.attr('class','select_option2');
		ul_option.appendTo(tag_select);
		createOptions(index,ul_option);//创建option

		//点击显示框
		tag_select.toggle(function(){
			ul_option.show();
		},function(){
			ul_option.hide();
		});

		var li_option=ul_option.find('li');
		li_option.on('click',function(){
			if($(this).hasClass("m-c-yhkdws")){
				
					$(".box").addClass('m-c-wsyhkTC');

				return;
			};//如果未完善0704
			
			$(this).addClass('selected').siblings().removeClass('selected');
			var value=$(this).text();
			select_showbox.text(value.replace(/(\s)*([a-zA-Z0-9]+|\W){3}$/, ""));//如果未完善0704
			ul_option.hide();
		});
		$('.ttb-pp-close-btn').click(function (){
					$(".box").removeClass('m-c-wsyhkTC');
				});

		li_option.hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover');	
		},function(){
			li_option.removeClass('hover');
		});

	}

	function createOptions(index,ul_list){
		//获取被选中的元素并将其值赋值到显示框中
		var options=selects.eq(index).find('option'),
			selected_option=options.filter(':selected'),
			selected_index=selected_option.index(),
			showbox=ul_list.prev(),
			dws=options.find('span');//如果未完善0704
			
			
			showbox.text(selected_option.text());
	//为每个option建立个li并赋值
		for(var n=0;n<options.length;n++){
			var tag_option=$('<li value="'+options[n].value+'"></li>'),//li相当于option
				txt_option=options.eq(n).text(),
				
				txt_dws=$('<span>待完善</span>');//如果未完善0704
			tag_option.text(txt_option).css('cursor','pointer').appendTo(ul_list);
			txt_dws.attr('class','m-c-txdws').appendTo(tag_option);//如果未完善0704
			//为被选中的元素添加class为selected
			if(n==selected_index){
				tag_option.attr('class','selected');
			}
			//如果未完善

			if(options.eq(n).hasClass("m-c-yhkdws")){
				tag_option.addClass("m-c-yhkdws")
			}
 		
			
		}
	}

})(jQuery)
