import { useState } from "react";
import { useBetween } from "use-between";

import { createGraph } from "./Graph";

export const input = [['ATH', 'EDI'], ['ATH', 'GLA'], ['ATH', 'CTA'], ['BFS', 'CGN'], ['BFS', 'LTN'], ['BFS', 'CTA'], ['BTS', 'STN'], ['BTS', 'BLQ'], ['CRL', 'BLQ'], ['CRL', 'BSL'], ['CRL', 'LTN'], ['DUB', 'LCA'], ['LTN', 'DUB'], ['LTN', 'MAD'], ['LCA', 'HAM'], ['EIN', 'BUD'], ['EIN', 'MAD'], ['HAM', 'BRS'], ['KEF', 'LPL'], ['KEF', 'CGN'], ['SUF', 'LIS'], ['SUF', 'BUD'], ['SUF', 'STN'], ['STN', 'EIN'], ['STN', 'HAM'], ['STN', 'DUB'], ['STN', 'KEF']];

export const GetSetPath = () => {
    const [path, setpath] = useState([]);

    return {path, setpath};
}

const generateConnections = () => {
    let startInput: HTMLInputElement = document.querySelector('#start');
    let endInput: HTMLInputElement = document.querySelector('#end');

    let start = startInput.value;
    let end = endInput.value;

    return createGraph(input).shortestPath(start, end);
}

export const ButtonToFindPath = () => {
    const {setpath} = useBetween(GetSetPath);

    let p = generateConnections;

    return (
        <button onClick = {() => setpath(p)} className="btn btn-primary">Find connection</button>
    )
}