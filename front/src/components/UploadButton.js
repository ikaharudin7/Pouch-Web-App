import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import { ButtonBase, Stack, Typography } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    borderStyle: 'outset',
    height: 200,
    width: 200,
    border: 2,
    borderRadius: 4,
    color: 'white',
    backgroundColor: 'grey',
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },

    },
  }));


// Code Based on https://javascript.plainenglish.io/how-to-add-a-file-input-button-and-display-a-preview-image-with-react-2568d9d849f5
export default function UploadButton({item, setItem}) {
  const [image, setImage] = useState(item.img);

  console.log(image)

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
    if (file.size > 2e6) {
      
      window.alert("Please upload a file smaller than 2 MB");
    } else {
      const base64 = await convertToBase64(file);
      setImage(base64);
      setItem({...item, img: base64});
    }
    
  };


  return (
    
    <>
    
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => {handleFileUpload(e)}}

      />

      <label htmlFor="select-image">
        <ImageButton variant="contained" color="primary" component="span" >
            {image && (<img src={item.img} height="200px" style= {{borderStyle: "outset"}}/>)}
            <Stack sx={{alignItems: 'center'}}>
                {!image && (<AddAPhotoIcon sx = {{m: 1}}/>)}
                {!image && (<Typography sx = {{m: 1}}>Upload Image</Typography>)}
            </Stack>
            
        </ImageButton>
      </label>
    </>
  );
};
