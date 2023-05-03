import {mitu_a_taht} from "../a_taht";

test("a_arv", () => {
    expect(mitu_a_taht("a")).toBe(1);
    expect(mitu_a_taht("aa")).toBe(2);
    expect(mitu_a_taht("aaa")).toBe(3);
    expect(mitu_a_taht("A")).toBe(1);
    expect(mitu_a_taht("AA")).toBe(2);
    expect(mitu_a_taht("AAA")).toBe(3);
    expect(mitu_a_taht("aA")).toBe(2);

});