# AEM Snippets

A collection of reusable AEM snippets and components that can be imported as npm packages or embedded directly into websites via iframe.

## Available Snippets

### Gradient Typography
Beautiful gradient text effects with animation support, brand tokens, and responsive design.

## Features

- 🎨 Customizable gradient colors
- 📐 Multiple gradient directions
- ✨ Animation support
- 📱 Responsive design
- 🔗 Two usage methods: npm import or iframe embed
- 🎯 TypeScript support

## Installation

```bash
npm install aem-snippets
```

## Usage as React Component

### Gradient Typography

```jsx
import { GradientText } from 'aem-snippets/gradientTypography';

function App() {
  return (
    <GradientText
      colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
      direction="to right"
      fontSize="3rem"
      fontWeight="bold"
      animate={true}
      animationDuration="3s"
    >
      Beautiful Gradient Text
    </GradientText>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colors` | `string[]` | `['#ff6b6b', '#4ecdc4', '#45b7d1']` | Array of colors for the gradient |
| `direction` | `string` | `'to right'` | Gradient direction (CSS linear-gradient direction) |
| `fontSize` | `string` | `'2rem'` | Font size (CSS font-size value) |
| `fontWeight` | `string \| number` | `'bold'` | Font weight |
| `fontFamily` | `string` | `'inherit'` | Font family |
| `animate` | `boolean` | `false` | Enable gradient animation |
| `animationDuration` | `string` | `'3s'` | Animation duration |
| `className` | `string` | `''` | Additional CSS class |
| `style` | `CSSProperties` | `{}` | Additional inline styles |

## Usage as Iframe Embed

Generate an embed code using URL parameters:

```html
<iframe 
  src="https://your-domain.com/embed.html?text=Hello%20World&colors=%5B%22%23ff6b6b%22%2C%22%234ecdc4%22%5D&fontSize=3rem&animate=true" 
  width="600" 
  height="200" 
  frameborder="0">
</iframe>
```

### URL Parameters for Embed

- `text` - The text to display
- `colors` - JSON-encoded array of colors
- `direction` - Gradient direction
- `fontSize` - Font size
- `fontWeight` - Font weight
- `fontFamily` - Font family (URL encoded)
- `animate` - true/false for animation
- `animationDuration` - Animation duration

## Development

```bash
# Install dependencies
npm install

# Start development server (demo page)
npm run dev

# Build library for distribution
npm run build:lib

# Build demo application
npm run build
```

## Demo

Run `npm run dev` to see a live demo with configuration options and embed code generation.

## License

MIT