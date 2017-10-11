var arr=[20,15];
Array.prototype.S=String.fromCharCode(2);
Array.prototype.in_array=function(e){
	var r=new RegExp(this.S+e+this.S);
	return (r.test(this.S+this.join(this.S)+this.S));
};
function celenDar(str) {
    var nun = 0;
    var today = new Date();
    var year = parseInt(str?str.split('-')[0]:today.getFullYear());
    var month =parseInt(str?str.split('-')[1]:today.getMonth()+1);
    year=year<today.getFullYear()?today.getFullYear():year>today.getFullYear()+1?today.getFullYear()+1:year;
	if(year==today.getFullYear() && month<today.getMonth()+1) month=today.getMonth()+1;
	console.log(year + ":" +month)
    var week = ["日", "一", "二", "三", "四", "五", "六"];
    var startDay = new Date(year, month - 1, 1).getDay();
    var nDays = new Date(year, month, 0).getDate();
	var html='<div value="2015" id="choose_date_czw_year"><a class="l-year2" value="2016" onclick=\'celenDar("'+(parseInt(year)-1)+'-'+month+'")\'><'+year+'年</a><a class="l-year" value="2016">'+year+'年</a><a class="r-year" value="2017" onclick=\'celenDar("'+(parseInt(year)+1)+'-'+month+'")\'>'+(parseInt(year)+1)+'></a></div>&nbsp<div value="8" id="choose_date_czw_month">';
	for(var n=1;n<=12;n++){
		var str2=month==n?'red':''
		if(year==today.getFullYear() && n<today.getMonth()+1){
			html+='<div class="mc1-mo2 m-gray"><a value="12">'+n+'</a></div>';                 
		}else{
			html+='<div class="mc1-mo2 '+str2+'"><a value="12" onclick=\'celenDar("'+year+'-'+n+'")\'>'+n+'</a></div>';                 	
		} 
	}
	html+='</div><div class="mc1-datetableo"><div class="mc1-mo"><div class="mc1-m fl"><span class="mc1-mtxt">'+month+'</span>月</div><div class="mc1-mjy fl"><span class="mc1-mtxt2">共有<span>3</span>笔待收，总待收<span>15,000.00</span>元</span></div></div><div class="mc1-datetable"><ul>';
    for (var i = 0; i < week.length; i++) {
        html += '<li>' + week[i] + '</li>'
    }
    html += '</ul><ul>';

    for (var j = 0; j < startDay; j++) {
        nun++;
        html += '<li></li>';
    }

    for (var k = 1; k <= nDays; k++) {

        if (arr.in_array(k)) {
			
            html += '<li><div class="d-txt"><p class="d-txt1"><span class="ar">'+k+'</span>日 待收</p><p class="ar">100,000.00</p></div></li>';
        }else{
            html += '<li>' + k + '</li>';
        }

        nun++;
        if (nun == 7) {
            nun = 0;
            html += '</ul><ul>'
        }
    }
    html+='</ul></div></div>'

   $("#choose_date_czw_id").html(html);
}
