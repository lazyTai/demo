/* 
使用
import ScrollView from '../../src'
Vue.use(ScrollView) */
import Vue from 'vue/dist/vue.js'
import _ from 'underscore'
var ScrollView = {
    name: 't-scroll-view',
    render(h) {
        return h(this.tag,
            {
                'class': {
                    container: true
                },
                style: {
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    userSelect: 'none'
                },
                domProps: {
                },
                ref: 'container'
            },
            [
                h('div', {
                    'class': {
                        content: true
                    },
                    style: {
                        width: '100%',
                        height: '100%',
                        transform: `translate3d(0,${this.$data.animateValue.top}px,0)`,
                    },
                    domProps: {
                    },
                    ref: 'content'
                }, [this.$scopedSlots.default(this.value)])
            ])
    },
    data() {
        return {
            animateValue: { top: 0 },
            currentClientY: 0,
            scrollClientY: 0,
        }
    },
    props: {
        tag: {
            type: String,
            default: () => 'div'
        },
        top: {
            type: Number,
            default: 1
        }
    },
    watch: {
        // top() {
        //     console.log("watch:top", this.$props.top)
        //     this.$data.animateValue.top = this.$props.top
        // },
        scrollClientY() {
            console.log('change scrollClientY', this.$data.scrollClientY)
            this.$data.animateValue.top = this.$data.scrollClientY
        }
    },
    created() {
        this.$data.animateValue.top = this.$props.top
    },
    mounted() {
        this.dom_container = this.$refs['container']
        this.dom_content = this.$refs['content']
        /* 初始化滚动事件 */
        this.dom_container.addEventListener('mousedown', this.onmousedown)
        this.dom_container.addEventListener('mousemove', _.throttle(this.onmousemove, 300))
        this.dom_container.addEventListener('mousemove', (this.onmousemove))
        this.dom_container.addEventListener('mouseup', this.onmouseup)
        // debugger

    },
    methods: {
        onmousedown(e) {
            this.isStart = true;
            this.$data.currentClientY = e.clientY;
            // console.log("onmousedown", e)
        },
        onmousemove(e) {
            if (this.isStart) {
                this.$data.scrollClientY += e.clientY - this.$data.currentClientY;
                console.log("movetop", this.$data.scrollClientY)
                this.$data.currentClientY = e.clientY;
                // console.log('move')
            }
        },
        onmouseup(e) {
            this.isStart = false;
            this.$data.currentClientY = e.clientY;
            /* 判断下拉到上头了 */
            if (this.$data.scrollClientY > 0) {
                /* 撤回去，使用动画效果 */
                this.setToTop()
            }

        },
        setToTop() {
            var self = this;
            // console.log("newv", newv)
            var coords = { x: this.$data.scrollClientY } // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ x: 0 }, 500) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                    // box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                    // console.log('update', coords)
                    // this.$data.scrollClientY=
                    self.$data.scrollClientY = coords.x
                })
                .onComplete(function () {
                    self.$data.scrollClientY = 0
                })
                .start(); // Start the tween immediately.
        }
    },
    install(Vue, options) {
        Vue.component(ScrollView.name, ScrollView);


        /* 最开始初始化动画 */
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

    }
};

export default ScrollView