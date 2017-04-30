    var ctx;
	var x=0;
	var y=0;
	function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext)
	  {		  
		ctx = canvas.getContext('2d');
		requestAnimationFrame(step);
       }
	  
    }
	
	function step()
	{
		ctx.clearRect(0,0,300,300);
		ctx.fillRect(x++, 25, 50, 50);
		ctx.fillRect(25, y++, 50, 50);
		if(x==300)
		{
			x=-50;
		}
		if(y==300)
		{
			y=-50;
		}
		requestAnimationFrame(step);
	}