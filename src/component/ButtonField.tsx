import { Button } from "@fluentui/react-components";


// Define the props interface
interface ButtonFieldProps {
    icon?: React.ReactNode; // Assuming icon is a string. Adjust if it's a different type.
    label: string;
    onClick: () => void; // Define the onClick as a function. Adjust if needed.
}

const ButtonField: React.FC<ButtonFieldProps> = ({icon, label, onClick}) => {

    return (
        <Button appearance="primary" icon={icon} onClick={onClick}>
            {label}
        </Button>
    );
};

export default ButtonField;