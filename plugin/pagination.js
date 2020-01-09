const create = function(current, size, total) {
  let links = ''
  const pageNumber = Math.ceil(total / size)
  for (let i = 0; i < pageNumber; i++) {
    if (i + 1 == current) {
      links = `${links}<li class="active">${i + 1}</li>`
    } else {
      links = `${links}<li>${i + 1}</li>`
    }
  }
  return `<ul class="pagination">${links}</ul>`
}

module.exports = create
