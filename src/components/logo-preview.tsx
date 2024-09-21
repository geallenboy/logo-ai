import { UpdateStorageContext } from "@/context/update-storage-context";
import { storageProps } from "@/lib/type";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const LogoPreview = ({ downloadIcon }: { downloadIcon: any }) => {
  const [storageValue, setStorageValue] = useState<storageProps>();
  const { updateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value") as string);
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogo = document.getElementById("downloadLogo");
    if (!downloadLogo) {
      return;
    }
    html2canvas(downloadLogo, {
      backgroundColor: null
    }).then((canvans) => {
      const pngImage = canvans.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = Date.now() + ".png";
      downloadLink.click();
    });
  };

  const Icon = ({
    name,
    color,
    size,
    rotate
  }: {
    name: keyof typeof icons;
    color?: string;
    size?: number;
    rotate?: number;
  }) => {
    if (!name) return null;
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="items-center justify-center flex h-screen border shadow-md">
      <div
        style={{
          padding: storageValue?.bgPadding
        }}
        className="bg-gray-300  w-[400px] h-[400px]  outline-dashed outline-gray-600"
      >
        <div
          id="downloadLogo"
          className="flex items-center justify-center bg-transparent h-full w-full"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor
          }}
        >
          <Icon
            name={storageValue?.icon as keyof typeof icons}
            color={storageValue?.iconColor as keyof typeof icons}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
