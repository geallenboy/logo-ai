import { Slider } from "@/components/ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "@/components/color-picker-controller";
import { UpdateStorageContext } from "@/context/update-storage-context";
import { storageProps } from "@/lib/type";
import IconList from "./icon-list";

const IconController = () => {
  const storageValueString = localStorage.getItem("value");
  const storageValue = storageValueString
    ? (JSON.parse(storageValueString) as storageProps)
    : null;
  const [size, setSize] = useState<number>(
    storageValue?.iconSize ? storageValue?.iconSize : 100
  );
  const [rotate, setRotate] = useState(
    storageValue?.iconRotate ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue?.iconColor ? storageValue?.iconColor : "#fff"
  );
  const [icon, setIcon] = useState(
    storageValue?.icon ? storageValue?.icon : "Smile"
  );

  const { setUpdateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const updateValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [size, rotate, color, icon]);

  return (
    <div>
      <IconList
        selectedIcon={(icon) => {
          setIcon(icon);
        }}
      />
      <div className="py-2">
        <div className="p-2 flex justify-between items-center">
          <span>大小</span>
          <span>{size}px</span>
        </div>
        <Slider
          defaultValue={[size]}
          step={1}
          max={512}
          onValueChange={(e) => setSize(e[0])}
        />
      </div>
      <div className="py-2">
        <div className="p-2 flex justify-between items-center">
          <span>旋转</span>
          <span>{rotate}゜</span>
        </div>
        <Slider
          defaultValue={[rotate]}
          step={1}
          max={360}
          onValueChange={(e) => setRotate(e[0])}
        />
      </div>
      <div className="py-2">
        <div className="p-2 flex justify-between items-center">
          <span>颜色</span>
        </div>
        <ColorPickerController
          hideCpntaoller={true}
          color={color}
          selectedColor={(co) => setColor(co)}
        />
      </div>
    </div>
  );
};

export default IconController;
