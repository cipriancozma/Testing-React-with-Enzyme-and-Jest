import { SAVE_COMMENT } from '../types';
import { saveComment } from '../../actions';

describe("saveComment", () => {
    it("has the correct type", () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it("has the correct payload", () => {
        const action = saveComment("Ciprian Comment");

        expect(action.payload).toEqual("Ciprian Comment");

    })
})