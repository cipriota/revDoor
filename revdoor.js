// input vars
var button = false;

// outputs vars
var buzzer = true;

// system vars
var playBuzzer = false;
var newCard = false;
var carValue = "";
var buzzerCountVal = 0;
var buzzerCount = 3;
var buzzerTime = 3000;

// program vars
var b ={
	"state": 0,
	"nextState": 0, 
	"data":[ 
		{ "timer": 0},
		{ "timer": 0},
		{ "timer": 0}
	]
}

var net = require('net');
var client = net.connect({port: 8124},
	function() {
		console.log('connected');
});

client.on('data', function(data) {
	playBuzzer = true;

});

setInterval(function() { RunSystem(); }, 200);

function RunSystem() {
	var currentTime = bTimer = new Date().getTime();

	// state transitions
	switch (b.state) {
		case 0:
			if (playBuzzer) {
				b.nextState = 1;
			}
			break;
		case 1:
			if (buzzerCountVal >= buzzerCount) {
				b.nextState = 0;
			} else if ((currentTime-b.data[b.state].timer) > buzzerTime) {
				b.nextState = 2;
			}
			break;
		case 2:
			if ((currentTime-b.data[b.state].timer) > 200) {	
				b.nextState = 1;
			}
			break;
	}

	// state entry actions
	if (b.nextState != b.state) {
		switch (b.nextState) {
			case 0:
				buzzerCountVal = 0;
				break;
			case 1:
				buzzerCountVal++;
				break;
			case 2:
				break;
		}
	}

	// state run actions
	switch (b.state) {
		case 0:
			buzzerCountVal = 0;
			break;
		case 1:
			buzzer = true;
			break;
		case 2:
			break;
	}
	

	// state exit actions
	if (b.nextState != b.state) {
		switch (b.state) {
			case 0:
				playBuzzer = false;
				break;
			case 1:
				buzzer = false;
				break;
			case 2:
				break;
		}
	}



	if (b.nextState != b.state) {
		b.data[b.nextState].timer = currentTime;
		console.log(b);
		b.state = b.nextState;
	}

}



