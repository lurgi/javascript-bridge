/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 * `BridgeMaker`의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현한다.
   */
  makeBridge(size, generateRandomNumber) {
    const makeCallback = () => {
      const RANDOM_VALUE = generateRandomNumber();
      if (RANDOM_VALUE) return "U";
      if (!RANDOM_VALUE) return "D";
    };
    const BRIDGE = Array.from({ length: size }, makeCallback);
    return BRIDGE;
  },
};

module.exports = BridgeMaker;
