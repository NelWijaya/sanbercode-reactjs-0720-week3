import React from "react";

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class Table extends React.Component{
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                    {dataHargaBuah.map((item)=>{
                        return(
                            <tr>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>{item.berat/1000} kg</td>
                            </tr>
                            )
                    })}
                </table>
            </div>
        );
    }
}

export default Table;