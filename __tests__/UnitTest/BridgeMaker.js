const BridgeMaker = require("../../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../../src/BridgeRandomNumberGenerator");

describe("bridgeMaker", () => {
  test.each(["1", "1 2", "숫자아님", 21, 2])("다리 생성 오류", (input) => {
    expect(() =>
      BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator)
    ).toThrow("[ERROR]");
  });
});
