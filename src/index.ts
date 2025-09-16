// Export all snippets
export * as gradientTypography from './snippets/gradientTypography';
export * as contentStack from './snippets/contentStack';
export * as tickertape from './snippets/tickertape';

// Also export components at the root level for backward compatibility
export { GradientText } from './snippets/gradientTypography/components/GradientText';
export type { GradientTextProps } from './snippets/gradientTypography/components/GradientText';
export { ContentStack, ContentStackItem } from './snippets/contentStack/components/ContentStack';
export type { ContentStackProps, ContentStackItemProps } from './snippets/contentStack/components/ContentStack';
export { Tickertape } from './snippets/tickertape/components/Tickertape';
export type { TickertapeProps } from './snippets/tickertape/components/Tickertape';