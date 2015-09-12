function obtenerHora(){
		var strHour,strMinutes, strSeconds
		date= new Date();
		hour= date.getHours();
		minute= date.getMinutes();
		seconds= date.getSeconds();
		strHour= new String(hour);
		strMinutes= new String(minute);
		strSeconds= new String(seconds);
		if (strHour.length==1) {hour= "0"+ hour};
		if (strMinutes.length==1) {minute= "0"+ minute};
		if (strSeconds.length==1) {seconds= "0"+ seconds};

		document.getElementById("clock").value=hour+" : "+ minute+" : "+seconds;
		setTimeout("obtenerHora()",1000);
	}

function obtenerHeight(){
	var height=$( window ).height();
	$("body").css("height", height);
}

function setAlarm(alarm_hour,alarm_minute){
	var str_alarm_hour= new String(alarm_hour), str_alarm_minute=new String(alarm_minute);

	if (str_alarm_hour.length==1) {alarm_hour= "0"+ alarm_hour};
	if (str_alarm_minute.length==1) {alarm_minute= "0"+ alarm_minute};

	if ((hour==alarm_hour) && (minute==alarm_minute)) {
		
		var audio= new Audio();
		audio.src= "js/Gallo.mp3";
		audio.play();
	}
	else{
		setTimeout(function(){
			setAlarm(alarm_hour,alarm_minute);
		},1000);

	}
}

$(document).ready(function(){
	var hour,minute;
	obtenerHora();
	obtenerHeight();

	$(window).resize(function(){
	obtenerHeight();	
	});

	$("#alarm").click(function(){
		setAlarm($("#hour").val(),$("#minute").val());
	});
});

