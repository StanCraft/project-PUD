document.addEventListener("DOMContentLoaded", function() {
	var div = document.getElementById("div");
	div.classList.add("visible");
});

document.addEventListener("DOMContentLoaded", function() {
	new Splide("#carousel", {
	  perPage: getSlidesPerView(),
	  perMove: 1,
	  gap: 0,
	  pagination: false,
	  arrows: true,
	  rewind: true,
	  breakpoints: {
		1200: {
			perPage: 3,
			perMove: 1, 
		  },
		  992: {
			perPage: 2,
			perMove: 1,
		  },  
		  768: {
			perPage: 1, 
			perMove: 1, 
		  },
		}
}).mount();	  
});

window.addEventListener("resize", () => {
	const splide = document.querySelector('#carousel').splide;
	splide.options.perPage = getSlidesPerView();
	splide.refresh();
});

function getSlidesPerView() {
	const windowWidth = window.innerWidth;
  
	if (windowWidth >= 1200) {
	  return 4;
	} else if (windowWidth >= 992) {
	  return 3;
	} else if (windowWidth >= 768) {
	  return 2;
	} else {
	  return 1;
	}
}

function demo(){
    location.replace("demonstration.html");
}

function home(){
    location.replace("index.html");
}

function dan(){
    location.replace("dan.html");
}

function history(){
    location.replace("history.html");
}

function intro(){
	location.replace("home.html");
}

var video;

const onClick = function() {
	video = this.id;
	openVideo(video);
}

function playVideo() {
    var video = document.getElementById("heroVid");
	video.volume = 0.2;
    if (video.paused) {
      	video.play();
    } else {
      	video.pause();
    }
}

function toggleDiv() {
	var div = document.getElementById("heroVidCont");
	if (div.style.display === "none") {
	  	div.style.display = "block";
	}
}

document.getElementById('ogoshi').onclick = onClick;
document.getElementById('iponsuinage').onclick = onClick;
document.getElementById('osotogari').onclick = onClick;
document.getElementById('ochigari').onclick = onClick;
document.getElementById('kochigari').onclick = onClick;
document.getElementById('koshiguruma').onclick = onClick;
document.getElementById('taiotoshi').onclick = onClick;
document.getElementById('uchimata').onclick = onClick;
document.getElementById('podsechka').onclick = onClick;
document.getElementById('haraigoshi').onclick = onClick;
document.getElementById('kataguruma').onclick = onClick;
document.getElementById('uranage').onclick = onClick;
document.getElementById('taiotoshikluch').onclick = onClick;
  

function openVideo(id){
	console.log(id);
	switch (id){
		case 'ogoshi':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=12&end=16&mute=1&autoplay=1", "__blank");
		break;
		case 'iponsuinage':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=3&end=7&mute=1&autoplay=1", "__blank");
		break;
		case 'osotogari':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=69&end=73&mute=1&autoplay=1", "__blank");
		break;
		case 'ochigari':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=7&end=11&mute=1&autoplay=1", "__blank");
		break;
		case 'kochigari':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=32&end=42&mute=1&autoplay=1", "__blank");
		break;
		case 'koshiguruma':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=62&end=66&mute=1&autoplay=1", "__blank");
		break;
		case 'taiotoshi':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=22&end=26&mute=1&autoplay=1", "__blank");
		break;
		case 'uchimata':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=96&end=101&mute=1&autoplay=1", "__blank");
		break;
		case 'podsechka':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=26&end=29&mute=1&autoplay=1", "__blank");
		break;
		case 'haraigoshi':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=89&end=93&mute=1&autoplay=1", "__blank");
		break;
		case 'kataguruma':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=154&end=159&mute=1&autoplay=1", "__blank");
		break;
		case 'uranage':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=129&end=134&mute=1&autoplay=1", "__blank");
		break;
		case 'taiotoshikluch':
			window.open("https://www.youtube.com/embed/j1NR52q178I?start=219&end=226&mute=1&autoplay=1", "__blank");
		break;
		default: 
			alert("No such video!");
		break;
	}
}






