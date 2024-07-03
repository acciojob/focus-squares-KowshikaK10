//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
	const squares=document.querySelectorAll('.square');
	squares.forEach((square)=>{
		square.addEventListener('mouseover',(e)=>{
			squares.forEach((sq)=>{
				if(sq!=e.target){
					sq.style.backgroundColor = "#6F4E37"
				}
			})
		})
		square.addEventListener('mouseout',(e)=>{
			squares.forEach((sq)=>{
				if(sq!=e.target){
					sq.style.backgroundColor = "#E6E6FA"
				}
			})
		})
	})
});