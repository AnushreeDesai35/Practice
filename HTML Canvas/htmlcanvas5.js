    var ctx;
	var circles = [];
	var direction = [1,-1];
	function Circle(color){
		this.x = Math.random()*300;
		this.y = Math.random()*300;
		this.r = 20;
		this.color = 'rgb('+Math.round(Math.random())*255+','+Math.round(Math.random())*255+','+Math.round(Math.random())*255+')';
		this.dirx = direction[Math.round(Math.random())]; //to get different direction each time +1 or -1
		this.diry = direction[Math.round(Math.random())];
	}
	function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext)
	  {		  
		ctx = canvas.getContext('2d');
		for(var i=0;i<6;i++)
		{
			var circle = new Circle();
			circles.push(circle);
			console.log(circles[i].color);
		}
		requestAnimationFrame(step);
       }
	  
    }
	
	function step()
	{
		ctx.clearRect(0,0,300,300);
		for(var i=0;i<circles.length;i++)
		{
			ctx.beginPath();
			ctx.fillStyle=circles[i].color;
			circles[i].x = circles[i].x + circles[i].dirx;
			circles[i].y = circles[i].y + circles[i].diry;
			ctx.arc(circles[i].x,circles[i].y,circles[i].r,0,2*Math.PI);
			ctx.closePath();
			ctx.fill();
			//console.log(circles[0].x,circles[0].y);
			/*if(circles[i].x >= 320){
				circles[i].x = -20;
			}
			if(circles[i].y >= 320){
				circles[i].y = -20;
			}
			if(circles[i].x <= 0){
				circles[i].x = 320;
			}
			if(circles[i].y <= 0){
				circles[i].y = 320;
			}*/
			if(circles[i].x >= 280 || circles[i].x <= 20){
				circles[i].dirx = circles[i].dirx * -1;
			}
			if(circles[i].y >= 280 || circles[i].y <= 20){
				circles[i].diry = circles[i].diry * -1;
			}
		}
		
		/*ctx.clearRect(0,0,300,300);
		ctx.beginPath();
		ctx.arc(x1++,y1,20,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(x2,y2++,20,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		if(x1>=320)
		{
			x1=-20;
		}
		if(y2>=320)
		{
			y2=-20;
		}*/
		requestAnimationFrame(step);
	}