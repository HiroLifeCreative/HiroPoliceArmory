import { LucideIcon } from 'lucide-react';

export interface ToolAction {
  id: string;
  label: string;
  icon: LucideIcon;
  type: 'toggle' | 'button';
  defaultValue?: boolean;
}
