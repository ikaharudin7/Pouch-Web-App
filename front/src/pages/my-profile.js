import ButtonBases from '../components/Button';

const Profile = () => {
  return (
    <div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'top',
            color: 'white',
   
            //   height: '100vh',      
        }}>

            <h1>This is a test page</h1>
          
        </div>,

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'bottom',
        }}>
            
            <img src="https://cdn1.dotesports.com/wp-content/uploads/2022/03/22193248/1999-Pokemon-Base-Set-Shadowless-1st-Edition-Holo-Charizard-605x1024.jpg" alt="First Edition Shadowless Holographic Charizard" width = "20%"/>
            
            
        </div>,
        <div style= {{
            display: 'flex',
            justifyContent: 'center'
        }}>
                <h3>First Edition Shadowless Holographic Charizard</h3>
        </div>,
        <div>
            <ButtonBases />
        </div>
    </div>
  );
};

export default Profile;