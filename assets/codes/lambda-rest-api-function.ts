module.exports.handler = async (event, context) => {
  const now = new Date().toISOString()
  console.info(`now is ${now} !!!`)

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ now }),
  }
}
