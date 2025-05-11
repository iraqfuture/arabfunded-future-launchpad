
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// تأكد من عدم وجود أي إشارة إلى Lovable
const root = document.getElementById("root");
if (root) {
  // إزالة أي عناصر Lovable بديناميكية
  const lovableElements = document.querySelectorAll('.lovable-badge, .lovable-logo, [class*="lovable"]');
  lovableElements.forEach(element => element.remove());
  
  createRoot(root).render(<App />);
}
