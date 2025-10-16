// imports
import "../../styles/settings.css";
import "./Loader.css";


function Loader({ text }) {
    // * text → loading text
    return (
        <div className="loader-wrapper">
        <span className={"loader"}></span>
        {text && <span className="loader-text">{text}</span>}
        </div>
    );
}

function LoaderBouncing({ text }) {
    // * text → loading text
    return (
      <div className="loader-row">
        <div className="bouncing-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        {text && <div className="loader-text">{text}</div>}
      </div>
    )
}
// Exports
export { Loader, LoaderBouncing }