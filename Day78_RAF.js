// var i=0,j=0,a=0;
// function bouncingBall() {
// if(parseInt(i)<150)
// {
	// i++;
	// j = (i*i)/(4*10);
	// $(".ball").offset({left:i,top:j});
	// console.log('i : '+i);
	// console.log('j : '+j);
	// a = i;
// }
// if(parseInt(i)>=150 && parseInt(i)<225)
// {
	// i++;
	// a--;
	// j = (a*a)/(4*10);
	// $(".ball").offset({left:i,top:j});
	// console.log('i : '+i);
	// console.log('j : '+j);
// }
// if(parseInt(i)>=225 && parseInt(i)<300)
// {
	// i++;
	// a++;
	// j = (a*a)/(4*10);
	// $(".ball").offset({left:i,top:j});
	// console.log('i : '+i);
	// console.log('j : '+j);
// }
// if(parseInt(i)>=300 && parseInt(i)<=375)
// {
	// i++;
	// a--;
	// j = (a*a)/(4*10);
	// $(".ball").offset({left:i,top:j});
	// console.log('i : '+i);
	// console.log('j : '+j);
// }
// if(parseInt(i)>=375 && parseInt(i)<450)
// {
	// i++;
	// a++;
	// j = (a*a)/(4*10);
	// $(".ball").offset({left:i,top:j});
	// console.log('i : '+i);
	// console.log('j : '+j);
// }
// if(parseInt(i)>=450 && parseInt(i)<=500)
// {
	// i++;
	// a--;
	// j = (a*a)/(4*10);
	// $(".ball").offset({left:i,top:j});
	// console.log('i : '+i);
	// console.log('j : '+j);
// }
// if(parseInt(i)>=500 && parseInt(i)<550)
// {
	// i++;
	// a++;
	// j = (a*a)/(4*10);
	// $(".ball").offset({left:i,top:j});
	// console.log('i : '+i);
	// console.log('j : '+j);
// }
// requestAnimationFrame(bouncingBall);
// }
// requestAnimationFrame(bouncingBall);

var i=0,j=0,a=0;
function bouncingBall() {
if(parseInt(i)<100)
{
	i++;
	j = (i*i)/(4*7);
	$(".ball").offset({left:i,top:j});
	console.log('i : '+i);
	console.log('j : '+j);
	a = i;
}
if(parseInt(i)>=100 && parseInt(i)<200)
{
	i++;
	a--;
	j = (a*a)/(4*7);
	$(".ball").offset({left:i,top:j});
	console.log('i : '+i);
	console.log('j : '+j);
}
if(parseInt(i)>=200 && parseInt(i)<300)
{
	i++;
	a++;
	j = (a*a)/(4*7);
	$(".ball").offset({left:i,top:j});
	console.log('i : '+i);
	console.log('j : '+j);
}
if(parseInt(i)>=300 && parseInt(i)<=350)
{
	i++;
	a--;
	j = (a*a)/(4*7);
	$(".ball").offset({left:i,top:j});
	console.log('i : '+i);
	console.log('j : '+j);
}

requestAnimationFrame(bouncingBall);
}
requestAnimationFrame(bouncingBall);