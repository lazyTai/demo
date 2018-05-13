import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch, message} from 'dva/router'
import {Upload} from 'antd'
import axios from 'axios'

class Base extends React.Component {
    constructor() {
        super();
        this.change_color = this.change_color.bind(this)
    }

    state = {token: "", fileUrl: ""}

    change_color() {
    }

    getToken() {
        return axios.get(`http://192.168.8.140:8888/DYApi/designs/file-upload`);
    }

    render() {
        var self = this;
        var width = 100
        var height = 100
        var uploadRrops = {
            accept: "image/*",
            name: "file",
            action: "https://upload-z2.qiniup.com",
            headers: {
                authorization: "authorization-text"
            },
            data: {
                token: this.state.token
            },
            beforeUpload(file,filelist) {
                //上传文件过滤
                if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif" || file.type == "image/jpg") {
                    return new Promise(resolve => {
                        self.getToken().then(res => {
                            var token = res.data.uploadToken
                            self.setState({
                                token
                            })
                            resolve({token});
                        });
                    });
                }else {
                    message.error("请上传图片类型文件")
                    return false
                }

            },
            onChange(info) {
                if (info.file.status !== "uploading") {
                    const imageDomain = "http://p7m9al9rr.bkt.clouddn.com"
                    console.log(`${imageDomain}/${info.file.response.hash}`)
                    console.log(info.file, info.fileList);
                    debugger
                    self.setState({
                        fileUrl: `${imageDomain}/${info.file.response.hash}`
                    })
                }
                if (info.file.status === "done") {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === "error") {
                    message.error(`${info.file.name} file upload failed.`);
                }
            }
        };
        return <div>
            base
            <div>
                <Upload {...uploadRrops}>
                    <button>upload</button>
                </Upload>
                show
                <img src={this.state.fileUrl}/>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(Base)

