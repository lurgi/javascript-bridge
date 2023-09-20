const { Console } = require("@woowacourse/mission-utils");

function asyncLead() {
  return new Promise((resolve) => {
    Console.readLine("테스트용 입력입니다", (input) => {
      console.log(`입력값은 ${input}입니다`);
      resolve("ㅗㅑ");
    });
  });
}
async function run() {
  const results = await asyncLead();
  console.log("run", results);
}
run();
