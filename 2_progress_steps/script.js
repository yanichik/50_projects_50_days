const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');


let activePosition = 1;
// console.log(activePosition, prev, circles);
next.addEventListener('click', ()=>{
	activePosition ++;
	if (activePosition >= circles.length) {
		activePosition = circles.length;
	}
	update();
	// console.log(activePosition, prev, circles);
})

prev.addEventListener('click', ()=>{
	activePosition --;
	if (activePosition < 1){
		activePosition = 1;
	}

	update();
	// console.log(activePosition, prev, circles);
})

function update(){
	// update the progress line & update the circled progress
	progress.style.width = ( (activePosition-1) / (circles.length - 1) ) * 100 + '%';
	// console.log(progress.width);
	circles.forEach( (circle, ind) => {
		if(activePosition > ind) {
			circle.classList.add('active');
			if(activePosition > 1) prev.disabled = false;
			if(activePosition === 1) prev.disabled = true;
			if(activePosition === circles.length) next.disabled = true;
			if(activePosition < circles.length) next.disabled = false;
		}
		else {
			circle.classList.remove('active');
		}
	})
}