import { B as BehaviorSubject } from './index-52f709ec.js';
import { a as getCurrentBreakpointIndex } from './utils-949e43b1.js';

class WindowResizeController {
  constructor() {
    this.currentBreakpoint = getCurrentBreakpointIndex();
    this.breakpointIndex$ = new BehaviorSubject(this.currentBreakpoint);
    window.addEventListener('resize', () => {
      let activeValue = getCurrentBreakpointIndex();
      if (this.breakpointIndex$.value === activeValue) {
        return false;
      }
      this.breakpointIndex$.next(activeValue);
    });
  }
}
const WindowResizeService = new WindowResizeController();

export { WindowResizeService as W };
