import type { ThemeColors } from "./types";

export const themePresets = {
    default: {
        primary: "220 45% 42%",
        primaryForeground: "0 0% 100%",
        secondary: "220 30% 28%",
        secondaryForeground: "0 0% 98%",
        background: { light: "220 15% 99%", dark: "220 25% 8%" },
        foreground: { light: "220 35% 10%", dark: "220 15% 98%" },
        muted: { light: "220 22% 90%", dark: "220 22% 18%" },
        mutedForeground: { light: "220 20% 40%", dark: "220 10% 75%" },
        card: { light: "220 8% 100%", dark: "220 30% 12%" },
        cardForeground: { light: "220 35% 10%", dark: "220 10% 98%" },
        cardBorder: { light: "220 18% 85%", dark: "220 28% 28%" },
        border: { light: "220 25% 80%", dark: "220 25% 35%" },
        accents: [
            "210 100% 56%",
            "340 82% 60%",
            "280 95% 60%",
            "160 84% 45%",
            "45 95% 58%",
            "260 89% 65%",
        ],
    },
    warmGold: {
        primary: "45 75% 52%",
        primaryForeground: "220 30% 12%",
        secondary: "40 18% 90%",
        secondaryForeground: "220 35% 20%",
        background: { light: "40 25% 97%", dark: "220 45% 10%" },
        foreground: { light: "220 35% 15%", dark: "40 20% 92%" },
        muted: { light: "40 20% 92%", dark: "220 32% 20%" },
        mutedForeground: { light: "220 25% 45%", dark: "40 15% 70%" },
        card: { light: "40 22% 95%", dark: "220 40% 14%" },
        cardForeground: { light: "220 35% 15%", dark: "40 20% 92%" },
        cardBorder: { light: "40 18% 90%", dark: "220 35% 18%" },
        border: { light: "40 20% 88%", dark: "220 35% 22%" },
        accents: [
            "210 100% 56%",
            "340 82% 60%",
            "280 95% 60%",
            "160 84% 45%",
            "45 95% 58%",
            "260 89% 65%",
        ],
    },
    carSpa: {
        // Green only on actions. Surfaces stay graphite / off-white.
        primary: "158 64% 32%",            // Emerald #1D8660, AA with white text
        primaryForeground: "0 0% 100%",
        secondary: "160 8% 14%",           // Graphite, stands out on both modes
        secondaryForeground: "0 0% 96%",
        background: { light: "160 5% 98%", dark: "160 8% 5%" },
        foreground: { light: "160 12% 9%", dark: "0 0% 96%" },
        muted: { light: "160 5% 94%", dark: "160 6% 10%" },
        mutedForeground: { light: "160 5% 38%", dark: "160 4% 66%" },
        card: { light: "0 0% 100%", dark: "160 7% 8%" },
        cardForeground: { light: "160 12% 9%", dark: "0 0% 96%" },
        cardBorder: { light: "160 5% 89%", dark: "160 5% 15%" },
        border: { light: "160 5% 86%", dark: "160 5% 18%" },
        accents: [
            "158 64% 36%",
            "164 52% 38%",
            "152 48% 40%",
            "158 64% 36%",
            "164 52% 38%",
            "152 48% 40%",
        ],
    },
} as const satisfies Record<string, ThemeColors>;

export type ThemePresetName = keyof typeof themePresets;
