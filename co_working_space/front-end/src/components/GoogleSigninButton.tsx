import { ReactNode } from "react";
import { Button } from "./ui/button";

interface GoogleSigninButtonProps {
  children: ReactNode;
}

const GoogleSigninButton = ({ children }: GoogleSigninButtonProps) => {
  const loginWithGoogle = () => {
    console.log("Login With Google");
  };

  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSigninButton;
