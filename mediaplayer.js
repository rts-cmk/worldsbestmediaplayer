import togglePlay from "./togglePlay.js"
import { volumeChange } from "./volumeChange.js"
import changeIcon from "/changeIcon.js"
import { tracker } from "./tracker.js"

export const volumeIcon = document.querySelector('[class*="icon-volume-"]')
export const mediaplayer = document.getElementsByClassName("mediaplayer")[0]
export const playpause = document.getElementsByClassName("playpause")[0]
const volumeControl = document.getElementsByClassName("volumeControl")[0]

playpause.addEventListener("click", togglePlay)
volumeControl.addEventListener("input", volumeChange)
volumeControl.addEventListener("change", volumeChange)
tracker()

if (!localStorage.getItem("RickVolume")) {
	mediaplayer.volume = 0.5
	localStorage.setItem("RickVolume", mediaplayer.volume)
} else {
	mediaplayer.volume = localStorage.getItem("RickVolume")
	volumeControl.value = localStorage.getItem("RickVolume")
	changeIcon(localStorage.getItem("RickVolume"))
}
