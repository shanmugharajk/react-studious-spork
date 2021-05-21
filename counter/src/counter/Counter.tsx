import "./counter.css";
import { observer } from "mobx-react-lite";

import type { ICounterStore } from "./counter-store";

interface IProps {
  counterStore: ICounterStore;
}

export const Counter: React.FunctionComponent<IProps> = observer(
  ({ counterStore }) => (
    <div className="Counter__container">
      <span data-testid="counter-lbl" className="Counter__clicks-lbl">
        Clicks {counterStore.count}
      </span>

      <div className="Counter__footer-container">
        <button
          className="Counter__btn"
          onClick={() => counterStore.increment()}
        >
          Increment
        </button>
        <button
          className="Counter__btn"
          onClick={() => counterStore.decrement()}
        >
          Decrement
        </button>
      </div>
    </div>
  )
);
