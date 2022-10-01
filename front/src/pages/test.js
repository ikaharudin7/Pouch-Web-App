
import React from 'react'


const Test = () => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/view_collection')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  console.log(data)



  return (
    <div>
      test
      {/* {cards} */}
    </div>
  );
};

export default Test;