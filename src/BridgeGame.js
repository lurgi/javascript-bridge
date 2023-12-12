const ERROR_MESSAGE = {
  move: "[ERROR] 'U'혹은 'D'값만 입력해주세요.",
};

class BridgeGame {
  #current = 0;
  #try = 1;

  /**@type {("U" | "D" )[]} */
  bridge;

  move(move) {
    this.#moveValid(move);
    if (this.bridge[this.#current] === move) {
      this.#current += 1;
      if (this.bridge.length === this.#current) {
        return "end";
      }
      return "pass";
    }
    return "fail";
  }

  #moveValid(move) {
    if (move !== "U" && move !== "D") {
      throw new Error(ERROR_MESSAGE.move);
    }
  }

  retry(input) {
    if (input === "R") {
      this.#try += 1;
      this.#current = 0;
      return true;
    }
    if (input === "Q") return false;

    throw new Error("[ERROR] 'R'혹은 'Q'값만 입력해주세요.");
  }

  getCurrent() {
    return this.#current;
  }

  getTry() {
    return this.#try;
  }
}

module.exports = BridgeGame;
