import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId = '60169800618-fmqbdp40nkdcc10miof589m0vabnotja.apps.googleusercontent.com'


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
    
  );
}

export default App;
