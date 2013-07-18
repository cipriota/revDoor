var b = 0;
var bNext;
var bPrev;
var bTimer = 0;
var buzzerCountVal = 0;
var buzzerCount = 0;
var buzzer = true;
var playBuzzer = false;

var b = { "state": 
	[ 
		{ "id": 0, "timer": 0},
		{ "id": 1, "timer": 0},
		{ "id": 2, "timer": 0}
	]
}

setInterval(function() { RunSystem(); }, 200);

function RunSystem() {
	var currentTime = bTimer = new Date().getTime();

	// state transitions
	switch (b) {
		case 0:
			if (playBuzzer) {
				bNext = 1;
			}
			break;
		case 1:
			break;
		case 2:
			break;
	}

	// state entry actions
	if (bNext!=b) {
		switch (bNext) {
			case 0:
				buzzerCountVal = 0;
				break;
			case 1:
				buzzerCountVal = 1;
				break;
			case 2:
				break;
		}
	}

	// state run actions

	

	// state exit actions
	if (bNext!=b) {
		switch (b) {
			case 0:
				break;
			case 1:
				buzzer = true;
				break;
			case 2:
				break;
		}
	}



	if (bNext != b) {
		bTimer = currentTime;
	}

}



