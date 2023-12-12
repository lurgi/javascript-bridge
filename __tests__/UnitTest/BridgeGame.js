const BridgeGame = require("../../src/BridgeGame");

describe("bridgeGame", () => {
  let bridge;
  beforeEach(() => {
    bridge = new BridgeGame();
  });
  test.each(["1", "", "e", "UD"])("에러 테스트", (input) => {
    bridge.bridge = ["U", "D"];
    expect(() => bridge.move(input)).toThrow("[ERROR]");
  });

  test.each([
    ["U", "pass"],
    ["D", "fail"],
  ])("통과 테스트", (input, returnString) => {
    bridge.bridge = ["U", "D"];
    expect(bridge.move(input)).toStrictEqual(returnString);
  });

  test.each([
    ["R", true],
    ["Q", false],
  ])("통과 테스트", (input, reutnrValue) => {
    expect(bridge.retry(input)).toStrictEqual(reutnrValue);
  });

  test.each([" ", "qr", "T"])("에러 테스트", (input) => {
    expect(() => bridge.retry(input)).toThrow("[ERROR]");
  });
});
