
function choose_date_czw(date_id,objtd){
if(typeof objtd=='number'){
	$("#choose_date_czw_year").attr("value",objtd);
//	$("#choose_date_czw_month").attr("value",objtd)
}
var nstr=new Date(); //当前
if(document.getElementById("choose_date_czw_year")!=null){
    var year = $("#choose_date_czw_year").attr("value");
    var month = $("#choose_date_czw_month").attr("value");
    var str=year+"/"+month+"/1";
    nstr=new Date(str); //当前
}
var ynow=nstr.getFullYear(); //年份
var mnow=nstr.getMonth(); //月份
var dnow=nstr.getDate(); //今日日期
var n1str=new Date(ynow,mnow,1); //当月第一天
var firstday=n1str.getDay(); //当月第一天星期几

function is_leap(year) {
   return (year%100==0 ? res=(year%400==0 ? 1 : 0) : res=(year%4==0 ? 1: 0));
}
var dstr="<div value='"+ynow+"'  id=\"choose_date_czw_year\" >";
for(var y=2016;y<2018;y++){
	//"+date_id+","+y+"
    if(y==ynow){
        dstr+="<a value='"+y+"' onclick=\"choose_date_czw('"+date_id+"','"+y+"')\">"+y+"</a>"
    }else{
        dstr+="<a value='"+y+"' onclick=\"choose_date_czw('"+date_id+"','"+y+"')\">"+y+"</a>"
    }
}
dstr+="</div>&nbsp;<div value='"+mnow+"' id=\"choose_date_czw_month\" >";
for(var m=1;m<13;m++){
    if(parseInt(mnow+1)==m){
        dstr+="<div class='mc1-mo2'><a value='"+m+"' onclick=\"choose_date_czw('"+date_id+"','"+m+"')\">"+m+"</a></div>"
    }else{
        dstr+="<div class='mc1-mo2'><a value='"+m+"' onclick=\"choose_date_czw('"+date_id+"','"+m+"')\">"+m+"</a></div>"
    }
}

dstr+="</div>";
//一三五七八十腊(十二月),三十一日永不差;四六九冬(十一月)三十日,唯有二月二十八(闰年二十九).
var m_days = new Array(31,28+is_leap(ynow),31,30,31,30,31,31,30,31,30,31);
var tr_str=Math.ceil((m_days[mnow] + firstday)/7);
dstr+="<div class='mc1-datetableo'><div class='mc1-mo'><div class='mc1-m fl'><span class='mc1-mtxt'>"+m+"</span>月</div><div class='mc1-mjy fl'><span class='mc1-mtxt2'>共有<span>3</span>笔待收，总待收<span>15,000.00</span>元</span></div></div><div class='mc1-datetable'><ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul>";
var dqdate=new Date(); //当前
for(i=0;i<tr_str;i++) { //外层for语句 - tr标签
   dstr+="<ul>";
   for(k=0;k<7;k++) { //内层for语句 - td标签
      idx=i*7+k; //表格单元的自然序号
      date_str=idx-firstday+1; //计算日期
     if(date_str<=0 || date_str>m_days[mnow]){
          dstr+="<li>&nbsp;</li>";
     }else{
        if(ynow==dqdate.getFullYear() && mnow==dqdate.getMonth() && dqdate.getDate()==date_str){
            dstr+="<li>"+date_str+"</li>";
        }else{
            dstr+="<li>"+date_str+"</li>";
        }
     }
   }
   dstr+="</ul>";
}
dstr+="</div></div>";
if(document.getElementById("choose_date_czw_id")==null){
var obj = document.getElementById(date_id);
var odiv = document.createElement("div");
var wdiv = $('.mc1-dateall');
odiv.id="choose_date_czw_id";
odiv.innerHTML=dstr;
odiv.style.position="absolute";
odiv.style.border="0px #0CF solid";
odiv.style.fontSize="12px";
odiv.style.zIndex=99999;
odiv.style.top=obj.offsetTop+obj.offsetHeight+"px";
odiv.style.left=31+"px";

wdiv.append(odiv);
}else{
    document.getElementById("choose_date_czw_id").style.display="block";
    document.getElementById("choose_date_czw_id").innerHTML=dstr;
}
}