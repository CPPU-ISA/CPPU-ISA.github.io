'use strict';

function restoreMemberAvatarImages(html) {
  return html.replace(
    /<img\s+([^>]*?)lazyload\s+src="\/images\/loading\.svg"\s+data-src="([^"]+)"([^>]*class="[^"]*member-avatar[^"]*"[^>]*)>/gims,
    function (_match, beforeAttrs, realSrc, afterAttrs) {
      const attrs = `${beforeAttrs}src="${realSrc}"${afterAttrs}`
        .replace(/\sdata-src="[^"]*"/g, '')
        .replace(/\slazyload\b/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      return `<img ${attrs}>`;
    }
  );
}

hexo.extend.filter.register('after_post_render', function (data) {
  if (typeof data?.content === 'string') {
    data.content = restoreMemberAvatarImages(data.content);
  }
  return data;
}, 100);

hexo.extend.filter.register('after_render:html', function (html, data) {
  const path = data?.path || '';
  if (!path.includes('statistics/')) {
    return html;
  }
  return restoreMemberAvatarImages(html);
}, 100);
