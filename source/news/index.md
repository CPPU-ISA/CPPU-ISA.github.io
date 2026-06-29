---
title: News
date: 2026-06-29 22:10:00
---

<style>
  .news-feed {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
  }

  .news-entry {
    display: block;
    padding: 1.25rem 1.4rem;
    border: 1px solid var(--border-color, #dee2e6);
    border-radius: 20px;
    background:
      radial-gradient(circle at top right, rgba(0, 123, 255, 0.12), transparent 28%),
      linear-gradient(180deg, rgba(220, 53, 69, 0.05), rgba(255, 255, 255, 0.02)),
      var(--background-color-transparent, rgba(248, 249, 250, 0.92));
    color: inherit;
    text-decoration: none;
    box-shadow: 0 16px 40px rgba(16, 24, 40, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .dark .news-entry {
    background: rgba(18, 18, 18, 0.78);
  }

  .news-entry:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 123, 255, 0.35);
    box-shadow: 0 18px 36px rgba(16, 24, 40, 0.12);
  }

  .news-date {
    display: inline-block;
    margin-bottom: 0.45rem;
    color: #007bff;
    font-size: 0.92rem;
    font-weight: 700;
  }

  .news-title {
    margin: 0;
    font-size: 1.08rem;
    line-height: 1.6;
    color: var(--first-text-color, #212529);
  }
</style>

<div class="news-feed">
  <a class="news-entry" href="https://mp.weixin.qq.com/s/8-nscoI2InGT9Zl-3afrrw" target="_blank" rel="noopener">
    <div class="news-date">2026-06-26</div>
    <p class="news-title">2026 CPPUISA 春季总结暨暑期动员</p>
  </a>

  <a class="news-entry" href="https://mp.weixin.qq.com/s/g1jw8yD5JhhpwY8KmT-mrA" target="_blank" rel="noopener">
    <div class="news-date">2026 上半年</div>
    <p class="news-title">警大 CPPUISA 社团学子赛场亮剑，勇夺 15 个奖项！</p>
  </a>
</div>
