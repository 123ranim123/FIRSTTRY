import { FC } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Form from "./Form";

interface SignInDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInDialog: FC<SignInDialogProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <Form />
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
