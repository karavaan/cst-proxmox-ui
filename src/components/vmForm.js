import {useState, useEffect} from "react";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

export function VmForm({callback}) {
    const [isoValues, setIsoValues] = useState();
    const [iso, setIsoForm] = useState();
    const [name, setNameForm] = useState();
    const [ram, setRamForm] = useState();
    const [cpuSockets, setCpuSocketsForm] = useState();
    const [cpuCores, setCpuCoresForm] = useState();
    const [hardDiskSize, setHardDiskSizeForm] = useState();

    useEffect(() => {
        fetch('/available-iso').then(x => x.json()).then(data => setIsoValues(data));
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        callback({iso, name, ram, cpuCores, cpuSockets, hardDiskSize})
    }

    if (!isoValues) {
        return null
    }

    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit} style={{display: 'inline-grid', width: 400}}>
            <TextField id="standard-basic" label="name" value={name} placeholder="practicum cst"  onChange={(e) => setNameForm(e.target.value)}/>
            <TextField id="standard-basic" label="ram" type="number" value={ram} placeholder={8196}  onChange={(e) => setRamForm(e.target.value)}/>
            <TextField id="standard-basic" label="cpu sockets" type="number" value={cpuSockets} placeholder={2}  onChange={(e) => setCpuSocketsForm(e.target.value)}/>
            <TextField id="standard-basic" label="cpu cores" type="number" value={cpuCores} placeholder={2}  onChange={(e) => setCpuCoresForm(e.target.value)}/>
            <TextField id="standard-basic" label="hdd size" type="number" value={hardDiskSize} placeholder={60}  onChange={(e) => setHardDiskSizeForm(e.target.value)}/>
            <FormControl>
                <InputLabel id="demo-simple-select-label">ISO</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={iso}
                    onChange={(e) => setIsoForm(e.target.value)}
                >
                    {isoValues.map((item) => <MenuItem value={item.volid}>{item.volid}</MenuItem>)}
                </Select>
            </FormControl>
            <button>submit</button>
        </form>

    );
}
