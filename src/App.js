const { Console } = require("@woowacourse/mission-utils");
const {
  readBridgeSize,
  readMoving,
  readGameCommand,
} = require("../src/InputView");
const { move } = require("../src/BridgeGame");

class App {
  play() {
    // 1. 게임 시작
    Console.print("다리 건너기 게임을 시작합니다.");
    // 2. 다리 길이 입력 받기
    const BRIDGE_DISTANCE = readBridgeSize();
    // 3. 다리 만들기
    const BRIDGE = makeBridge(BRIDGE_DISTANCE);
    // 4. 입력값 받고, 다리의 상황을 리턴해준다.
    move();
    /*4-1.X값일 경우 재 시도 여부를 입력받는다 readGameCommand
    종료 버튼을 입력 받을 시 게임을 끝낸다. 재시도시 3번 반복retry*/
    /*4-2 성공하였다면 게임을 끝낸다*/
  }
}

module.exports = App;
