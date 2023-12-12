const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OUTPUT_MESSAGES = {
  start: "다리 건너기 게임을 시작합니다.",
  gameResult: "최종 게임 결과",
  state: (state) => `[ ${state.join(" | ")} ]`,
  success: (bol) => `게임 성공 여부: ${bol ? "성공" : "실패"}`,
  try: (number) => `총 시도한 횟수: ${number}`,
};

const OutputView = {
  printStart() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.start);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(upState, downState) {
    MissionUtils.Console.print(OUTPUT_MESSAGES.state(upState));
    MissionUtils.Console.print(OUTPUT_MESSAGES.state(downState));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(bridgeGame, upState, downState) {
    MissionUtils.Console.print(OUTPUT_MESSAGES.gameResult);
    this.printMap(upState, downState);

    const IS_SUCCESS = bridgeGame.getCurrent() === bridgeGame.bridge.length;
    MissionUtils.Console.print(OUTPUT_MESSAGES.success(IS_SUCCESS));

    const TRY = bridgeGame.getTry();
    MissionUtils.Console.print(OUTPUT_MESSAGES.try(TRY));
  },

  print(string) {
    MissionUtils.Console.print(string);
  },
};

module.exports = OutputView;
