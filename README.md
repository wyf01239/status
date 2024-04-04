# uptime

一个状态监控页 ([Here](https://status.wyf9.top))

由 [yb/uptime-status](https://github.com/yb/uptime-status) 经过一点点修改而来

## 部署

1. Fork 本存储库
2. 编辑 `public/config.js`:
   - `SiteName`: 要显示的网站名称
   - `ApiKeys`: 从 UptimeRobot 获取的 API Key，支持 Monitor-Specific API Keys 和 Read-Only API Key
   - `CountDays`: 要显示的日志天数，建议 60 或 90，显示效果比较好
   - `ShowLink`: 是否显示站点链接
   - `Navi`: 导航栏的菜单列表
3. 替换网站图标 `public/favicon.ico`
4. (可选) 编辑 `src/components/app.js L27` 的版权信息 **(请务必保留原作者信息)**

### 分支 1 - 云服务部署 (以 Cloudflare Pages 为例)

5. 注册登录 Cloudflare, 绑定域名 (不多叙述)
6. 转到 `Workers 和 Pages`

> **以下为原 README 内容**

# uptime-status

一个基于 UptimeRobot API 的在线状态面板

<img width="1152" alt="image" src="https://user-images.githubusercontent.com/25887822/178935137-6d23521d-5894-4fb8-922d-3575be4f7abc.png">

## 事先准备

- 您需要先到 [UptimeRobot](https://uptimerobot.com/ "UptimeRobot") 添加站点监控，并在 My Settings 页面获取 API Key
- 您需要拥有一个网站空间，常见的 Nginx / PHP 等空间即可，甚至是阿里云的 OSS 等纯静态空间也行

## 如何部署：

- 下载并解压缩：[uptime-status.zip](https://github.com/yb/uptime-status/releases/latest/download/uptime-status.zip "uptime-status.zip") 
- 修改 `config.js` 文件：
   - `SiteName`: 要显示的网站名称
   - `ApiKeys`: 从 UptimeRobot 获取的 API Key，支持 Monitor-Specific API Keys 和 Read-Only API Key
   - `CountDays`: 要显示的日志天数，建议 60 或 90，显示效果比较好
   - `ShowLink`: 是否显示站点链接
   - `Navi`: 导航栏的菜单列表
- 将所有文件上传到网站空间

⚠️ 如果没有修改代码的需求，您不需要 git clone 本项目，只需要下载 Release 的文件包即可。
