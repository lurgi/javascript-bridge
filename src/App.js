const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #bridgeGame
   play() {
    OutputView.printStart();
    
    this.#bridgeGame = new BridgeGame()

    this.#playBridge()
    this.#playUserTurn()
    //TODO 결과 값 출력
  }

  #playBridge(){
    const BRIDGE_LEN = InputView.readBridgeSize();
    const BRIDGE = makeBridge(BRIDGE_LEN, BridgeRandomNumberGenerator)
    this.#bridgeGame.bridge = BRIDGE
  }

  #playUserTurn(){
    const USER_INPUT = InputView.readMoving();
    const RESULT = this.#bridgeGame.move(USER_INPUT)

    if(RESULT === "pass") this.#playUserTurn()
    if(RESULT === "fail") this.#playUserResult()
    if(RESULT === "end") return
  }

  #playUserResult(){
    // R혹은 Q를 입력받는다.
    // 예외처리
    // R이면 시도횟수 +1 #playUserTurn() 호출
  }
}

module.exports = App;
