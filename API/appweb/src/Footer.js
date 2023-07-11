import React from "react";
import { Table, NavLink } from 'reactstrap';
import axios from 'axios'
const Footer = (props) => {

    axios.get('http://localhost:5000/produtos').then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    return (
        <Table borderless>
            <thead>
                <tr>
                <th>
                    ID
                </th>
                <th>
                    Produto
                </th>
                <th>
                    Variação do Preço
                </th>
                <th>
                    Disponiblidade
                </th>
                <th>
                    Loja
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">
                    1
                </th>
                <td>
                    Chuteiras de Futebol
                </td>
                <td>
                    49.99€ até 309.99
                </td>
                <td>
                    Nike
                </td>
                <td>
                <NavLink href="https://www.nike.com/pt/en/w/mens-football-shoes-1gdj0znik1zy7ok">Clique aqui!</NavLink> 
                </td>
                </tr>
                <tr>
                <th scope="row">
                    4
                </th>
                <td>
                    Mochilas e Sacos 
                </td>
                <td>
                    5.99€ até 570.26€
                </td>
                <td>
                    Sportzone
                </td>
                <td>
                <NavLink href="https://www.sprintersports.com/pt/mochilas-homem">Clique aqui!</NavLink> 
                </td>
                </tr>
                <tr>
                <th scope="row">
                    2
                </th>
                <td>
                    Equipamento FC.PORTO
                </td>
                <td>
                    70.00€ até 85.00€
                </td>
                <td>
                    Newbalance
                </td>
                <td>
                <NavLink href="https://www.newbalance.pt/pt/desportos/futebol/football-club-product/fc-porto/">Clique aqui!</NavLink> 
                </td>
                </tr>
                <tr>
                <th scope="row">
                    5
                </th>
                <td>
                    Bolas Basquetebol
                </td>
                <td>
                    2.99€ até 100.78€
                </td>
                <td>
                    Sportzone
                </td>
                <td>
                <NavLink href="https://www.sprintersports.com/pt/bolas-basquetebol">Clique aqui!</NavLink> 
                </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Footer;