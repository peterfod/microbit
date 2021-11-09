input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Pitchfork)
    basic.pause(5000)
})
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
