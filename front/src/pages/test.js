
import React from 'react'
import UploadButton from '../components/UploadButton';
import FileBase64 from 'react-file-base64'


const Test = () => {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('http://localhost:8080/view_collection')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  
  // console.log(data)



  return (
    <div>
      <form>
      <UploadButton />
      </form>
      
    </div>
  );
};

export default Test;