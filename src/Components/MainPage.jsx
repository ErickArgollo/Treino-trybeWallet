import React, { Component } from 'react'
import { connect } from 'react-redux';
import { thunkChampionList, championSelected } from '../redux/actions';


// SALVANDO O VALOR DO INPUT NO ESTADO GLOBAL.

// QUAL ACTION VOU USAR? 
//championSelected 

// ONDE PRECISO GUARDAR O VALOR DO INPUT? 
//state

//Como vou guardar esse valor no state local? 
//handleChange

//COMO ENVIAR ESSE VALOR PARA A MINHA ACTION?
// dispatch(nomeDaFuncao(parametroQueElaEsperaReceber))


class MainPage extends Component {

  state = {
    inputChampion: '',
  }

  handleChange = ({target}) => {
    this.setState({
      inputChampion: target.value
    })
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkChampionList())
  }

  searchButton = () => {
    const { inputChampion } = this.state;
    const { dispatch } = this.props;
    dispatch(championSelected(inputChampion));
    this.setState({
      inputChampion: '',
    })
  }
  render() {
    const { championReducer  } = this.props;
    const { inputChampion } = this.state;

    return (
      <div>
        <input type="text" value={ inputChampion } name="" id="" onChange={ this.handleChange }/>
        <button
        type="button"
        onClick={ this.searchButton}
        >PROCURA AE</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // championsList: state.ChampionReducer.championsList,
  // loading: state.ChampionReducer.isLoading,
  championReducer: state.ChampionReducer,
})

export default connect(mapStateToProps)(MainPage)