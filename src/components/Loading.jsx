import loading_img from "../assets/loading.svg";

export default function Loading() {
  return (
    <div className="element" id="loading">
      <img id="loading-img" src={loading_img} alt="loading" />
    </div>
  );
}
