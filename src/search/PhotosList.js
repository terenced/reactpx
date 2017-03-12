import React from "react";
import {Card} from "semantic-ui-react";
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
      <Card.Group itemsPerRow={4}>
        {
          this.props.photos.map((photo) =>
            <PhotoItem key={photo.id} {...photo} />
            )
        }
      </Card.Group>
    );
  }
}
