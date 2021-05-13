import { FLEX_JUSTIFY_OPTIONS, GRID_TYPES, ResponsiveBoolean, ResponsiveNumber, ResponsiveString } from '../../typings';
/**
 * @slot media - This slot can either be a video or image component.
 * @slot content - This slot will usually serve a content text block.
 */
export declare class ContentGridFormatter {
  type: GRID_TYPES | ResponsiveString;
  flexGrow: ResponsiveBoolean;
  flexShrink: ResponsiveBoolean;
  flexAlign: FLEX_JUSTIFY_OPTIONS | ResponsiveString;
  columns: ResponsiveNumber;
  activeClassString: string;
  componentWillLoad(): void;
  render(): any;
}
