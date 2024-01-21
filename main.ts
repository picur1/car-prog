radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
        if (xValue > -5 && xValue < 5) {
            xValue = 0
        }
    } else {
        if (name == "y") {
            yValue = value
            if (yValue > -5 && yValue < 5) {
                yValue = 0
            }
        }
    }
})
let rightwheel = 0
let leftwheel = 0
let yValue = 0
let xValue = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P0)
basic.showIcon(IconNames.Triangle)
radio.setGroup(90)
xValue = 0
yValue = 0
basic.forever(function () {
    leftwheel = yValue + xValue
    rightwheel = yValue - xValue
    RingbitCar.freestyle(leftwheel, rightwheel)
})
