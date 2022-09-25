input.onButtonPressed(Button.A, function () {
    q += 1
    basic.showNumber(q)
})
input.onButtonPressed(Button.B, function () {
    if (v == q) {
        basic.showString("gagne")
    } else if (q < v) {
        basic.showString("v est plus grand que q")
    } else if (v < q) {
        basic.showString("v est plus petit que q")
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        v = randint(0, 10)
        basic.showNumber(v)
        q = 0
        basic.showNumber(q)
    }
})
let q = 0
let v = 0
v = randint(0, 10)
basic.showNumber(v)
q = 0
basic.showNumber(q)
