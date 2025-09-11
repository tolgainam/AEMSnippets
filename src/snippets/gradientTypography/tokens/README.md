# Design System Tokens

This directory contains all the design system tokens for the River application.

## Dimension Tokens

The dimension tokens system provides responsive spacing, typography, containers, and image settings across XS (390px) and XL (1536px) breakpoints.

### Files

- `dimensions.ts` - Core dimension token definitions
- `dimensions-smart.css` - Smart responsive CSS custom properties (no duplication)
- `dimension-utils.ts` - Utility functions for using tokens in components

### Usage

#### 1. Importing Tokens

```typescript
import { 
  spacerTokens, 
  typographyTokens, 
  containerTokens, 
  imageTokens,
  bottomMarginTokens 
} from '@/design-system/tokens';
```

#### 2. Using Utility Functions

```typescript
import { 
  getSpacer, 
  getTypographySize, 
  getContainerWidth,
  getBottomMarginCSSVar,
  applyBottomMargin 
} from '@/design-system/tokens';

// Get spacer value
const padding = getSpacer(3); // Returns "16px"

// Get responsive typography
const fontSize = getTypographySize('h1', 'xl'); // Returns "32px"

// Get container width
const width = getContainerWidth('boxed', 'xl'); // Returns "1536px"

// Get CSS custom property
const marginBottom = getBottomMarginCSSVar('default'); // Returns "var(--bottom-margin-default)"

// Apply bottom margin to atom
const styles = applyBottomMargin('list'); // Returns "margin-bottom: var(--bottom-margin-list);"
```

#### 3. Using CSS Custom Properties

Include the CSS file in your application:

```typescript
import '@/design-system/tokens/dimensions-smart.css';
```

Then use in your CSS:

```css
.my-component {
  padding: var(--dimension-space-3);
  font-size: var(--typography-size-h1);
  line-height: var(--typography-line-height-h1);
  width: var(--container-width-boxed);
  margin-bottom: var(--bottom-margin-default);
}
```

### Token Categories

#### Spacer Tokens
Used for all spacing-related settings (padding, margin, gap, etc.)

```typescript
spacerTokens = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '32px',
  6: '48px',
  7: '64px',
  8: '80px',
  9: '96px',
  10: '120px',
}
```

#### Typography Tokens
Responsive font sizes and line heights for all text elements.

**Font Sizes:**
- `poster`, `h1`-`h6`, `fs1`-`fs6`, `body1`-`body3`

**Line Heights:**
- Corresponding line heights for each font size

#### Container Tokens
Responsive width and height settings for containers.

**Width:**
- `boxed` - Constrained width
- `full` - Full width
- `hug` - Auto width (content-driven)

**Height:**
- `default` - Standard height
- `full` - Full height
- `hug` - Auto height (content-driven)

#### Image Tokens
Background image fixed settings that align with container width settings.

**Width:**
- `full-100` - Full width 100%
- `full-50` - Full width 50%
- `boxed-100` - Boxed width 100%
- `boxed-50` - Boxed width 50%

**Height:**
- `full` - Full height
- `default` - Default height

#### Bottom Margin Tokens
Toggleable spacing for atoms to provide easy spacing control.

- `list` - 8px margin
- `default` - 16px margin

### Responsive Behavior

The system uses two breakpoints:
- **XS**: 390px (mobile)
- **XL**: 1536px+ (desktop)

Typography and container dimensions scale responsively between these breakpoints. Spacer tokens remain consistent across all breakpoints.

### Best Practices

1. **Use spacer tokens for all spacing** - Don't hardcode pixel values
2. **Align image settings with container settings** - Use `boxed` images with `boxed` containers
3. **Use bottom margin tokens for atoms** - Toggle spacing as needed
4. **Prefer CSS custom properties** - For better performance and flexibility
5. **Use utility functions** - For programmatic access in components

### Examples

#### Typography Component
```typescript
const Typography = ({ variant, children }) => {
  const styles = getResponsiveTypography(variant, variant);
  
  return (
    <div style={styles}>
      {children}
    </div>
  );
};
```

#### Container Component
```typescript
const Container = ({ width = 'boxed', height = 'default', children }) => {
  const dimensions = getResponsiveContainer(width, height);
  
  return (
    <div style={dimensions}>
      {children}
    </div>
  );
};
```

#### Atom with Bottom Margin
```typescript
const Atom = ({ bottomMargin = null, children }) => {
  const marginStyle = applyBottomMargin(bottomMargin);
  
  return (
    <div style={{ ...marginStyle }}>
      {children}
    </div>
  );
};
``` 