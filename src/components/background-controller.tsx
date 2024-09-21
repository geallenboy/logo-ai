import { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "@/components/color-picker-controller";
import { UpdateStorageContext } from "@/context/update-storage-context";
import { storageProps } from "@/lib/type";

const BackgroundController = () => {
  const storageValueString = localStorage.getItem("value");
  const storageValue = storageValueString
    ? (JSON.parse(storageValueString) as storageProps)
    : null;
  const [rounded, setRounded] = useState(
    storageValue?.bgRounded ? storageValue?.bgRounded : 100
  );
  const [padding, setPadding] = useState(
    storageValue?.bgPadding ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue?.bgColor ? storageValue?.bgColor : "#fff"
  );

  const { setUpdateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [rounded, padding, color]);
  return (
    <div>
      <div>
        <div className="py-2">
          <div className="p-2 flex justify-between items-center">
            <span>圆形</span>
            <span>{rounded}px</span>
          </div>
          <Slider
            defaultValue={[rounded]}
            step={1}
            max={512}
            onValueChange={(e) => setRounded(e[0])}
          />
        </div>
        <div className="py-2">
          <div className="p-2 flex justify-between items-center">
            <span>填充</span>
            <span>{padding}px</span>
          </div>
          <Slider
            defaultValue={[padding]}
            step={1}
            max={100}
            onValueChange={(e) => setPadding(e[0])}
          />
        </div>
        <div className="py-2">
          <div className="p-2 flex justify-between items-center">
            <span>颜色</span>
          </div>
          <ColorPickerController
            hideCpntaoller={false}
            color={color}
            selectedColor={(co) => setColor(co)}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundController;
