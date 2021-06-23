import {Table, TableCell, TableContainer, TableHead} from "@material-ui/core";
import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export function CurrentVms({data}) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell align="right">ram</TableCell>
                        <TableCell align="right">cpu-sockets</TableCell>
                        <TableCell align="right">cpu-cores</TableCell>
                        <TableCell align="right">hdd-size</TableCell>
                        <TableCell align="right">iso</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.ram}</TableCell>
                            <TableCell align="right">{row.cpuSockets}</TableCell>
                            <TableCell align="right">{row.cpuCores}</TableCell>
                            <TableCell align="right">{row.hardDiskSize}</TableCell>
                            <TableCell align="right">{row.iso}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
