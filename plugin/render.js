const pagination = function(current, size, total, path) {
  let links = ''
  const pageNumber = Math.ceil(total / size)
  const newer = `<a id="newer" class="blog-nav" href="${current == 2 ? '/index.html' : path.replace(':id', current - 1)}">NEWER</a>`
  const older = `<a id="older" class="blog-nav" href="${path.replace(':id', current + 1)}">OLDER&nbsp;&gt;</a>`
  switch (current) {
    case 1:
      links = older
      break
    case pageNumber:
      links = newer
      break
    default:
      links = `${newer}${older}`
      break
  }
  if (pageNumber == 1) {
    return ''
  } else {
    return `<div class="pagination mobile-hidden">${links}</div>`
  }
}
const articleItems = function(titles) {
  let items = ''
  for (let i = 0; i < titles.length; i++) {
    const { path, title, desc, top } = titles[i]
    if (top) {
      items = `<li><h3>${desc}</h3><h2 class="top"><span>#置顶#</span><a href="${path}">${title}</a></h2></li>${items}`
      continue
    }
    items = `${items}<li><h3>${desc}</h3><h2><a href="${path}">${title}</a></h2></li>`
  }
  return `<ul>${items}</ul>`
}

module.exports = { pagination, articleItems }
