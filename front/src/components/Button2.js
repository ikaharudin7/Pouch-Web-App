import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

// Currently works with the file placed in the public folder
// Comment out later
const collection = 
  {
    img: 'ronaldo.png.png',
    name: 'Soccer Legends', 
    width: '100%',
  }
;

// Sets height of button and image
const imageHeight = 400;


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: imageHeight,
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


// Switch to
// export default function ButtonBases({collection}) {

export default function ButtonBases2() {


  if (Object.keys(collection).length === 0) {
    return (
      <div>
        Loading...
      </div>
    );}

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>

        <ImageButton
          focusRipple
          key={collection.name}
          style={{
            width: '100%',
          }}
          href = "/collection_2" 
        >

          <img src = {collection.img} alt = {collection.name} height = {imageHeight} style = {{maxWidth: "100%"}}/>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {collection.name}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
    </Box>
  );
}