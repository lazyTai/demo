import React from 'react'
import {normalize, schema, Array} from 'normalizr'

/**
 * react组件 loading
 * @author 刘明泰 <18819448261>
 * @example
 * <App />
 * @desc
 * 主要App component
 * */
class App extends React.Component {
    componentDidMount() {
        const wholeInfor = new schema.Entity("wholeInfor", {idAttribute: 'id'})
        const designItem = new schema.Entity("designItem", {idAttribute: 'id'})
        const product = new schema.Entity("product", undefined, {idAttribute: 'id'})
        const printSpec = new schema.Entity("printSpec", undefined, {idAttribute: 'id'})
        const printCustomization = new schema.Entity("printCustomization", {idAttribute: 'id'})
        const productColor = new schema.Entity("productColor", undefined, {
            idAttribute: (value) => {
                return value['productColorId']
            }
        })
        const designImage = new schema.Entity("designImage", {idAttribute: "id"})
        wholeInfor.define({
            designImage: designImage,
            designItems: [designItem]
        })
        designItem.define({
            products: [product]
        })
        product.define({
            printSpecs: [printSpec],
            printSpec: printSpec,
            printCustomizations: [printCustomization],
            productColors: [productColor]
        })
        printCustomization.define({
            designImage: designImage
        })

        var result = normalize(require('./data').obj, wholeInfor)
        debugger
    }

    render() {
        return (
            <div>
                1.this is how to use ~~~Schema~~~
            </div>
        )
    }

}

export default App