import { mediaplayer } from "./mediaplayer.js"
var duration = 0
var progressStep = 0
const videoTracker = document.getElementsByClassName("videoTracker")[0]
const videoTrackerWidth = videoTracker.clientWidth
const videoProgress = document.getElementsByClassName("videoProgress")[0]

export function tracker() {
	mediaplayer.onloadedmetadata = function() {
		duration = Math.floor(mediaplayer.duration) * 4
		videoTracker.setAttribute("max", duration)
		progressStep = videoTrackerWidth / duration
	}

	mediaplayer.ontimeupdate = function() {
		videoTracker.value++
		videoProgress.style.width = videoProgress.clientWidth + progressStep + "px"
		console.log(videoProgress.clientWidth)
	}

	videoTracker.addEventListener("input", function(event) {
		mediaplayer.currentTime = event.target.value / 4
	})
}
