const { Console } = require("@woowacourse/mission-utils");
// 유효성 검사 모듈
const {
  validQuestion,
  validBridgeDistance,
  validMoveInput,
} = require("../src/validate/inputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */
const InputView = {
  /**
   *
   * @param {string} prompt
   * 입력값을 받는 메서드 Console.readeLine을 비동기로 처리하는 함수
   */
  async waitReadLine(prompt) {
    validQuestion(prompt);
    const RETURN_CALLBACK = (resolve) => {
      Console.readLine(prompt, (input, reject) => {
        resolve(input);
      });
    };
    return new Promise(RETURN_CALLBACK);
  },
  /** 다리의 길이를 입력받는다.*/
  async readBridgeSize() {
    const INPUT = await this.waitReadLine("다리의 길이를 입력해주세요.");
    const INPUT_NUMBER = parseInt(INPUT);
    const ISVALID = validBridgeDistance(INPUT_NUMBER);
    if (!ISVALID) this.readBridgeSize();
    return INPUT_NUMBER;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @returns {"U" | "D"}
   */
  readMoving() {
    const INPUT = waitReadLine("이동할 칸을 선택해주세요. (위: U, 아래: D)");
    const IS_VALID = validMoveInput(INPUT);
    if (!IS_VALID) this.readMoving();
    return INPUT;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const INPUT = this.waitReadLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)"
    );
    const IS_RETRY = validRetryInput(INPUT);
    if (IS_RETRY) this.readGameCommand();
    return INPUT;
  },
};

module.exports = InputView;
