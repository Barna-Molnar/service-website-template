import {
  Briefcase,
  CheckCircle,
  Cloud,
  Code,
  Database,
  Headphones,
  Monitor,
  Settings,
  Shield,
  Smartphone,
  Star,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  briefcase: Briefcase,
  "check-circle": CheckCircle,
  cloud: Cloud,
  code: Code,
  database: Database,
  headphones: Headphones,
  monitor: Monitor,
  settings: Settings,
  shield: Shield,
  smartphone: Smartphone,
  star: Star,
  users: Users,
  wrench: Wrench,
  zap: Zap,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function getIcon(name: string): LucideIcon {
  if (name in iconMap) {
    return iconMap[name as IconName];
  }
  return iconMap.code;
}
