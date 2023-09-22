const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { readBridgeSize } = require("./InputView");
const { printStart } = require("./OutputView");
class App {
  #bridge_size;
  async play() {
    /**
     * 1. 다리를 생성한다.
     *    BridgeMaker.makeBridge() 함수를 통해 클래스 생성을 통해서.
     * 2. 다리를 건넌다
     *    BridgeGame.move()함수
     * 3. 재시작 혹은 게임 종료
     *    BridgeGame.retry()함수 or BridgeGame().end()
     */
    printStart();
    //다리를 생성한다.
    const BRIDGE = await this.makeBridgeToReadLenth();
    console.log(BRIDGE);
    //다리게임 시작 건넌다.
    const BRIDGE_GAME = new BridgeGame(BRIDGE);
    BRIDGE_GAME.move();
  }
  /**
   * @returns {string[]}
   * 1. 사이즈를 입력받고 다리를 생성합니다.
   */
  async makeBridgeToReadLenth() {
    while (true) {
      try {
        this.#bridge_size = await readBridgeSize();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return BridgeMaker.makeBridge(this.#bridge_size, generate);
  }
}

module.exports = App;
