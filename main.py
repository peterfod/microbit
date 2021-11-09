def on_button_pressed_a():
    led.toggle(2, 3)
input.on_button_pressed(Button.A, on_button_pressed_a)

led.plot(0, 0)

def on_forever():
    pass
basic.forever(on_forever)
