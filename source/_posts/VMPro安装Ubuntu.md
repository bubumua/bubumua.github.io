---
title: VM Pro快速安装Ubuntu虚拟机
author: Bubu
excerpt: 使用VM Pro安装Ubuntu虚拟机的记录
categories:
- 随记
tags:
- 虚拟机
- Ubuntu
---
# VM Pro快速安装Ubuntu虚拟机

**需要先下载好Ubuntu的 iso 光盘镜像文件**

## 新建虚拟机，选择自定义（后面可以选择处理器核心数等）

![img](https://pic1.zhimg.com/80/v2-d040956136f7fe200fcf3d3fa73effc0_720w.webp)

## 硬件兼容Workstation 12.x

![img](https://pic3.zhimg.com/80/v2-ea157e66409075b8270d875c36d9883a_720w.webp)

## **稍后安装操作系统**（避免自动配置，我们手动选择配置）

![img](https://pic4.zhimg.com/80/v2-673974b538c53e1c3fbb266b81b9bc77_720w.webp)

## 选择Linux操作系统，版本为Ubuntu 64位![img](https://pic4.zhimg.com/80/v2-977527339551b9652be72f8627fb67fb_720w.webp)

## 设定虚拟机名称，安装位置

![img](https://pic2.zhimg.com/80/v2-4e90a74d537a44302952153c04655ce9_720w.webp)

## 选择处理器数量和内存

按需分配，一般2*2...？可能吧

![img](https://pic3.zhimg.com/80/v2-edaedc7805b2d92346b294cf8a8eb2e6_720w.webp)

![img](https://pic3.zhimg.com/80/v2-2946e00181ae1da7004ea98738033972_720w.webp)

## 选择网络类型NAT

![img](https://pic3.zhimg.com/80/v2-33952a1928cc82ab088feaeaf9e54a8e_720w.webp)

## 选择控制器和磁盘类型

一般按推荐来

![img](https://pic3.zhimg.com/80/v2-d25b459c8c23729917197976997f709a_720w.webp)

![img](https://pic1.zhimg.com/80/v2-ff472eac9c81e8c3e11dd30389e535ac_720w.webp)

## 创建新虚拟磁盘

![img](https://pic2.zhimg.com/80/v2-dccf006a35020214662ca5ab453cb289_720w.webp)

## 指定磁盘大小，存储为单个文件

按需分配

![img](https://pic2.zhimg.com/80/v2-c6cb35fab44ad390ec52d5a57701125d_720w.webp)

## 完成，自定义硬件

![img](https://pic1.zhimg.com/80/v2-32aea1aff7225f796cdde1efe0f63adc_720w.webp)

自定义硬件也可以在 VM里设置，都行。

主要就是设定网络类型NAT、以及在CD/DVD（SATA）中指定ISO光盘镜像文件

![img](https://pic2.zhimg.com/80/v2-1ee9c90d87fb79f8ad2bf1c4136ade31_720w.webp)

## 然后开启虚拟机，开始安装Ubuntu

界面可能会有些小，但不要紧，安装程序的窗口都是可以拖动的，点不到的按钮就把窗口往左（或右）拖一下，后面我们安装VM-tools可以解决这个问题。

![img](https://pic4.zhimg.com/80/v2-3449cbffa11915f810dc435f29095bd3_720w.webp)

## 选择语言、键盘为English（US）

不建议选中文，毕竟你也不想敲中英文混杂的命令吧

比如 `cd ~/桌面`

![img](https://pic3.zhimg.com/80/v2-0d48a40b9105ce1d87cf0aad19585c9a_720w.webp)

## 选择安装方式

**正常安装**。系统自带一些软件，我们不用的可以卸载掉。

**最小安装**。只安装系统要用到的基本工具。

**为图形或无线硬件以及其他的媒体格式安装第三方软件**我以往都是勾选的

后面都有文字解释，按需选择。

## 磁盘分区

选择最后一个“something else”（其他选项）

![img](https://pic4.zhimg.com/80/v2-b3e0ae4bfdb725eebe40f1e66478d053_720w.webp)

### 启动分区boot

通常启动分区给256M就行。

> boot包含了操作系统的内核和在启动系统过程中所要用到的文件，我们要给他单独分出来。要是不分当我们磁盘文件写满了磁盘空间不足时或者根分区出现问题了，我们的系统就没法启动，所以我们给他单独分出来。

![img](https://pic1.zhimg.com/80/v2-a22096a2a8d1d74f0d449776b607be40_720w.webp)

### 交换分区swap

按需选择吧。宿主机内存为16G的话，swap分区大小一般等于[虚拟机的内存大小](#选择处理器数量和内存)。

> swap分区，在我们windows中就是虚拟内存，在liunx中如果没有swap分区，系统内存用完后，系统他会杀死一部分程序，这个在我们使用中是非常可怕的，你正在用电脑，电脑内存满了，你的程序莫名其妙被关闭了，这是绝对不能允许的，所以我们必须分一个swap分区。还有一点swap分区的大小，一般我们电脑的内存小于等于4G时，swap我们给他是电脑内存的1.5-2倍；大于4G时，电脑内存多少swap就给多少。比如我的电脑内存为4G，那么swap我们就给6G=6144M-8G=8192；我的电脑内存为8G,16G...我们的swap就给8G,16G...跟我们电脑内存一样大就可以了。

在 ==**Use as**== 中选择 ==**swap area**==

![img](https://pic1.zhimg.com/80/v2-387b3f21014243f4e8549bc31db19704_720w.webp)

### 根分区/

> 根分区就是系统根目录所在的分区，一般根目录下面只有目录，不要直接有文件。Linux只有一个根目录，就是“/”，其它目录都是它的子目录。这里把剩下的磁盘空间都给“/”就可以了。
>
> 这里说一下"/home"  用户的home目录所在地，这个分区的大小取决于有多少用户。如果是多用户共同使用一台电脑的话，这个分区是完全有必要的，额外分割出/home有个最大的好处，当你重新安装系统时，你不需要特别去备份你的个人文件，只要在安装时，选择不要格式化这个分区，重新挂载为/home就不会丢失你的数据。因为我们是虚拟机，这台虚拟机是我们自己使用的，所以/home没有分出来，如果有需要可以自己分一个/home

![img](https://pic3.zhimg.com/80/v2-c9d0aa7ee59de37fc6ccf96bdc4165da_720w.webp)

## 选择位置，设置用户名等

![img](https://pic4.zhimg.com/80/v2-a0c4ab97f3be1bdaa2d80af419bd2e8f_720w.webp)

![img](https://pic1.zhimg.com/80/v2-879b20039ce6f41c635bdfacdf00f4cc_720w.webp)

## 等待安装完成

![img](https://pic4.zhimg.com/80/v2-9c793e9de6e93e407a1e23ffb34a9ce3_720w.webp)

等的时间不算短，可以去干点别的事情。

# 装完之后...

## 安装VMware Tools

装完了第一件事，安装VMware Tools。

vm-tools可以**调节视窗大小**，实现宿主机与虚拟机**共用粘贴板**等很有用的功能。

```
sudo apt-get install open-vm-tools
```

> 以往都是“虚拟机”->"安装VMware Tools"得到一个压缩包，然后解压出vmware-tools-distrib文件夹，在这个文件夹内执行 `sudo ./vmware-install.pl`这个命令，但现在都通过包的形式来安装了。

## 设置共享文件夹

想实现宿主机与虚拟机的文件共通？看这里：

![img](https://pic4.zhimg.com/80/v2-a2cb6235b43943b6164cf344b1dc67e7_720w.webp)

共享的文件（夹）在/mnt/hgfs

## 设置服务器镜像源

> Ubuntu 中 大部分 的软件 安装/更新 都是利用 **apt** 命令，从 ubuntu 的服务器 直接安装的
>
> Ubuntu 官方的服务器在国外，为了提高软件 安装/更新速度，ubuntu 提供了 选择最佳服务器 的功能，可以帮助我们方便的找到一个速度最快的 镜像服务器！
>
> 所谓 镜像服务器，就是 所有服务器的内容是相同的（镜像），但是根据所在位置不同，速度不同，通常国内服务器速度会更快一些！

## 参考

https://zhuanlan.zhihu.com/p/38797088

https://blog.csdn.net/weixin_41805734/article/details/120698714
