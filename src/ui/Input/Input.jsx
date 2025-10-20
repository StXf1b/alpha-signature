// ? TO DO:
// ? - Add icon support (left/right)


import "../../styles/settings.css"; // Global variables
import "./Input.css" // Input-specific styles

/*
  Props:
    * type: string → Input type (e.g. "text", "password", "email", etc.)
    * placeholder: string → Placeholder text for the input
    * value: string | number → Current value of the input
    * name: string → Name attribute for the input
    * onChange: (event: React.ChangeEvent<HTMLInputElement>) => void → Change event handler
    * disabled: boolean → Whether the input is disabled
    * className: string → Additional CSS classes to apply to the input
    * error: boolean → Whether to show error styling
    * success: boolean → Whether to show success styling
*/

export function Input({
    type,
    placeholder = "",
    value,
    name = "input",
    onChange = () => {},
    disabled = false,
    className = "",
    style = {},
    error = false,
    success = false
}) {
  return (
      <input className={`input ${className} ${error ? "error" : ""} ${success ? "success" : ""}`}
        style={style}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
  )
}
