import React, {useState} from "react";
import {TextField} from "@material-ui/core";

export function UserContainer({callback}) {
    const [value, setValue] = useState();

    const onChange = (e) => {
        let input = e.target.value;
        setValue(input);
        const data = input.split('\n').map(a => {
            return a.split(',').map(q => q.trim())
        })
        callback(data)
    }

    return (
        <TextField
            id="outlined-multiline-static"
            label="User & groups"
            value={value}
            onChange={onChange}
            multiline
            rows="4"
            margin="normal"
            variant="outlined"
            placeholder={`mike, johan, james${'\n'}quint, caleb, james`}
        />
    );
}
