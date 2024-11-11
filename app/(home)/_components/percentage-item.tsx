import { ReactNode } from "react";

interface PercentageItemsProps {
  icon: ReactNode;
  title: string;
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentageItemsProps) => {
  return (
    <div className="flex items-center justify-between">
      {/*ICONE*/}
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">{value}</p>
    </div>
  );
};

export default PercentageItem;
