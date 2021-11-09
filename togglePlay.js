import { mediaplayer, playpause } from "./mediaplayer";

function togglePlay(event) {
	if (mediaplayer.paused) {
		mediaplayer.play();
		playpause.querySelector('[class*="icon-"]').className = "icon-pause";
	} else {
		mediaplayer.pause();
		playpause.querySelector('[class*="icon-"]').className = "icon-play";
	}
}

export default togglePlay