const inputViewValid = {
  /**
   *개발자 환경개선을 위한 질문 유효성 검사
   * @param {string} question
   */
  validQuestion(question) {
    if (typeof question !== "string")
      throw new Error("[ERROR] 질문을 입력하세요");
  },

  /**
   *
   * @param {number} distance
   * 입력값이 3이상, 20이하의 숫자 값인지 확인
   */
  validBridgeDistance(distance) {
    if (isNaN(distance)) {
      Console.print("[ERROR] 다리 길이는 숫자 값이어야 합니다.");
      return false;
    }
    if (distance < 3 || distance > 20) {
      Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      return false;
    }
    return true;
  },
  /**
   * @param {string} input
   * 입력값이 "U" | "D" 인지 확인
   */
  validMoveInput(input) {
    if (input !== "U" && input !== "D") {
      Console.print("[ERROR] 입력값은 'U' 혹은 'D' 이어야 합니다");
      return false;
    }
    return true;
  },
  /**
   * @param {string} input
   * 입력값이 "R" | "Q" 인지 확인
   */
  validMoveInput(input) {
    if (input !== "R" && input !== "Q") {
      Console.print("[ERROR] 입력값은 'R' 혹은 'Q' 이어야 합니다");
      return false;
    }
    return true;
  },
};

module.exports = inputViewValid;
