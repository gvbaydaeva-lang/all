/**
 * Модуль «Альчики» — взвешенный генератор из четырёх состояний
 * (традиционная калмыцкая игра в кости из суставов барана).
 */

export type AlchikiSideId = "khon" | "yaman" | "morn" | "temjn";

export interface AlchikiSide {
  id: AlchikiSideId;
  /** На экране используются только эти названия */
  label: string;
  /** Вес относительной частоты (чем больше — тем чаще) */
  weight: number;
  /** Краткое значение для подсказки в приложении */
  meaningRu: string;
}

/** Порядок и веса отражают: Хөн/Яман — часто, Мөрн — умеренно, Темән — редко */
export const ALCHIKI_SIDES: readonly AlchikiSide[] = [
  {
    id: "khon",
    label: "Хөн",
    weight: 34,
    meaningRu: "Текучка, мелкие бытовые дела",
  },
  {
    id: "yaman",
    label: "Яман",
    weight: 34,
    meaningRu: "Социальные дела, общение",
  },
  {
    id: "morn",
    label: "Мөрн",
    weight: 24,
    meaningRu: "Важные, прорывные задачи",
  },
  {
    id: "temjn",
    label: "Темән",
    weight: 8,
    meaningRu: "Удача, время на отдых",
  },
] as const;

const totalWeight = ALCHIKI_SIDES.reduce((s, x) => s + x.weight, 0);

function randomUnit(): number {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
  return buf[0]! / (0xffffffff + 1);
}

/** Одно бросание «кости»: выбор состояния по весам */
export function rollAlchiki(): AlchikiSide {
  let r = randomUnit() * totalWeight;
  for (const side of ALCHIKI_SIDES) {
    r -= side.weight;
    if (r <= 0) return side;
  }
  return ALCHIKI_SIDES[ALCHIKI_SIDES.length - 1]!;
}

export function getSideById(id: AlchikiSideId): AlchikiSide {
  const found = ALCHIKI_SIDES.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown side: ${id}`);
  return found;
}
