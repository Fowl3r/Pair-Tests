import { gameOfLife } from "./verifier";

describe("cells", () => {
    it("has fewer than two neighbours, it dies", () => {
        const result = gameOfLife(1);
        expect(result).toBe("dies");

    })

    describe("cells", () => {
        it("has more than three neighbours, it dies", () => {
            const result = gameOfLife(4);
            expect(result).toBe("dies");
        })
    })

    describe("cells", () => {
        it("has three neighbours, it survives", () => {
            const result = gameOfLife(3);
            expect(result).toBe("lives");
        })
    })

    describe("cells", () => {
        it("has two neighbours, it survives", () => {
            const result = gameOfLife(2);
            expect(result).toBe("lives");
        })
    })

    describe("cells", () => {
        it("dead cell with exactly three live neighbours lives", () => {
            const result = gameOfLife(3, false);
            expect(result).toBe("lives");
        })
    })

})

