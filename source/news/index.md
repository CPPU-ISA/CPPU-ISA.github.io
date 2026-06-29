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
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
    <span class="news-badge">News Hub</span>
    <p>This page collects useful security and CTF-related sites. Later we can expand it into a team-curated feed, add categories, or turn it into a bookmark portal.</p>
  </section>

  <section class="news-section">
    <h2>Campus News</h2>
    <div class="news-grid">
      <a href="https://mp.weixin.qq.com/s/g1jw8yD5JhhpwY8KmT-mrA" target="_blank" rel="noopener" class="news-card">
        <h3>警大CPPUISA社团学子赛场亮剑，勇夺15个奖项！</h3>
        <p>微信公众号报道，记录 CPPUISA 社团学子在赛场上的亮眼表现与获奖情况。</p>
      </a>
    </div>
  </section>

  <section class="news-section">
    <h2>Security News</h2>
    <div class="news-grid">
      <a href="https://thehackernews.com/" target="_blank" rel="noopener" class="news-card">
        <h3>The Hacker News</h3>
        <p>Daily cybersecurity news, breach updates, malware reports, and vulnerability coverage.</p>
      </a>
      <a href="https://www.bleepingcomputer.com/" target="_blank" rel="noopener" class="news-card">
        <h3>BleepingComputer</h3>
        <p>Incident coverage, patch news, ransomware reporting, and practical security alerts.</p>
      </a>
      <a href="https://www.darkreading.com/" target="_blank" rel="noopener" class="news-card">
        <h3>Dark Reading</h3>
        <p>Industry security analysis, enterprise trends, and deeper long-form reporting.</p>
      </a>
      <a href="https://krebsonsecurity.com/" target="_blank" rel="noopener" class="news-card">
        <h3>Krebs on Security</h3>
        <p>Investigative security journalism and high-signal incident commentary.</p>
      </a>
    </div>
  </section>

  <section class="news-section">
    <h2>CTF And Research</h2>
    <div class="news-grid">
      <a href="https://ctftime.org/" target="_blank" rel="noopener" class="news-card">
        <h3>CTFtime</h3>
        <p>Competition schedule, rankings, event pages, and team tracking.</p>
      </a>
      <a href="https://pwning.net/" target="_blank" rel="noopener" class="news-card">
        <h3>pwning.net</h3>
        <p>Security learning resources and classic offensive security references.</p>
      </a>
      <a href="https://portswigger.net/research" target="_blank" rel="noopener" class="news-card">
        <h3>PortSwigger Research</h3>
        <p>Web security research, exploit techniques, and practical vulnerability writeups.</p>
      </a>
      <a href="https://googleprojectzero.blogspot.com/" target="_blank" rel="noopener" class="news-card">
        <h3>Google Project Zero</h3>
        <p>High-quality vulnerability research and deep technical analysis.</p>
      </a>
    </div>
  </section>
</div>
