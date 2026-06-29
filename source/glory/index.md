---
title: Glory
date: 2026-06-29 00:30:00
---

<style>
  .glory-layout {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .glory-hero,
  .glory-section {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--border-color, #dee2e6);
    border-radius: 24px;
    padding: 1.6rem;
    background:
      radial-gradient(circle at top right, rgba(220, 53, 69, 0.15), transparent 28%),
      linear-gradient(180deg, rgba(0, 123, 255, 0.08), rgba(255, 255, 255, 0.02)),
      var(--background-color-transparent, rgba(248, 249, 250, 0.9));
    box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08);
  }

  .glory-hero::before,
  .glory-section::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 5px;
    background: linear-gradient(180deg, #dc3545, #007bff);
  }

  .glory-kicker {
    display: inline-block;
    margin-bottom: 0.75rem;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    background: rgba(220, 53, 69, 0.12);
    color: #dc3545;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .glory-title {
    margin: 0 0 0.75rem;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
  }

  .glory-desc,
  .glory-note {
    margin: 0;
    color: var(--third-text-color, #6c757d);
    line-height: 1.8;
  }

  .glory-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }

  .glory-card {
    padding: 1.1rem;
    border-radius: 18px;
    border: 1px solid rgba(108, 117, 125, 0.16);
    background: rgba(255, 255, 255, 0.72);
  }

  .dark .glory-card {
    background: rgba(18, 18, 18, 0.72);
  }

  .glory-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.05rem;
  }

  .glory-card p,
  .glory-list {
    margin: 0;
    color: var(--third-text-color, #6c757d);
  }

  .glory-list {
    padding-left: 1.1rem;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    .glory-hero,
    .glory-section {
      padding: 1.2rem;
      border-radius: 20px;
    }
  }
</style>

<div class="glory-layout">
  <section class="glory-hero">
    <span class="glory-kicker">Glory</span>
    <h2 class="glory-title">CPPUISA 竞赛荣誉与项目成果</h2>
    <p class="glory-desc">这里集中展示社团在网络安全竞赛、电子数据取证、软件安全与项目建设方面的代表性成果，后续有新的比赛成绩和项目内容会继续补充。</p>
  </section>

  <section class="glory-section">
    <h2>2026 上半年战绩速览</h2>
    <div class="glory-grid">
      <article class="glory-card">
        <h3>警大 CPPUISA 社团学子赛场亮剑，勇夺 15 个奖项</h3>
        <p>2026 年上半年，CPPUISA 社团在多项省部级以上网络安全赛事中累计斩获 15 个奖项，覆盖数据安全、网数智安全、软件系统安全与电子数据取证等多个方向。</p>
        <p><a href="https://mp.weixin.qq.com/s/g1jw8yD5JhhpwY8KmT-mrA" target="_blank" rel="noopener">阅读原文</a></p>
      </article>
      <article class="glory-card">
        <h3>奖项总数</h3>
        <p>省部级以上奖项共 15 项。</p>
      </article>
      <article class="glory-card">
        <h3>覆盖方向</h3>
        <p>AI 安全、AWDP 攻防、软件供应链安全、逆向分析、电子数据取证。</p>
      </article>
    </div>
  </section>

  <section class="glory-section">
    <h2>正式奖项清单</h2>
    <ul class="glory-list">
      <li>第三届“数信杯”数据安全大赛 AI 安全团队综合赛：区域赛金奖 1 项。</li>
      <li>第三届“数信杯”数据安全大赛 AI 安全团队综合赛：总决赛金奖 1 项。</li>
      <li>第三届“长城杯”网数智安全大赛（防护赛）总决赛：二等奖 1 项。</li>
      <li>第九届中国高校智能机器人创意大赛软件系统安全赛：总决赛一等奖 2 项。</li>
      <li>第六届全国网络空间取证大赛（决赛）：一等奖 1 项。</li>
      <li>第四届“盘古石杯”国际电子数据取证大赛：二等奖 2 项。</li>
    </ul>
    <p class="glory-note">以上为新闻报道中明确列出的重点奖项类别。原文同时说明，2026 年上半年累计获得省部级以上奖项 15 项。</p>
  </section>

  <section class="glory-section">
    <h2>赛事亮点</h2>
    <div class="glory-grid">
      <article class="glory-card">
        <h3>第三届“数信杯”数据安全大赛</h3>
        <p>聚焦 AI 模型数据泄露防御等前沿议题，CPPUISA 在区域赛与总决赛双线夺金。</p>
      </article>
      <article class="glory-card">
        <h3>第三届“长城杯”网数智安全大赛</h3>
        <p>SeeUSec 战队在区域半决赛 AWDP 赛道斩获第一名，总决赛位列全国第 12 名并获二等奖。</p>
      </article>
      <article class="glory-card">
        <h3>第九届中国高校智能机器人创意大赛</h3>
        <p>围绕软件供应链漏洞挖掘、二进制逆向与模型对抗等内容，最终斩获总决赛一等奖 2 项。</p>
      </article>
      <article class="glory-card">
        <h3>第六届全国网络空间取证大赛</h3>
        <p>在磁盘镜像分析、内存取证、日志溯源与恶意代码逆向等任务中表现突出，获得决赛一等奖。</p>
      </article>
      <article class="glory-card">
        <h3>第四届“盘古石杯”国际电子数据取证大赛</h3>
        <p>对标国际取证标准，覆盖物联网设备分析与区块链交易溯源，最终获得二等奖 2 项。</p>
      </article>
    </div>
  </section>
</div>
