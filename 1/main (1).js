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
let allTitlesHead = document.querySelectorAll(".all-titles h2");
let allTitlesSpan = document.querySelectorAll(".all-titles span");
window.onscroll = () =>{

        if(document.documentElement.scrollTop >= "94"){
            allTitlesHead[0].classList.add("all-tiles-active");
            allTitlesSpan[0].classList.add("all-tiles-active");
        }else{
            allTitlesHead[0].classList.remove("all-tiles-active");
            allTitlesSpan[0].classList.remove("all-tiles-active");
        }
        if(document.documentElement.scrollTop >= "180"){
            allTitlesHead[1].classList.add("all-tiles-active");
            allTitlesSpan[1].classList.add("all-tiles-active");
        }else{
            allTitlesHead[1].classList.remove("all-tiles-active");
            allTitlesSpan[1].classList.remove("all-tiles-active");
        }
        if(document.documentElement.scrollTop >= "360"){
            allTitlesHead[2].classList.add("all-tiles-active");
            allTitlesSpan[2].classList.add("all-tiles-active");
        }else{
            allTitlesHead[2].classList.remove("all-tiles-active");
            allTitlesSpan[2].classList.remove("all-tiles-active");
        }
       
        if(document.documentElement.scrollTop >= "620"){
            allTitlesHead[3].classList.add("all-tiles-active");
            allTitlesSpan[3].classList.add("all-tiles-active");
        }else{
            allTitlesHead[3].classList.remove("all-tiles-active");
            allTitlesSpan[3].classList.remove("all-tiles-active");
        }
        if(document.documentElement.scrollTop >= "1040"){
            allTitlesHead[4].classList.add("all-tiles-active");
            allTitlesSpan[4].classList.add("all-tiles-active");
        }else{
            allTitlesHead[4].classList.remove("all-tiles-active");
            allTitlesSpan[4].classList.remove("all-tiles-active");
        }
       
       
       
}
let signup = document.querySelector(".signup");
let signbtns = document.querySelectorAll(".sign-btn");
for(let x= 0; x < signbtns.length; x++){
    signbtns[x].onclick = () =>{
        signup.classList.add("close-sign-active");
        document.body.style.overflow = "hidden";
    }
}
let sognpclosing = document.querySelector(".close-signup");
sognpclosing.onclick = () => {signup.classList.remove("close-sign-active")
document.body.style.overflow = "auto";
};