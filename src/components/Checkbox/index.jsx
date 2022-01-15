import { Input, Label, Indicator } from './styles';

const Checkbox = ({
    value,
    checked,
    onChange,
    name,
    id,
    label,
    disabled
}) => {
    return (
        <Label htmlFor={id} disabled={disabled}>
            {label}
            <Input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <Indicator checked={checked} />
        </Label>
    );
}

export default Checkbox;