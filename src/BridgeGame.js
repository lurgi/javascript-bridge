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

  #trial_count = 1;
  #trial_pass = false;
  constructor(bridge) {
    this.#bridge = bridge;
  }
  /**
   *
   * @param {Promise} readFunction
   * @returns
   * 사용자의 입력을 받는 함수를 try catch 할 수 있습니다.
   */
  async tryRead(readFunction) {
    try {
      const INPUT = await readFunction();
      return INPUT;
    } catch (error) {
      OutputView.printError(error.message);
      return false;
    }
  }

  async move() {
    const INPUT = await this.tryRead(readMoving);
    if (!INPUT) {
      await this.move();
      return;
    }
    await this.moveProcess(INPUT);
  }
  /**
   *
   * @param {"U" | "D"} input
   * 유저가 입력한 값을 토대로 움직이는 함수
   */
  async moveProcess(input) {
    const IS_SUCCESS = this.#bridge[this.#bridge_order] === input;
    const FLAG = IS_SUCCESS ? " O " : " X ";
    this.#bridge_up.push(input === "U" ? FLAG : "   ");
    this.#bridge_down.push(input === "D" ? FLAG : "   ");
    OutputView.printMap(this.#bridge_up, this.#bridge_down);
    this.#bridge_order++;
    await this.nextMove(IS_SUCCESS);
  }
  /**
   *
   * @param {boolean} is_sucess
   * 성공 여부를 인자로 받고, 다음 행동을 실행
   */
  async nextMove(is_sucess) {
    if (is_sucess && this.#bridge_order === this.#bridge.length) {
      this.#trial_pass = true;
      OutputView.printResult(this.resultObj());
    }
    if (is_sucess && this.#bridge_order !== this.#bridge.length)
      await this.move();
    if (!is_sucess) await this.retry();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry() {
    // let input;
    // try {
    //   input = await readGameCommand();
    // } catch (error) {
    //   printError(error.message);
    //   this.retry();
    //   return;
    // }
    const INPUT = await this.tryRead(readGameCommand);
    if (!INPUT) {
      await this.retry();
      return;
    }
    if (INPUT === "R") {
      this.#bridge_down = [];
      this.#bridge_up = [];
      this.#bridge_order = 0;
      this.#trial_count++;
      await this.move();
    }
    if (INPUT === "Q") OutputView.printResult(this.resultObj());
  }

  resultObj() {
    return {
      bridge_up: this.#bridge_up,
      bridge_down: this.#bridge_down,
      trial_pass: this.#trial_pass,
      trial_count: this.#trial_count,
    };
  }
}

module.exports = BridgeGame;
