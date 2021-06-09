import text from "../resources/text";

export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.handleClick}
      className="button"
    >
      { text.getAddresses }
    </button>
  )
}