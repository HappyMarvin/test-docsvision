import "./Header.css";

function Header () {
  return (
    <header className="header">
      <h1 className={`header__title`}>Вариант выполнения тестового задания на должность Junior Frontend-разработчик</h1>
      <p className="header__author">Выполнил: Владимир Сорокин, HappyMarvin@yandex.ru</p>
    </header>
  )
}

export default Header