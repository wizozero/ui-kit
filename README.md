# UI Kit

Component Library construida con React, TypeScript y CSS Modules.

## 📦 Componentes

- **Button** - 3 variants (primary, secondary, danger), 3 sizes (sm, md, lg)
- **Card** - Default + featured variant, imagen opcional
- **Input** - Estados error/disabled/focus, label, helper text
- **Badge** - 4 status indicators (success, warning, error, info)
- **Alert** - 4 notification types (success, warning, error, info)

## 🛠️ Tech Stack

- React 18
- TypeScript
- CSS Modules
- Vite

## 💻 Instalación

\`\`\`bash
git clone https://github.com/wizozero/ui-kit.git
cd ui-kit
npm install
npm run dev
\`\`\`

## 📝 Uso

\`\`\`tsx
import { Button, Card, Input } from './components'

function App() {
return (
<>
<Button variant="primary">Click me</Button>
<Card title="Title" description="Description" />
<Input label="Email" placeholder="Enter email" />
</>
)
}
\`\`\`

## 🎨 Design System

- **Colores:** Primary (#3b82f6), Danger (#ef4444), Success (#10b981)
- **Spacing:** Base 8px scale
- **Typography:** System fonts, 3 sizes
- **Animaciones:** 200ms ease-out transitions
