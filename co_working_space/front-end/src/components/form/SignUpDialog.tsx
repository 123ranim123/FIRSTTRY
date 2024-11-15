import { FC } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Form from "./Form";

interface SignUpDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignUpDialog: FC<SignUpDialogProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>Sign Up</Button>
      </DialogTrigger>
      <DialogContent>
        <Form />{" "}
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
