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

  .writeup-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .writeup-card {
    padding: 1.1rem;
    border-radius: 18px;
    border: 1px solid rgba(108, 117, 125, 0.16);
    background: rgba(255, 255, 255, 0.72);
  }

  .dark .writeup-card {
    background: rgba(18, 18, 18, 0.72);
  }

  .writeup-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
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
    <h2>Writeup Hub</h2>
    <p>This page is prepared for challenge writeups, post-match summaries, and training notes. When you send the exact content, we can either list them here manually or link this page to dedicated post entries by category.</p>
  </section>

  <section class="writeup-section">
    <h2>Suggested Sections</h2>
    <div class="writeup-grid">
      <article class="writeup-card">
        <h3>CTF Writeups</h3>
        <p>Per-event challenge analysis and solve paths.</p>
      </article>
      <article class="writeup-card">
        <h3>Training Notes</h3>
        <p>Internal practice summaries and methodology records.</p>
      </article>
      <article class="writeup-card">
        <h3>Tooling Notes</h3>
        <p>Scripts, payloads, and reusable exploitation workflows.</p>
      </article>
    </div>
  </section>
</div>
