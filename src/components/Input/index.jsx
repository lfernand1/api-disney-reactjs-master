import { Component } from "react";
import './styles.css'
export class Input extends Component{
    render ( ) {
        return (
            <input 
                className="pesquisa"
                onChange={this.props.onChange} 
                value={this.props.value} 
                type="search" 
                placeholder="Pesquisar" 
            />
        )
    }
}