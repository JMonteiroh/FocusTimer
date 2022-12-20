import Timer from "./timer.js";
import Controls from "./controls.js";
import Sound from "./sounds.js";
import {
  buttonPause,
  buttonSet,
  buttonPlay,
  buttonSoundOff,
  buttonSoundOn,
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


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressButton()

});

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.pressButton()

});

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()

});

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
  sound.bgAudio.play()
});

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
  sound.bgAudio.pause()
});

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)

})
