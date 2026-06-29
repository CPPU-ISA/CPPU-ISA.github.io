---
title: Writeup
date: 2026-06-29 00:35:00
---

<style>
  .writeup-layout {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .writeup-section {
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

  .writeup-section::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 5px;
    background: linear-gradient(180deg, #007bff, #dc3545);
  }

  .writeup-card p,
  .writeup-section p {
    margin: 0;
    color: var(--third-text-color, #6c757d);
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    .writeup-section {
      padding: 1.2rem;
      border-radius: 20px;
    }
  }
</style>

<div class="writeup-layout">
  <section class="writeup-section">
    <h2>Writeup</h2>
    <p>本页用于收录社团比赛题解、训练总结与技术沉淀内容，正在整理中，后续会按专题持续更新。</p>
  </section>
</div>
