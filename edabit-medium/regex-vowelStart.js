function retrieve(str) {
  return (
    str ? str.toLowerCase()
      .replace(/[^A-Za-z ]/, '')
      .split(' ').filter((word) => /[aeiou]/.test(word[0]))
      : []
  )
}