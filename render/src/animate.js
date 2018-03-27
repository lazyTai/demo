export const TAnimate = {
    name: 't-animate',
    data() {
        return {
            animateValue: 0
        }
    },
    props: {
        to: {
            type: [String, Number],
            required: true
        }
    },
    render(h) {
        var self = this;
        return h('div', [
            self.$scopedSlots.default({
                animateValue: self.$data.animateValue
            })
        ])
    },
    watch: {
        to(newv, oldv) {
            var self = this;
            var coords = { x: _clone(oldv), y: 0 }; // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ x: _clone(newv), y: 200 }, 500) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                    // box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                    self.$data.animateValue = _clone(coords.x)
                })
                .start(); // Start the tween immediately.
        }
    },
    mounted() {
        // Setup the animation loop.
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        this.$data.animateValue = _clone(this.$props.to)
    },
    install(Vue, options = {}) {
        debugger
        Vue.component('t-animate', tAnimate)
    },
}

function _clone(value) {
    return JSON.parse(JSON.stringify(value));
}

