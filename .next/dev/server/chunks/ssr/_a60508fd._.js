module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/perfumes-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "perfumesData",
    ()=>perfumesData
]);
const perfumesData = [
    {
        id: 'antonio-banderas-blue-seduction-200',
        name: "Blue Seduction",
        brand: "Antonio Banderas",
        price: 81,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "200 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-the-golden-secret-100',
        name: "The Golden Secret",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-the-icon-100',
        name: "The Icon",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-the-icon-femme-100',
        name: "The Icon Femme",
        brand: "Antonio Banderas",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-mediterr-neo-100',
        name: "Mediterráneo",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-black-seduction-100',
        name: "Black Seduction",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-the-secret-100',
        name: "The Secret",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-diavolo-100',
        name: "Diavolo",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-power-of-seduction-100',
        name: "Power of Seduction",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-her-secret-temptation-100',
        name: "Her Secret Temptation",
        brand: "Antonio Banderas",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-king-of-seduction-200',
        name: "King of Seduction",
        brand: "Antonio Banderas",
        price: 81,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "200 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-her-secret-flame-100',
        name: "Her Secret Flame",
        brand: "Antonio Banderas",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-king-of-seduction-100',
        name: "King of Seduction",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-king-of-seduction-absolute-100',
        name: "King of Seduction Absolute",
        brand: "Antonio Banderas",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'antonio-banderas-king-of-seduction-absolute-200',
        name: "King of Seduction Absolute",
        brand: "Antonio Banderas",
        price: 81,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "200 ml",
        notes: "",
        description: ""
    },
    {
        id: 'abercrombie-fitch-authentic-100',
        name: "Authentic",
        brand: "Abercrombie & Fitch",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'abercrombie-fitch-authentic-night-100',
        name: "Authentic Night",
        brand: "Abercrombie & Fitch",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'abercrombie-fitch-homme-eau-de-toilette-azul-100',
        name: "Homme Eau de Toilette Azul",
        brand: "Abercrombie & Fitch",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'abercrombie-fitch-homme-eau-de-toilette-caf-100',
        name: "Homme Eau de Toilette Café",
        brand: "Abercrombie & Fitch",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'abercrombie-fitch-femme-parfum-azul-100',
        name: "Femme Parfum Azul",
        brand: "Abercrombie & Fitch",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'abercrombie-fitch-femme-parfum-amarillo-100',
        name: "Femme Parfum Amarillo",
        brand: "Abercrombie & Fitch",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'abercrombie-fitch-femme-parfum-rosado-100',
        name: "Femme Parfum Rosado",
        brand: "Abercrombie & Fitch",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-odyssey-femme-white-edition-100',
        name: "Odyssey Femme White Edition",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-odyssey-spectra-100',
        name: "Odyssey Spectra",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-odyssey-limoni-100',
        name: "Odyssey Limoni",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-odyssey-aoud-100',
        name: "Odyssey Aoud",
        brand: "Armaf",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-tag-uomo-rosso-100',
        name: "TAG Uomo Rosso",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-derby-club-house-blanche-100',
        name: "Derby Club House Blanche",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-to-my-dreams-private-key-100',
        name: "To My Dreams (Private Key)",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-to-my-love-private-key-100',
        name: "To My Love (Private Key)",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-to-my-soul-private-key-100',
        name: "To My Soul (Private Key)",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-to-my-life-private-key-100',
        name: "To My Life (Private Key)",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-black-saffron-100',
        name: "Black Saffron",
        brand: "Armaf",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-island-bliss-100',
        name: "Island Bliss",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-yum-yum-100',
        name: "Yum-Yum",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-imperia-100',
        name: "Imperia",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-tres-nuit-valentina-100',
        name: "Tres Nuit Valentina",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-tres-jour-tress-four-100',
        name: "Tres Jour (Tress Four)",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-art-du-parfum-100',
        name: "Art Du' Parfum",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-aura-fresh-100',
        name: "Aura Fresh",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-eter-arabian-sky-100',
        name: "Eter Arabian Sky",
        brand: "Armaf",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-eter-desert-rose-100',
        name: "Eter Desert Rose",
        brand: "Armaf",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'armaf-the-pride-of-admiral-100',
        name: "The Pride of Admiral",
        brand: "Armaf",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-souvenir-desert-rose-100',
        name: "Souvenir Desert Rose",
        brand: "Afnan",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-9pm-pour-femme-morado-100',
        name: "9pm Pour Femme (morado)",
        brand: "Afnan",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-9pm-negro-100',
        name: "9pm (negro)",
        brand: "Afnan",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-supremacy-not-only-intense-100',
        name: "Supremacy Not Only Intense",
        brand: "Afnan",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-supremacy-incense-100',
        name: "Supremacy Incense",
        brand: "Afnan",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-9am-pour-femme-rosa-100',
        name: "9am Pour Femme (rosa)",
        brand: "Afnan",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-9am-dive-100',
        name: "9am Dive",
        brand: "Afnan",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-turathi-azul-100',
        name: "Turathi (azul)",
        brand: "Afnan",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-9am-mujer-blanco-100',
        name: "9am Mujer (blanco)",
        brand: "Afnan",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-9pm-rebel-100',
        name: "9pm Rebel",
        brand: "Afnan",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'afnan-rare-carbon-100',
        name: "Rare Carbon",
        brand: "Afnan",
        price: 45,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-cloud-100',
        name: "Cloud",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-sweet-like-candy-100',
        name: "Sweet Like Candy",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-r-e-m-100',
        name: "R.E.M",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-thank-u-next-100',
        name: "Thank U, Next",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-ari-100',
        name: "Ari",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-moonlight-100',
        name: "Moonlight",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-mod-blush-100',
        name: "Mod Blush",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-mod-vanilla-100',
        name: "Mod Vanilla",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-god-is-a-woman-100',
        name: "God is a Woman",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ariana-grande-cloud-2-0-100',
        name: "Cloud 2.0",
        brand: "Ariana Grande",
        price: 45,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-gold-edition-120ml-120',
        name: "Gold Edition 120ml",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "120 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-white-edition-100',
        name: "White Edition",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-bleu-edition-100',
        name: "Bleu Edition",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-ultra-violet-100',
        name: "Ultra Violet",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-black-edition-100',
        name: "Black Edition",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-gold-extreme-edition-100',
        name: "Gold Extreme Edition",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-carb-n-edition-100',
        name: "Carbón Edition",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-ruby-edition-100',
        name: "Ruby Edition",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-toiles-100',
        name: "Étoiles",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-l-aventure-intense-100',
        name: "L’aventure Intense",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-belle-rouge-100',
        name: "Belle Rouge",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-l-aventure-femme-100',
        name: "L’aventure Femme",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-l-aventure-100',
        name: "L’aventure",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-urbanist-femme-100',
        name: "Urbanist Femme",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-belle-100',
        name: "Belle",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-signature-edt-100',
        name: "Signature EDT",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-signature-blue-100',
        name: "Signature Blue",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-signature-red-100',
        name: "Signature Red",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-signature-edp-100',
        name: "Signature EDP",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-detour-noir-100',
        name: "Detour Noir",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-l-aventure-rose-100',
        name: "L’Aventure Rose",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-dubai-night-100',
        name: "Dubai Night",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-aqua-dub-i-100',
        name: "Aqua Dubái",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-gold-edition-100ml-100',
        name: "Gold Edition 100ml",
        brand: "Al Haramain",
        price: 45,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'al-haramain-gold-edition-200ml-200',
        name: "Gold Edition 200ml",
        brand: "Al Haramain",
        price: 81,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "200 ml",
        notes: "",
        description: ""
    },
    {
        id: 'agatha-ruiz-de-la-prada-look-by-100',
        name: "Look By",
        brand: "Agatha Ruiz de la Prada",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'agatha-ruiz-de-la-prada-gotas-de-color-100',
        name: "Gotas de Color",
        brand: "Agatha Ruiz de la Prada",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'adidas-dynamic-pulse-100',
        name: "Dynamic Pulse",
        brand: "Adidas",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'adidas-ice-dive-100',
        name: "Ice Dive",
        brand: "Adidas",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-silver-black-100',
        name: "Silver Black",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-chrome-edt-100',
        name: "Chrome EDT",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-chrome-edp-100',
        name: "Chrome EDP",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-wanted-edt-tradicional-100',
        name: "Wanted EDT Tradicional",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-the-most-wanted-parfum-100',
        name: "The Most Wanted Parfum",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-the-most-wanted-parfum-intense-100',
        name: "The Most Wanted Parfum Intense",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-wanted-by-night-100',
        name: "Wanted By Night",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'azzaro-the-most-wanted-edt-intense-100',
        name: "The Most Wanted EDT Intense",
        brand: "Azzaro",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'animale-animale-100ml-100',
        name: "Animale 100ml",
        brand: "Animale",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'animale-animale-mujer-100',
        name: "Animale Mujer",
        brand: "Animale",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'animale-animale-200ml-200',
        name: "Animale 200ml",
        brand: "Animale",
        price: 108,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "200 ml",
        notes: "",
        description: ""
    },
    {
        id: 'boucheron-boucheron-paris-100',
        name: "Boucheron Paris",
        brand: "Boucheron",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'burberry-brit-for-her-100',
        name: "Brit For Her",
        brand: "Burberry",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'burberry-london-100',
        name: "London",
        brand: "Burberry",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'burberry-burberry-her-edp-100',
        name: "Burberry Her EDP",
        brand: "Burberry",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'burberry-burberry-her-edt-100',
        name: "Burberry Her EDT",
        brand: "Burberry",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bentley-for-men-intense-100',
        name: "For Men Intense",
        brand: "Bentley",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-goldea-100',
        name: "Goldea",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-amethyste-100',
        name: "Amethyste",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-crystalline-100',
        name: "Crystalline",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-aqva-100',
        name: "AQVA",
        brand: "Bvlgari",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-wood-essence-100',
        name: "Wood Essence",
        brand: "Bvlgari",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-wood-neroli-100',
        name: "Wood Neroli",
        brand: "Bvlgari",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-aqva-marine-100',
        name: "AQVA Marine",
        brand: "Bvlgari",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-terrae-essence-100',
        name: "Terrae Essence",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-glacial-essence-100',
        name: "Glacial Essence",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-pour-homme-100',
        name: "Pour Homme",
        brand: "Bvlgari",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-eau-parfum-e-au-th-blanc-100',
        name: "Eau Parfumée au Thé Blanc",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-petits-et-mamans-100',
        name: "Petits et Mamans",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-rose-goldea-100',
        name: "Rose Goldea",
        brand: "Bvlgari",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-man-in-black-100',
        name: "Man in Black",
        brand: "Bvlgari",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-by-mary-katrantzou-100',
        name: "By Mary Katrantzou",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bvlgari-omnia-coral-100',
        name: "Omnia Coral",
        brand: "Bvlgari",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'billie-eilish-billie-eilish-n-2-100',
        name: "Billie Eilish Nº2",
        brand: "Billie Eilish",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'billie-eilish-billie-eilish-n-1-100',
        name: "Billie Eilish Nº1",
        brand: "Billie Eilish",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-sheer-100',
        name: "Sheer",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-intense-100',
        name: "Intense",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-electric-100',
        name: "Electric",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-circus-100',
        name: "Circus",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-curious-100',
        name: "Curious",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-fantasy-100',
        name: "Fantasy",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-midnight-100',
        name: "Midnight",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'britney-spears-hidden-100',
        name: "Hidden",
        brand: "Britney Spears",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-double-bleu-100',
        name: "Double Bleu",
        brand: "Bharara",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-bharara-king-edp-100',
        name: "Bharara King EDP",
        brand: "Bharara",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-bharara-rose-100',
        name: "Bharara Rose",
        brand: "Bharara",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-viking-rio-100',
        name: "Viking Rio",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-velvet-rose-100',
        name: "Velvet Rose",
        brand: "Bharara",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-bharara-parfum-100',
        name: "Bharara PARFUM",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-bharara-niche-femme-100',
        name: "Bharara Niche Femme",
        brand: "Bharara",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-bharara-niche-100',
        name: "Bharara Niche",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-chocolate-100',
        name: "Chocolate",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-viking-dubai-100',
        name: "Viking Dubai",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-viking-cairo-100',
        name: "Viking Cairo",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-viking-beirut-100',
        name: "Viking Beirut",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'bharara-viking-kashmir-100',
        name: "Viking Kashmir",
        brand: "Bharara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'no-visible-benetton-estilo-tribu-100',
        name: "Tribu",
        brand: "No visible (Benetton estilo)",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-inferno-paradiso-pink-100',
        name: "Inferno Paradiso Pink",
        brand: "Benetton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-colors-woman-rose-100',
        name: "Colors Woman Rose",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-colors-man-blue-100',
        name: "Colors Man Blue",
        brand: "Benetton",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-colors-by-benetton-man-100',
        name: "Colors By Benetton Man",
        brand: "Benetton",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-colors-by-benetton-woman-100',
        name: "Colors By Benetton Woman",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-green-cactus-for-her-100',
        name: "Green Cactus for Her",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-united-dreams-live-free-100',
        name: "United Dreams Live Free",
        brand: "Benetton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-united-dreams-love-yourself-100',
        name: "United Dreams Love Yourself",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-cold-100',
        name: "Cold",
        brand: "Benetton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-hot-100',
        name: "Hot",
        brand: "Benetton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-inferno-paradise-blue-100',
        name: "Inferno Paradise Blue",
        brand: "Benetton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-colors-man-green-100',
        name: "Colors Man Green",
        brand: "Benetton",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-green-cactus-for-him-100',
        name: "Green Cactus for Him",
        brand: "Benetton",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-sisterland-green-jasmine-100',
        name: "Sisterland Green Jasmine",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-sisterland-red-rose-100',
        name: "Sisterland Red Rose",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-sisterland-pink-raspberry-100',
        name: "Sisterland Pink Raspberry",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-sisterland-yellow-peony-100',
        name: "Sisterland Yellow Peony",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-b-united-man-100',
        name: "B United Man",
        brand: "Benetton",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'benetton-b-united-woman-100',
        name: "B United Woman",
        brand: "Benetton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cristiano-ronaldo-cr7-play-it-cool-100',
        name: "CR7 Play It Cool",
        brand: "Cristiano Ronaldo",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cristiano-ronaldo-cr7-rojo-100',
        name: "CR7 Rojo",
        brand: "Cristiano Ronaldo",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cristiano-ronaldo-cr7-game-on-100',
        name: "CR7 Game On",
        brand: "Cristiano Ronaldo",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cristiano-ronaldo-cr7-fearless-100',
        name: "CR7 Fearless",
        brand: "Cristiano Ronaldo",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cristiano-ronaldo-cr7-origins-100',
        name: "CR7 Origins",
        brand: "Cristiano Ronaldo",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cristiano-ronaldo-cr7-discover-100',
        name: "CR7 Discover",
        brand: "Cristiano Ronaldo",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cabotine-de-gres-100',
        name: "De Gres",
        brand: "Cabotine",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cacharel-amor-amor-100',
        name: "Amor Amor",
        brand: "Cacharel",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cacharel-anais-anais-100',
        name: "Anais Anais",
        brand: "Cacharel",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cartier-declaration-edt-100',
        name: "Declaration EDT",
        brand: "Cartier",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cartier-pasha-cartier-edt-100',
        name: "Pasha Cartier EDT",
        brand: "Cartier",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'clinique-happy-happy-for-men-100',
        name: "Happy for Men",
        brand: "Clinique Happy",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'clinique-happy-happy-heart-100',
        name: "Happy Heart",
        brand: "Clinique Happy",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'clinique-happy-happy-woman-100',
        name: "Happy Woman",
        brand: "Clinique Happy",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-contradiction-100',
        name: "Contradiction",
        brand: "Calvin Klein",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-one-shock-for-her-100',
        name: "One Shock for Her",
        brand: "Calvin Klein",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-one-shock-for-him-100',
        name: "One Shock for Him",
        brand: "Calvin Klein",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-in2u-mujer-100',
        name: "IN2U Mujer",
        brand: "Calvin Klein",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-in2u-hombre-100',
        name: "IN2U Hombre",
        brand: "Calvin Klein",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-ck-every-100',
        name: "CK Every",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-obsession-100',
        name: "Obsession",
        brand: "Calvin Klein",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-ck-be-100',
        name: "CK Be",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-ck-one-100',
        name: "CK One",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-escape-100',
        name: "Escape",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-eternity-100',
        name: "Eternity",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-eternity-moment-100',
        name: "Eternity Moment",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-euphoria-100',
        name: "Euphoria",
        brand: "Calvin Klein",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-nyc-mujer-100',
        name: "212 NYC Mujer",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-men-sexy-100',
        name: "212 Men Sexy",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-sexy-100',
        name: "212 Sexy",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-vip-men-100',
        name: "212 VIP Men",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-vip-rose-smiley-100',
        name: "212 VIP Rose Smiley",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-vip-rose-100',
        name: "212 VIP Rose",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-very-good-girl-supreme-100',
        name: "Very Good Girl Supreme",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-very-good-girl-glam-100',
        name: "Very Good Girl Glam",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-bad-boy-superstars-100',
        name: "Bad Boy Superstars",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-heroes-100',
        name: "212 Heroes",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-vip-black-100',
        name: "212 VIP Black",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-bad-boy-cobalt-100',
        name: "Bad Boy Cobalt",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-bad-boy-toilette-100',
        name: "Bad Boy Toilette",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-bad-boy-le-parfum-100',
        name: "Bad Boy Le Parfum",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-l-eau-100',
        name: "L’EAU",
        brand: "Carolina Herrera",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-gold-fantasy-100',
        name: "Gold Fantasy",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-glorious-gold-100',
        name: "Glorious Gold",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-ch-men-100',
        name: "CH Men",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-ch-men-sport-100',
        name: "CH Men Sport",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-good-girl-blush-100',
        name: "Good Girl Blush",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-forever-young-hombre-100',
        name: "212 Forever Young Hombre",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-good-girl-dazzling-garden-100',
        name: "Good Girl Dazzling Garden",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-bad-boy-extreme-100',
        name: "Bad Boy Extreme",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-ch-mujer-100',
        name: "CH Mujer",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-birds-of-paradise-men-100',
        name: "Birds of Paradise Men",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-birds-of-paradise-women-100',
        name: "Birds of Paradise Women",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-vip-mujer-100',
        name: "212 VIP Mujer",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-tradicional-mujer-100',
        name: "Tradicional Mujer",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-tradicional-hombre-100',
        name: "Tradicional Hombre",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-good-girl-sparkling-ice-100',
        name: "Good Girl Sparkling Ice",
        brand: "Carolina Herrera",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-bad-boy-sparkling-ice-100',
        name: "Bad Boy Sparkling Ice",
        brand: "Carolina Herrera",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-coco-mademoiselle-edp-100',
        name: "Coco Mademoiselle EDP",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-n-5-edp-100',
        name: "Nº5 EDP",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-edt-100',
        name: "Chance EDT",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-eau-tendre-100',
        name: "Chance Eau Tendre",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-eau-fraiche-100',
        name: "Chance Eau Fraiche",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-coco-mademoiselle-edt-100',
        name: "Coco Mademoiselle EDT",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-allure-homme-sport-100',
        name: "Allure Homme Sport",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-allure-edt-100',
        name: "Allure EDT",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-bleu-parfum-100',
        name: "Bleu Parfum",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-bleu-eau-de-parfum-100',
        name: "Bleu Eau de Parfum",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-bleu-eau-de-toilette-100',
        name: "Bleu Eau de Toilette",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-gabrielle-100',
        name: "Gabrielle",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-allure-homme-sport-cologne-100',
        name: "Allure homme sport cologne",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-edp-100',
        name: "Chance edp",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-coco-edt-100',
        name: "Coco edt",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-eau-vive-100',
        name: "Chance eau vive",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-adore-parfum-d-eau-100',
        name: "Adore Parfum d'eau",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-j-adore-edp-100',
        name: "J'adore EDP",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-eau-de-parfum-infinissime-100',
        name: "Eau de parfum Infinissime",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-addict-100',
        name: "Dior Addict",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-homme-sport-100',
        name: "Homme Sport",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-fahrenheit-100',
        name: "Fahrenheit",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-absoluty-blooming-100',
        name: "Absoluty blooming",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-miss-dior-edp-100',
        name: "Miss Dior edp",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-poison-girl-100',
        name: "Poison Girl",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-sauvage-edp-100',
        name: "Sauvage EDP",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-homme-100',
        name: "Dior Homme",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-hypnotic-100',
        name: "Hypnotic",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-sauvage-elixir-100',
        name: "Sauvage Elixir",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-pur-poison-100',
        name: "Puré Poison",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-homme-intense-100',
        name: "Dior homme intense",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-homme-cologne-100',
        name: "Dior homme cologne",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-sauvage-edt-100',
        name: "Sauvage edt",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-coach-edp-100',
        name: "Coach EDP",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-floral-blush-100',
        name: "Floral Blush",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-dreams-sunset-100',
        name: "Dreams Sunset",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-platinum-100',
        name: "Platinum",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-open-road-100',
        name: "Open Road",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-floral-100',
        name: "Floral",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-coach-for-men-100',
        name: "Coach for men",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-coach-blue-100',
        name: "Coach blue",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-chill-hombre-100',
        name: "Chill hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-chill-mujer-100',
        name: "Chill mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-connect-hombre-100',
        name: "Connect hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-connect-mujer-100',
        name: "Connect mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-wave-hombre-100',
        name: "Wave hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-wave-mujer-100',
        name: "Wave mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-crush-hombre-100',
        name: "Crush hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-crush-mujer-100',
        name: "Crush mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-black-100',
        name: "Black",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-tradicional-hombre-100',
        name: "Tradicional hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-tradicional-mujer-100',
        name: "Tradicional mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-sport-100',
        name: "Sport",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-l-imperatrice-100',
        name: "L’imperatrice",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-dolce-intense-100',
        name: "Dolce intense",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-mujer-100ml-100',
        name: "Light Blue mujer 100ml",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-grey-100',
        name: "The one Grey",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-for-men-edt-100',
        name: "The one for men edt",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-eau-intense-100',
        name: "Light Blue eau intense",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-for-men-edp-100',
        name: "The one for men edp",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-mujer-100',
        name: "The one mujer",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-mujer-200ml-100',
        name: "Light Blue mujer 200ml",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-hombre-125ml-100',
        name: "Light Blue hombre 125ml",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-devotion-100',
        name: "Devotion",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-queen-mujer-100',
        name: "QUEEN mujer",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-king-hombre-100',
        name: "King hombre",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-hombre-200ml-100',
        name: "Light Blue hombre 200ml",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-mujer-esau-intense-100',
        name: "Light Blue mujer Esau intense",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-only-one-100',
        name: "The only one",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-pour-homme-100',
        name: "Pour homme",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-intenso-100',
        name: "INTENSO",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-summer-vibes-hombre-100',
        name: "Summer vibes hombre",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-summer-vibes-mujer-100',
        name: "Summer vibes mujer",
        brand: "Dolce Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-allure-homme-sport-cologne-100',
        name: "Allure Homme Sport Cologne",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-edp-100',
        name: "Chance EDP",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-coco-edt-100',
        name: "Coco EDT",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-eau-vive-100',
        name: "Chance Eau Vive",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-j-adore-parfum-d-eau-100',
        name: "J’Adore Parfum d’Eau",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-j-adore-edp-100',
        name: "J’Adore EDP",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-eau-de-parfum-infinissime-100',
        name: "Dior Eau de Parfum Infinissime",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-absolutely-blooming-100',
        name: "Absolutely Blooming",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-miss-dior-edp-100',
        name: "Miss Dior EDP",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-hypnotic-poison-100',
        name: "Hypnotic Poison",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-homme-intense-100',
        name: "Dior Homme Intense",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-homme-cologne-100',
        name: "Dior Homme Cologne",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-sauvage-edt-100',
        name: "Sauvage EDT",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-coach-floral-blush-100',
        name: "Coach Floral Blush",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-coach-dreams-sunset-100',
        name: "Coach Dreams Sunset",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'coach-coach-platinum-100',
        name: "Coach Platinum",
        brand: "Coach",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-chill-hombre-100',
        name: "Curve Chill Hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-chill-mujer-100',
        name: "Curve Chill Mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-connect-hombre-100',
        name: "Curve Connect Hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-connect-mujer-100',
        name: "Curve Connect Mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-wave-hombre-100',
        name: "Curve Wave Hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-wave-mujer-100',
        name: "Curve Wave Mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-crush-hombre-100',
        name: "Curve Crush Hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-crush-mujer-100',
        name: "Curve Crush Mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-black-100',
        name: "Curve Black",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-tradicional-hombre-100',
        name: "Curve Tradicional Hombre",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-tradicional-mujer-100',
        name: "Curve Tradicional Mujer",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'curve-curve-sport-100',
        name: "Curve Sport",
        brand: "Curve",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-l-imperatrice-100',
        name: "L’Imperatrice",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-dolce-intense-100',
        name: "Dolce Intense",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-mujer-100-ml-100',
        name: "Light Blue Mujer 100 ml",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-grey-100',
        name: "The One Grey",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-for-men-edt-100',
        name: "The One for Men EDT",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-eau-intense-100',
        name: "Light Blue Eau Intense",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-for-men-edp-100',
        name: "The One for Men EDP",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-the-one-mujer-100',
        name: "The One Mujer",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-mujer-200-ml-100',
        name: "Light Blue Mujer 200 ml",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-hombre-125-ml-100',
        name: "Light Blue Hombre 125 ml",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-devotion-100',
        name: "Devotion",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-queen-mujer-100',
        name: "Queen Mujer",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-king-hombre-100',
        name: "King Hombre",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-light-blue-hombre-200-ml-100',
        name: "Light Blue Hombre 200 ml",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-pour-homme-100',
        name: "Pour Homme",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-intenso-100',
        name: "Intenso",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-summer-vibes-hombre-100',
        name: "Summer Vibes Hombre",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dolce-gabbana-summer-vibes-mujer-100',
        name: "Summer Vibes Mujer",
        brand: "Dolce & Gabbana",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dkny-pure-dkny-100',
        name: "Pure DKNY",
        brand: "DKNY",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dkny-dkny-be-delicious-100',
        name: "DKNY Be Delicious",
        brand: "DKNY",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dkny-dkny-fresh-blossom-100',
        name: "DKNY Fresh Blossom",
        brand: "DKNY",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'diesel-fuel-for-life-100',
        name: "Fuel For Life",
        brand: "Diesel",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'diesel-spirit-of-the-brave-100',
        name: "Spirit of the Brave",
        brand: "Diesel",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dunhill-desire-red-100',
        name: "Desire Red",
        brand: "Dunhill",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dunhill-desire-blue-100',
        name: "Desire Blue",
        brand: "Dunhill",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'davidoff-cool-water-hombre-100',
        name: "Cool Water Hombre",
        brand: "Davidoff",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'davidoff-cool-water-mujer-100',
        name: "Cool Water Mujer",
        brand: "Davidoff",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'davidoff-horizon-100',
        name: "Horizon",
        brand: "Davidoff",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'davidoff-adventure-100',
        name: "Adventure",
        brand: "Davidoff",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'herm-s-voyage-100',
        name: "Voyage",
        brand: "Hermès",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'herm-s-terre-100',
        name: "Terre",
        brand: "Hermès",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'herm-s-h24-100',
        name: "H24",
        brand: "Hermès",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'est-e-lauder-pleasures-woman-100',
        name: "Pleasures Woman",
        brand: "Estée Lauder",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'est-e-lauder-pleasures-men-100',
        name: "Pleasures Men",
        brand: "Estée Lauder",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'est-e-lauder-youth-dew-100',
        name: "Youth Dew",
        brand: "Estée Lauder",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'est-e-lauder-beautiful-100',
        name: "Beautiful",
        brand: "Estée Lauder",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'elizabeth-arden-red-door-100',
        name: "Red Door",
        brand: "Elizabeth Arden",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'elizabeth-arden-5th-avenue-100',
        name: "5th Avenue",
        brand: "Elizabeth Arden",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'elizabeth-arden-white-diamonds-100',
        name: "White Diamonds",
        brand: "Elizabeth Arden",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'elizabeth-arden-true-love-100',
        name: "True Love",
        brand: "Elizabeth Arden",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'elizabeth-arden-white-tea-100',
        name: "White Tea",
        brand: "Elizabeth Arden",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'elizabeth-arden-green-tea-100',
        name: "Green Tea",
        brand: "Elizabeth Arden",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'elizabeth-arden-white-tea-ginger-lily-100',
        name: "White Tea Ginger Lily",
        brand: "Elizabeth Arden",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'emper-le-chameau-haya-le-chameau-100',
        name: "Haya Le Chameau",
        brand: "Emper Le Chameau",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'emper-le-chameau-stallion-53-100',
        name: "Stallion 53",
        brand: "Emper Le Chameau",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'emper-le-chameau-chic-girl-100',
        name: "Chic Girl",
        brand: "Emper Le Chameau",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'emper-le-chameau-chic-boy-100',
        name: "Chic Boy",
        brand: "Emper Le Chameau",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'emper-le-chameau-ilang-62-100',
        name: "Ilang 62",
        brand: "Emper Le Chameau",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'emper-le-chameau-phantom-my-hero-100',
        name: "Phantom My Hero",
        brand: "Emper Le Chameau",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dubai-niche-riyadh-100',
        name: "Riyadh",
        brand: "Dubai Niche",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'dubai-niche-paris-100',
        name: "Paris",
        brand: "Dubai Niche",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'faconnable-faconnable-hombre-100',
        name: "Faconnable Hombre",
        brand: "Faconnable",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'guy-laroche-drakkar-noir-100',
        name: "Drakkar Noir",
        brand: "Guy Laroche",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-beverly-hills-red-100',
        name: "Beverly Hills Red",
        brand: "Giorgio",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-blue-label-100',
        name: "Blue Label",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-organza-100',
        name: "Organza",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-xeryus-100',
        name: "Xeryus",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-xeryus-rouge-100',
        name: "Xeryus Rouge",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-very-irresistible-edt-100',
        name: "Very Irresistible EDT",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-ange-ou-d-mon-100',
        name: "Ange Ou Démon",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-ysatis-100',
        name: "Ysatis",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-amarige-100',
        name: "Amarige",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-l-interdit-edp-rouge-100',
        name: "L’Interdit EDP Rouge",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-insens-ultramarine-100',
        name: "Insensé Ultramarine",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-gentleman-edp-100',
        name: "Gentleman EDP",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-gentleman-only-100',
        name: "Gentleman Only",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-ange-ou-d-mon-le-secret-100',
        name: "Ange Ou Démon Le Secret",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-pour-homme-100',
        name: "Pour Homme",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-pi-givenchy-100',
        name: "Pi Givenchy",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-irresistible-edt-100',
        name: "Irresistible EDT",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-l-interdit-edt-100',
        name: "L’Interdit EDT",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-l-interdit-edp-100',
        name: "L’Interdit EDP",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-gentleman-givenchy-edp-100',
        name: "Gentleman Givenchy EDP",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-gentleman-edt-100',
        name: "Gentleman EDT",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-acqua-di-gio-parfum-100',
        name: "Acqua Di Gio Parfum",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-acqua-di-gio-woman-100',
        name: "Acqua Di Gio Woman",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-armani-code-100',
        name: "Armani Code",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-absolu-100',
        name: "Absolu",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-profondo-edp-100',
        name: "Profondo EDP",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-si-intense-100',
        name: "Si Intense",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-si-fiori-100',
        name: "Si Fiori",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-si-passione-100',
        name: "Si Passione",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-my-way-100',
        name: "My Way",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-stronger-with-you-100',
        name: "Stronger With You",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-my-way-intense-100',
        name: "My Way Intense",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-because-it-s-you-100',
        name: "Because It’s You",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-in-love-with-you-100',
        name: "In Love With You",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-emporio-100',
        name: "Emporio",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-gioia-100',
        name: "Gioia",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-acqua-di-gio-edt-100',
        name: "Acqua Di Gio EDT",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-profondo-parfum-100',
        name: "Profondo Parfum",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'giorgio-armani-intensely-100',
        name: "Intensely",
        brand: "Giorgio Armani",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'gucci-guilty-homme-edt-100',
        name: "Guilty Homme EDT",
        brand: "Gucci",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'gucci-guilty-homme-edp-100',
        name: "Guilty Homme EDP",
        brand: "Gucci",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'gucci-absolute-femme-100',
        name: "Absolute Femme",
        brand: "Gucci",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'gucci-absolute-homme-100',
        name: "Absolute Homme",
        brand: "Gucci",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'gucci-guilty-black-100',
        name: "Guilty Black",
        brand: "Gucci",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'gucci-guilty-femme-edt-100',
        name: "Guilty Femme EDT",
        brand: "Gucci",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'gucci-guilty-femme-edp-100',
        name: "Guilty Femme EDP",
        brand: "Gucci",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-man-hero-100',
        name: "Man Hero",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-halloween-man-100',
        name: "Halloween Man",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-man-rock-on-100',
        name: "Man Rock On",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-blue-drop-100',
        name: "Blue Drop",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-i-m-unique-100',
        name: "I’m Unique",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-mia-me-mine-100',
        name: "Mia Me Mine",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-tradicional-mujer-100',
        name: "Tradicional Mujer",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-my-wish-100',
        name: "My Wish",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-fressia-100',
        name: "Fressia",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-blossom-100',
        name: "Blossom",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-magic-100',
        name: "Magic",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-water-lily-100',
        name: "Water Lily",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-man-shot-mujer-100',
        name: "Man Shot Mujer",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-man-shot-hombre-100',
        name: "Man Shot Hombre",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'halloween-man-x-100',
        name: "Man X",
        brand: "Halloween",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-festival-vibes-for-him-100',
        name: "Festival Vibes For Him",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-festival-vibes-for-her-100',
        name: "Festival Vibes For Her",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-festival-nite-for-him-100',
        name: "Festival Nite For Him",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-canyon-escape-for-her-100',
        name: "Canyon Escape For Her",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-wave-for-her-100',
        name: "Wave For Her",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-festival-nite-for-her-100',
        name: "Festival Nite For Her",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-cayon-escape-for-him-100',
        name: "Cayon Escape for Him",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-free-wave-for-him-100',
        name: "Free Wave for Him",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-wave-for-him-100',
        name: "Wave for Him",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hollister-free-wave-for-her-100',
        name: "Free Wave for Her",
        brand: "Hollister",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-hugo-boss-man-100',
        name: "Hugo Boss Man",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-boss-orange-100',
        name: "Boss Orange",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-in-motion-100',
        name: "In Motion",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-bottled-night-100',
        name: "Bottled Night",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-dark-blue-100',
        name: "Dark Blue",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-energise-100',
        name: "Energise",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-bottled-tradicional-100',
        name: "Bottled Tradicional",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-the-scent-absolute-100',
        name: "The Scent Absolute",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-tradicional-mujer-100',
        name: "Tradicional Mujer",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-cantimplora-woman-100',
        name: "Cantimplora Woman",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-nuit-femme-100',
        name: "Nuit Femme",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-reversed-100',
        name: "Reversed",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-cantimplora-hombre-100',
        name: "Cantimplora Hombre",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-femme-edp-100',
        name: "Femme EDP",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-the-scent-hombre-100',
        name: "The Scent Hombre",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-the-scent-mujer-100',
        name: "The Scent Mujer",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-just-different-100',
        name: "Just Different",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-bottled-unlimited-100',
        name: "Bottled Unlimited",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-hugo-boss-xx-100',
        name: "Hugo Boss XX",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'hugo-boss-hugo-boss-xy-100',
        name: "Hugo Boss XY",
        brand: "Hugo Boss",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'issey-miyake-intense-100',
        name: "Intense",
        brand: "Issey Miyake",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'issey-miyake-sport-100',
        name: "Sport",
        brand: "Issey Miyake",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'issey-miyake-l-eau-d-issey-woman-100',
        name: "L’Eau D’Issey Woman",
        brand: "Issey Miyake",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'issey-miyake-l-eau-d-issey-125ml-100',
        name: "L’Eau D’Issey 125ml",
        brand: "Issey Miyake",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'issey-miyake-l-eau-d-issey-200ml-100',
        name: "L’Eau D’Issey 200ml",
        brand: "Issey Miyake",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'issey-miyake-fusion-d-issey-100',
        name: "Fusion D’Issey",
        brand: "Issey Miyake",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'joop-homme-125ml-100',
        name: "Homme 125ml",
        brand: "Joop",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'joop-homme-200ml-100',
        name: "Homme 200ml",
        brand: "Joop",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'joop-joop-go-100',
        name: "Joop Go",
        brand: "Joop",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'juicy-couture-couture-la-la-100',
        name: "Couture La La",
        brand: "Juicy Couture",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'juicy-couture-viva-la-juicy-100',
        name: "Viva La Juicy",
        brand: "Juicy Couture",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jimmy-choo-man-intense-100',
        name: "Man Intense",
        brand: "Jimmy Choo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jimmy-choo-man-blue-100',
        name: "Man Blue",
        brand: "Jimmy Choo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jimmy-choo-urban-hero-100',
        name: "Urban Hero",
        brand: "Jimmy Choo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jimmy-choo-fever-100',
        name: "Fever",
        brand: "Jimmy Choo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jimmy-choo-floral-100',
        name: "Floral",
        brand: "Jimmy Choo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jimmy-choo-jimmy-choo-man-100',
        name: "Jimmy Choo Man",
        brand: "Jimmy Choo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-la-belle-100',
        name: "La Belle",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-classique-intense-100',
        name: "Classique Intense",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-classique-100',
        name: "Classique",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-le-male-le-parfum-100',
        name: "Le Male le Parfum",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-le-beau-100',
        name: "Le Beau",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-le-beau-le-parfum-100',
        name: "Le Beau Le Parfum",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-paradise-garden-100',
        name: "Paradise Garden",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-scandal-woman-100',
        name: "Scandal Woman",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-so-scandal-100',
        name: "So Scandal",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-scandal-edt-men-100',
        name: "Scandal EDT Men",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-scandal-le-parfum-100',
        name: "Scandal Le Parfum",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jean-paul-gaultier-divine-100',
        name: "Divine",
        brand: "Jean Paul Gaultier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jennifer-lopez-glow-100',
        name: "Glow",
        brand: "Jennifer Lopez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jennifer-lopez-live-100',
        name: "Live",
        brand: "Jennifer Lopez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jennifer-lopez-still-100',
        name: "Still",
        brand: "Jennifer Lopez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'jennifer-lopez-live-luxe-100',
        name: "Live Luxe",
        brand: "Jennifer Lopez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'justin-bieber-collector-s-edition-100',
        name: "Collector’s Edition",
        brand: "Justin Bieber",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'kenneth-cole-black-100',
        name: "Black",
        brand: "Kenneth Cole",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'kenneth-cole-mankind-hero-100',
        name: "Mankind Hero",
        brand: "Kenneth Cole",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'kenzo-poppy-bouquet-100',
        name: "Poppy Bouquet",
        brand: "Kenzo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'kenzo-l-absolue-100',
        name: "L’absolue",
        brand: "Kenzo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'kenzo-homme-parfum-100',
        name: "Homme Parfum",
        brand: "Kenzo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'kenzo-by-kenzo-edp-100',
        name: "By Kenzo EDP",
        brand: "Kenzo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'kenzo-amour-100',
        name: "Amour",
        brand: "Kenzo",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-blanc-pure-edt-100',
        name: "Blanc Pure EDT",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-noir-black-100',
        name: "Noir Black",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-rose-100',
        name: "Rose",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-essential-100',
        name: "Essential",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-magnetic-woman-100',
        name: "Magnetic Woman",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-magnetic-homme-100',
        name: "Magnetic Homme",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-challenge-100',
        name: "Challenge",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-touch-of-pink-100',
        name: "Touch of Pink",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-sparkling-100',
        name: "Sparkling",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-lacoste-blanc-edp-100',
        name: "Lacoste Blanc EDP",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-pour-femme-100',
        name: "Pour Femme",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-lacoste-red-100',
        name: "Lacoste Red",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-jaune-optimistic-100',
        name: "Jaune Optimistic",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-tr-sor-100',
        name: "Trésor",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-midnight-rose-100',
        name: "Midnight Rose",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-in-love-100',
        name: "In Love",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-la-nuit-tr-sor-100',
        name: "La Nuit Trésor",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-d-azur-100',
        name: "D’Azur",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-la-vie-est-belle-100',
        name: "La Vie Est Belle",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-hipn-se-100',
        name: "Hipnôse",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-poeme-100',
        name: "Poeme",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-la-vie-est-belle-150ml-100',
        name: "La Vie Est Belle 150ml",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-id-le-100',
        name: "Idôle",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-la-vie-est-belle-intens-ment-100',
        name: "La Vie Est Belle Intensément",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lancome-miracle-100',
        name: "Miracle",
        brand: "Lancome",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-mayar-100',
        name: "Mayar",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-intense-natural-100',
        name: "Intense Natural",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ammer-al-oudh-100',
        name: "Ammer Al Oudh",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-fursan-unlimited-100',
        name: "Fursan Unlimited",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-qaed-al-fursan-100',
        name: "QAED Al Fursan",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-tharwah-gold-100',
        name: "Tharwah Gold",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-abaan-100',
        name: "Abaan",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-shaheen-silver-100',
        name: "Shaheen Silver",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-bayaan-100',
        name: "Bayaan",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-al-dur-al-maknoon-100',
        name: "Al Dur Al Maknoon",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-quimmah-women-100',
        name: "Quimmah Women",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ana-abiyedh-100',
        name: "Ana Abiyedh",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ana-abiyedh-rouge-100',
        name: "Ana Abiyedh Rouge",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ra-en-luxe-100',
        name: "Ra’en Luxe",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-maahir-black-100',
        name: "Maahir Black",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-maahir-legacy-100',
        name: "Maahir Legacy",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-maahir-black-edition-100',
        name: "Maahir Black Edition",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-maharjan-gold-100',
        name: "Maharjan Gold",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-maharjan-silver-100',
        name: "Maharjan Silver",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-sublime-100',
        name: "Sublime",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-blue-sapphire-100',
        name: "Blue Sapphire",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-liam-blue-100',
        name: "Liam Blue",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-sakeena-100',
        name: "Sakeena",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-royal-sapphire-100',
        name: "Royal Sapphire",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ramz-silver-100',
        name: "Ramz Silver",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-oud-for-glory-100',
        name: "Oud for Glory",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-hayati-100',
        name: "Hayati",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-emeer-100',
        name: "Emeer",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-amethyst-100',
        name: "Amethyst",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ejazi-100',
        name: "Ejazi",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-nebras-100',
        name: "Nebras",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-fakhar-mujer-100',
        name: "Fakhar Mujer",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-fakhar-hombre-100',
        name: "Fakhar Hombre",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-fakhar-gold-100',
        name: "Fakhar Gold",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-sansaam-silver-100',
        name: "Sansaam Silver",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-khamrah-100',
        name: "Khamrah",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-khamrah-qahwa-100',
        name: "Khamrah Qahwa",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-al-nashama-100',
        name: "Al Nashama",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-caprice-100',
        name: "Caprice",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-hayati-gold-elixir-100',
        name: "Hayati Gold Elixir",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-yara-moi-100',
        name: "Yara Moi",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-yara-100',
        name: "Yara",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-yara-tous-100',
        name: "Yara Tous",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-hayati-al-maleky-100',
        name: "Hayati Al Maleky",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-honor-glory-100',
        name: "Honor & Glory",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ishq-al-shuyukh-gold-100',
        name: "Ishq Al Shuyukh Gold",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ishq-al-shuyukh-silver-100',
        name: "Ishq Al Shuyukh Silver",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-delilah-100',
        name: "Delilah",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-shaheen-gold-100',
        name: "Shaheen Gold",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-al-noble-saffer-100',
        name: "Al Noble Saffer",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-quimmah-for-men-100',
        name: "Quimmah for Men",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-eternal-oud-100',
        name: "Eternal Oud",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-hayati-florence-100',
        name: "Hayati Florence",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-sehr-100',
        name: "SEHR",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-teriaq-100',
        name: "Teriaq",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-yara-candy-100',
        name: "Yara Candy",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-eclaire-100',
        name: "Eclaire",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-the-kingdom-men-100',
        name: "The Kingdom Men",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-jasoor-100',
        name: "Jasoor",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-morra-bilky-rose-100',
        name: "Morra Bilky Rose",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-aud-mood-100',
        name: "Aud Mood",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-blue-aud-100',
        name: "Blue Aud",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ajwad-pink-100',
        name: "Ajwad Pink",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-asad-bourbon-100',
        name: "Asad Bourbon",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-al-noble-ammer-100',
        name: "Al Noble Ammer",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-al-noble-wazeer-100',
        name: "Al Noble Wazeer",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-winners-silver-100',
        name: "Winners Silver",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-winners-gold-100',
        name: "Winners Gold",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-ameer-al-arab-100',
        name: "Ameer Al Arab",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-noble-blush-100',
        name: "Noble Blush",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-kingdom-mujer-100',
        name: "Kingdom Mujer",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lattafa-emaan-100',
        name: "Emaan",
        brand: "Lattafa",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'michael-kors-wonderlust-100',
        name: "Wonderlust",
        brand: "Michael Kors",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mercedes-benz-benz-man-100',
        name: "Benz Man",
        brand: "Mercedes Benz",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mercedes-benz-benz-select-night-100',
        name: "Benz Select Night",
        brand: "Mercedes Benz",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mercedes-benz-le-parfum-100',
        name: "Le Parfum",
        brand: "Mercedes Benz",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mercedes-benz-club-black-100',
        name: "Club Black",
        brand: "Mercedes Benz",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-legend-edt-100',
        name: "Legend EDT",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-legend-spirit-100',
        name: "Legend Spirit",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-individual-100',
        name: "Individual",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-explorer-100',
        name: "Explorer",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-lady-emblem-elixir-100',
        name: "Lady Emblem Elixir",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-emblem-100',
        name: "Emblem",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-legend-red-100',
        name: "Legend Red",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mont-blanc-fem-classic-100',
        name: "Fem Classic",
        brand: "Mont Blanc",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'moschino-moschino-toy-boy-100',
        name: "Moschino Toy Boy",
        brand: "Moschino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'moschino-moschino-toy-2-100',
        name: "Moschino Toy 2",
        brand: "Moschino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'moschino-fresh-couture-100',
        name: "Fresh Couture",
        brand: "Moschino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'moschino-i-love-love-100',
        name: "I Love Love",
        brand: "Moschino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'moschino-cheap-and-chic-100',
        name: "Cheap and Chic",
        brand: "Moschino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'marc-jacobs-daisy-100',
        name: "Daisy",
        brand: "Marc Jacobs",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'marc-jacobs-daisy-love-100',
        name: "Daisy Love",
        brand: "Marc Jacobs",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'marc-jacobs-perfect-100',
        name: "Perfect",
        brand: "Marc Jacobs",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'marc-jacobs-decadence-100',
        name: "Decadence",
        brand: "Marc Jacobs",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-eternity-men-100',
        name: "Eternity Men",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'calvin-klein-eternity-women-100',
        name: "Eternity Women",
        brand: "Calvin Klein",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'lacoste-match-point-100',
        name: "Match Point",
        brand: "Lacoste",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'cartier-d-claration-d-un-soir-100',
        name: "Déclaration D'Un Soir",
        brand: "Cartier",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-21-bon-bon-100',
        name: "21 Bon Bon",
        brand: "Carolina Herrera",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-good-girl-supreme-100',
        name: "Good Girl Supreme",
        brand: "Carolina Herrera",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-good-girl-traditional-100',
        name: "Good Girl Traditional",
        brand: "Carolina Herrera",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-bad-boy-100',
        name: "Bad Boy",
        brand: "Carolina Herrera",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-212-vip-ros-100',
        name: "212 VIP Rosé",
        brand: "Carolina Herrera",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'carolina-herrera-ch-women-100',
        name: "CH Women",
        brand: "Carolina Herrera",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-jadore-edp-100',
        name: "Jadore EDP",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-suavage-edp-100',
        name: "Suavage EDP",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-suavage-edt-100',
        name: "Suavage EDT",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-pure-poison-100',
        name: "Pure Poison",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-blooming-bouquet-100',
        name: "Blooming Bouquet",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'christian-dior-dior-homme-sport-100',
        name: "Dior Homme Sport",
        brand: "Christian Dior",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-givenchy-pi-100',
        name: "Givenchy Pi",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-givenchy-gentleman-100',
        name: "Givenchy Gentleman",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'givenchy-givenchy-pour-homme-100',
        name: "Givenchy Pour Homme",
        brand: "Givenchy",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-coco-mademoiselle-100',
        name: "Coco Mademoiselle",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-bleu-de-chanel-edp-100',
        name: "Bleu de Chanel EDP",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-bleu-de-chanel-edt-100',
        name: "Bleu de Chanel EDT",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-bleu-de-chanel-parfum-100',
        name: "Bleu de Chanel Parfum",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'chanel-chance-eau-fra-che-100',
        name: "Chance Eau Fraîche",
        brand: "Chanel",
        price: 120,
        image: "/luxury-perfume-ingredients-flowers-and-essences.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-narciso-rodriguez-for-her-100',
        name: "Narciso Rodriguez For Her",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-narciso-poudr-e-100',
        name: "Narciso Poudrée",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-for-her-edt-100',
        name: "For Her EDT",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-musc-noir-rose-100',
        name: "Musc Noir Rose",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-pure-musc-100',
        name: "Pure Musc",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-bleu-noir-edp-100',
        name: "Bleu Noir EDP",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-bleu-noir-edt-100',
        name: "Bleu Noir EDT",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-bleu-noir-parfum-100',
        name: "Bleu Noir Parfum",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tom-ford-ombre-leather-100',
        name: "Ombre Leather",
        brand: "Tom Ford",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tom-ford-black-orchid-100',
        name: "Black Orchid",
        brand: "Tom Ford",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tom-ford-sole-di-positano-100',
        name: "Sole di Positano",
        brand: "Tom Ford",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tom-ford-fabulous-100',
        name: "Fabulous",
        brand: "Tom Ford",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tom-ford-tobacco-vanille-100',
        name: "Tobacco Vanille",
        brand: "Tom Ford",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tom-ford-velvet-orchid-100',
        name: "Velvet Orchid",
        brand: "Tom Ford",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'viktor-rolf-flowerbomb-100',
        name: "Flowerbomb",
        brand: "Viktor & Rolf",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'viktor-rolf-spicebomb-extreme-100',
        name: "Spicebomb Extreme",
        brand: "Viktor & Rolf",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'viktor-rolf-spicebomb-night-vision-100',
        name: "Spicebomb Night Vision",
        brand: "Viktor & Rolf",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-eros-100',
        name: "Eros",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-eros-flame-100',
        name: "Eros Flame",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-dylan-blue-100',
        name: "Dylan Blue",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-bright-crystal-100',
        name: "Bright Crystal",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-crystal-noir-100',
        name: "Crystal Noir",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-yellow-diamond-100',
        name: "Yellow Diamond",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-pour-femme-dylan-turquoise-100',
        name: "Pour Femme Dylan Turquoise",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-pour-femme-dylan-blue-100',
        name: "Pour Femme Dylan Blue",
        brand: "Versace",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-valentino-uomo-born-in-roma-100',
        name: "Valentino Uomo Born in Roma",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-valentino-donna-born-in-roma-100',
        name: "Valentino Donna Born in Roma",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-voce-viva-100',
        name: "Voce Viva",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-voce-viva-intensa-100',
        name: "Voce Viva Intensa",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-yellow-dream-uomo-100',
        name: "Yellow Dream Uomo",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-yellow-dream-donna-100',
        name: "Yellow Dream Donna",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-y-le-parfum-100',
        name: "Y Le Parfum",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-y-edt-100',
        name: "Y EDT",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-y-edp-100',
        name: "Y EDP",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-la-nuit-de-l-homme-100',
        name: "La Nuit de L’Homme",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-l-homme-100',
        name: "L’Homme",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-libre-edp-100',
        name: "Libre EDP",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-libre-edt-100',
        name: "Libre EDT",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-libre-intense-100',
        name: "Libre Intense",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-black-opium-100',
        name: "Black Opium",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-black-opium-nuit-blanche-100',
        name: "Black Opium Nuit Blanche",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-cinema-100',
        name: "Cinema",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-manifesto-100',
        name: "Manifesto",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-opium-100',
        name: "Opium",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-woman-oriental-100',
        name: "Zara Woman Oriental",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-femme-100',
        name: "Zara Femme",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-nude-bouquet-100',
        name: "Zara Nude Bouquet",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-gardenia-100',
        name: "Zara Gardenia",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-wonder-rose-100',
        name: "Zara Wonder Rose",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-red-temptation-100',
        name: "Zara Red Temptation",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-red-temptation-summer-100',
        name: "Zara Red Temptation Summer",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-red-vanilla-100',
        name: "Zara Red Vanilla",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-emotions-zara-amalfi-sunray-100',
        name: "Zara Amalfi Sunray",
        brand: "Zara Emotions",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-emotions-zara-fleur-de-patchouli-100',
        name: "Zara Fleur de Patchouli",
        brand: "Zara Emotions",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-emotions-zara-ebony-wood-100',
        name: "Zara Ebony Wood",
        brand: "Zara Emotions",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-emotions-zara-vetiver-pamplemousse-100',
        name: "Zara Vetiver Pamplemousse",
        brand: "Zara Emotions",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-emotions-zara-waterlily-tea-dress-100',
        name: "Zara Waterlily Tea Dress",
        brand: "Zara Emotions",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-emotions-zara-fashionably-london-100',
        name: "Zara Fashionably London",
        brand: "Zara Emotions",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-emotions-zara-elegantly-tokyo-100',
        name: "Zara Elegantly Tokyo",
        brand: "Zara Emotions",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-vibrant-leather-100',
        name: "Zara Vibrant Leather",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-man-silver-100',
        name: "Zara Man Silver",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-man-gold-100',
        name: "Zara Man Gold",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-9-0-100',
        name: "Zara 9.0",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-8-0-100',
        name: "Zara 8.0",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-blue-spirit-100',
        name: "Zara Blue Spirit",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-warm-black-100',
        name: "Zara Warm Black",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zara-zara-seoul-100',
        name: "Zara Seoul",
        brand: "Zara",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mancera-instant-crush-100',
        name: "Instant Crush",
        brand: "Mancera",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mancera-red-tobacco-100',
        name: "Red Tobacco",
        brand: "Mancera",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'mancera-cedrat-boise-100',
        name: "Cedrat Boise",
        brand: "Mancera",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'montale-par-s-arabians-tonka-100',
        name: "Arabians Tonka",
        brand: "Montale París",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'nautica-nautica-blue-100',
        name: "Nautica Blue",
        brand: "Nautica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'nautica-nautica-voyage-100',
        name: "Nautica Voyage",
        brand: "Nautica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'nautica-nautica-classic-100',
        name: "Nautica Classic",
        brand: "Nautica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'nautica-voyage-n-83-100',
        name: "Voyage N-83",
        brand: "Nautica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'nautica-voyage-heritage-100',
        name: "Voyage Heritage",
        brand: "Nautica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'nautica-blue-ambition-100',
        name: "Blue Ambition",
        brand: "Nautica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'nautica-nautica-sport-100',
        name: "Nautica Sport",
        brand: "Nautica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-for-her-100',
        name: "For Her",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'narciso-rodriguez-pure-musc-for-her-100',
        name: "Pure Musc For Her",
        brand: "Narciso Rodriguez",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'oscar-de-la-renta-extraordinary-petale-100',
        name: "Extraordinary Petale",
        brand: "Oscar de la Renta",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'oscar-de-la-renta-midnight-amber-100',
        name: "Midnight Amber",
        brand: "Oscar de la Renta",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'oscar-de-la-renta-orange-flower-100',
        name: "Orange Flower",
        brand: "Oscar de la Renta",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'orientica-velvet-gold-100',
        name: "Velvet Gold",
        brand: "Orientica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'orientica-royal-amber-100',
        name: "Royal Amber",
        brand: "Orientica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'orientica-amber-rouge-100',
        name: "Amber Rouge",
        brand: "Orientica",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-one-million-100ml-100',
        name: "One Million 100ml",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-million-parfum-100',
        name: "Million Parfum",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-million-elixir-100',
        name: "Million Elixir",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-million-lucky-100',
        name: "Million Lucky",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-olympea-blossom-100',
        name: "Olympea Blossom",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-olympea-legend-100',
        name: "Olympea Legend",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-olympea-aqua-100',
        name: "Olympea Aqua",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-phantom-100',
        name: "Phantom",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-invictus-100',
        name: "Invictus",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-invictus-victory-100',
        name: "Invictus Victory",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-invictus-platinum-100',
        name: "Invictus Platinum",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-ultraviolet-man-100',
        name: "Ultraviolet Man",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-ultraviolet-100',
        name: "Ultraviolet",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-fame-100',
        name: "Fame",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-million-royal-100',
        name: "Million Royal",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-one-million-200ml-200',
        name: "One Million 200ml",
        brand: "Paco Rabanne",
        price: 171,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "200 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-fame-parfum-100',
        name: "Fame Parfum",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-blooming-pink-100',
        name: "Blooming Pink",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-olympea-intense-100',
        name: "Olympea Intense",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-olympea-flora-100',
        name: "Olympea Flora",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'paco-rabanne-olympea-solar-100',
        name: "Olympea Solar",
        brand: "Paco Rabanne",
        price: 95,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-gold-rush-100',
        name: "Gold Rush",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-ros-rush-100',
        name: "Rosé Rush",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-pink-rush-100',
        name: "Pink Rush",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-platinum-rush-100',
        name: "Platinum Rush",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-just-me-100',
        name: "Just Me",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-tradicional-mujer-100',
        name: "Tradicional Mujer",
        brand: "París Hilton",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-gold-rush-man-100',
        name: "Gold Rush Man",
        brand: "París Hilton",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-tradicional-hombre-100',
        name: "Tradicional Hombre",
        brand: "París Hilton",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-can-can-100',
        name: "Can Can",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-can-can-burlesque-100',
        name: "Can Can Burlesque",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'par-s-hilton-heiress-100',
        name: "Heiress",
        brand: "París Hilton",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-360-black-100',
        name: "360 Black",
        brand: "Perry Ellis",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-360-cl-ssica-100',
        name: "360 Clássica",
        brand: "Perry Ellis",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-360-red-hombre-100',
        name: "360 Red Hombre",
        brand: "Perry Ellis",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-purple-100',
        name: "Purple",
        brand: "Perry Ellis",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-360-collection-100',
        name: "360 Collection",
        brand: "Perry Ellis",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-portfolio-red-100',
        name: "Portfolio Red",
        brand: "Perry Ellis",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-p-e-18-intense-100',
        name: "P.E 18 Intense",
        brand: "Perry Ellis",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'perry-ellis-portfolio-black-100',
        name: "Portfolio Black",
        brand: "Perry Ellis",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'prada-candy-kiss-100',
        name: "Candy Kiss",
        brand: "Prada",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'prada-la-femme-prada-100',
        name: "La Femme Prada",
        brand: "Prada",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'prada-carb-n-100',
        name: "Carbón",
        brand: "Prada",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'prada-ocean-100',
        name: "Ocean",
        brand: "Prada",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rave-now-women-100',
        name: "Now Women",
        brand: "Rave",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rave-now-white-100',
        name: "Now White",
        brand: "Rave",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rave-now-rouge-100',
        name: "Now Rouge",
        brand: "Rave",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rave-now-men-100',
        name: "Now Men",
        brand: "Rave",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-ralph-lauren-woman-100',
        name: "Ralph Lauren Woman",
        brand: "Ralph Lauren",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-polo-blue-100',
        name: "Polo Blue",
        brand: "Ralph Lauren",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-polo-ultra-blue-100',
        name: "Polo Ultra Blue",
        brand: "Ralph Lauren",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-polo-black-100',
        name: "Polo Black",
        brand: "Ralph Lauren",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-polo-sport-100',
        name: "Polo Sport",
        brand: "Ralph Lauren",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-1-for-men-100',
        name: "1 for Men",
        brand: "Ralph Lauren",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-1-for-woman-100',
        name: "1 for Woman",
        brand: "Ralph Lauren",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-polo-red-100',
        name: "Polo Red",
        brand: "Ralph Lauren",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-polo-verde-100',
        name: "Polo Verde",
        brand: "Ralph Lauren",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'ralph-lauren-ralph-romance-100',
        name: "Ralph Romance",
        brand: "Ralph Lauren",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rasasi-hawas-rasasi-100',
        name: "Hawas Rasasi",
        brand: "Rasasi",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rasasi-shurah-100',
        name: "Shurah",
        brand: "Rasasi",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rasasi-hawas-ice-100',
        name: "Hawas Ice",
        brand: "Rasasi",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rasasi-hawas-black-100',
        name: "Hawas Black",
        brand: "Rasasi",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'reyane-tradition-xplore-100',
        name: "Xplore",
        brand: "Reyane Tradition",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'reyane-tradition-ii-by-for-men-100',
        name: "II by for Men",
        brand: "Reyane Tradition",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'reyane-tradition-ii-by-woman-100',
        name: "II by Woman",
        brand: "Reyane Tradition",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'reyane-tradition-gentle-edp-100',
        name: "Gentle Edp",
        brand: "Reyane Tradition",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'reyane-tradition-aqua-di-parisis-venezia-100',
        name: "Aqua di Parisis Venezia",
        brand: "Reyane Tradition",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'reyane-tradition-delanoe-100',
        name: "Delanoe",
        brand: "Reyane Tradition",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'reyane-tradition-magic-red-100',
        name: "Magic Red",
        brand: "Reyane Tradition",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'shakira-wild-elixir-100',
        name: "Wild Elixir",
        brand: "Shakira",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'shakira-floreare-100',
        name: "Floreare",
        brand: "Shakira",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'shakira-by-shakira-100',
        name: "By Shakira",
        brand: "Shakira",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'shakira-sugar-100',
        name: "Sugar",
        brand: "Shakira",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tommy-hilfiger-tommy-girl-100',
        name: "Tommy Girl",
        brand: "Tommy Hilfiger",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tommy-hilfiger-tommy-for-men-100',
        name: "Tommy for Men",
        brand: "Tommy Hilfiger",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tommy-hilfiger-impact-100',
        name: "Impact",
        brand: "Tommy Hilfiger",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-tous-edp-100',
        name: "Tous Edp",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-tous-edt-100',
        name: "Tous Edt",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-man-sport-100',
        name: "Man Sport",
        brand: "Tous",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-man-intense-100',
        name: "Man Intense",
        brand: "Tous",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-tous-man-edt-100',
        name: "Tous Man Edt",
        brand: "Tous",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-man-concentr-es-100',
        name: "Man Concentrées",
        brand: "Tous",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-baby-tous-100',
        name: "Baby Tous",
        brand: "Tous",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-gems-party-100',
        name: "Gems Party",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-tous-touch-100',
        name: "Tous Touch",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-tous-kids-100',
        name: "Tous Kids",
        brand: "Tous",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-the-emerald-elixir-100',
        name: "The Emerald Elixir",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-love-me-edp-100',
        name: "Love Me Edp",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-the-onyx-parfum-100',
        name: "The Onyx Parfum",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-your-powers-100',
        name: "Your Powers",
        brand: "Tous",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'tous-the-silver-parfum-100',
        name: "The Silver Parfum",
        brand: "Tous",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-versace-pour-homme-100',
        name: "Versace pour Homme",
        brand: "Versace",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-versace-pour-femme-100',
        name: "Versace pour Femme",
        brand: "Versace",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-pour-homme-dylan-stronger-100',
        name: "Pour Homme Dylan Stronger",
        brand: "Versace",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-man-eau-fraiche-100',
        name: "Man Eau Fraiche",
        brand: "Versace",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-bright-crystal-absolu-100',
        name: "Bright Crystal Absolu",
        brand: "Versace",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-bright-chrystal-100',
        name: "Bright Chrystal",
        brand: "Versace",
        price: 95,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'versace-eros-parfum-100',
        name: "Eros Parfum",
        brand: "Versace",
        price: 95,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-victorinox-swiss-army-100',
        name: "Victorinox Swiss Army",
        brand: "Victorinox",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-swiss-army-altitude-100',
        name: "Swiss Army Altitude",
        brand: "Victorinox",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-altitude-edt-100',
        name: "Altitude Edt",
        brand: "Victorinox",
        price: 60,
        image: "/masculine-woody-perfume-bottle.jpg",
        gender: 'Hombre',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-compassion-for-her-100',
        name: "Compassion for Her",
        brand: "Victorinox",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-victoria-rouge-100',
        name: "Victoria Rouge",
        brand: "Victorinox",
        price: 60,
        image: "/luxury-floral-perfume-bottle.jpg",
        gender: 'Mujer',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-sport-100',
        name: "Sport",
        brand: "Victorinox",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-altitude-100',
        name: "Altitude",
        brand: "Victorinox",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victorinox-classic-100',
        name: "Classic",
        brand: "Victorinox",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'victoria-s-secret-bombshell-100',
        name: "Bombshell",
        brand: "Victoria's Secret",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-green-stravaganza-100',
        name: "Green Stravaganza",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-donna-eau-parfum-100',
        name: "Donna Eau Parfum",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-born-in-roma-intense-100',
        name: "Born in Roma Intense",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-donna-intense-100',
        name: "Donna Intense",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-voge-viva-edp-100',
        name: "Voge Viva EDP",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-tradicional-edt-100',
        name: "Tradicional EDT",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-tradicional-intense-100',
        name: "Tradicional Intense",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-born-in-roma-edt-100',
        name: "Born in Roma EDT",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-coral-fantasy-donna-100',
        name: "Coral Fantasy Donna",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'valentino-coral-fantasy-uomo-100',
        name: "Coral Fantasy Uomo",
        brand: "Valentino",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-kouros-100',
        name: "Kouros",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-l-homme-edt-100',
        name: "L’Homme EDT",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-paris-100',
        name: "Paris",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-libre-toilette-100',
        name: "Libre Toilette",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-libre-edp-intense-100',
        name: "Libre EDP Intense",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-libre-le-parfum-100',
        name: "Libre Le Parfum",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-mon-paris-100',
        name: "Mon Paris",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-y-yves-le-parfum-100',
        name: "Y Yves Le Parfum",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-y-yves-edp-100',
        name: "Y Yves EDP",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-y-yves-edt-100',
        name: "Y Yves EDT",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-y-yves-edp-intense-100',
        name: "Y Yves EDP Intense",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'yves-saint-laurent-opium-black-100',
        name: "Opium Black",
        brand: "Yves Saint Laurent",
        price: 120,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'fred-hayman-touch-100',
        name: "Touch",
        brand: "Fred Hayman",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'fred-hayman-beverly-hills-red-100',
        name: "Beverly Hills Red",
        brand: "Fred Hayman",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'aquolina-pink-sugar-100',
        name: "Pink Sugar",
        brand: "Aquolina",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'rihanna-riri-100',
        name: "RiRi",
        brand: "Rihanna",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'katy-perry-meow-100',
        name: "Meow",
        brand: "Katy Perry",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'katy-perry-purr-100',
        name: "Purr",
        brand: "Katy Perry",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zakat-zakat-z25-100',
        name: "Zakat Z25",
        brand: "Zakat",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zimaya-fatima-100',
        name: "Fatima",
        brand: "Zimaya",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    },
    {
        id: 'zimaya-fatima-velvet-love-100',
        name: "Fatima Velvet Love",
        brand: "Zimaya",
        price: 60,
        image: "/oriental-amber-perfume-bottle.jpg",
        gender: 'Unisex',
        size: "100 ml",
        notes: "",
        description: ""
    }
];
}),
"[project]/components/cart-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartIcon",
    ()=>CartIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function CartIcon() {
    const { getTotalItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const totalItems = getTotalItems();
    const [pop, setPop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const prev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(totalItems);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (prev.current !== totalItems) {
            setPop(true);
            const t = setTimeout(()=>setPop(false), 350);
            prev.current = totalItems;
            return ()=>clearTimeout(t);
        }
    }, [
        totalItems
    ]);
    const display = totalItems > 9 ? '9+' : String(totalItems);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/carrito",
        className: "relative text-foreground hover:text-accent transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/cart-icon.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium cart-badge ${pop ? 'cart-badge-pop' : ''}`,
                children: display
            }, void 0, false, {
                fileName: "[project]/components/cart-icon.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cart-icon.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/perfumes/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerfumesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/perfumes-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cart-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function PerfumesPage() {
    const [selectedGender, setSelectedGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    // Filters
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedBrands, setSelectedBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const prices = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].map((p)=>typeof p.price === 'number' ? p.price : NaN).filter(Number.isFinite);
    const dataMinPrice = prices.length ? Math.min(...prices) : 0;
    const dataMaxPrice = prices.length ? Math.max(...prices) : 0;
    // prices in data are in units; display/filter should treat them as thousands (CRC)
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(dataMinPrice * 1000);
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(dataMaxPrice * 1000);
    // Pagination
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const perPage = 24;
    const filteredPerfumes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let list = selectedGender === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].filter((p)=>p.gender === selectedGender);
        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            list = list.filter((p)=>(p.name || '').toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q));
        }
        if (selectedBrands.length > 0) {
            list = list.filter((p)=>selectedBrands.includes(p.brand));
        }
        list = list.filter((p)=>{
            if (typeof p.price !== 'number') return true;
            const scaled = p.price * 1000;
            return scaled >= minPrice && scaled <= maxPrice;
        });
        return list;
    }, [
        selectedGender,
        searchTerm,
        selectedBrands,
        minPrice,
        maxPrice
    ]);
    const availableBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const list = selectedGender === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].filter((p)=>p.gender === selectedGender);
        return Array.from(new Set(list.map((p)=>p.brand))).sort();
    }, [
        selectedGender
    ]);
    const brandCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const list = selectedGender === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].filter((p)=>p.gender === selectedGender);
        const map = {};
        list.forEach((p)=>{
            map[p.brand] = (map[p.brand] || 0) + 1;
        });
        return map;
    }, [
        selectedGender
    ]);
    const sizeOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const set = new Set();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].forEach((p)=>{
            if (p.size) set.add(p.size);
        });
        return Array.from(set).sort();
    }, []);
    const sizeCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].forEach((p)=>{
            if (p.size) map[p.size] = (map[p.size] || 0) + 1;
        });
        return map;
    }, []);
    const genderCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = {
            Hombre: 0,
            Mujer: 0,
            Unisex: 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].forEach((p)=>{
            if (p.gender) map[p.gender] = (map[p.gender] || 0) + 1;
        });
        return map;
    }, []);
    const [mobileFiltersOpen, setMobileFiltersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const filterActive = Boolean(searchTerm.trim() || selectedBrands.length > 0 || minPrice !== dataMinPrice || maxPrice !== dataMaxPrice);
    const totalPages = Math.max(1, Math.ceil(filteredPerfumes.length / perPage));
    const pageStart = (currentPage - 1) * perPage;
    const pageItems = filteredPerfumes.slice(pageStart, pageStart + perPage);
    const toggleBrand = (brand)=>{
        setCurrentPage(1);
        setSelectedBrands((prev)=>prev.includes(brand) ? prev.filter((b)=>b !== brand) : [
                ...prev,
                brand
            ]);
    };
    const resetFilters = ()=>{
        setSearchTerm('');
        setSelectedBrands([]);
        setMinPrice(dataMinPrice * 1000);
        setMaxPrice(dataMaxPrice * 1000);
        setCurrentPage(1);
    };
    const handleSpray = (e, perfume)=>{
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        // Crear partículas de spray
        for(let i = 0; i < 15; i++){
            const particle = document.createElement('div');
            particle.className = 'spray-particle';
            particle.style.left = `${rect.width / 2}px`;
            particle.style.top = `${rect.height * 0.15}px`;
            const colors = {
                'Hombre': 'rgba(59, 130, 246, 0.8)',
                'Mujer': 'rgba(236, 72, 153, 0.8)',
                'Unisex': 'rgba(168, 85, 247, 0.8)'
            };
            particle.style.background = colors[perfume.gender];
            card.appendChild(particle);
            setTimeout(()=>particle.remove(), 2500);
        }
        // Rotar botella
        const img = card.querySelector('img');
        if (img) {
            img.style.transform = 'rotate(15deg) scale(1.05)';
            setTimeout(()=>{
                img.style.transform = 'rotate(0deg) scale(1)';
            }, 500);
        }
    };
    const handleBuyNow = (perfume)=>{
        const message = `Hola! Estoy interesado en comprar:%0A%0A${perfume.brand} - ${perfume.name}%0A%0A¿Está disponible?`;
        window.open(`https://www.instagram.com/direct/t/17843825013072961?text=${message}`, '_blank');
    };
    const handleReservarCita = ()=>{
        window.open('https://www.instagram.com/direct/t/17843825013072961', '_blank');
    };
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1 h-8 bg-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-serif text-xl tracking-tight text-foreground",
                                    children: "PUFF&SCENT"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-8 text-sm tracking-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/vapes",
                                    className: "text-foreground hover:text-accent transition-colors uppercase",
                                    children: "Vapes"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/wax",
                                    className: "text-foreground hover:text-accent transition-colors uppercase",
                                    children: "Wax"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/nosotros",
                                    className: "text-foreground hover:text-accent transition-colors uppercase",
                                    children: "Nosotros"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com/puffscent",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-foreground hover:text-accent transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/perfumes/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartIcon"], {}, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "md:hidden text-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/perfumes/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleReservarCita,
                                    className: "hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90",
                                    children: "Contactanos"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/perfumes/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/perfumes/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-b from-background to-secondary/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif text-5xl md:text-6xl mb-4 text-foreground",
                                        children: "Catálogo de Perfumes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/perfumes/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed",
                                        children: "Descubre nuestra exclusiva colección de fragancias de las mejores marcas del mundo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/perfumes/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/perfumes/page.tsx",
                                lineNumber: 193,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 192,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4 mb-12 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setSelectedGender('all'),
                                    variant: selectedGender === 'all' ? 'default' : 'outline',
                                    className: "text-lg",
                                    children: "Todos"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setSelectedGender('Hombre'),
                                    variant: selectedGender === 'Hombre' ? 'default' : 'outline',
                                    className: "text-lg",
                                    children: "Hombre"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setSelectedGender('Mujer'),
                                    variant: selectedGender === 'Mujer' ? 'default' : 'outline',
                                    className: "text-lg",
                                    children: "Mujer"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setSelectedGender('Unisex'),
                                    variant: selectedGender === 'Unisex' ? 'default' : 'outline',
                                    className: "text-lg",
                                    children: "Unisex"
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 207,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex justify-end mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 border rounded flex items-center gap-2",
                                onClick: ()=>setMobileFiltersOpen(true),
                                children: [
                                    "FILTER & SORT",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 127
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/perfumes/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/perfumes/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 239,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-start gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                        className: "w-full md:w-72",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border rounded bg-background/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold mb-3",
                                                    children: "Filtros"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "search",
                                                        placeholder: "Buscar por nombre o marca",
                                                        value: searchTerm,
                                                        onChange: (e)=>{
                                                            setSearchTerm(e.target.value);
                                                            setCurrentPage(1);
                                                        },
                                                        className: "w-full px-3 py-2 border rounded focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        className: "mb-2",
                                                        open: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                className: "cursor-pointer font-medium",
                                                                children: [
                                                                    "Marcas ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            "(",
                                                                            Object.keys(brandCounts).length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 76
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex flex-col gap-2 max-h-48 overflow-auto pr-2",
                                                                children: availableBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: selectedBrands.includes(brand),
                                                                                        onChange: ()=>{
                                                                                            toggleBrand(brand);
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 273,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "truncate",
                                                                                        children: brand
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 274,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 272,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground text-xs",
                                                                                children: brandCounts[brand] || 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 276,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, brand, true, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 271,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            className: "mb-2",
                                                            open: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    className: "cursor-pointer font-medium",
                                                                    children: "Género"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 flex flex-col gap-2",
                                                                    children: [
                                                                        [
                                                                            'Hombre',
                                                                            'Mujer',
                                                                            'Unisex'
                                                                        ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center justify-between text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "radio",
                                                                                                name: "gender",
                                                                                                checked: selectedGender === g,
                                                                                                onChange: ()=>{
                                                                                                    setSelectedGender(g);
                                                                                                    setCurrentPage(1);
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 290,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: g
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 291,
                                                                                                columnNumber: 29
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 289,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-muted-foreground text-xs",
                                                                                        children: genderCounts[g]
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 293,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, g, true, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 288,
                                                                                columnNumber: 25
                                                                            }, this)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center justify-between text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            name: "gender",
                                                                                            checked: selectedGender === 'all',
                                                                                            onChange: ()=>{
                                                                                                setSelectedGender('all');
                                                                                                setCurrentPage(1);
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 298,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "Todos"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 299,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                    lineNumber: 297,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-muted-foreground text-xs",
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].length
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                    lineNumber: 301,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    className: "cursor-pointer font-medium",
                                                                    children: "Tamaño"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 flex flex-col gap-2 max-h-48 overflow-auto pr-2",
                                                                    children: sizeOptions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center justify-between text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: false,
                                                                                            onChange: ()=>{}
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 312,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate",
                                                                                            children: s
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 313,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-muted-foreground text-xs",
                                                                                    children: sizeCounts[s] || 0
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                    lineNumber: 315,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, s, true, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 310,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            className: "mb-2",
                                                            open: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    className: "cursor-pointer font-medium",
                                                                    children: "Rango de precio (CRC)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            className: "w-28 px-2 py-1 border rounded",
                                                                            value: minPrice,
                                                                            onChange: (e)=>{
                                                                                setMinPrice(Number(e.target.value || dataMinPrice * 1000));
                                                                                setCurrentPage(1);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 324,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 325,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            className: "w-28 px-2 py-1 border rounded",
                                                                            value: maxPrice,
                                                                            onChange: (e)=>{
                                                                                setMaxPrice(Number(e.target.value || dataMaxPrice * 1000));
                                                                                setCurrentPage(1);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 326,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            onClick: resetFilters,
                                                            children: "Limpiar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: [
                                                                filteredPerfumes.length,
                                                                " resultados"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/perfumes/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                        className: "flex-1",
                                        children: filterActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                                                    children: pageItems.map((perfume)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                            className: "group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative",
                                                            onClick: (e)=>handleSpray(e, perfume),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative aspect-square overflow-hidden bg-secondary/30",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: perfume.image || "/placeholder.svg",
                                                                        alt: perfume.name,
                                                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 350,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground mb-1",
                                                                            children: perfume.brand
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 353,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-semibold text-lg mb-2 text-balance",
                                                                            children: perfume.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 354,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        perfume.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground mb-2",
                                                                            children: perfume.size
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 355,
                                                                            columnNumber: 44
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mb-3",
                                                                            children: typeof perfume.price === 'number' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-lg font-semibold",
                                                                                children: (perfume.price * 1000).toLocaleString('es-CR', {
                                                                                    style: 'currency',
                                                                                    currency: 'CRC'
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 358,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                className: "w-full",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                },
                                                                                children: "Consultar precio"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 360,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 356,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "w-full",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                addToCart({
                                                                                    id: perfume.id,
                                                                                    name: perfume.name,
                                                                                    price: perfume.price,
                                                                                    image: perfume.image || '/placeholder.svg',
                                                                                    type: 'perfume',
                                                                                    size: perfume.size
                                                                                });
                                                                                __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript, async loader)").then((m)=>m.toast.success('Añadido al carrito'));
                                                                            },
                                                                            children: "Añadir al carrito"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, perfume.id, true, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-3 mt-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            disabled: currentPage <= 1,
                                                            onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                                            children: "Anterior"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "Pagina ",
                                                                currentPage,
                                                                " / ",
                                                                totalPages
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            disabled: currentPage >= totalPages,
                                                            onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                                            children: "Siguiente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this) : (()=>{
                                            const brands = Array.from(new Set(filteredPerfumes.map((p)=>p.brand)));
                                            if (brands.length === 0) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-lg",
                                                        children: "No se encontraron perfumes en esta categoría"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 23
                                                }, this);
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-12",
                                                children: brands.map((brand)=>{
                                                    const byBrand = filteredPerfumes.filter((p)=>p.brand === brand);
                                                    const hombres = byBrand.filter((p)=>p.gender === 'Hombre');
                                                    const mujeres = byBrand.filter((p)=>p.gender === 'Mujer');
                                                    const unisex = byBrand.filter((p)=>p.gender === 'Unisex');
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                        className: "bg-background/50 p-6 rounded-lg border border-border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl font-semibold",
                                                                        children: brand
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            byBrand.length,
                                                                            " fragancias"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 29
                                                            }, this),
                                                            hombres.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xl font-medium mb-3",
                                                                        children: "Hombre"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                                                                        children: hombres.map((perfume)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                                                className: "group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative",
                                                                                onClick: (e)=>handleSpray(e, perfume),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative aspect-square overflow-hidden bg-secondary/30",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: perfume.image || "/placeholder.svg",
                                                                                            alt: perfume.name,
                                                                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 413,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 412,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-muted-foreground mb-1",
                                                                                                children: perfume.brand
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 420,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                                className: "font-semibold text-lg mb-2 text-balance",
                                                                                                children: perfume.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 421,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            perfume.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-muted-foreground mb-2",
                                                                                                children: perfume.size
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 423,
                                                                                                columnNumber: 43
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mb-3",
                                                                                                children: typeof perfume.price === 'number' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-lg font-semibold",
                                                                                                    children: (perfume.price * 1000).toLocaleString('es-CR', {
                                                                                                        style: 'currency',
                                                                                                        currency: 'CRC'
                                                                                                    })
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                                    lineNumber: 427,
                                                                                                    columnNumber: 57
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    className: "w-full",
                                                                                                    onClick: (e)=>{
                                                                                                        e.stopPropagation();
                                                                                                    },
                                                                                                    children: "Consultar precio"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                                    lineNumber: 429,
                                                                                                    columnNumber: 57
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 425,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                className: "w-full",
                                                                                                onClick: (e)=>{
                                                                                                    e.stopPropagation();
                                                                                                    addToCart({
                                                                                                        id: perfume.id,
                                                                                                        name: perfume.name,
                                                                                                        price: perfume.price,
                                                                                                        image: perfume.image || '/placeholder.svg',
                                                                                                        type: 'perfume',
                                                                                                        size: perfume.size
                                                                                                    });
                                                                                                    __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript, async loader)").then((m)=>m.toast.success('Añadido al carrito'));
                                                                                                },
                                                                                                children: "Añadir al carrito"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 432,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 419,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, perfume.id, true, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 407,
                                                                                columnNumber: 37
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 31
                                                            }, this),
                                                            mujeres.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xl font-medium mb-3",
                                                                        children: "Mujer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 443,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                                                                        children: mujeres.map((perfume)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                                                className: "group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative",
                                                                                onClick: (e)=>handleSpray(e, perfume),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative aspect-square overflow-hidden bg-secondary/30",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: perfume.image || "/placeholder.svg",
                                                                                            alt: perfume.name,
                                                                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 452,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 451,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-muted-foreground mb-1",
                                                                                                children: perfume.brand
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 459,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                                className: "font-semibold text-lg mb-2 text-balance",
                                                                                                children: perfume.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 460,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mb-3",
                                                                                                children: typeof perfume.price === 'number' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-lg font-semibold",
                                                                                                    children: (perfume.price * 1000).toLocaleString('es-CR', {
                                                                                                        style: 'currency',
                                                                                                        currency: 'CRC'
                                                                                                    })
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                                    lineNumber: 463,
                                                                                                    columnNumber: 45
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    className: "w-full",
                                                                                                    onClick: (e)=>{
                                                                                                        e.stopPropagation();
                                                                                                    },
                                                                                                    children: "Consultar precio"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                                    lineNumber: 465,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 461,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                className: "w-full",
                                                                                                onClick: (e)=>{
                                                                                                    e.stopPropagation();
                                                                                                    addToCart({
                                                                                                        id: perfume.id,
                                                                                                        name: perfume.name,
                                                                                                        price: perfume.price,
                                                                                                        image: perfume.image || '/placeholder.svg',
                                                                                                        type: 'perfume'
                                                                                                    });
                                                                                                },
                                                                                                children: "Añadir al carrito"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 468,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 458,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, perfume.id, true, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 446,
                                                                                columnNumber: 37
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 444,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 31
                                                            }, this),
                                                            unisex.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xl font-medium mb-3",
                                                                        children: "Unisex"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                                                                        children: unisex.map((perfume)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                                                className: "group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative",
                                                                                onClick: (e)=>handleSpray(e, perfume),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative aspect-square overflow-hidden bg-secondary/30",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: perfume.image || "/placeholder.svg",
                                                                                            alt: perfume.name,
                                                                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 488,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 487,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-muted-foreground mb-1",
                                                                                                children: perfume.brand
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 495,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                                className: "font-semibold text-lg mb-2 text-balance",
                                                                                                children: perfume.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 496,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mb-3",
                                                                                                children: typeof perfume.price === 'number' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-lg font-semibold",
                                                                                                    children: (perfume.price * 1000).toLocaleString('es-CR', {
                                                                                                        style: 'currency',
                                                                                                        currency: 'CRC'
                                                                                                    })
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                                    lineNumber: 499,
                                                                                                    columnNumber: 45
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    className: "w-full",
                                                                                                    onClick: (e)=>{
                                                                                                        e.stopPropagation();
                                                                                                    },
                                                                                                    children: "Consultar precio"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                                    lineNumber: 501,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                className: "w-full",
                                                                                                onClick: (e)=>{
                                                                                                    e.stopPropagation();
                                                                                                    addToCart({
                                                                                                        id: perfume.id,
                                                                                                        name: perfume.name,
                                                                                                        price: perfume.price,
                                                                                                        image: perfume.image || '/placeholder.svg',
                                                                                                        type: 'perfume'
                                                                                                    });
                                                                                                },
                                                                                                children: "Añadir al carrito"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                                lineNumber: 504,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 494,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, perfume.id, true, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 482,
                                                                                columnNumber: 37
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, brand, true, {
                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/perfumes/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 21
                                            }, this);
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/app/perfumes/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/perfumes/page.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 249,
                            columnNumber: 9
                        }, this),
                        mobileFiltersOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 z-50 bg-black/40 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3/4 bg-background p-4 overflow-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold",
                                                    children: "Filtros"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-sm",
                                                            onClick: ()=>{
                                                                resetFilters();
                                                            },
                                                            children: "Clear all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-sm",
                                                            onClick: ()=>setMobileFiltersOpen(false),
                                                            children: "X"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "search",
                                                        placeholder: "Buscar por nombre o marca",
                                                        value: searchTerm,
                                                        onChange: (e)=>{
                                                            setSearchTerm(e.target.value);
                                                            setCurrentPage(1);
                                                        },
                                                        className: "w-full px-3 py-2 border rounded focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        className: "mb-2",
                                                        open: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                className: "cursor-pointer font-medium",
                                                                children: [
                                                                    "Marcas ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            "(",
                                                                            Object.keys(brandCounts).length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 76
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex flex-col gap-2 max-h-48 overflow-auto pr-2",
                                                                children: availableBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: selectedBrands.includes(brand),
                                                                                        onChange: ()=>{
                                                                                            toggleBrand(brand);
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 552,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "truncate",
                                                                                        children: brand
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 553,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 551,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground text-xs",
                                                                                children: brandCounts[brand] || 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 555,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, brand, true, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 550,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 548,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        className: "mb-2",
                                                        open: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                className: "cursor-pointer font-medium",
                                                                children: "Género"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 564,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex flex-col gap-2",
                                                                children: [
                                                                    [
                                                                        'Hombre',
                                                                        'Mujer',
                                                                        'Unisex'
                                                                    ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center justify-between text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "radio",
                                                                                            name: "gender-mobile",
                                                                                            checked: selectedGender === g,
                                                                                            onChange: ()=>{
                                                                                                setSelectedGender(g);
                                                                                                setCurrentPage(1);
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 569,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: g
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                                            lineNumber: 570,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                    lineNumber: 568,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-muted-foreground text-xs",
                                                                                    children: genderCounts[g]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                                                    lineNumber: 572,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, g, true, {
                                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                                            lineNumber: 567,
                                                                            columnNumber: 25
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "gender-mobile",
                                                                                        checked: selectedGender === 'all',
                                                                                        onChange: ()=>{
                                                                                            setSelectedGender('all');
                                                                                            setCurrentPage(1);
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 577,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Todos"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                                        lineNumber: 578,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 576,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground text-xs",
                                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perfumesData"].length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                                lineNumber: 580,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                                        lineNumber: 575,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/perfumes/page.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/perfumes/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            onClick: ()=>{
                                                                resetFilters();
                                                                setMobileFiltersOpen(false);
                                                            },
                                                            children: "Limpiar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>setMobileFiltersOpen(false),
                                                            children: "Aplicar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/perfumes/page.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    onClick: ()=>setMobileFiltersOpen(false)
                                }, void 0, false, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/perfumes/page.tsx",
                    lineNumber: 191,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/perfumes/page.tsx",
                lineNumber: 190,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/perfumes/page.tsx",
        lineNumber: 144,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_a60508fd._.js.map