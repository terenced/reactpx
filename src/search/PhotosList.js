import React from "react";
import {Card, Loader} from "semantic-ui-react";
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
        {!this.props.loading &&
          <Card.Group itemsPerRow={4}
            horizontal
            verticalAlign="middle">
            {
              this.props.photos.map((photo) =>
                <PhotoItem key={photo.id} {...photo} />
                )
            }
          </Card.Group>
        }
      </div>
    );
  }
}
