import { volumeIcon } from "/mediaplayer.js"

function changeIcon(value) {
	if (value === "0") {
		volumeIcon.className = "icon-volume-off"
	}

	if (value >= "0.01" && value < "0.34") {
		volumeIcon.className = "icon-volume-low"
	}

	if (value >= "0.34" && value < "0.67") {
		volumeIcon.className = "icon-volume-middle"
	}

	if (value >= "0.67") {
		volumeIcon.className = "icon-volume-high"
	}
}

export default changeIcon
