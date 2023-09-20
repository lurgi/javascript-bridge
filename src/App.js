const { OutputView } = require("../src/OutputView");
const BridgeGame = require("../src/BridgeGame");

class App {
  play() {
    // 1. 게임 시작
    printStart();
    // 2. 다리 길이 입력 받고, 다리 만들기
    const BRIDGE = new BridgeGame();
    /*
     3. 게임을 진행한다.
    */
    BRIDGE.move();
    /*4-1.X값일 경우 재 시도 여부를 입력받는다 readGameCommand
    종료 버튼을 입력 받을 시 게임을 끝낸다. 재시도시 3번 반복retry*/
    /*4-2 성공하였다면 게임을 끝낸다*/
  }
}

module.exports = App;
