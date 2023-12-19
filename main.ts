input.onButtonPressed(Button.A, function () {
    radio.sendString("Da")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Nu")
})
radio.setGroup(1)
