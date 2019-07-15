## 我的Cordova app

这个应用是我用来学习cordova的（现在如此），主要涉及众多插件，现已涉及：

- cordova-plugin-file : **文件操作**
- cordova-plugin-camera : **相机操作**
- cordova-plugin-file-transfer : **文件操作**
- cordova-plugin-media : **媒体操作**
- cordova-plugin-battery-status : **电池操作**
- cordova-plugin-inappbrowser : **网页操作**
- cordova-plugin-device : **设备操作**
- cordova-plugin-qrscanner : **扫描操作**

## 文件结构解释

- www
  - index   *首页*
  - logo.png   *图标*
  - src   *功能文件夹*
    - camera   *相机*
    - file   *文件*
    - storage   *存储*
    - media   *媒体*
    - battery   *电池*
    - browser   *网页*
    - device   *设备*
    - scanner   *扫描*
    - beautiful   *特效*

## 测试

build这个项目：

```
npm test
// 等同于
cordova build android
```

run这个项目：

```
npm start
// 等同于
cordova run android
```

## 平台

**Android**

## [License](License)

**MIT License**
