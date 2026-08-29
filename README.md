# 知序 PWA

一个不需要账号和后端的个人学习、论文、阅读与健身日程。数据保存在浏览器 `localStorage`，Service Worker 提供离线访问。

## 启动

在项目目录运行任意静态文件服务器，例如：

```powershell
C:\Users\HUAWEI\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m http.server 4173
```

然后打开 <http://localhost:4173>。手机与电脑在同一局域网时，可把 `localhost` 换成电脑的局域网 IP。iPhone Safari 可通过“共享 → 添加到主屏幕”安装。

## 最常修改的地方

- `data.js`：固定课表、论文/阅读比例、每周训练目标、训练模板。
- `styles.css`：颜色、字号和响应式布局。
- `app.js`：页面、数据存储、自动排程和统计逻辑。
- `index.html`：应用外壳、导航与新增表单。

清除浏览器站点数据会删除本地记录，请在“统计”页定期导出 JSON 备份。

