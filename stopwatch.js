let minTag=document.getElementById("min");
let secTag=document.getElementById("sec");
let mSecTag=document.getElementById("m-sec");

let startBtn=document.getElementById("start-btn");
let stopBtn=document.getElementById("stop-btn");
let resetBtn=document.getElementById("reset-btn");


let milliseconds=0;
let seconds=0;
let minutes=0;
let interval=null;

let flag=false;

function startTimer()
{
	milliseconds=milliseconds+10;
	mSecTag.innerText=milliseconds;
	if(milliseconds===1000)
	{
		seconds=seconds+1;
		secTag.innerText=addZero(seconds);
		milliseconds=0;
		if(seconds===60)
		{
			minutes=minutes+1;
			minTag.innerText=addZero(minutes);
			seconds=0;
		}
	}
}

startBtn.addEventListener('click',()=>
{
	if(!flag)
	{
		interval=setInterval(startTimer,10);
		flag=true;
	}
});

stopBtn.addEventListener('click',()=>
{
	clearInterval(interval);
});

resetBtn.addEventListener('click',()=>
{
	clearInterval(interval);
	minutes=0;
	seconds=0;
	milliseconds=0;
	flag=false;
	mSecTag.innerText="00";
	minTag.innerText="00";
	secTag.innerText="00";
});

function addZero(time)
{
	if(time<10)
	{
		return "0"+time
	}
	else
	{
		return time
	}
};











