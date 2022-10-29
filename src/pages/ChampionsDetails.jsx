import React, { Component } from 'react'
import { connect } from 'react-redux';
class ChampionsDetails extends Component {
  render() {
    const { match: { params: { id } }, championReducer: { championsList } } = this.props;
    return (
      <>
        <div>ChampionsDetails</div>
        <h1>{championsList[id].name}</h1>
        <p>{championsList[id].partype}</p>
        <p>{championsList[id].info.attack}</p>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  championReducer: state.ChampionReducer,
});

export default connect(mapStateToProps)(ChampionsDetails);
