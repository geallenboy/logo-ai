import ColorPicker from "react-best-gradient-color-picker";

interface ColorPickerControllerProps {
  hideCpntaoller: boolean;
  selectedColor: (color: string) => void;
  color?: string;
}

const ColorPickerController = ({
  hideCpntaoller = false,
  selectedColor,
  color
}: ColorPickerControllerProps) => {
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(e) => {
          selectedColor(e);
        }}
        hideControls={hideCpntaoller}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
};

export default ColorPickerController;
