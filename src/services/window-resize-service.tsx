import { BehaviorSubject } from "rxjs";
import { getCurrentBreakpointIndex } from "../utils/utils";
import _ from 'underscore';

class WindowResizeController {
  currentBreakpoint = getCurrentBreakpointIndex();
  breakpointIndex$: BehaviorSubject<number> = new BehaviorSubject(this.currentBreakpoint);

  constructor() {
    window.addEventListener('resize', () => {
      let activeValue = getCurrentBreakpointIndex();
      if (this.breakpointIndex$.value === activeValue) {
        return false;
      }
      this.breakpointIndex$.next(activeValue);
    });
  }
}

export const WindowResizeService = new WindowResizeController();