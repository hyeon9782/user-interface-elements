type TooltipProps = {
  title: string;
};
const Tooltip = ({ title }: TooltipProps) => {
  return <div className="">{title}</div>;
};

export default Tooltip;
