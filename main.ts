input.onButtonPressed(Button.A, function () {
    numero = 9
    for (let index = 0; index < 9; index++) {
        basic.pause(930)
        numero += -1
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    }
    music.playTone(622, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let numero = 0
numero = 9
basic.showNumber(numero)
basic.forever(function () {
    basic.showNumber(numero)
})
