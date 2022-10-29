import React, { Component } from 'react'
import { connect } from 'react-redux';
import { thunkChampionList, championSelected } from '../redux/actions';
import ListOfChampions from '../Components/ListOfChampions';

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
    filteredInput: '',
    filteredChampion: {},
    showAll: true,
  }

  handleChange = ({ target }) => {
    this.setState({
      inputChampion: target.value
    })
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkChampionList())
  }

  filteredChampion = () => {
    const { filteredInput } = this.state;
    const { championReducer } = this.props;
    const champions = Object.values(championReducer.championsList);
    const filteredChampion =  champions.filter((e) => e.name.toUpperCase().includes(filteredInput.toUpperCase()))[0]
    console.log(filteredChampion)
    this.setState({
        filteredChampion,
        showAll: false,
    })
  }

  searchButton = () => {
    const { inputChampion } = this.state;
    const { dispatch } = this.props;
    dispatch(championSelected(inputChampion));

    this.setState({
      filteredInput: inputChampion, 
      inputChampion: '',
    }, this.filteredChampion )
    
  }

  render() {
    const { championReducer } = this.props;
    const { inputChampion, showAll, filteredChampion } = this.state;
    const champions = Object.values(championReducer.championsList);

    return (
      <>
        <div>
          <input type="text" value={inputChampion} name="" id="" onChange={this.handleChange} />
          <button
            type="button"
            onClick={this.searchButton}
          >PROCURA AE</button>
        </div>
        {   showAll ? <div>
             {
                  championReducer.isLoading ? <p>Carregando...</p>
                 : champions.map((e) => <ListOfChampions key={e.id} champion={ e } />) 
             }
             </div>
             : <ListOfChampions champion={ filteredChampion } />
        }
       
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  // championsList: state.ChampionReducer.championsList,
  // loading: state.ChampionReducer.isLoading,
  championReducer: state.ChampionReducer,
})

export default connect(mapStateToProps)(MainPage)