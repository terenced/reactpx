import React from "react";
import {Card, Image} from "semantic-ui-react";

export default class PhotoItem extends React.Component {
  formatDescription(description) {
    if (!description){
      return "";
    }
    if (description.length > 200) {
      return "";
    }
    return description;
  }
  render() {
    return (
      <Card raised>
        <Image
          alt={this.props.name}
          href={`https://www.500px.com${this.props.url}`}
          src={this.props.image_url} />
        <Card.Content>
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Meta>
            By {this.props.user.fullname}
          </Card.Meta>
          <Card.Description>
            {this.formatDescription(this.props.description)}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
