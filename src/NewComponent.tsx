import React from "react";
import {FilterType} from "./App";

type moneyType = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentType = {
    money: Array<moneyType>
    onClickHandler: (value: FilterType) => void

}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((m, index) => {
                    return (
                        <li key={index}>
                            <span> {m.banknote}</span>
                            <span> {m.nominal}</span>
                            <span> {m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickHandler('all')}>all</button>
                <button onClick={() => props.onClickHandler('ruble')}>ruble</button>
                <button onClick={() => props.onClickHandler('dollar')}>dollar</button>
            </div>
        </>
    )
}