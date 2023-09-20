/**
 * 다리 건너기 게임을 관리하는 클래스
 * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */
const { readMoving } = require("../src/InputView");
const { readBridgeSize, readGameCommand } = require("../src/InputView");
const { makeBridge } = require("../src/BridgeMaker");
const {
  BridgeRandomNumberGenerator,
} = require("../src/BridgeRandomNumberGenerator");
const { printRetryQuestion } = require("./OutputView");

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #bridge;
  #bridge_up_state = [];
  #bridge_down_state = [];
  #bridge_order = 0;
  constructor() {
    const BRIDGE_DISTANCE = readBridgeSize();
    this.#bridge = makeBridge(BRIDGE_DISTANCE, BridgeRandomNumberGenerator);
  }

  /**
   * 입력값을 받고, 다리를 건넌다.
   */
  move() {
    const INPUT = readMoving();
    const IS_PASS = this.checkBridgeCur(INPUT);
    printMap(this.#bridge_up_state, this.#bridge_down_state);
    if (IS_PASS) {
      if (this.#bridge_order === this.#bridge.length) {
        printResult(this.#bridge_up_state, this.#bridge_down_state);
        return;
      }
      this.#bridge_order++;
      this.move();
    }
    if (!IS_PASS) {
      const IS_RETRY = readGameCommand();
      if (IS_RETRY) this.retry();
    }
    return;
  }

  /**
   *
   * @param {"U"|"D"} input
   * @returns {boolean} 다리 통과시 true, 실패시 false
   */

  checkBridgeCur(input) {
    if (input === this.#bridge[this.#bridge_order]) {
      if (input === "U") this.#bridge_up_state.push("O");
      if (input === "D") this.#bridge_down_state.push("O");
      return true;
    }
    if (input !== this.#bridge[this.#bridge_order]) {
      if (input === "U") this.#bridge_up_state.push("X");
      if (input === "D") this.#bridge_down_state.push("X");
      return false;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
