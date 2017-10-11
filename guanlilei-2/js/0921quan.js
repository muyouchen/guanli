
$(function(){
   
    //购买进度    ele位jquery对象
    function buyProgress(ele,v1,v2,v3,v4){
      ele.highcharts({
        chart: {
          type: 'pie',
          margin:[0,0,0,0],
          padding:[0,0,0,0],
          backgroundColor:null
        },
        plotOptions: {
          pie: {
            animation:false,
            innerSize: '140px',
            dataLabels: {
              enabled:false
            },
            borderWidth:0,
            size:180,
            enableMouseTracking:false
          }
        },
        tooltip:{
          enabled:false
        },
        title:{
          text:null
        },
        credits:{
          enabled:false
        },
        colors: [ '#5b9fe2', '#4b5ac9','#ff9630','#ffd447'],
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [v1,v2,v3,v4]
        }]
      })

    }
    
    $(function(){
      var count1=parseFloat($(".mc1-ttb").children(".mc1-pbwtxt5").html());
      var count2=parseFloat($(".mc1-ttbp").children(".mc1-pbwtxt5").html());
      var count3=parseFloat($(".mc1-ppb").children(".mc1-pbwtxt5").html());
      var count4=parseFloat($(".mc1-wzb").children(".mc1-pbwtxt5").html());
      count1=count1>100?100:count1;
      count2=count2>100?100:count2;
      count3=count3>100?100:count3;
      count4=count4>100?100:count4;
      if(count1==0&&count2==0&&count3==0&&count4==0){
     	 buyProgress($(".mc-alltz .buyprocss"),100/4,100/4,100/4,100/4);
      }else{
      	 buyProgress($(".mc-alltz .buyprocss"),count1,count2,count3,count4);
      }
    })

  })
