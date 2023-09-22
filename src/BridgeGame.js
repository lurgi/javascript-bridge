/**
 * 다리 건너기 게임을 관리하는 클래스
 * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */
const { readMoving, readGameCommand } = require("./InputView");
const OutputView = require("./OutputView");

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #bridge_up = [];
  #bridge_down = [];
  #bridge_order = 0;
  #bridge;
  constructor(bridge) {
    this.#bridge = bridge;
  }
  async move() {
    let input;
    try {
      input = await readMoving();
    } catch (error) {
      OutputView.printError(error.message);
      await this.move();
      return;
    }

    if (this.#bridge[this.#bridge_order] === input) {
      if (input === "U") {
        this.#bridge_up.push(" O ");
        this.#bridge_down.push("   ");
      }
      if (input === "D") {
        this.#bridge_up.push("   ");
        this.#bridge_down.push(" O ");
      }
      this.#bridge_order++;
      OutputView.printMap(this.#bridge_up, this.#bridge_down);
      if (this.#bridge_order === this.#bridge.length) return;
      await this.move();
      return;
    }
    if (this.#bridge[this.#bridge_order] !== input) {
      if (input === "U") {
        this.#bridge_up.push(" X ");
        this.#bridge_down.push("   ");
      }
      if (input === "D") {
        this.#bridge_up.push("   ");
        this.#bridge_down.push(" X ");
      }
      OutputView.printMap(this.#bridge_up, this.#bridge_down);
      await this.retry();
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry() {
    let input;
    try {
      input = await readGameCommand();
    } catch (error) {
      printError(error.message);
      this.retry();
      return;
    }

    if (input === "R") {
      this.#bridge_down = [];
      this.#bridge_up = [];
      this.#bridge_order = 0;
      this.move();
    }
  }
}

module.exports = BridgeGame;
