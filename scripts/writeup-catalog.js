'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeList(value) {
  if (!value) return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value];
}

function formatDate(value) {
  if (!value) return '';
  try {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  } catch (_error) {
    return String(value);
  }
}

function renderBadges(items, extraClass) {
  const list = normalizeList(items);
  if (!list.length) return '';

  return `
    <div class="writeup-badges">
      ${list
        .map((item) => `<span class="writeup-badge ${extraClass || ''}">${escapeHtml(item)}</span>`)
        .join('')}
    </div>
  `;
}

function getExternalWriteups() {
  try {
    const dataPath = path.join(hexo.base_dir, '_data', 'writeups.yml');
    if (!fs.existsSync(dataPath)) return [];
    const raw = fs.readFileSync(dataPath, 'utf8');
    const parsed = yaml.load(raw) || {};
    return normalizeList(parsed.external);
  } catch (_error) {
    return [];
  }
}

function getWriteupPosts(ctx) {
  const posts = hexo.locals.get('posts');

  return posts
    .toArray()
    .filter((post) => {
      const categoryNames = post.categories ? post.categories.map((category) => category.name) : [];
      return categoryNames.some((name) => String(name).toLowerCase() === 'writeup');
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((post) => {
      const tags = post.tags ? post.tags.map((tag) => tag.name) : [];
      return {
        title: post.title,
        url: ctx.url_for(post.path),
        date: formatDate(post.date),
        tags,
        summary: post.description || post.excerpt || post.content || ''
      };
    });
}

function stripHtml(html) {
  return String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function renderPostCard(post, isExternal) {
  const displayDate = post.date ? formatDate(post.date) : '';
  const metaItems = [displayDate, post.event, post.author, post.platform].filter(Boolean);
  const summary = stripHtml(post.summary).slice(0, 140);

  return `
    <a href="${escapeHtml(post.url)}" class="writeup-card" ${isExternal ? 'target="_blank" rel="noopener"' : ''}>
      <div class="writeup-card-head">
        <span class="writeup-card-type">${isExternal ? '外链' : '站内'}</span>
        ${post.category ? `<span class="writeup-card-track">${escapeHtml(post.category)}</span>` : ''}
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      ${metaItems.length ? `<p class="writeup-meta">${escapeHtml(metaItems.join(' / '))}</p>` : ''}
      ${summary ? `<p class="writeup-summary">${escapeHtml(summary)}</p>` : ''}
      ${renderBadges(post.tags)}
    </a>
  `;
}

hexo.extend.tag.register('writeup_catalog', function () {
  const internalPosts = getWriteupPosts(this);
  const externalPosts = getExternalWriteups();

  return `
    <style>
      .writeup-page {
        display: grid;
        gap: 1.8rem;
        margin-top: 2rem;
      }

      .writeup-hero,
      .writeup-section {
        border: 1px solid var(--border-color, #d9e0e7);
        border-radius: 24px;
        padding: 1.6rem;
        background:
          radial-gradient(circle at top right, rgba(0, 123, 255, 0.12), transparent 30%),
          linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(246, 250, 255, 0.92));
        box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
      }

      .writeup-hero h2,
      .writeup-section h2 {
        margin: 0 0 0.7rem;
      }

      .writeup-hero p,
      .writeup-section p {
        margin: 0;
        line-height: 1.8;
        color: var(--third-text-color, #5f6b7a);
      }

      .writeup-rule-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-top: 1rem;
      }

      .writeup-rule {
        padding: 0.45rem 0.8rem;
        border-radius: 999px;
        background: rgba(13, 110, 253, 0.08);
        color: var(--default-text-color, #22303c);
        font-size: 0.92rem;
      }

      .writeup-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1rem;
        margin-top: 1.2rem;
      }

      .writeup-card {
        display: block;
        height: 100%;
        padding: 1.2rem;
        border-radius: 20px;
        text-decoration: none;
        color: inherit;
        border: 1px solid rgba(15, 23, 42, 0.08);
        background: rgba(255, 255, 255, 0.9);
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      }

      .writeup-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
        border-color: rgba(13, 110, 253, 0.28);
      }

      .writeup-card-head {
        display: flex;
        gap: 0.55rem;
        flex-wrap: wrap;
        margin-bottom: 0.8rem;
      }

      .writeup-card-type,
      .writeup-card-track,
      .writeup-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem 0.6rem;
        border-radius: 999px;
        font-size: 0.82rem;
      }

      .writeup-card-type {
        background: rgba(220, 53, 69, 0.1);
        color: #b42318;
      }

      .writeup-card-track {
        background: rgba(13, 110, 253, 0.1);
        color: #175cd3;
      }

      .writeup-card h3 {
        margin: 0 0 0.55rem;
        font-size: 1.06rem;
        line-height: 1.5;
      }

      .writeup-meta {
        font-size: 0.9rem;
        color: var(--third-text-color, #6b7280);
        margin: 0 0 0.75rem;
      }

      .writeup-summary {
        margin: 0;
        color: var(--third-text-color, #5f6b7a);
        line-height: 1.75;
      }

      .writeup-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
        margin-top: 0.9rem;
      }

      .writeup-badge {
        background: rgba(15, 23, 42, 0.06);
        color: var(--default-text-color, #22303c);
      }

      .writeup-empty {
        margin-top: 1.2rem;
        padding: 1rem 1.1rem;
        border-radius: 18px;
        background: rgba(15, 23, 42, 0.04);
        color: var(--third-text-color, #5f6b7a);
      }

      @media (max-width: 768px) {
        .writeup-hero,
        .writeup-section {
          padding: 1.2rem;
          border-radius: 20px;
        }
      }
    </style>

    <div class="writeup-page">
      <section class="writeup-hero">
        <h2>Writeup 索引</h2>
        <p>这里统一收录社团题解、训练总结和外链整理，不再单开独立栏目页。站内原创文章会自动进入下方列表，外链内容则从数据表中维护，后续扩充会比较省事。</p>
        <div class="writeup-rule-list">
          <span class="writeup-rule">分类建议：Writeup</span>
          <span class="writeup-rule">方向标签：Web / Pwn / Crypto / Reverse / Misc / Forensics</span>
          <span class="writeup-rule">属性标签：训练 / 复现 / 校赛 / 国赛 / 外链</span>
        </div>
      </section>

      <section class="writeup-section">
        <h2>站内文章</h2>
        <p>发布到 <code>source/_posts</code> 后，只要文章分类里包含 <code>Writeup</code>，这里就会自动展示。</p>
        ${
          internalPosts.length
            ? `<div class="writeup-grid">${internalPosts.map((post) => renderPostCard(post, false)).join('')}</div>`
            : '<div class="writeup-empty">暂时还没有站内题解文章，后面直接按普通文章发布即可。</div>'
        }
      </section>

      <section class="writeup-section">
        <h2>外链文章</h2>
        <p>适合收录博客园、公众号、个人博客等外部题解。后续只需要往 <code>_data/writeups.yml</code> 里追加条目。</p>
        ${
          externalPosts.length
            ? `<div class="writeup-grid">${externalPosts.map((post) => renderPostCard(post, true)).join('')}</div>`
            : '<div class="writeup-empty">外链题解清单还没开始录入，等你把链接发我后我可以继续帮你整理进去。</div>'
        }
      </section>
    </div>
  `;
});
