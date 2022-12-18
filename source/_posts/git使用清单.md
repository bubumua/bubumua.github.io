---
title: git使用清单
author: Bubu
excerpt: 日常git命令使用清单
categories: 
- 笔记
- Git
tags:  
- git
---

<img src="/img/assets/avatar.jpg" alt="pic" />

# 常用操作

## 克隆仓库

git clone <remote_url>											克隆远程仓库，自带init效果

## 远程仓库相关

git remote -v																查看连接的所有远程仓库

git remote add <remote_name> <remote_url>	添加远程仓库

git remote rm <remote_name>								删除远程仓库

git remote rename <remote_current_name> <remote_new_name>重命名远程仓库

## 分支相关

git branch <branch_name>	创建分支

git checkout <branch_name>	切换分支

git checkout  -b <branch_name>	创建并切换分支

git branch -d <branch_name> 删除分支

git merge <branch_name> 将目标分支合并到当前分支

## 拉取代码

git pull <remote_name>  <remote_branch_name>:<local_branch_name>	拉取远程分支到本地分支，在pull后加上空格 `--force`就能强制拉取覆盖

git fetch <remote_name> 获取远程仓库更新

git fetch <remote_name> <remote_branch_name>:<new_branch_name> 将远程分支拉取到新建的本地分支

## 提交推送一条龙

git add (<file_name>|-A)

git commit -m <"your commit message">

git push <remote_name>/<remote_branch_name>

## 其它

git init					初始化本目录，使其可以执行git操作

git status				查看git状态，比如是否有提交待推送文件等等

# 一般工作流程

## “初始化”

先 `fork`仓库到自己名下。

本地磁盘上 `clone`自己远程仓库

在项目中添加他人远程仓库为 `upstream`

## PR

1. `git status`

   检查本地是否有未提交的修改。如果有，把本地的有效修改推送到自己的远程仓库。
2. `git fetch upstream`

   抓取上游仓库更新，到本地仓库。
3. `git checkout <branch>`

   切换到需要更新分支
4. `git merge upstream/<branch>`

   将上游仓库变动合并到本地分支及磁盘上
5. 编辑代码
6. 推送代码到自己的远程仓库后，请求合并

# 解决问题

## 解决vscode无法连接到GitHub的问题

git config --global --unset git.proxy
git config --global --unset https.proxy
git config --global --unset http.proxy

## 无法连接到GitHub

>   fatal: unable to connect to github.com:
>   github.com[0: 20.205.243.166]: errno=Unknown error

解决方法：

```
git config --global url.https://github.com/.insteadOf git://github.com/
```

## 生成公钥和密钥

ssh-keygen -t rsa -C "1069785399@qq.com"
