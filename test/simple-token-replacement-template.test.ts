import { compileTemplate } from "../src/simple-token-replacement-template";
import * as assert from "assert";

describe("simple-token-replacement-template", function() {
    it("should compile template", () => {
        const result = compileTemplate(`This is {{thing}}`, {
            thing: "pen"
        });
        assert.strictEqual(result, `This is pen`);
    });
    it("should compile template multiples", () => {
        const result = compileTemplate(`Your name is {{name}}. Your age is {{age}}.`, {
            name: "tom",
            age: "18"
        });
        assert.strictEqual(result, `Your name is tom. Your age is 18.`);
    });
    it("should ignore undefined value", () => {
        const result = compileTemplate(`{{missing}}`, {});
        assert.strictEqual(result, `{{missing}}`);
    })
});
