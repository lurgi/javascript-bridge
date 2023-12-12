const MissionUtils = require("@woowacourse/mission-utils");

const INPUT_MESSAGES = {
  bridgeSize: "다리의 길이를 입력해주세요.",
};

const ERROR_MESSAGE = "[ERROR] 입력하지 않으셨습니다.";

const InputView = {
  async readBridgeSize() {
    const INPUT = MissionUtils.Console.readLine(INPUT_MESSAGES.bridgeSize);

    this.inputValid(INPUT);

    return Number(INPUT);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  inputValid(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE);
    }
  },
};

module.exports = InputView;
