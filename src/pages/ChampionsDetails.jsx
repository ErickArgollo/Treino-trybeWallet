import React, { Component } from 'react'
import { connect } from 'react-redux';
import { thunkVideoList, thunkChampionList } from '../redux/actions/index';

class ChampionsDetails extends Component {
  state = {
    teste: false,
  }
  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { dispatch } = this.props;
    await dispatch(thunkChampionList())
    await dispatch(thunkVideoList(id))

    this.setState({
      teste:true,
    })
  }

  render() {
    const { match: { params: { id } }, championReducer: { championsList }, videoID, isLoading } = this.props;
    const { teste } = this.state;
    return (
      <>
      {
        teste && <div>
          <div>ChampionsDetails</div>
          <h1>{championsList[id].name}</h1>
          <p>{championsList[id].partype}</p>
          <p>{championsList[id].info.attack}</p>
        </div>
        
      }
        { teste &&  <iframe src={`https://www.youtube.com/embed/${videoID[0].id.videoId}` }></iframe> }
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  championReducer: state.ChampionReducer,
  videoID: state.ChampionVideoReducer.videoID,
  isLoading: state.ChampionVideoReducer.isLoading,
});

export default connect(mapStateToProps)(ChampionsDetails);
