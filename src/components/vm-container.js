import {VmForm} from "./vmForm";
import {Button} from "@material-ui/core";
import {useEffect, useState} from "react";
import {CurrentVms} from "./current-vms";

export function VmContainer({callback}) {
    const [vms, setVms] = useState([]);
    const [formOpen, setFormOpen] = useState(true);

    const onClick = () => {
        setFormOpen(true)
    }

    useEffect(() => {
        callback(vms)
    }, [callback, vms])


    const callbackf = (vm) => {
        setVms((state) => {
            return [...state, vm]
        })
        setFormOpen(false)
    }

    return (
        <div style={{display: 'flex'}}>
            {
                formOpen ? <VmForm callback={callbackf}/> :
                    <Button variant="contained" color="primary" onClick={onClick} style={{height: 50, width: 200}}>
                        ADD VM
                    </Button>
            }
            <CurrentVms data={vms}/>
        </div>
    );
}

