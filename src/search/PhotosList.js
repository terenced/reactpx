import React from "react";
import {List, Loader} from "semantic-ui-react";
import PhotoItem from "./PhotoItem";

export default class PhotosList extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool,
    photos: React.PropTypes.array,
  }

  static defaultProps = {
    loading: false,
    photos: [],
  }

  render() {
    return (
      <div>
        <Loader inline active={this.props.loading} />
        <List
          horizontal
          verticalAlign="middle">
          {this.props.photos.map((photo) => {
            return (
              <List.Item key={photo.id}>
                <PhotoItem {...photo} />
              </List.Item>
            );
          })}
        </List>
      </div>
    );
  }
}
