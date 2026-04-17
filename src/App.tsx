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
    </div>
  );
}
