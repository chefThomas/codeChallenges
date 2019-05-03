function retrieve(str) {
  return (
    str ? str.toLowerCase()
      .replace(/[^A-Za-z\s]/, '')
      .split(' ').filter((word) => /[aeiou]/.test(word[0]))
      : []
  )
}