// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   {
//     ignores: [
//       "node_modules/**",
//       ".next/**",
//       "out/**",
//       "build/**",
//       "next-env.d.ts",
//     ],
//     "rules": [
//       {
//       "@typescript-eslint/prefer-ts-expect-error": "off",
//       "@typescript-eslint/ban-ts-comment": "off",
//       "@typescript-eslint/ban-ts-ignore": "off",
//       "@typescript-eslint/ban-ts-nocheck": "off",
//       "@typescript-eslint/ban-ts-check": "off",
//       }
//     ]
//   },
// ];

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "@typescript-eslint/prefer-ts-expect-error": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/ban-ts-nocheck": "off",
      "@typescript-eslint/ban-ts-check": "off",
    },
  },
];

export default eslintConfig;

