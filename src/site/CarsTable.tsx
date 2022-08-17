import React from "react";

type CarsTableType={
    list: Array<CarType>
}

type CarType ={
    manufacturer: string
    model: string
}

export const CarsTable = (props: CarsTableType) => {
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.list.map( l => <tr><td>{l.manufacturer}</td><td>{l.model}</td></tr>)}

        </table>
    );
}