import { useParams } from "react-router-dom"


export default function StoreRegisterForm() {
    const {token} = useParams();
  return (
    <div>
        {token}
    </div>
  )
}