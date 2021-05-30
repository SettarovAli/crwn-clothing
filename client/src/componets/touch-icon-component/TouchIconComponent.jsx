import TouchBackgroundComponent from "../touch-background-component/TouchBackgroundComponent";

const TouchIconComponent = ({ Icon, color, fontSize }) => {
  return (
    <TouchBackgroundComponent>
      <Icon color={color} fontSize={fontSize} />
    </TouchBackgroundComponent>
  );
};

export default TouchIconComponent;
