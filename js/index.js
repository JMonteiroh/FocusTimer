import Timer from "./timer.js";
import Controls from "./controls.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  buttonPause,
  buttonSet,
  buttonPlay,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js";

const controls = Controls({buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})


