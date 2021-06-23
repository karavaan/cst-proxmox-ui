import './App.css';
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {VmContainer} from "./components/vm-container";
import {UserContainer} from "./components/user-container";
import {Pools} from "./components/pools";



function App() {
    const [users, setUsers] = useState();
    const [vms, setVms] = useState();
    const [pool, setPool] = useState();

    const onClick = () => {
        fetch('http://localhost:5000/create-vm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vms,
                users,
                pool,
            })
        })
    }

  return (
      <>
        <VmContainer callback={setVms}/>
        <UserContainer callback={setUsers}/>
      <TextField id="standard-basic" label="pool" value={pool} placeholder="practicum cst"  onChange={(e) => setPool(e.target.value)}/>
        <Button variant="contained" color="primary" onClick={onClick} style={{height: 50, width: 200}}>
          DO MAGIC!
        </Button>
          <Pools/>
      </>
  );
}

export default App;
