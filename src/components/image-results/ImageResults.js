import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Face from 'material-ui/svg-icons/action/face';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {
    render() {
        let imageListContent;
        const {images }= this.props;

        if(images) {
            imageListContent = (
                <GridList cols={3}>
                {images.map(img => (
                    <GridTile
                    title={img.tags}
                    key={img.id}
                    subtitle={
                        <span> jnjh {img.user}

                        </span>
                    }
                    actionIcon={
                        <IconButton>
                        <Face color="green" />

                            </IconButton>
                    }
                    >
                        <img src={img.largeImageURL} alt ="" />
                        </GridTile>
                ))}

                </GridList>
            )
        }
        else
        {
            imageListContent =null;
        }

        return (
            <div>

            {imageListContent}

            </div>
        );
    }

   
    }
    ImageResults.PropTypes = {
        images: PropTypes.array.isRequired
}

export default ImageResults;