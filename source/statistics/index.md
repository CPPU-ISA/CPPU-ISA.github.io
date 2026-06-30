---
title: Members
date: 2026-06-29 00:00:00
---

<style>
  .member-sections {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .member-section {
    position: relative;
    padding: 1.5rem;
    border: 1px solid var(--border-color, #dee2e6);
    border-radius: 24px;
    background:
      radial-gradient(circle at top right, rgba(0, 123, 255, 0.12), transparent 32%),
      linear-gradient(180deg, rgba(220, 53, 69, 0.06), rgba(255, 255, 255, 0.02)),
      var(--background-color-transparent, rgba(248, 249, 250, 0.9));
    box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08);
    overflow: hidden;
  }

  .member-section::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 5px;
    background: linear-gradient(180deg, #dc3545, #007bff);
  }

  .member-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(108, 117, 125, 0.18);
  }

  .member-section-title {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 0.04em;
  }

  .member-section-subtitle {
    color: var(--third-text-color, #6c757d);
    font-size: 0.95rem;
    white-space: nowrap;
  }

  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }

  .member-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    min-height: 108px;
    padding: 1rem;
    border: 1px solid rgba(108, 117, 125, 0.16);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    backdrop-filter: blur(8px);
  }

  .dark .member-card {
    background: rgba(18, 18, 18, 0.72);
  }

  .member-card:hover {
    transform: translateY(-4px);
    border-color: rgba(220, 53, 69, 0.35);
    box-shadow: 0 16px 32px rgba(16, 24, 40, 0.12);
  }

  .member-avatar {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    object-fit: cover;
    flex-shrink: 0;
    border: 2px solid rgba(220, 53, 69, 0.22);
    background: rgba(108, 117, 125, 0.08);
  }

  .member-info {
    min-width: 0;
    flex: 1;
  }

  .member-name-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.35rem;
  }

  .member-name {
    font-size: 1.05rem;
    font-weight: 800;
    line-height: 1.2;
  }

  .member-tag {
    display: inline-flex;
    align-items: center;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    background: rgba(253, 126, 20, 0.14);
    color: #fd7e14;
  }

  .member-desc {
    margin: 0;
    color: var(--third-text-color, #6c757d);
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .member-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 108px;
    padding: 1rem 1.25rem;
    border: 1px dashed rgba(108, 117, 125, 0.26);
    border-radius: 20px;
    color: var(--third-text-color, #6c757d);
    background: rgba(108, 117, 125, 0.04);
    font-style: italic;
    letter-spacing: 0.03em;
  }

  @media (max-width: 768px) {
    .member-section {
      padding: 1.2rem;
      border-radius: 20px;
    }

    .member-section-header {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    .member-section-subtitle {
      white-space: normal;
    }

    .member-card {
      min-height: unset;
      align-items: flex-start;
    }
  }
</style>

<div class="member-sections">
  <section class="member-section">
    <div class="member-section-header">
      <h2 class="member-section-title">23&#32423;</h2>
      <span class="member-section-subtitle">成员名单</span>
    </div>
    <div class="member-grid">
      <a href="https://jjkk999.github.io/" target="_blank" rel="noopener" class="member-card">
        <img src="https://jjkk999.github.io/img/jjkk.jpg" alt="jjkk avatar" class="member-avatar">
        <div class="member-info">
          <div class="member-name-row">
            <span class="member-name">jjkk</span>
            <span class="member-tag">逆向</span>
          </div>
          <p class="member-desc">个人主页已接入，头像使用其站点公开头像。</p>
        </div>
      </a>

      <a href="https://www.cnblogs.com/Sevedy" target="_blank" rel="noopener" class="member-card">
        <img src="https://pic.cnblogs.com/avatar/3357373/20250104101041.png" alt="Sevedy avatar" class="member-avatar">
        <div class="member-info">
          <div class="member-name-row">
            <span class="member-name">Sevedy / Sola</span>
            <span class="member-tag">博客</span>
          </div>
          <p class="member-desc">博客园主页已接入，头像使用博客公开头像。</p>
        </div>
      </a>

      <a href="https://nlqx.github.io/" target="_blank" rel="noopener" class="member-card">
        <img src="https://nlqx.github.io/images/cover1.jpg" alt="nlqx avatar" class="member-avatar">
        <div class="member-info">
          <div class="member-name-row">
            <span class="member-name">nlqx</span>
            <span class="member-tag">Web</span>
          </div>
          <p class="member-desc">个人主页已接入，头像暂用站点公开封面图。</p>
        </div>
      </a>

      <a href="https://saga131.github.io/" target="_blank" rel="noopener" class="member-card">
        <img src="https://saga131.github.io/img/head.jpg" alt="saga131 avatar" class="member-avatar">
        <div class="member-info">
          <div class="member-name-row">
            <span class="member-name">saga131</span>
            <span class="member-tag">密码</span>
          </div>
          <p class="member-desc">个人主页已接入，头像使用站点侧边栏头像。</p>
        </div>
      </a>

      <a href="https://mp.weixin.qq.com/s/FxcgogjwyDJUNlI0NBsZ1g" target="_blank" rel="noopener" class="member-card">
        <img src="https://pic.cnblogs.com/avatar/3376483/20240117222905.png" alt="Q-Sheep avatar" class="member-avatar">
        <div class="member-info">
          <div class="member-name-row">
            <span class="member-name">Q-Sheep</span>
            <span class="member-tag">公众号</span>
          </div>
          <p class="member-desc">可通过链接页关注公众号，头像使用提供的公开头像。</p>
        </div>
      </a>

      <a href="https://www.cnblogs.com/1ceLAND" target="_blank" rel="noopener" class="member-card">
        <img src="https://pic.cnblogs.com/avatar/3513656/20250528212217.png" alt="1ceLAND avatar" class="member-avatar">
        <div class="member-info">
          <div class="member-name-row">
            <span class="member-name">1ceLAND</span>
            <span class="member-tag">Web</span>
          </div>
          <p class="member-desc">博客园主页已接入，头像使用博客主题公开头像。</p>
        </div>
      </a>
    </div>
  </section>

  <section class="member-section">
    <div class="member-section-header">
      <h2 class="member-section-title">24&#32423;</h2>
      <span class="member-section-subtitle">当前成员</span>
    </div>
    <div class="member-grid">
      <a href="https://ljnljn2005.github.io/" target="_blank" rel="noopener" class="member-card">
        <img src="https://ljnljn2005.github.io/images/site-avatar.png" alt="ljnljn" class="member-avatar">
        <div class="member-info">
          <div class="member-name-row">
            <span class="member-name">ljnljn</span>
            <span class="member-tag">综合</span>
          </div>
          <p class="member-desc">个人主页已接入，头像使用外部站点公开头像。</p>
        </div>
      </a>
    </div>
  </section>

  <section class="member-section">
    <div class="member-section-header">
      <h2 class="member-section-title">25&#32423;</h2>
      <span class="member-section-subtitle">成员整理中</span>
    </div>
    <div class="member-grid">
      <div class="member-empty">敬请期待...</div>
    </div>
  </section>

  <section class="member-section">
    <div class="member-section-header">
      <h2 class="member-section-title">26&#32423;</h2>
      <span class="member-section-subtitle">成员整理中</span>
    </div>
    <div class="member-grid">
      <div class="member-empty">敬请期待...</div>
    </div>
  </section>
</div>
