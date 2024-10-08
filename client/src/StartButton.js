import "./startButton.css";
import { useNavigate } from "react-router-dom";

const StartButton = ({ onClick }) => {
  let navigate = useNavigate();
  const ChangePath = () => {
    let path = "/game";
    navigate(path);
  };
  return (
    <div>
      <button className="startButton" onClick={ChangePath}>
        &gt; start...
      </button>
    </div>
  );
};

export default StartButton;
