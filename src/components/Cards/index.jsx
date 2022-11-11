import { Component } from "react";
import './styles.css'

export class PostCard extends Component {
    render ( ) {
        return (
            <div className='post'>             
              <img src={ this.props.imageUrl } />
              <div className='postgeral'>
                <h2>Nome:</h2>
                <p>{ this.props.name }</p>
                <h2>Filmes:</h2>
                <p>{ this.props.films[0] ? this.props.films[0] : "Não existente!" }</p>
                <h2>Programas de TV:</h2>
                <p>{ this.props.tvShows[0] ? this.props.tvShows[0] : "Não existente!" }</p>
                <h2>Curta-metragens:</h2>
                <p>{ this.props.shortFilms[0] ? this.props.shortFilms[0] : "Não existente!" }</p>
              </div>
            </div>
        )
    }
}