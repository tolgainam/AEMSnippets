import { default as React } from 'react';
import { BrandName } from '../tokens/designTokens';
export interface GradientTextProps {
    children: React.ReactNode;
    colors?: string[];
    direction?: string;
    fontSize?: string;
    fontFamily?: string;
    animate?: boolean;
    animationDuration?: string;
    className?: string;
    style?: React.CSSProperties;
    brand?: BrandName;
}
export declare const GradientText: React.FC<GradientTextProps>;
export default GradientText;
