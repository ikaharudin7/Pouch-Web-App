import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import { ButtonBase, Stack, Typography } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios'


const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 120,
    border: 2,
    borderRadius: 4,
    color: 'white',
    backgroundColor: 'grey',
    // [theme.breakpoints.down('sm')]: {
    //   width: '100% !important', // Overrides inline-style
    //   height: 100,
    // },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
    //   '& .MuiTypography-root': {
    //     border: '4px solid currentColor',
    //   },
    },
  }));


// Code Based on https://javascript.plainenglish.io/how-to-add-a-file-input-button-and-display-a-preview-image-with-react-2568d9d849f5
export default function UploadButton() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // const [test, setTest] = useState(null);

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
      
  //   }
  // }, [selectedImage]);

  // const url = "http://localhost:8080/collections/collection_test";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("test")
    
    fetch("http://localhost:8080/collections/collection_test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedImage),
      })
      .then((res)=> res.json())
      .then(()=> {
        console.log(selectedImage);
        console.log(JSON.stringify(selectedImage));
        console.log("POST sent");
      })
  }; 

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(file)
    setSelectedImage({...selectedImage, name: "test", img: base64});
    setImageUrl(URL.createObjectURL(file));
  };
  console.log(selectedImage)

  return (
    
    <form id = "imageUp" onSubmit={handleSubmit}>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => {handleFileUpload(e)}}

      />
      <input type="submit" form="imageUp" value="Up" className="btn" ></input>
      <label htmlFor="select-image">
        <ImageButton variant="contained" color="primary" component="span">
            {imageUrl && selectedImage &&(<img src={imageUrl} alt={selectedImage.name} height="100px" />)}
            <Stack sx={{alignItems: 'center'}}>
                {!imageUrl && !selectedImage && (<AddAPhotoIcon sx = {{m: 1}}/>)}
                {!imageUrl && !selectedImage && (<Typography sx = {{m: 1}}>Upload Image</Typography>)}
            </Stack>
            
        </ImageButton>
      </label>
    </form>
    
  );
};
