const { readBridgeSize, waitReadLine } = require("./src/InputView");

async function run() {
  await readBridgeSize();
}

async function waitReadLine2() {
  const Input = await waitReadLine("안녕하세요?");
  console.log(Input);
}

run();
