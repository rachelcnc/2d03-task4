let counter1 = 0
input.onButtonPressed(Button.A, function () {
    counter1 = 0
    while (counter1 <= 4) {
        led.plot(counter1, 0)
        basic.pause(1000)
        basic.clearScreen()
        counter1 += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("2d03 Rachel Chan")
})
