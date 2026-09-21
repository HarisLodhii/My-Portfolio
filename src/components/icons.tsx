import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  ArrowRight,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

export { Mail, Github, Linkedin, MessageCircle, ArrowRight };

export const FiverrIcon: ComponentType<LucideProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <circle cx="32" cy="32" r="32" fill="#1DBF73" />
    <path
      fill="#fff"
      d="M22.4 46.4h8.1V27.8h-8.1v18.6Zm0-23.1h8.1v-7.7c0-2.6 1.4-4 4.2-4h6.6V5.6h-8.2c-6.5 0-10.7 3.8-10.7 10.2v7.5Zm18.2 23.1h8.2V27.8h-8.2v18.6ZM39.2 23.3h9.6v-8h-9.6v8Z"
    />
  </svg>
);
