import Vue from 'vue'
export default Vue.component('H', {
    render: function (createElement) {
        console.log(this.$slots)
        return createElement(
            'h' + this.level,   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        level: {
            type: [Number, String],
            default: 1
        }
    }
})