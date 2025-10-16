// imports
import "./Avatar.css"

/*
 Props:
    * src: string → Image source URL
    * alt: string → Alternative text for the image
    * style: React.CSSProperties → Inline styles for the image
    * w: string | number → Width of the image
    * h: string | number → Height of the image
    * r: string | number → Border radius of the image
*/
export function Avatar({ src, alt, style, w, h , r}) {
  return (
    <img
        className="avatar"
        src={src}
        alt={alt}
        style={{ width: w, height: h, borderRadius: r, ...style }}
    />
  )
}
