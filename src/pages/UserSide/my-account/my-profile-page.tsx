import { Separator } from "@/components/ui/separator";
import SettingsLayout from "./layout";
import PersonalInformationForm from "./Profile-form";
import ProfileKycDetails from "./Profile-Kyc-Details";

export default function SettingsProfilePage() {
  return (
    <SettingsLayout>
      <div className="space-y-5 h- bg-red-">
        <div>
          <p className="text-sm text-muted-foreground">Personal Information.</p>
        </div>
        {/* <Separator /> */}
        <div className="h-full w-full flex justify-between  max-w-screen-xl">
          <div className="w-1/2">
            <PersonalInformationForm />
          </div>
          <div className="w-1/2 h-fit">
            <ProfileKycDetails />
          </div>
        </div>
        {/* ===   Address Details Starts here === */}
        <Separator />
        <div className="">
          
        </div>
      </div>
    </SettingsLayout>
  );
}
