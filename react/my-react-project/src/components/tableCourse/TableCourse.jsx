import React from 'react'

const TableCourse = () => {
    const data = [
        { name: "Manos", age: 45, email: "manos.koufadakis@uicdigital.com" },
        { name: "Manos 2", age: 45, email: "manos2.koufadakis@uicdigital.com" },
        { name: "Manos 3", age: 45, email: "manos3.koufadakis@uicdigital.com" }
    ]
    return (
        <>
            <h2>TableCourse</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableCourse