import { getAuth } from "firebase/auth";
import app from "../../firebase.config";

const AuthProvider = () => {

    const auth = getAuth(app);
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;