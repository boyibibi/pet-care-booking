# 暖爪 Pet Spa

一个可上线的宠物洗护店预约项目骨架，基于 Next.js、Supabase 和 Vercel。

## 功能

- 门店首页：服务、价格、流程、评价、联系方式
- 在线预约：表单提交到 `/api/bookings`
- 数据库存储：预约写入 Supabase PostgreSQL
- 管理后台：`/admin` 查看最近预约，使用 Basic Auth 简单保护

## 本地启动

1. 安装依赖：

```bash
npm install
```

2. 复制环境变量：

```bash
cp .env.example .env.local
```

3. 在 Supabase 创建项目，把 `supabase/schema.sql` 放到 SQL Editor 执行。

4. 填写 `.env.local`：

```bash
NEXT_PUBLIC_SUPABASE_URL=你的 Supabase Project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的 Supabase anon key
SUPABASE_SERVICE_ROLE_KEY=你的 Supabase service role key
ADMIN_PASSWORD=后台访问密码
```

5. 启动：

```bash
npm run dev
```

访问：

- 首页：http://localhost:3000
- 后台：http://localhost:3000/admin

后台登录时，用户名可以随便填，密码使用 `ADMIN_PASSWORD`。

## 上线到 Vercel

1. 把项目推到 GitHub。
2. 在 Vercel 导入该仓库。
3. 在 Vercel Project Settings 中添加同样的环境变量。
4. 部署完成后访问 Vercel 分配的域名。
5. 需要正式域名时，在 Vercel 绑定自有域名并配置 DNS。

## 安全注意

- `SUPABASE_SERVICE_ROLE_KEY` 只能放在服务端环境变量里，不能写进前端代码。
- 当前后台是最小可用的 Basic Auth，适合第一版。正式运营建议升级为 Supabase Auth 登录。
- 预约表单已经做基础校验，后续可加入验证码、频率限制和短信通知。

## 后续可扩展

- 后台修改预约状态
- 服务项目从数据库读取
- 微信/短信/飞书通知
- 图片上传和案例管理
- 会员档案和宠物护理记录
