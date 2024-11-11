import { useState } from "react";

function MainInfo() {
  const [color, setColor] = useState("");
  const [rcolor, setRcolor] = useState({});

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    document.body.style.backgroundColor = newColor;

    const rgbColor = hexToRgb(newColor);
    if (rgbColor) {
      setRcolor(rgbColor);
    } else {
      // Handle invalid color input
      console.error("Invalid hex color code:", newColor);
      setRcolor({});
    }
  };

  return (
    <section className="main-info-section pt-14" id="about">
      <div className="text-center">Some Info about the Website</div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Selected Color: {color}</p>
      <p>
        Selected Color in RGB:
        {rcolor.r && rcolor.g && rcolor.b
          ? `rgb(${rcolor.r}, ${rcolor.g}, ${rcolor.b})`
          : "Invalid color"}
      </p>
    </section>
  );
}

export default MainInfo;
