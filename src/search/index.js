import React, {PropTypes} from "react";
import {Grid, Input, Loader} from "semantic-ui-react";
import PhotosList from "./PhotosList"
import {connect} from 'react-redux';

import * as actions from "./actions";

class Search extends React.Component {
  static propTypes = {
    keyword: PropTypes.string,
    photos: PropTypes.any, // Maybe array, map or object
    searching: PropTypes.bool,
  }

  onKeywordChange(e) {
    e.preventDefault();
    this.props.onKeywordChange(e.target.value);
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Input
            size='large'
            loading={this.props.searching}
            icon={{name: 'search', circular: true}}
            placeholder='Search 500px photos...'
            value={this.props.keyword}
            onChange={this.onKeywordChange.bind(this)}/>
        </Grid.Row>
        <Grid.Row centered={this.props.isSearching}>
          <Loader inline active={this.props.isSearching} />
          {!this.props.isSearching &&
            <PhotosList photos={this.props.photos} />
          }
        </Grid.Row>
      </Grid>
    );
  }
}


function mapStateToProps(state) {
  return {
    keyword: state.search.keyword,
    photos: state.search.photos,
    isSearching: state.search.isSearching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onKeywordChange: (keyword) => dispatch(actions.keywordChanged(keyword)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
