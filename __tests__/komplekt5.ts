import {taishaaliku_loendus} from "../taishaalik";

test('taishaalik', () => {
    expect(taishaaliku_loendus("abc")).toBe(1);
    expect(taishaaliku_loendus("ae")).toBe(2);
    expect(taishaaliku_loendus("a")).toBe(1);
    expect(taishaaliku_loendus("aei")).toBe(3);



});