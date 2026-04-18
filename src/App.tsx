import { AlchikiGame } from "./components/AlchikiGame";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Калмыцкая традиция</p>
        <h1>Альчики</h1>
        <p className="lede">
          Игра в кости из суставов барана — здесь как метафора: один бросок
          подсказывает, на какой тип дел сместить фокус сегодня.
        </p>
      </header>
      <main>
        <AlchikiGame />
      </main>
      <footer className="app-footer muted">
        <a
          href="https://gvbaydaeva-lang.github.io/all/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть на GitHub Pages
        </a>
        <span aria-hidden="true"> · </span>
        <a
          href="https://github.com/gvbaydaeva-lang/all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Репозиторий
        </a>
      </footer>
    </div>
  );
}
