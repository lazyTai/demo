# Image镜像

* 介绍
    * 父镜像
    * 基础镜像
    * 镜像ID
* 获列出本地镜像取镜像
* 创建镜像
    * 修改已有镜像
    * 利用 Dockerfile 来创建镜像
    * 从本地文件系统导入
    * 上传镜像
* 存出和载入镜像
* 存出镜像
* 载入镜像
* 移除本地镜像
* 镜像的实现原理
---
# 介绍

![mark](http://p7whtc26y.bkt.clouddn.com/blog/180513/CK6mEi4G0m.png?imageslim)
在 Docker 的术语里，一个只读层被称为镜像，一个镜像是永久不会变的。
![mark](http://p7whtc26y.bkt.clouddn.com/blog/180513/Bm3I3mA6Lg.png?imageslim)
所有的变更都发生顶层的可写层，而下层的原始的只读镜像文件并未变化
## 父镜像
![mark](http://p7whtc26y.bkt.clouddn.com/blog/180513/CHiFkE6jb8.png?imageslim)
每一个镜像都可能依赖于由一个或多个下层的组成的另一个镜像。我们有时说，下层那个 镜像是上层镜像的父镜像。
## 基础镜像
一个没有任何父镜像的镜像，谓之基础镜像。也就是最下面那个兄弟
## 镜像ID
所有镜像都是通过一个 64 位十六进制字符串 （内部是一个 256 bit 的值）来标识的。 为简化使用，前 12 个字符可以组成一个短ID，可以在命令行中使用。短ID还是有一定的 碰撞机率，所以服务器总是返回长ID。
# 获列出本地镜像取镜像
可以使用 ```docker pull``` 命令来从仓库获取所需要的镜像。
下面的例子将从 Docker Hub 仓库下载一个 Ubuntu 12.04 操作系统的镜像。
```
root@iZj6ccz5qk5jv5b33n6fhnZ:~# docker pull ubuntu:12.04
12.04: Pulling from library/ubuntu
d8868e50ac4c: Pull complete
83251ac64627: Pull complete
589bba2f1b36: Pull complete
d62ecaceda39: Pull complete
6d93b41cfc6b: Pull complete
Digest: sha256:18305429afa14ea462f810146ba44d4363ae76e4c8dfc38288cf73aa07485005
Status: Downloaded newer image for ubuntu:12.04

```
Digest就是 镜像ID
## 列出本地镜像
使用 ```docker images``` 显示本地已有的镜像。
```
root@iZj6ccz5qk5jv5b33n6fhnZ:~# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ghost               0.11-alpine         840279d7ae80        8 days ago          174MB
hello-world         latest              e38bc07ac18e        4 weeks ago         1.85kB
ubuntu              12.04               5b117edd0b76        13 months ago       104MB
training/webapp     latest              6fae60ef3446        2 years ago         349MB
```
在列出信息中，可以看到几个字段信息
* 来自于哪个仓库，比如 ubuntu
* 镜像的标记，比如 14.04
* 它的 ID 号（唯一）
* 创建时间
* 镜像大小
其中镜像的 ID 唯一标识了镜像
# 创建镜像
创建镜像有很多方法，用户可以从 Docker Hub 获取已有镜像并更新，也可以利用本地文件系统创建一个
## 修改已有镜像
先使用下载的镜像启动容器。
注意：记住容器的 ID，稍后还会用到。
在容器中添加 json 和 gem 两个应用。
当结束后，我们使用 exit 来退出，现在我们的容器已经被我们改变了，
使用 ``` docker commit``` 命令来提交更新后的副本。
其中，-m 来指定提交的说明信息，跟我们使用的版本控制工具一样；
-a 可以指定更新的用户信息；之后是用来创建镜像的容器的 ID；
最后指定目标镜像的仓库名和 tag 信息。
创建成功后会返回这个镜像的 ID 信息。
使用 docker images 来查看新创建的镜像。
之后，可以使用新的镜像来启动容器

```

root@iZj6ccz5qk5jv5b33n6fhnZ:~# docker run -t -i training/sinatra /bin/bash
root@0b2616b0e5a8:/# gem install json
root@563523cc99fa:/# exit
exit
root@iZj6ccz5qk5jv5b33n6fhnZ:~# docker commit -m "add json into image " 897ed0ec8cef my-images:v1
sha256:7a9cfc4a88db791e2d5d1cc63642a74413b1ec6b17ddc3b046fb333843b3220f
root@iZj6ccz5qk5jv5b33n6fhnZ:~# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
my-images           v1                  7a9cfc4a88db        24 seconds ago      453MB


docker ps

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b4bbc46c306d        my-images:v1        "/bin/bash"         2 seconds ago       Up 2 seconds                            happy_joliot

```

##  利用 Dockerfile 来创建镜像
新建一个目录和一个 Dockerfile
Dockerfile 中每一条指令都创建镜像的一层，
Dockerfile 中每一条指令都创建镜像的一层，
编写完成 Dockerfile 后可以使用 docker build 来生成镜像。
* 注意一个镜像不能超过 127 层
此外，还可以利用 ADD 命令复制本地文件到镜像；
用 EXPOSE 命令来向外部开放端口；
用 CMD 命令来描述容器启动后运行的程序等。
现在可以利用新创建的镜像来启动一个容器。
```
root@iZj6ccz5qk5jv5b33n6fhnZ:~# mkdir  lmt
root@iZj6ccz5qk5jv5b33n6fhnZ:~# cd  lmt
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# touch Dockerfile
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# ls
Dockerfile
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# vi Dockerfile

```
![mark](http://p7whtc26y.bkt.clouddn.com/blog/180513/CLEIdDlIjm.png?imageslim)

~~~
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
lmt/node            v1                  2b1e755445b1        31 seconds ago      248MB
~~~
## 上传镜像
login first
在hub.docker.com注册账户
~~~
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: lazytai
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded

~~~
push之前要tag
~~~
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# docker tag lazytai/node  lazytai/node
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# docker push lazytai/node
~~~
记得YOUR_DOCKERHUB_NAME/firstimage
```YOUR_DOCKERHUB_NAME```
这个必须准确
```
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# docker pull lazytai/node

```

