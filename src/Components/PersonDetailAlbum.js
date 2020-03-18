import React, { Component } from "react";

class PersonDetailAlbum extends Component {
  render() {
    return (
      <div className="detailAlbumsListContainer">
        {this.props.photos.map(pic => {
          return (
            <div className="detailsSinglePicContainer" key={pic.cover}>
              <img
                src={`Albums/${this.props.name}/${pic.cover}.jpeg`}
                className="detailAlbumPic"
                alt="1111"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PersonDetailAlbum;
