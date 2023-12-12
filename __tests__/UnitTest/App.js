const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../../src/App");
const BridgeGame = require("../../src/BridgeGame");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("App result", () => {
  test("출력 테스트", () => {
    const APP = new App();
    const BRIDGE = new BridgeGame();
    APP.bridgeGame = BRIDGE;
    APP.bridgeGame.bridge = ["U", "D", "D"];
    APP.bridgeGame.getTry = () => 2;
    APP.bridgeGame.getCurrent = () => 3;

    const logSpy = getLogSpy();

    const messages = [
      "최종 게임 결과",
      "[ O |   |   ]",
      "[   | O | O ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 2",
    ];

    APP.playResultEnd();
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
