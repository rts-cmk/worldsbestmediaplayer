const mediaplayer = document.getElementsByClassName("mediaplayer")[0]
const playpause = document.getElementsByClassName("playpause")[0]

playpause.addEventListener("click", togglePlay)

function togglePlay(event) {
	if (mediaplayer.paused) {
		mediaplayer.play()
		playpause.querySelector('[class*="icon-"]').className = "icon-pause"
	} else {
		mediaplayer.pause()
		playpause.querySelector('[class*="icon-"]').className = "icon-play"
	}
}