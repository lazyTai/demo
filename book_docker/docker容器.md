# docker容器
* 启动容器
    * 新建并启动
    * 启动已终止容器
* 守护态运行
* 终止容器
* 进入容器
    * attach 命令
    * nsenter 命令
* 导出和导入容器
* 删除容器
---
# 启动容器
启动容器有两种方式，
一种是基于镜像新建一个容器并启动，
另外一个是将在终止状态（stopped）的容器重新启动。
下面的命令则启动一个 bash 终端，允许用户进行交互。
```
root@iZj6ccz5qk5jv5b33n6fhnZ:~/lmt# docker run -it lazytai/node /bin/bash
root@0965fa613988:/# apt-get update

```
## 启动已终止容器
docker start 命令
# 守护态运行
更多的时候，需要让 Docker 容器在后台以守护态（Daemonized）形式运行。此时，可以通过添加 -d 参数来实现。
也就是tm的 后台运行 -d
# 进入容器
在使用 -d 参数时，容器启动后会进入后台。 某些时候需要进入容器进行操作，有很多种方法，
包括使用docker attach 命令或 nsenter 工具等。
## 4.2 nsenter 命令
nsenter 工具在 util-linux 包2.23版本后包含。 如果系统中 util-linux 包没有该命令，可以按照下面的方法从源码安装





