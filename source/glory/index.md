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
    <span class="glory-kicker">Team Showcase</span>
    <h2 class="glory-title">Competition glory, team milestones, and featured projects.</h2>
    <p class="glory-desc">This page is reserved for the team achievements section inspired by 0psu3. We can add rankings, awards, event posters, milestone timelines, and project highlights here once you send the exact content.</p>
  </section>

  <section class="glory-section">
    <h2>Planned Blocks</h2>
    <div class="glory-grid">
      <article class="glory-card">
        <h3>Contest Results</h3>
        <p>CTF placements, scoreboards, award titles, and event names.</p>
      </article>
      <article class="glory-card">
        <h3>Project Highlights</h3>
        <p>Dedicated space for named projects, demos, tools, and internal platforms.</p>
      </article>
      <article class="glory-card">
        <h3>Team Milestones</h3>
        <p>Recruitment cycles, training records, and notable team moments.</p>
      </article>
    </div>
  </section>

  <section class="glory-section">
    <h2>Content Queue</h2>
    <ul class="glory-list">
      <li>`GLORY` style showcase section is ready.</li>
      <li>Project entries can be added one by one without changing the page structure.</li>
      <li>Images, rankings, external links, and markdown writeups can all be embedded here.</li>
    </ul>
  </section>
</div>
