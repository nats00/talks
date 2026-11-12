module.exports = async function (git) {
  await git.exec('add', '-f', '.')
}
