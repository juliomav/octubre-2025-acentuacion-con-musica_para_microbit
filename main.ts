input.onButtonPressed(Button.A, function () {
    if (!(terminado)) {
        basic.clearScreen()
        basic.showString("CORRECTO")
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        terminado = true
    }
})
input.onButtonPressed(Button.AB, function () {
    if (terminado) {
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(terminado)) {
        basic.clearScreen()
        basic.showString("ERROR")
        basic.showIcon(IconNames.No)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        terminado = true
    }
})
let terminado = false
basic.showString("ELIGE A o B")
