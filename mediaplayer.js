import togglePlay from "./togglePlay"
import { volumeChange } from "./volumeChange"
import changeIcon from "/changeIcon.js"

export const volumeIcon = document.querySelector('[class*="icon-volume-"]')
export const mediaplayer = document.getElementsByClassName("mediaplayer")[0]
export const playpause = document.getElementsByClassName("playpause")[0]
const volumeControl = document.getElementsByClassName("volumeControl")[0]

playpause.addEventListener("click", togglePlay)
volumeControl.addEventListener("change", volumeChange)

if (!localStorage.getItem("RickVolume")) {
	mediaplayer.volume = 0.5
	localStorage.setItem("RickVolume", mediaplayer.volume)
} else {
	mediaplayer.volume = localStorage.getItem("RickVolume")
	volumeControl.value = localStorage.getItem("RickVolume")
	changeIcon(localStorage.getItem("RickVolume"))
}
