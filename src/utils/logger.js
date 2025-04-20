function logger(mensagem) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${mensagem}`);
}

module.exports = logger;
