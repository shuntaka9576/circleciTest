import { plus } from "../src/hello";

describe("plus", () => {
  describe.each`
    num1 | num2 | expected
    ${1} | ${2} | ${3}
    ${2} | ${3} | ${5}
  `(`$num1 + $num2`, ({ num1, num2, expected }) => {
    test(`${expected}が返却`, () => {
      const sum = plus(num1, num2);
      expect(expected).toEqual(sum);
    });
  });
});
