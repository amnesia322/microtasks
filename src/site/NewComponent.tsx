import React from "react";

type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map(s => <li key={s.id}>Name: {s.name}, Age: {s.age}</li>)}
        </ul>
    );
}