export const TAnimate = {
    name: 't-animate',
    data() {
        return {
            animateValue: null
        }
    },
    props: {
        to: {
            type: [String, Number, Object],
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
        to: {
            handler(newv) {
                var self = this;
                // console.log("newv", newv)
                var coords = _clone(self.$data.animateValue); // Start at (0, 0)
                var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                    .to(_clone(newv), 500) // Move to (300, 200) in 1 second.
                    .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                    .onUpdate(function () { // Called after tween.js updates 'coords'.
                        // Move 'box' to the position described by 'coords' with a CSS translation.
                        // box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                        // console.log('update', coords)
                        self.$data.animateValue = _clone(coords)
                    })
                    .onComplete(function () {
                        self.$data.animateValue = _clone(newv)
                    })
                    .start(); // Start the tween immediately.
            },
            deep: true
        }
    },
    updated() {
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
        Vue.component('t-animate', tAnimate)
    },
}

function _clone(value) {
    return JSON.parse(JSON.stringify(value));
}

