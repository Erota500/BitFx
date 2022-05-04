var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	
	function GetClock(){
	var tzOffset = 0;//set this to the number of hours offset from UTC
	
	var d=new Date();
	var dx=d.toGMTString();
	dx=dx.substr(0,dx.length -3);
	d.setTime(Date.parse(dx))
	d.setHours(d.getHours()+tzOffset);
	var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
	var nhour=d.getHours(),nmin=d.getMinutes(),ap;
	if(nhour==0){ap=" AM";nhour=12;}
	else if(nhour<12){ap=" AM";}
	else if(nhour==12){ap=" PM";}
	else if(nhour>12){ap=" PM";nhour-=12;}
	
	if(nmin<=9) nmin="0"+nmin;
	
	document.getElementById('clockbox').innerHTML= tmonth[nmonth]+"- 2022 "+ndate+" "+nhour+":"+nmin+ap+"";
	}
	
	window.onload=function(){
	GetClock();
	setInterval(GetClock,1000);
	}