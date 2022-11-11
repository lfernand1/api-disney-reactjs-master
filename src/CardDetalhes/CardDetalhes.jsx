import "./CardDetalhes.css";
import Modal from "components/Modal/Modal";

function CardDetalhesModal({ cards , closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="PaletaDetalhesModal">
      <div className='post'>             
              <img src={ cards.imageUrl } />
              <div className='postgeral'>
                <h2>Nome:</h2>
                <p>{ cards.name }</p>
                <h2>Filmes:</h2>
                <p>{ cards.films[0] ? cards.films[0] : "Não existente!" }</p>
                <h2>Programas de TV:</h2>
                <p>{ cards.tvShows[0] ? cards.tvShows[0] : "Não existente!" }</p>
                <h2>Curta-metragens:</h2>
                <p>{ cards.shortFilms[0] ? cards.shortFilms[0] : "Não existente!" }</p>
              </div>
            </div>
            </div>
    </Modal>
  );
}

export default CardDetalhesModal;