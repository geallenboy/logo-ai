import { createContext } from "react";


export const UpdateStorageContext = createContext<{
    updateStorage: object;
    setUpdateStorage: React.Dispatch<React.SetStateAction<object>>;
}>({
    updateStorage: {},
    setUpdateStorage: () => { } // 提供一个默认的空函数
});