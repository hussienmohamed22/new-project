let barsClick = document.querySelector(".bars");
let navLists = document.querySelector(".nav-lists");
let closeNav = document.querySelector(".close");
barsClick.onclick = ()=>{
	navLists.classList.add("nav-list-active");
	barsClick.style.opacity = "0";
}
closeNav.onclick = ()=>{
	navLists.classList.remove("nav-list-active");
	barsClick.style.opacity = "1";
}
let mainContent = document.querySelector(".main-content").children;
window.onload = () => {
	for(let x = 0; x < mainContent.length; x++) mainContent[x].classList.add("main-content-active");
}
let navTop = document.querySelector(".nav-top");
window.onscroll = () =>{
	if(document.documentElement.scrollTop >= "80"){
		navTop.classList.add("nav-top-active");
	}else{
		navTop.classList.remove("nav-top-active");
	}
}
/*news */
let allTitlesHead = document.querySelector(".all-titles h2");
let allTitlesSpan = document.querySelector(".all-titles span");
window.onscroll = () =>{
	if(document.documentElement.scrollTop >= "94"){
		allTitlesHead.classList.add("all-tiles-active");
		allTitlesSpan.classList.add("all-tiles-active");
	}else{
		allTitlesHead.classList.remove("all-tiles-active");
		allTitlesSpan.classList.remove("all-tiles-active");
	}
}