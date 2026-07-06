export const Tabs = ({ isActive, onClick, name }) => {
  return (
    <>
      <button className="tabs__btn" data-active={isActive} onClick={onClick}>
        TAB: {name}
      </button>
    </>
  );
};
