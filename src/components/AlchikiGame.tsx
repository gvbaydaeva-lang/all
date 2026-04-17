import { useCallback, useMemo, useState } from "react";
import {
  ALCHIKI_SIDES,
  type AlchikiSide,
  rollAlchiki,
} from "../lib/alchiki";

function formatPercent(weight: number, total: number): string {
  return `${Math.round((100 * weight) / total)}%`;
}

export function AlchikiGame() {
  const [result, setResult] = useState<AlchikiSide | null>(null);
  const [rolling, setRolling] = useState(false);

  const totalWeight = useMemo(
    () => ALCHIKI_SIDES.reduce((s, x) => s + x.weight, 0),
    [],
  );

  const onRoll = useCallback(() => {
    setRolling(true);
    setResult(null);
    window.setTimeout(() => {
      setResult(rollAlchiki());
      setRolling(false);
    }, 520);
  }, []);

  return (
    <section className="alchiki card" aria-labelledby="alchiki-title">
      <h2 id="alchiki-title" className="sr-only">
        Бросок альчиков
      </h2>

      <div className="alchiki-layout">
        <div className="alchiki-die-wrap" aria-live="polite">
          <button
            type="button"
            className={`alchiki-die ${rolling ? "alchiki-die--rolling" : ""}`}
            onClick={onRoll}
            disabled={rolling}
          >
            <span className="alchiki-die__face">
              {rolling ? (
                <span className="alchiki-die__hint">…</span>
              ) : result ? (
                <span className="alchiki-die__label">{result.label}</span>
              ) : (
                <span className="alchiki-die__hint">Бросить</span>
              )}
            </span>
          </button>
          <p className="alchiki-die-caption">
            Нажмите «кость», чтобы получить подсказку дня
          </p>
        </div>

        <div className="alchiki-info">
          {result && !rolling ? (
            <div className="alchiki-result">
              <p className="alchiki-result__title">{result.label}</p>
              <p className="alchiki-result__meaning">{result.meaningRu}</p>
            </div>
          ) : (
            <p className="alchiki-placeholder muted">
              Выпадет одно из четырёх состояний — Хөн, Яман, Темән или Мөрн — с
              разной вероятностью, как в настоящей игре.
            </p>
          )}

          <ul className="alchiki-legend">
            {ALCHIKI_SIDES.map((s) => (
              <li key={s.id}>
                <span className="alchiki-legend__name">{s.label}</span>
                <span className="alchiki-legend__meta muted">
                  ≈ {formatPercent(s.weight, totalWeight)}
                </span>
                <span className="alchiki-legend__desc">{s.meaningRu}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
