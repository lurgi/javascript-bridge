const ERROR_MESSAGE = {
  sizeError: "[ERROR] 입력값은 3이상 20이하의 수 이어야 합니다.",
};

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    this.makeBridgeValid(size);
    return Array.from({ length: size }, () => {
      const RANDOM = generateRandomNumber();
      if (RANDOM) {
        return "U";
      }
      return "D";
    });
  },

  makeBridgeValid(size) {
    if (typeof size !== "number") {
      throw new Error(ERROR_MESSAGE.sizeError);
    }
    if (size < 3 || size > 20) {
      throw new Error(ERROR_MESSAGE.sizeError);
    }
  },
};

module.exports = BridgeMaker;
