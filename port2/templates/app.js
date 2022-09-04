gsap.registerPlugin(ScrollTrigger);

//Mousepointer
let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove',cursor);
function cursor(e){
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}

//Chart.js

const cht = document.getElementById('myChart').getContext('2d');
const labels = [
	'HTML',
	'CSS',
	'JAVASCRIPT	',
	'PYTHON',
	'JAVA',
	'C',
	'Ps/Lr',
	'PREMIERE PRO'
];

const data = {
		labels,
		datasets: [{
			data: [80,60,40,90,90,70,70,70],
			label:"Skill Percentage",
			fill:true,
			backgroundColor: '#d8d4bf',
			barThickness: 30,
			}],
};

const config = {
	type:'bar',
	data:data,
	options: {
		responsive:true,
		font: {
			family: 'Lato'
			}
	}
};

const myChart = new Chart(cht, config);

//GSAP
ScrollTrigger.defaults({ scroller: ".container" });
gsap.to(
    ".name", 
    {
        y:120,duration:2,opacity:1
    }
);
gsap.to(
    ".first p", 
    {
        y:-120,duration:2,opacity:1
    }
);
gsap.to(
    ".container-second",
    {
        scrollTrigger: {
            trigger:".about",
            
        },
        x:-70,duration:2,opacity:1,
    }
);
gsap.to(
    ".third",
    {
        scrollTrigger: {
            trigger:".chart",
            
        },
        duration:2,opacity:1,
    }
);
