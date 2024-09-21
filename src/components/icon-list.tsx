import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { iconList } from "@/constants/icons";
import { storageProps } from "@/lib/type";
import { icons } from "lucide-react";
import { useState } from "react";

const IconList = ({
  selectedIcon
}: {
  selectedIcon: (icon: keyof typeof icons) => void;
}) => {
  const storageValueString = localStorage.getItem("value");
  const storageValue = storageValueString
    ? (JSON.parse(storageValueString) as storageProps)
    : null;
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(
    storageValue?.icon ? storageValue?.icon : "Smile"
  );
  const Icon = ({
    name,
    color,
    size
  }: {
    name: keyof typeof icons;
    color?: string;
    size?: number;
  }) => {
    if (!name) return null;
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };
  return (
    <div>
      <div>
        <label>图标</label>
        <div
          onClick={() => {
            setOpenDialog(true);
          }}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"
        >
          <Icon name={icon as keyof typeof icons} color="#000" size={20} />
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>选择你喜欢的图标</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">默认图标</TabsTrigger>
                  <TabsTrigger value="color">彩色图标</TabsTrigger>
                  <TabsTrigger value="ai">AI图标</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 overflow-auto h-[400px] p-6">
                    {iconList.map((icon, index) => {
                      return (
                        <div
                          key={index}
                          className="border p-3 flex items-center justify-center cursor-pointer"
                          onClick={() => {
                            setOpenDialog(false);
                            selectedIcon(icon as keyof typeof icons);
                            setIcon(icon as keyof typeof icons);
                          }}
                        >
                          <Icon
                            name={icon as keyof typeof icons}
                            color="#000"
                            size={20}
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
                <TabsContent value="color">
                  <div className="min-h-[400px] flex items-center justify-center">
                    开发中...
                  </div>
                </TabsContent>
                <TabsContent value="ai">
                  <div className="min-h-[400px] flex items-center justify-center">
                    开发中...
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
