import React from 'react';
import ImageUploader from 'react-images-upload';
 
class Upload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <ImageUploader
                withPreview={true}
                withIcon={true}
                buttonText='Add Pictures'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif','.jpeg','.tiff']}
                maxFileSize={5242880}
            />
        );
    }
}
export default Upload;