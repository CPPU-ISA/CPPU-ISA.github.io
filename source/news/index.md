---
title: News
date: 2026-06-29 22:10:00
---

<style>
  .news-layout {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .news-section {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--border-color, #dee2e6);
    border-radius: 24px;
    padding: 1.6rem;
    background:
      radial-gradient(circle at top right, rgba(0, 123, 255, 0.14), transparent 28%),
      linear-gradient(180deg, rgba(220, 53, 69, 0.06), rgba(255, 255, 255, 0.02)),
      var(--background-color-transparent, rgba(248, 249, 250, 0.9));
    box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08);
  }

  .news-section::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 5px;
    background: linear-gradient(180deg, #007bff, #dc3545);
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .news-card {
    display: block;
    padding: 1.1rem;
    border-radius: 18px;
    border: 1px solid rgba(108, 117, 125, 0.16);
    background: rgba(255, 255, 255, 0.72);
    color: inherit;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .dark .news-card {
    background: rgba(18, 18, 18, 0.72);
  }

  .news-card:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 123, 255, 0.35);
    box-shadow: 0 16px 32px rgba(16, 24, 40, 0.12);
  }

  .news-card h3 {
    margin: 0 0 0.45rem;
    font-size: 1.05rem;
  }

  .news-card p,
  .news-section p {
    margin: 0;
    color: var(--third-text-color, #6c757d);
    line-height: 1.8;
  }

  .news-badge {
    display: inline-block;
    margin-bottom: 0.75rem;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    background: rgba(0, 123, 255, 0.12);
    color: #007bff;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
</style>

<div class="news-layout">
  <section class="news-section">
    <span class="news-badge">News</span>
    <p>这里收录 CPPUISA 相关动态、赛事消息与公开报道，持续记录社团成长、竞赛成果与阶段性建设进展。</p>
  </section>

  <section class="news-section">
    <h2>Campus News</h2>
    <div class="news-grid">
      <a href="https://mp.weixin.qq.com/s/g1jw8yD5JhhpwY8KmT-mrA" target="_blank" rel="noopener" class="news-card">
        <h3>警大 CPPUISA 社团学子赛场亮剑，勇夺 15 个奖项！</h3>
        <p>聚焦 2026 年上半年社团在数据安全、网数智安全、软件系统安全与电子数据取证等赛事中的成绩，累计斩获省部级以上奖项 15 项。</p>
      </a>

      <a href="https://mp.weixin.qq.com/s/8-nscoI2InGT9Zl-3afrrw" target="_blank" rel="noopener" class="news-card">
        <h3>2026 CPPUISA 春季总结暨暑期动员</h3>
        <p>6 月 26 日晚，社团面向 24 级、25 级成员召开春季总结暨暑期动员会，系统回顾春季训练与竞赛成果，明确暑期积分制学习安排，并提前部署 26 级纳新与梯队建设工作。</p>
      </a>
    </div>
  </section>
</div>
