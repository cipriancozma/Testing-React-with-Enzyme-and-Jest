import comments from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it("handle actions of type SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New comment"
    }

    const newState = comments([], action);

    expect(newState).toEqual(['New comment']);
})


it("handles actions with unknown type", () => {
    const newState = comments([], { type: "Ciprian"});
    expect(newState).toEqual([]);
})
