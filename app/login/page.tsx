import Link from "next/link";

const loginPageStyles = `
  :root {
    --ink: #24312f;
    --muted: #64716e;
    --paper: #fbf8f0;
    --milk: #fffdf8;
    --sage-dark: #54725f;
    --clay: #c87452;
    --sun: #f2bd61;
    --line: rgba(36, 49, 47, 0.14);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: var(--ink);
    font-family: "Trebuchet MS", "Microsoft YaHei", "PingFang SC", sans-serif;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input {
    font: inherit;
  }

  .login-page {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 32px 18px;
    background:
      radial-gradient(circle at 18% 18%, rgba(242, 189, 97, 0.28), transparent 28%),
      linear-gradient(135deg, rgba(139, 168, 146, 0.16), rgba(255, 253, 248, 0.76) 42%, rgba(200, 116, 82, 0.14)),
      var(--paper);
  }

  .login-shell {
    width: min(1060px, 100%);
    min-height: 640px;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
    overflow: hidden;
    border: 2px solid var(--ink);
    border-radius: 8px;
    background: var(--milk);
    box-shadow: 14px 14px 0 rgba(36, 49, 47, 0.16);
  }

  .login-visual {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    color: var(--milk);
    background:
      linear-gradient(180deg, rgba(36, 49, 47, 0.1), rgba(36, 49, 47, 0.72)),
      url("https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85") center/cover;
  }

  .login-visual::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(36, 49, 47, 0.28) 1px, transparent 1px),
      linear-gradient(rgba(36, 49, 47, 0.18) 1px, transparent 1px);
    background-size: 34px 34px;
    pointer-events: none;
  }

  .login-brand,
  .login-copy,
  .login-metrics {
    position: relative;
    z-index: 1;
  }

  .login-brand {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    gap: 12px;
    font-weight: 900;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 42px;
    aspect-ratio: 1;
    border: 2px solid var(--ink);
    border-radius: 50%;
    background: var(--sun);
    box-shadow: 4px 4px 0 var(--ink);
    color: var(--ink);
    font-size: 21px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    padding: 7px 11px;
    border: 1px solid rgba(255, 253, 248, 0.36);
    border-radius: 999px;
    background: rgba(255, 253, 248, 0.16);
    color: var(--milk);
    font-size: 13px;
    font-weight: 800;
  }

  .login-copy {
    max-width: 520px;
  }

  .login-copy h1 {
    max-width: 8.8em;
    margin: 18px 0;
    color: var(--milk);
    font-family: Georgia, "Times New Roman", "SimSun", serif;
    font-size: clamp(48px, 7vw, 82px);
    line-height: 0.96;
    letter-spacing: 0;
    text-wrap: balance;
  }

  .login-copy p {
    max-width: 470px;
    margin: 0;
    color: rgba(255, 253, 248, 0.84);
    font-size: 18px;
  }

  .login-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border: 1px solid rgba(255, 253, 248, 0.28);
    background: rgba(36, 49, 47, 0.34);
    backdrop-filter: blur(10px);
  }

  .login-metrics div {
    padding: 16px;
  }

  .login-metrics div + div {
    border-left: 1px solid rgba(255, 253, 248, 0.28);
  }

  .login-metrics strong,
  .login-metrics span {
    display: block;
  }

  .login-metrics strong {
    font-size: 28px;
    line-height: 1;
  }

  .login-metrics span {
    margin-top: 5px;
    color: rgba(255, 253, 248, 0.74);
    font-size: 13px;
  }

  .login-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(28px, 5vw, 54px);
  }

  .login-card-head {
    margin-bottom: 28px;
  }

  .login-kicker {
    color: var(--clay);
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .login-card h2 {
    margin: 8px 0 10px;
    font-family: Georgia, "Times New Roman", "SimSun", serif;
    font-size: clamp(34px, 4vw, 48px);
    line-height: 1;
  }

  .login-card p {
    margin: 0;
    color: var(--muted);
  }

  .form,
  .login-form {
    display: grid;
    gap: 14px;
  }

  .field-label {
    color: var(--sage-dark);
    font-size: 14px;
    font-weight: 900;
  }

  input {
    width: 100%;
    min-height: 48px;
    padding: 12px 14px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #fffaf0;
    color: var(--ink);
    outline: none;
  }

  input:focus {
    border-color: var(--sage-dark);
    box-shadow: 0 0 0 4px rgba(139, 168, 146, 0.22);
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 18px;
    border: 1px solid var(--ink);
    border-radius: 8px;
    background: var(--ink);
    color: var(--milk);
    font-weight: 800;
    box-shadow: 5px 5px 0 rgba(36, 49, 47, 0.18);
    transition: transform 160ms ease, box-shadow 160ms ease;
    white-space: nowrap;
    cursor: pointer;
  }

  .button:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 rgba(36, 49, 47, 0.16);
  }

  .login-submit {
    width: 100%;
    margin-top: 4px;
  }

  .form-note {
    padding: 11px 13px;
    border-radius: 8px;
    background: rgba(139, 168, 146, 0.18);
    color: var(--sage-dark);
    font-weight: 800;
  }

  .form-note.error {
    background: rgba(200, 116, 82, 0.16);
    color: #a54f30;
  }

  .login-card-foot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 14px;
  }

  .login-card-foot a {
    color: var(--ink);
    font-weight: 900;
  }

  @media (max-width: 920px) {
    .login-shell {
      grid-template-columns: 1fr;
    }

    .login-visual {
      min-height: 430px;
    }
  }

  @media (max-width: 620px) {
    .login-page {
      padding: 18px 12px;
    }

    .login-shell {
      min-height: 0;
      box-shadow: 7px 7px 0 rgba(36, 49, 47, 0.16);
    }

    .login-visual {
      min-height: 380px;
      padding: 22px;
    }

    .login-copy h1 {
      font-size: clamp(42px, 14vw, 58px);
    }

    .login-metrics {
      grid-template-columns: 1fr;
    }

    .login-metrics div + div {
      border-top: 1px solid rgba(255, 253, 248, 0.28);
      border-left: 0;
    }
  }
`;

type LoginPageProps = {
  searchParams?: {
    error?: string;
    next?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const hasError = searchParams?.error === "1";
  const next = searchParams?.next?.startsWith("/admin") ? searchParams.next : "/admin";

  return (
    <main className="login-page">
      <style dangerouslySetInnerHTML={{ __html: loginPageStyles }} />
      <section className="login-shell" aria-label="管理员登录">
        <div className="login-visual">
          <Link className="login-brand" href="/" aria-label="返回暖爪 Pet Spa 首页">
            <span className="brand-mark" aria-hidden="true">
              爪
            </span>
            <span>暖爪 Pet Spa</span>
          </Link>
          <div className="login-copy">
            <span className="eyebrow">门店后台</span>
            <h1>今晚的预约，都在这里安静排好队。</h1>
            <p>管理洗护预约、客户备注和到店时间。后台入口只向店员开放，登录后 8 小时内保持会话。</p>
          </div>
          <div className="login-metrics" aria-label="今日概览">
            <div>
              <strong>100</strong>
              <span>最近预约</span>
            </div>
            <div>
              <strong>8h</strong>
              <span>登录有效</span>
            </div>
            <div>
              <strong>1v1</strong>
              <span>护理记录</span>
            </div>
          </div>
        </div>

        <div className="login-card">
          <div className="login-card-head">
            <span className="login-kicker">Admin access</span>
            <h2>管理员登录</h2>
            <p>输入门店管理员密码后进入预约管理。</p>
          </div>

          <form className="form login-form" action="/api/login" method="post">
            <input type="hidden" name="next" value={next} />
            <label className="field-label" htmlFor="password">
              管理员密码
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="请输入密码"
              autoComplete="current-password"
              required
            />
            {hasError ? <div className="form-note error">密码不正确，请再试一次。</div> : null}
            <button className="button login-submit" type="submit">
              进入后台
            </button>
          </form>

          <div className="login-card-foot">
            <Link href="/">返回首页</Link>
            <span>仅限门店内部使用</span>
          </div>
        </div>
      </section>
    </main>
  );
}
