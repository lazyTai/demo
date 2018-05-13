import Mock from 'mockjs'
export const obj = Mock.mock(
    {
        "id": 123,
        "title": "标准印花T恤",
        "shopId": 1,
        "shopName": "shopName",
        "categoryFilterId": 1,
        "categoryFilterName": "categoryFilterName",
        "nonpublic": false,
        "designImageId": 123,
        "designImage": {
            "id": 123,
            "designSourceImage": "http://iph.href.lu/400x400?text=定易",
            "width": "6000px",
            "height": "8000px",
            "fromIp": "123.12.3.3",
            "fileSize": "328kb",
            "hash": "fkj345jkh345kj543j53j4j",
            "designSmallImage": "http://iph.href.lu/400x400?text=定易",
            "designMediumImage": "http://iph.href.lu/400x400?text=定易",
            "designLargeImage": "http://iph.href.lu/400x400?text=定易",
            "designXLargeImage": "http://iph.href.lu/400x400?text=定易",
            "imageStorageId": 1
        },
        "designItems|4": [
            {
                "id|+1": 123,
                "productId|+1": 123,
                "productColorId|+1": 3,
                "categoryId": 8,
                "categoryName": "T恤",
                "activated": true,
                "price": 108.28,
                "currency_id": 1,
                "printTypeId": 1,
                "products": [
                    {
                        "id|+1": 123,
                        "productName": "标准印花T恤",
                        "printSpecs": [
                            {
                                "id|+1": 123,
                                "printTypeId|+1": 1,
                                "printTypeName": "正面",
                                "printWidth": "6000px",
                                "printHeight": "8000px",
                                "printMinWidth": "1500px",
                                "printMinHeight": "2000px",
                                "canvasWidth": "0.600",
                                "canvasHeight": "0.800",
                                "canvasOffsetX": "0.500",
                                "canvasOffsetY": "0.600",
                                "additionalCost": 0
                            }
                        ],
                        "printCustomizations": [
                            {
                                "id|+1": 126,
                                "designItemId": 123,
                                "productId|+1": 123,
                                "printTypeId|+1": 1,
                                "imagePositionX": "0.000",
                                "imagePositionY": "0.000",
                                "imageScaleX": "0.765",
                                "imageScaleY": "0.765",
                                "imageRepeatTypeId": 1,
                                "designImage": {
                                    "id": 128,
                                    "designSourceImage": "http://iph.href.lu/400x400?text=定易",
                                    "width": "6000px",
                                    "height": "8000px",
                                    "fromIp": "123.12.3.3",
                                    "fileSize": "328kb",
                                    "hash": "fkj345jkh345kj543j53j4j",
                                    "designSmallImage": "http://iph.href.lu/400x400?text=定易",
                                    "designMediumImage": "http://iph.href.lu/400x400?text=定易",
                                    "designLargeImage": "http://iph.href.lu/400x400?text=定易",
                                    "designXLargeImage": "http://iph.href.lu/400x400?text=定易",
                                    "source_image_sync": true,
                                    "xlarge_image_sync": true,
                                    "imageStorageId": 1
                                }
                            }
                        ],
                        "productColors": [
                            {
                                "productColorId|+1": 3,
                                "productColorName": "橙",
                                "rgbCode": "#ff3333",
                                "productImageId": 128,
                                "productImage": {
                                    "id": 128,
                                    "productSmallImage": "http://iph.href.lu/400x400?text=定易",
                                    "productMediumImage": "http://iph.href.lu/400x400?text=定易",
                                    "productLargeImage": "http://iph.href.lu/400x400?text=定易",
                                    "productXLargeImage": "http://iph.href.lu/400x400?text=定易",
                                    "imageStorageId": 1,
                                    "createUser": 123,
                                    "createTime": 12474985009,
                                    "updateUser": 123,
                                    "updateTime": 12474985009
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
)