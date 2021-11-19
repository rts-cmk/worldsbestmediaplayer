import changeIcon from "/changeIcon.js";
import { mediaplayer } from "./mediaplayer.js";

export function volumeChange(event) {
	mediaplayer.volume = event.target.value;

	changeIcon(event.target.value);
	localStorage.setItem("RickVolume", event.target.value);
}
