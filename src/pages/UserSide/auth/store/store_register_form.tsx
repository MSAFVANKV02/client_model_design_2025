import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Use named import
import { useEffect } from "react";
import StoreCreationPage from "./store-creation/store-creation-page";

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkxZjQ2MmI1YzcxNjBiYmMxNWVkMGYiLCJtb2JpbGUiOiI3MDM0MzU5MzMwIiwiaWF0IjoxNzM3OTYyMDcyLCJleHAiOjE3NDA1NTQwNzJ9.itUpIK6bqIYeFydwmN9BxVuFWR2AaZgA4bNLIMHMu_Q

interface CustomJwtPayload extends JwtPayload {
  mobile: string;  // Define the mobile field here
}

export default function StoreRegisterForm() {
  const { token } = useParams();
  const navigate = useNavigate();

  // Decode the JWT token and extract the payload
  const decodedToken: CustomJwtPayload | null = token ? jwtDecode(token) : null;

  useEffect(()=>{
    const mobile =  localStorage.getItem("store_reg_num") ?? "";
    const decodedMobile = decodedToken?.mobile; // Get the mobile number from decoded token
      
    // console.log(decodedMobile);
    
    if(mobile !== decodedMobile){
      navigate('/become/store/register');
    }

  },[decodedToken?.mobile, navigate])

  return (
    <div>
      {/* {decodedToken ? (
        <pre>{JSON.stringify(decodedToken, null, 2)}</pre> // Display the decoded token in a readable format
      ) : (
        <p>No token available or invalid token.</p>
      )} */}
      <StoreCreationPage />
    </div>
  );
}
