import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = ({ setDownLoadIcon }: { setDownLoadIcon: any }) => {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img alt="logo" src="/logo.svg" />
        <span className=" font-serif ml-2 text-blue-600">LOGO-AI</span>
      </div>
      <Button
        className="flex gap-2 items-center"
        onClick={() => setDownLoadIcon(Date.now())}
      >
        <Download className="h-4 w-4" />
        下载
      </Button>
    </div>
  );
};

export default Header;
