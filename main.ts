let dist = 0
basic.forever(function () {
    dist = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (dist <= 100) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
    basic.showNumber(dist)
})
