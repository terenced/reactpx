import React from "react";
import {Card, Image} from "semantic-ui-react";

export default class PhotoItem extends React.Component {
  static propTypes = {
  }
  render() {
    return (
      <Card>
        <Image
          alt={this.props.name}
          href={`https://www.500px.com${this.props.url}`}
          src={this.props.image_url} />
        <Card.Content>
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Meta>
            by {this.props.user.fullname}
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}
