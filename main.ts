let move = 0
let soundValue = 0
input.onButtonPressed(Button.A, function () {
    move = 200
    soundValue = 2000
    for (let index = 0; index < 4; index++) {
        while (soundValue <= 5000) {
            music.ringTone(soundValue)
            basic.pause(100)
            soundValue += move
        }
        while (soundValue >= 2000) {
            music.ringTone(soundValue)
            basic.pause(100)
            soundValue += move * -1
        }
    }
    basic.pause(1000)
    music.stopAllSounds()
})
