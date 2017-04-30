function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

	ctx.beginPath();
    ctx.moveTo(0,0);
	ctx.strokeStyle="red";
	ctx.lineWidth=1;
    ctx.lineTo(60,60);
	ctx.stroke();
	ctx.save();


	// ctx.beginPath();
	ctx.strokeStyle="blue";
	ctx.lineWidth=2;
	ctx.lineTo(10,80);
	ctx.stroke();
	// ctx.save();


	// ctx.beginPath();
	// ctx.strokeStyle="yellow";
	// ctx.lineWidth=5;
	// ctx.lineTo(80,100);
	// ctx.stroke();
	// ctx.save();
  //
  //
	// ctx.beginPath();
	// ctx.strokeStyle="green";
	// ctx.lineWidth=3;
	// ctx.lineTo(5,120);
	// ctx.stroke();
	// ctx.save();
  //
  //
	// ctx.beginPath();
	// ctx.strokeStyle="orange";
	// ctx.lineWidth=7;
	// ctx.lineTo(80,140);
	// ctx.stroke();
	// ctx.save();

	// ctx.restore();
	// ctx.restore();
	// ctx.restore();
	// ctx.restore();
	// ctx.restore();
  }
}
