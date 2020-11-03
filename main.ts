basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.toggle(0, 0)
        basic.pause(100)
        led.toggle(1, 1)
        basic.pause(100)
        led.toggle(2, 2)
        basic.pause(100)
        led.toggle(3, 3)
        basic.pause(100)
        led.toggle(4, 4)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        led.toggle(4, 0)
        basic.pause(100)
        led.toggle(3, 1)
        basic.pause(100)
        led.toggle(2, 2)
        basic.pause(100)
        led.toggle(1, 3)
        basic.pause(100)
        led.toggle(0, 4)
    }
    for (let index = 0; index < 3; index++) {
    	
    }
})
