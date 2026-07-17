import { describe, expect, it } from "vitest";

import { calculateShipping } from "./Shipping";

describe("calculateShipping", () => {

    it("returns free shipping for orders of $1000 or more", () => {
        expect(calculateShipping(1000, 0.04)).toBe(0);
        expect(calculateShipping(1500, 1.2)).toBe(0);
        expect(calculateShipping(2500, 5)).toBe(0);
    });

    it("returns $8 shipping for orders under $1000 weighing up to 0.5kg", () => {
        expect(calculateShipping(999, 0.01)).toBe(8);
        expect(calculateShipping(999, 0.25)).toBe(8);
        expect(calculateShipping(999, 0.5)).toBe(8);
    });

    it("returns $15 shipping for orders under $1000 weighing more than 0.5kg and up to 2kg", () => {
        expect(calculateShipping(999, 0.51)).toBe(15);
        expect(calculateShipping(999, 1.2)).toBe(15);
        expect(calculateShipping(999, 2)).toBe(15);
    });

    it("returns $25 shipping for orders under $1000 weighing more than 2kg", () => {
        expect(calculateShipping(999, 2.01)).toBe(25);
        expect(calculateShipping(999, 3.5)).toBe(25);
        expect(calculateShipping(999, 10)).toBe(25);
    });

});
