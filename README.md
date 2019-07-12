## 我的Cordova app

这个应用是我用来学习cordova的（现在如此），主要涉及众多插件，现已涉及：

- cordova-plugin-file : **文件操作**
- cordova-plugin-camera : **相机操作**
- cordova-plugin-file-transfer : **文件操作**
- cordova-plugin-media : **媒体操作**
- cordova-plugin-battery-status : **电池操作**
- cordova-plugin-inappbrowser : **网页操作**

## 文件结构解释

- www
  - index   *首页*
  - logo.png   *图标*
  - src   *功能文件夹*
    - camera   *相机*
      - index
    - file   *文件*
      - index
    - storage   *存储*
      - index
    - media   *媒体*
      - index
    - battery   *电池*
      - index
    - browser   *网页*
      - index 

## 测试

build这个项目：

```bash
npm test
```

run这个项目：

```bash
npm start
```

## [License](License)

MIT License
