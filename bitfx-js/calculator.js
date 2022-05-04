$(document).ready(function(){
	var percent = document.getElementById("Ultra").value;
	

	var percent =  parseFloat(document.getElementById("Ultra").value); 
	var minMoney 	= [10];
	var maxMoney	= [100000];
	$("#money").val(minMoney[0]);
	console.log($("#money").val(minMoney[0]));
	
	//Calculator
	function calc(){
		var money = parseFloat($("#money").val());
		switch (percent) {
		    case 0:
				if ( money >= 10 && money <= 400){

		        	var percentTotal = 104;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 104;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);

		        } if (money >= 401 && money <= 1300) {
					
					var percentTotal = 105;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 105;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
		        } if (money >= 1301 && money <= 2500) {
					
					var percentTotal = 106;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 106;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 2501 && money <= 5000) {
					
					var percentTotal = 108;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 108;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 5001 && money <= 10000) {
					
					var percentTotal = 112;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 112;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);	
					
				} if (money >= 10001 && money <= 25000) {
					
					var percentTotal = 120;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 120;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
				} if (money >= 25001 && money <= 100000) {
					
					var percentTotal = 135;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 135;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10) {
					$("#percentTotal").text("Min: $10");
					$("#profitTotal").text("Min: $10");
				}
		        break;
			case 1:
				if ( money >= 10 && money <= 400){

		        	var percentTotal = 125;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 125;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);

		        } if (money >= 401 && money <= 1300) {
					
					var percentTotal = 130;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 130;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
		        } if (money >= 1301 && money <= 2500) {
					
					var percentTotal = 140;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 140;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 2501 && money <= 5000) {
					
					var percentTotal = 150;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 150;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 5001 && money <= 10000) {
					
					var percentTotal = 180;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 180;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);	
					
				} if (money >= 10001 && money <= 25000) {
					
					var percentTotal = 230;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 230;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
				} if (money >= 25001 && money <= 100000) {
					
					var percentTotal = 330;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 330;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10) {
					$("#percentTotal").text("Min: $10");
					$("#profitTotal").text("Min: $10");
				}
		        break;
		    case 2:
		    	if ( money >= 10 && money <= 400){

		        	var percentTotal = 180;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 180;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);

		        } if (money >= 401 && money <= 1300) {
					
					var percentTotal = 200;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 200;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
		        } if (money >= 1301 && money <= 2500) {
					
					var percentTotal = 220;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 220;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 2501 && money <= 5000) {
					
					var percentTotal = 250;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 250;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 5001 && money <= 10000) {
					
					var percentTotal = 300;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 300;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);	
					
				} if (money >= 10001 && money <= 25000) {
					
					var percentTotal = 460;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 460;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
				} if (money >= 25001 && money <= 100000) {
					
					var percentTotal = 550;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 550;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10) {
					$("#percentTotal").text("Min: $10");
					$("#profitTotal").text("Min: $10");
				}
		        break;
		    case 3:
		    
			if ( money >= 10 && money <= 400){

		        	var percentTotal = 350;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 350;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);

		        } if (money >= 401 && money <= 1300) {
					
					var percentTotal = 360;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 360;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
		        } if (money >= 1301 && money <= 2500) {
					
					var percentTotal = 380;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 380;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 2501 && money <= 5000) {
					
					var percentTotal = 480;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 480;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
				} if (money >= 5001 && money <= 10000) {
					
					var percentTotal = 600;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 600;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);	
					
				} if (money >= 10001 && money <= 25000) {
					
					var percentTotal = 900;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 900;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
				} if (money >= 25001 && money <= 100000) {
					
					var percentTotal = 1100;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 1100;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);		
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10) {
					$("#percentTotal").text("Min: $10");
					$("#profitTotal").text("Min: $10");
				}
		        break;
		    case 4:
				if ( money >= 10 && money <= 2500){

		        	var percentTotal = 1200;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 1200;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);

		        } if (money >= 2501 && money <= 25000) {
					
					var percentTotal = 2100;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 2100;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
		        } if (money >= 25001 && money <= 100000) {
					
					var percentTotal = 2500;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 2500;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
						
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10) {
					$("#percentTotal").text("Min: $10");
					$("#profitTotal").text("Min: $10");
				}
		        break;
		    case 5:
		    	if ( money >= 10 && money <= 2500){

		        	var percentTotal = 2500;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 2500;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);

		        } if (money >= 2501 && money <= 25000) {
					
					var percentTotal = 3400;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 3400;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
		        } if (money >= 25001 && money <= 100000) {
					
					var percentTotal = 4100;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 4100;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
						
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10) {
					$("#percentTotal").text("Min: $10");
					$("#profitTotal").text("Min: $10");
				}
		        break;
		    case 6:
			if ( money >= 10000 && money <= 100000){

		        	var percentTotal = 1000;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 1000;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10000) {
					$("#percentTotal").text("Min: $10000");
					$("#profitTotal").text("Min: $10000");
				}
		        break;
		        
		        
		    case 7:
			if ( money >= 10000 && money <= 100000){

		        	var percentTotal = 2000;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 2000;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10000) {
					$("#percentTotal").text("Min: $10000");
					$("#profitTotal").text("Min: $10000");
				}
		        break;
		        
		    case 8:
			if ( money >= 10000 && money <= 100000){

		        	var percentTotal = 3500;
					var percentTotal = percentTotal.toFixed(0);
					var profitTotal = money / 100 * 3500;
					var profitTotal = profitTotal.toFixed(2);

					$("#percentTotal").text(percentTotal);
					$("#profitTotal").text(profitTotal);
					
					
				//} else if(isNaN(money) == true) {
				} if (money < 10000) {
					$("#percentTotal").text("Min: $10000");
					$("#profitTotal").text("Min: $10000");
				}
		        break;    
		        
		        

		}
	}
	if($("#money").length){
		calc();
	}
	$("#money").keyup(function(){
		calc();
	});

	$("#Ultra").on('change', function() {
		percent = parseFloat(this.value);
		calc();
	})
});