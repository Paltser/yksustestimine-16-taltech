import {isikukood} from "../k1";

test('positiivne', () => {
    expect(new isikukood("37605030299").sugu()).toBe("m");

    expect(new isikukood("37605030299").synniaasta()).toBe(1976);
    expect(new isikukood("50506122772").synniaasta()).toBe(2005);
});