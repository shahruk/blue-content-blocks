import { BehaviorSubject } from "rxjs";
declare class WindowResizeController {
  currentBreakpoint: number;
  breakpointIndex$: BehaviorSubject<number>;
  constructor();
}
export declare const WindowResizeService: WindowResizeController;
export {};
