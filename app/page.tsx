import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";

const services = [
  {
    icon: "泡",
    title: "基础洗护",
    description: "洁耳、剪指甲、清洁脚底、双遍沐浴、护毛素、烘干梳理，适合日常清洁与换季维护。",
    meta: "犬猫通用",
    price: "¥98 起"
  },
  {
    icon: "剪",
    title: "造型精修",
    description: "泰迪装、比熊圆头、博美小熊装、猫咪局部修剪。先沟通样式，再按毛发状态落地。",
    meta: "含基础洗护",
    price: "¥198 起"
  },
  {
    icon: "护",
    title: "皮毛护理",
    description: "针对干燥、掉毛、轻微异味和敏感皮肤，使用低刺激配方与温和护理流程。",
    meta: "需提前预约",
    price: "¥158 起"
  }
];

const steps = [
  ["入店检查", "记录体重、皮肤、耳道、指甲和毛发打结情况，确认是否有应激或禁忌。"],
  ["分区洗护", "按背部、腹部、四肢和脸部分区处理，水温稳定，避免香味过重。"],
  ["低噪烘干", "先吸水再低噪烘干，怕吹风的宠物会延长安抚和休息时间。"],
  ["交付反馈", "交付照片、护理建议和下次洗护周期，方便主人持续观察皮毛状态。"]
];

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <nav className="shell nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="暖爪 Pet Spa 首页">
            <span className="brand-mark" aria-hidden="true">
              爪
            </span>
            <span>暖爪 Pet Spa</span>
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#reviews">口碑</a>
            <a href="#contact">联系</a>
            <a href="/admin">后台</a>
          </div>
          <a className="button" href="#contact">
            预约洗护
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <span className="eyebrow reveal">小型犬 · 中大型犬 · 猫咪友好时段</span>
              <h1 className="reveal delay-1">把毛孩子洗得松软发光。</h1>
              <p className="lead reveal delay-2">
                暖爪是一家社区型宠物洗护店，提供基础洗护、造型精修、皮毛护理和上门接送。每只宠物独立建档，按性格、毛量和皮肤状态安排护理。
              </p>
              <div className="hero-actions reveal delay-3">
                <a className="button" href="#contact">
                  今天预约
                </a>
                <a className="button secondary" href="#services">
                  查看价格
                </a>
              </div>
              <div className="stats reveal delay-3" aria-label="门店数据">
                <div className="stat">
                  <strong>45min</strong>
                  <span>到店初检与洗护评估</span>
                </div>
                <div className="stat">
                  <strong>1v1</strong>
                  <span>美容师全程照看</span>
                </div>
                <div className="stat">
                  <strong>9.8</strong>
                  <span>顾客复购评分</span>
                </div>
              </div>
            </div>

            <div className="hero-photo reveal delay-2" aria-label="宠物洗护照片">
              <div className="photo-frame">
                <Image
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85"
                  alt="美容师为狗狗洗护后的温柔互动"
                  fill
                  sizes="(max-width: 920px) 100vw, 52vw"
                  priority
                />
              </div>
              <div className="appointment">
                <div>
                  <b>营业时间：周一至周日 10:00 - 21:00</b>
                  <span>电话 15738203964 · 商丘市梁园区商鼎路实训楼</span>
                </div>
                <a className="button secondary" href="tel:15738203964">
                  拨打
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt" id="services">
          <div className="shell">
            <div className="section-head">
              <h2>洗护菜单</h2>
              <p>价格按体型、毛量和打结程度微调。到店前可先发送照片，店员会给出更准确的时长和预算。</p>
            </div>
            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <div className="service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="price">
                    <small>{service.meta}</small>
                    <span>{service.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="shell process">
            <div className="process-photo">
              <Image
                src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1000&q=85"
                alt="宠物美容师正在照看狗狗"
                width={1000}
                height={900}
                sizes="(max-width: 920px) 100vw, 44vw"
              />
            </div>
            <div>
              <div className="section-head">
                <h2>照顾流程</h2>
              </div>
              <div className="steps">
                {steps.map(([title, description]) => (
                  <article className="step" key={title}>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section alt" id="reviews">
          <div className="shell">
            <div className="section-head">
              <h2>附近主人的评价</h2>
              <p>我们更在意宠物的情绪稳定和回家后的状态，所以每次洗护都会留下护理记录。</p>
            </div>
            <div className="reviews">
              <article className="quote">
                <p>“我家雪纳瑞以前一洗澡就紧张，这里会先陪它适应环境。洗完毛很蓬，也没有刺鼻香味。”</p>
                <strong>陈女士 · 雪纳瑞「豆包」主人</strong>
              </article>
              <div className="review-list">
                <article className="mini-review">
                  <b>猫咪友好时段很实用</b>
                  <span>下午单独安排猫咪，店里安静很多，主子回家没有躲床底。</span>
                </article>
                <article className="mini-review">
                  <b>造型沟通细</b>
                  <span>美容师会先确认脸型、耳朵长度和尾巴，不会一剪到底。</span>
                </article>
                <article className="mini-review">
                  <b>接送准时</b>
                  <span>下雨天帮忙接送，洗完还发了护理前后对比照片。</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="shell">
            <div className="section-head">
              <h2>预约到店</h2>
              <p>留下宠物信息后，我们会在营业时间内确认档期。紧急洗护建议直接拨打门店电话。</p>
            </div>
            <div className="contact">
              <div className="contact-panel">
                <h3>门店信息</h3>
                <div className="info-row">
                  <b>地址</b>
                  <span>商丘市梁园区商鼎路实训楼</span>
                </div>
                <div className="info-row">
                  <b>营业</b>
                  <span>周一至周日 10:00 - 21:00</span>
                </div>
                <div className="info-row">
                  <b>电话</b>
                  <span>15738203964</span>
                </div>
                <div className="info-row">
                  <b>后台</b>
                  <a className="admin-link" href="/admin">
                    查看预约管理
                  </a>
                </div>
              </div>
              <div className="contact-panel">
                <h3>快速预约</h3>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <span>© 2026 暖爪 Pet Spa. 宠物洗护与造型精修。</span>
          <span>Clean coat, calm heart.</span>
        </div>
      </footer>
    </>
  );
}
