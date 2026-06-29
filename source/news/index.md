---
title: News
date: 2026-06-29 22:10:00
---

<style>
  .news-timeline {
    position: relative;
    margin-top: 2rem;
    padding-left: 1.4rem;
  }

  .news-timeline::before {
    content: "";
    position: absolute;
    top: 0.2rem;
    bottom: 0.2rem;
    left: 0.35rem;
    width: 2px;
    background: rgba(0, 123, 255, 0.2);
  }

  .news-node {
    position: relative;
    display: block;
    margin-bottom: 1.1rem;
    padding: 1rem 1.1rem 1rem 1.2rem;
    border: 1px solid rgba(108, 117, 125, 0.16);
    border-radius: 18px;
    background: var(--background-color-transparent, rgba(248, 249, 250, 0.92));
    color: inherit;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .news-node::before {
    content: "";
    position: absolute;
    left: -1.28rem;
    top: 1.25rem;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #007bff;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.12);
  }

  .dark .news-node {
    background: rgba(18, 18, 18, 0.78);
  }

  .news-node:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 123, 255, 0.35);
    box-shadow: 0 16px 32px rgba(16, 24, 40, 0.12);
  }

  .news-node:last-child {
    margin-bottom: 0;
  }

  .news-date {
    margin: 0 0 0.35rem;
    color: #007bff;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .news-title {
    margin: 0;
    font-size: 1.04rem;
    line-height: 1.65;
    color: var(--first-text-color, #212529);
  }
</style>

<div class="news-timeline">
  <a class="news-node" href="https://mp.weixin.qq.com/s/8-nscoI2InGT9Zl-3afrrw" target="_blank" rel="noopener">
    <p class="news-date">2026-06-26</p>
    <p class="news-title">2026 CPPUISA 春季总结暨暑期动员</p>
  </a>
  <a class="news-node" href="https://mp.weixin.qq.com/s/g1jw8yD5JhhpwY8KmT-mrA" target="_blank" rel="noopener">
    <p class="news-date">2026 上半年</p>
    <p class="news-title">警大 CPPUISA 社团学子赛场亮剑，勇夺 15 个奖项！</p>
  </a>
</div>
