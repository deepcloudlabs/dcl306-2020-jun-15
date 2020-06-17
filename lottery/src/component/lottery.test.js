import React from "react";
import Lottery from "./lottery";
import {render} from "@testing-library/react";

test('renders lottery panel', () => {
    const lottery = render(<Lottery/>);
    const column = lottery.queryByLabelText(/column/i);
    expect(column).toBeTruthy();
});