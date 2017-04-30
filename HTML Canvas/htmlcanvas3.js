function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(00, 00);
    ctx.lineTo(100, 20);
    ctx.lineTo(100, 120);
    ctx.fill();
  }
}