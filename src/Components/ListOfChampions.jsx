import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style/ListOfChampions.css'
class ListOfChampions extends Component {

  render() {
    const { champion } = this.props;
    if(!champion){
      return (
        <p>Nenhum Campeão encontrado...</p>
      )
    }
    return (
      <div>
          <p>{champion.name}</p>
          <img className="imghero" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={champion.id} />
          <Link to={`/champion/${champion.id}`}>Detalhes</Link>

      </div>
    )
  }
}

export default ListOfChampions;
