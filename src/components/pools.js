import {useState, useEffect} from "react";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

export function Pools({callback}) {
    const [available, setAvailable] = useState();
    const [pool, setPools] = useState();

    useEffect(() => {
        fetch('/available-pools').then(x => x.json()).then(data => setAvailable(data));
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        fetch('/pool', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({poolid: pool})
        })
    }

    if (!available) {
        return null
    }

    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit} style={{display: 'inline-grid', width: 400}}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">ISO</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pool}
                    onChange={(e) => setPools(e.target.value)}
                >
                    {available.map((item) => <MenuItem value={item.poolid}>{item.poolid}</MenuItem>)}
                </Select>
            </FormControl>
            <button>Delete</button>
        </form>

    );
}
