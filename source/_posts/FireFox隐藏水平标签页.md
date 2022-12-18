---
title: FireFox隐藏顶部的水平标签栏
author: Bubu
excerpt: 使用自定义的CSS隐藏原生标签栏
categories: 
- 随记
tag: 
- 自定义FireFox
- CSS
---

# FireFox隐藏顶部的水平标签栏

操作系统：Windows 11

FireFox版本：108.0.1

## 工具准备

有自定义FireFox浏览器需求的小伙伴可能听说过/使用过userChrome.css文件来自定义浏览器的外观。不过这种方法有一些弊端，比如每次都要找到特定文件在哪，还有每次编辑完后都要重启浏览器才能看到效果等。

那么使用StyloaiX就可以为我们方便地实时管理/调试样式文件。关于StyloaiX怎么用，请看[这里](https://icloudnative.io/posts/customize-firefox/#自定义用户脚本)。

## css样式文件编写

最后css文件成品：

```css
/* 隐藏顶部标签栏 应用于2022.12.18更新的FireFox108.0.1 */

/* 
 * 将原标签页设为透明，无点击事件
 * 避免按下alt键后会有个别标签页显现
 * #main-window[tabsintitlebar="true"]:not([extradragspace="true"])可有可无
*/
#main-window[tabsintitlebar="true"]:not([extradragspace="true"]) #TabsToolbar>.toolbar-items {
    opacity: 0;
    pointer-events: none;
}

/* 将标签页栏移除（除了三键：最小化、最大化/窗口化、关闭） */
#main-window:not([tabsintitlebar="true"]) #TabsToolbar {
    visibility: collapse !important;
}

/* 
 * 将标题栏高度留1px, 与我的“自动隐藏工具栏”联动
 * 如果没有联动需求，也可以直接设为0
 */
#titlebar {
    appearance: none !important;
    height: 1px;
}

/* 设置三键高度（通过设置其容器实现） */
#TabsToolbar>.titlebar-buttonbox-container {
    height: 40px;
}

/* 工具栏右侧空出三键距离 */
#nav-bar {
    margin-right: 140px;
}
```

### 直接移除顶部标签页栏

对于“隐藏标签栏”这个的需求，有个简单粗暴的办法就是直接移除整个顶部，即

```css
#TabsToolbar {
    visibility: collapse;
}
```

但这会带来一个问题：我们原本右上角的三个按钮不见了。对于有些人，这样或许更简洁；不过对于我，还是保留比较舒服一点。所以有了其他的几步工作。

## 其他说明

修改完之后，右上角三个按钮是没有背景色，这就意味着在白色或者黑色（取决于你的主题）背景下，难以看清`-`，`口`和`×`，可以通过设置`.titlebar-buttonbox-container`的背景解决这个问题。

