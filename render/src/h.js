import Vue from 'vue'
export default Vue.component('H', {
    render: function (createElement) {
        var self = this;
        // console.log(this.$scopedSlots)
        return createElement(
            'div',
            [
                'DIV',
                self.$scopedSlots.default({
                    text: "这是scopedSlots给你的"
                })]// 子组件中的阵列
        )
    },
    data() {
        return {
            title: "title"
        }
    },
    props: {
        level: {
            type: [Number, String],
            default: 1
        }
    },
})