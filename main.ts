basic.forever(function () {
    led.plot(1, 0)
    led.plot(3, 0)
    basic.pause(500)
    led.plot(0, 2)
    led.plot(4, 2)
    basic.pause(500)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(2, 3)
    basic.pause(500)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.unplot(1, 3)
    basic.pause(500)
    led.unplot(4, 2)
    led.unplot(0, 2)
    basic.pause(500)
    led.unplot(3, 0)
    led.unplot(1, 0)
    basic.pause(500)
})
