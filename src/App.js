const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
class App {
  async play() {
    /**
     * 1. 다리를 생성한다.
     *    BridgeMaker.makeBridge() 함수를 통해 클래스 생성을 통해서.
     * 2. 다리를 건넌다
     *    BridgeGame.move()함수
     * 3. 재시작 혹은 게임 종료
     *    BridgeGame.retry()함수 or BridgeGame().end()
     */
    Console.print("다리 건너기 게임을 시작합니다.");

    //다리를 생성하는 코드
    function readBridgeSize() {
      return new Promise((resolve, reject) => {
        Console.readLine("다리의 길이를 입력해주세요.", (input) => {
          const INPUT_NUM = parseInt(input);
          if (isNaN(INPUT_NUM)) reject(Error("숫자값을 입력하세요."));
          resolve(INPUT_NUM);
        });
      });
    }

    let bridge_size;
    while (true) {
      try {
        bridge_size = await readBridgeSize();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const BRIDGE = BridgeMaker.makeBridge(bridge_size, generate);
    console.log(BRIDGE);
  }
}

module.exports = App;
