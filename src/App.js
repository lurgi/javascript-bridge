const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");

const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  bridgeGame;

  play() {
    OutputView.printStart();

    this.bridgeGame = new BridgeGame();

    this.#playBridge();
    this.#playUserTurn();
  }

  #playBridge() {
    try {
      const BRIDGE_LEN = InputView.readBridgeSize();
      const BRIDGE = BridgeMaker.makeBridge(
        BRIDGE_LEN,
        BridgeRandomNumberGenerator.generate
      );
      this.bridgeGame.bridge = BRIDGE;
    } catch (err) {
      OutputView.print(err.message);
      this.#playBridge();
    }
  }

  #playUserTurn() {
    try {
      const USER_INPUT = InputView.readMoving();
      const RESULT = this.bridgeGame.move(USER_INPUT);

      this.playResultProgress();
      if (RESULT === "pass") this.#playUserTurn();
      if (RESULT === "fail") this.#playUserFailResult();
      if (RESULT === "end") this.playResultEnd();
    } catch (err) {
      OutputView.print(err.message);
    }
  }

  #playUserFailResult() {
    const USER_INPUT = InputView.readGameCommand();
    const RESULT = this.bridgeGame.retry(USER_INPUT);
    if (RESULT) this.#playUserTurn();
  }

  playResultProgress() {
    const [upState, downState] = this.#getBridgeString();
    OutputView.printMap(upState, downState);
  }

  playResultEnd() {
    const [upState, downState] = this.#getBridgeString();
    OutputView.printResult(this.bridgeGame, upState, downState);
  }

  #getBridgeString() {
    const STRINGS = {
      BLANK: " ",
      PASS: "O",
      FAIL: "X",
    };

    const CURRENT = this.bridgeGame.getCurrent();
    let upState = [];
    let downState = [];
    this.bridgeGame.bridge.forEach((state, index) => {
      if (index === CURRENT) {
        this.#sameIndexCurrent(upState, downState, { state, strings: STRINGS });
      }
      if (index < CURRENT) {
        this.#notSameIndexCurrent(upState, downState, {
          state,
          strings: STRINGS,
        });
      }
    });
    return [upState, downState];
  }

  #sameIndexCurrent(upState, downState, { state, strings }) {
    if (state === "U") {
      downState.push(strings.FAIL);
      upState.push(strings.BLANK);
    }
    if (state === "D") {
      upState.push(strings.FAIL);
      downState.push(strings.BLANK);
    }
  }

  #notSameIndexCurrent(upState, downState, { state, strings }) {
    if (state === "U") {
      upState.push(strings.PASS);
      downState.push(strings.BLANK);
    }
    if (state === "D") {
      downState.push(strings.PASS);
      upState.push(strings.BLANK);
    }
  }
}

module.exports = App;
