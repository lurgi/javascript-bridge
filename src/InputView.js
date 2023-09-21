const { Console } = require("@woowacourse/mission-utils");
// 유효성 검사 모듈
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */
const InputView = {
  /** 다리의 길이를 입력받는다.*/
  readBridgeSize() {
    return new Promise((resolve, reject) => {
      Console.readLine("다리의 길이를 입력해주세요.", (input) => {
        const INPUT_NUM = parseInt(input);
        if (isNaN(INPUT_NUM)) reject(Error("숫자값을 입력하세요."));
        resolve(INPUT_NUM);
      });
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
