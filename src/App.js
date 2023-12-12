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

    this.#generateBridge()
    
    //TODO 플레이어 입력
    //TODO 결과 값 출력
  }

  #generateBridge(){
    const BRIDGE_LEN = InputView.readBridgeSize();
    const BRIDGE = makeBridge(BRIDGE_LEN, BridgeRandomNumberGenerator)
    this.#bridgeGame.bridge = BRIDGE
  }
}

module.exports = App;
