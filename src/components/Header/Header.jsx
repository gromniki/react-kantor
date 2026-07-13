export const Header = () => {
  return (
    <header className="header">
      <div className="">
        <h1 className="header__title">Ресторанный гид</h1>
        <button
          className="btn  btn--switch-theme"
          onClick={() =>
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          switch theme
        </button>
      </div>
    </header>
  );
};
