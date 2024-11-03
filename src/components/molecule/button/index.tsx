import { BaseButton } from "../../../components";

interface ButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
}
export const Button = ({ label, onClick, type = "button" }: ButtonProps) => {
  return (
    <BaseButton variant="default" size="lg" type={type} onClick={onClick}>
      {label}
    </BaseButton>
  );
};
