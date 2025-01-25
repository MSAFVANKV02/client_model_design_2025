import StoreRegisterForm from "./store_register_form";


export default function StoreRegisterPage() {
  return (
    <div className="h-screen w-full flex flex-row-reverse">
       
        <div className="xl:w-[60%] xl:flex hidden justify-end"
        style={{
            backgroundImage: `url('/auth/annie-spratt-hCb3lIB8L8E-unsplash.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            margin: '0 auto',
            flexWrap: 'wrap',
        }}
        >
            <h1 className="m-2 text-2xl select-none">Ayaboo.com</h1>
        </div>
        <div className="xl:flex-grow h-full">
            <StoreRegisterForm />
        </div>

    </div>
  )
}