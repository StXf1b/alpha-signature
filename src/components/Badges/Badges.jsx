import "./Badges.css"

/*
 Props:
    * variant: string → Style variant of the badge (e.g. "primary", "success", "warning", "danger", "info")
    * children: ReactNode → Content to be displayed inside the badge
    * className: string → Additional CSS classes to apply to the badge
    * style: React.CSSProperties → Inline styles for the badge
    * outlined: boolean → Whether to apply outlined styling
*/

export function Badges({variant = "primary", children, className = "", style = {}, outlined = false}) {
    // * available style variants
    // * primary
    // * success
    // * warning
    // * danger
    // * info 
  return (
    <div className={`badge badge-${variant} ${className} ${outlined ? "badge-outlined" : ""}`} style={style}>
      {children}
    </div>
  )
}

