let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
        basic.showString("" + (distancia))
        if (distancia < 6) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.showIcon(IconNames.Yes)
        }
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    maqueen.motorStop(maqueen.Motors.All)
})
