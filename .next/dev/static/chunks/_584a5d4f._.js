(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@2.5.5/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.0.0_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/perfumes-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "perfumesData",
    ()=>perfumesData
]);
const perfumesData = [
    // Antonio Banderas
    {
        id: 'ab-1',
        name: 'King of Seduction',
        brand: 'Antonio Banderas',
        price: 45,
        image: '/antonio-banderas-king-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Lavanda, Ámbar',
        description: 'Fragancia masculina seductora'
    },
    {
        id: 'ab-2',
        name: 'Her Secret Flame',
        brand: 'Antonio Banderas',
        price: 42,
        image: '/antonio-banderas-perfume-red-bottle.jpg',
        gender: 'Mujer',
        notes: 'Rosa, Vainilla, Pachulí',
        description: 'Sensual y femenina'
    },
    {
        id: 'ab-3',
        name: 'Power of Seduction',
        brand: 'Antonio Banderas',
        price: 40,
        image: '/antonio-banderas-perfume-black-bottle.jpg',
        gender: 'Hombre',
        notes: 'Cardamomo, Madera, Almizcle',
        description: 'Poder y seducción'
    },
    {
        id: 'ab-4',
        name: 'Her Secret Temptation',
        brand: 'Antonio Banderas',
        price: 42,
        image: '/antonio-banderas-perfume-purple-bottle.jpg',
        gender: 'Mujer',
        notes: 'Frambuesa, Vainilla, Sándalo',
        description: 'Tentación irresistible'
    },
    {
        id: 'ab-5',
        name: 'King of Seduction Absolute',
        brand: 'Antonio Banderas',
        price: 50,
        image: '/antonio-banderas-absolute-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Ámbar, Cuero',
        description: 'La versión más intensa'
    },
    // Abercrombie & Fitch
    {
        id: 'af-1',
        name: 'Authentic',
        brand: 'Abercrombie & Fitch',
        price: 65,
        image: '/abercrombie-authentic-perfume.jpg',
        gender: 'Unisex',
        notes: 'Iris, Lavanda, Ámbar',
        description: 'Auténtico y fresco'
    },
    {
        id: 'af-2',
        name: 'Authentic Night',
        brand: 'Abercrombie & Fitch',
        price: 68,
        image: '/abercrombie-authentic-perfume.jpg',
        gender: 'Hombre',
        notes: 'Pimienta, Incienso, Madera',
        description: 'Para las noches especiales'
    },
    // Armaf
    {
        id: 'ar-1',
        name: 'Club de Nuit Intense',
        brand: 'Armaf',
        price: 55,
        image: '/armaf-club-nuit-perfume.jpg',
        gender: 'Hombre',
        notes: 'Limón, Pachulí, Vainilla',
        description: 'Intenso y duradero'
    },
    {
        id: 'ar-2',
        name: 'Club de Nuit Woman',
        brand: 'Armaf',
        price: 52,
        image: '/armaf-club-woman-perfume.jpg',
        gender: 'Mujer',
        notes: 'Lichi, Peonía, Vainilla',
        description: 'Elegancia nocturna'
    },
    {
        id: 'ar-3',
        name: 'Milestone',
        brand: 'Armaf',
        price: 48,
        image: '/armaf-milestone-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Jengibre, Ámbar',
        description: 'Un hito en fragancias'
    },
    {
        id: 'ar-4',
        name: 'Venetian Blue',
        brand: 'Armaf',
        price: 45,
        image: '/armaf-venetian-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Salvia, Cedro',
        description: 'Frescura mediterránea'
    },
    {
        id: 'ar-5',
        name: 'Hunter Intense',
        brand: 'Armaf',
        price: 50,
        image: '/armaf-hunter-perfume.jpg',
        gender: 'Hombre',
        notes: 'Tabaco, Cuero, Madera',
        description: 'Intensidad cazadora'
    },
    {
        id: 'ar-6',
        name: 'Tres Nuit',
        brand: 'Armaf',
        price: 48,
        image: '/armaf-tres-nuit-perfume.jpg',
        gender: 'Hombre',
        notes: 'Limón, Violeta, Sándalo',
        description: 'Tres noches de pasión'
    },
    // Dior
    {
        id: 'di-1',
        name: "J'adore",
        brand: 'Dior',
        price: 120,
        image: '/dior-jadore-perfume.jpg',
        gender: 'Mujer',
        notes: 'Ylang-ylang, Rosa, Jazmín',
        description: 'Icónico y floral'
    },
    {
        id: 'di-2',
        name: 'Sauvage',
        brand: 'Dior',
        price: 115,
        image: '/dior-sauvage-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Pimienta, Ambroxan',
        description: 'Salvaje y magnético'
    },
    {
        id: 'di-3',
        name: 'Miss Dior',
        brand: 'Dior',
        price: 118,
        image: '/dior-miss-perfume.jpg',
        gender: 'Mujer',
        notes: 'Rosa, Peonía, Iris',
        description: 'Romance parisino'
    },
    {
        id: 'di-4',
        name: 'Fahrenheit',
        brand: 'Dior',
        price: 110,
        image: '/dior-fahrenheit-perfume.jpg',
        gender: 'Hombre',
        notes: 'Violeta, Cuero, Cedro',
        description: 'Calor intenso'
    },
    // Chanel
    {
        id: 'ch-1',
        name: 'Nº 5',
        brand: 'Chanel',
        price: 145,
        image: '/chanel-no5-perfume.jpg',
        gender: 'Mujer',
        notes: 'Aldehídos, Rosa, Vainilla',
        description: 'El perfume más icónico'
    },
    {
        id: 'ch-2',
        name: 'Bleu de Chanel',
        brand: 'Chanel',
        price: 135,
        image: '/chanel-bleu-perfume.jpg',
        gender: 'Hombre',
        notes: 'Cítricos, Incienso, Cedro',
        description: 'Azul intenso'
    },
    {
        id: 'ch-3',
        name: 'Coco Mademoiselle',
        brand: 'Chanel',
        price: 140,
        image: '/chanel-coco-perfume.jpg',
        gender: 'Mujer',
        notes: 'Naranja, Rosa, Pachulí',
        description: 'Seducción moderna'
    },
    {
        id: 'ch-4',
        name: 'Chance',
        brand: 'Chanel',
        price: 130,
        image: '/chanel-chance-perfume.jpg',
        gender: 'Mujer',
        notes: 'Pimienta, Jazmín, Ámbar',
        description: 'Una oportunidad de suerte'
    },
    // Versace
    {
        id: 've-1',
        name: 'Eros',
        brand: 'Versace',
        price: 95,
        image: '/versace-eros-perfume.jpg',
        gender: 'Hombre',
        notes: 'Menta, Vainilla, Madera',
        description: 'Pasión griega'
    },
    {
        id: 've-2',
        name: 'Dylan Blue',
        brand: 'Versace',
        price: 92,
        image: '/versace-dylan-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Pimienta, Incienso',
        description: 'Azul profundo'
    },
    {
        id: 've-3',
        name: 'Bright Crystal',
        brand: 'Versace',
        price: 90,
        image: '/versace-crystal-perfume.jpg',
        gender: 'Mujer',
        notes: 'Granada, Peonía, Ámbar',
        description: 'Cristal brillante'
    },
    {
        id: 've-4',
        name: 'Eros Pour Femme',
        brand: 'Versace',
        price: 93,
        image: '/versace-eros-femme-perfume.jpg',
        gender: 'Mujer',
        notes: 'Limón, Jazmín, Sándalo',
        description: 'Pasión femenina'
    },
    // Carolina Herrera
    {
        id: 'car-1',
        name: '212 VIP',
        brand: 'Carolina Herrera',
        price: 85,
        image: '/carolina-212-perfume.jpg',
        gender: 'Mujer',
        notes: 'Champagne, Gardenia, Almizcle',
        description: 'Fiesta exclusiva'
    },
    {
        id: 'car-2',
        name: 'Good Girl',
        brand: 'Carolina Herrera',
        price: 110,
        image: '/carolina-goodgirl-perfume.jpg',
        gender: 'Mujer',
        notes: 'Almendra, Café, Tuberosa',
        description: 'Dulce y rebelde'
    },
    {
        id: 'car-3',
        name: 'Bad Boy',
        brand: 'Carolina Herrera',
        price: 105,
        image: '/carolina-badboy-perfume.jpg',
        gender: 'Hombre',
        notes: 'Pimienta, Salvia, Cacao',
        description: 'Chico malo'
    },
    {
        id: 'car-4',
        name: 'CH Men',
        brand: 'Carolina Herrera',
        price: 88,
        image: '/carolina-chmen-perfume.jpg',
        gender: 'Hombre',
        notes: 'Pomelo, Cuero, Madera',
        description: 'Masculinidad elegante'
    },
    // Paco Rabanne
    {
        id: 'pr-1',
        name: 'One Million',
        brand: 'Paco Rabanne',
        price: 95,
        image: '/paco-million-perfume.jpg',
        gender: 'Hombre',
        notes: 'Pomelo, Canela, Cuero',
        description: 'Riqueza dorada'
    },
    {
        id: 'pr-2',
        name: 'Invictus',
        brand: 'Paco Rabanne',
        price: 92,
        image: '/paco-invictus-perfume.jpg',
        gender: 'Hombre',
        notes: 'Pomelo, Laurel, Ámbar',
        description: 'Victoria invencible'
    },
    {
        id: 'pr-3',
        name: 'Olympea',
        brand: 'Paco Rabanne',
        price: 90,
        image: '/paco-olympea-perfume.jpg',
        gender: 'Mujer',
        notes: 'Jengibre, Vainilla, Ámbar',
        description: 'Diosa olímpica'
    },
    {
        id: 'pr-4',
        name: 'Fame',
        brand: 'Paco Rabanne',
        price: 88,
        image: '/paco-fame-perfume.jpg',
        gender: 'Mujer',
        notes: 'Mango, Incienso, Vainilla',
        description: 'Fama sensual'
    },
    // YSL
    {
        id: 'ysl-1',
        name: 'Y',
        brand: 'Yves Saint Laurent',
        price: 105,
        image: '/ysl-y-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Salvia, Cedro',
        description: 'La pregunta esencial'
    },
    {
        id: 'ysl-2',
        name: 'Libre',
        brand: 'Yves Saint Laurent',
        price: 120,
        image: '/ysl-libre-perfume.jpg',
        gender: 'Mujer',
        notes: 'Lavanda, Naranja, Vainilla',
        description: 'Libertad audaz'
    },
    {
        id: 'ysl-3',
        name: 'La Nuit de LHomme',
        brand: 'Yves Saint Laurent',
        price: 98,
        image: '/ysl-nuit-perfume.jpg',
        gender: 'Hombre',
        notes: 'Cardamomo, Cedro, Cumarina',
        description: 'Seductor nocturno'
    },
    {
        id: 'ysl-4',
        name: 'Black Opium',
        brand: 'Yves Saint Laurent',
        price: 115,
        image: '/ysl-opium-perfume.jpg',
        gender: 'Mujer',
        notes: 'Café, Vainilla, Flor de naranja',
        description: 'Adicción oscura'
    },
    // Giorgio Armani
    {
        id: 'ga-1',
        name: 'Acqua di Giò',
        brand: 'Giorgio Armani',
        price: 105,
        image: '/armani-acqua-perfume.jpg',
        gender: 'Hombre',
        notes: 'Bergamota, Neroli, Pachulí',
        description: 'Agua marina'
    },
    {
        id: 'ga-2',
        name: 'Sí',
        brand: 'Giorgio Armani',
        price: 115,
        image: '/armani-si-perfume.jpg',
        gender: 'Mujer',
        notes: 'Grosella, Vainilla, Pachulí',
        description: 'Di sí a todo'
    },
    {
        id: 'ga-3',
        name: 'Armani Code',
        brand: 'Giorgio Armani',
        price: 98,
        image: '/armani-code-perfume.jpg',
        gender: 'Hombre',
        notes: 'Limón, Anís, Tabaco',
        description: 'Código de seducción'
    },
    {
        id: 'ga-4',
        name: 'My Way',
        brand: 'Giorgio Armani',
        price: 110,
        image: '/armani-myway-perfume.jpg',
        gender: 'Mujer',
        notes: 'Bergamota, Flor de naranja, Vainilla',
        description: 'Mi camino'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/perfumes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerfumesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/perfumes-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PerfumesPage() {
    _s();
    const [selectedGender, setSelectedGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredPerfumes = selectedGender === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perfumesData"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$perfumes$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perfumesData"].filter((p)=>p.gender === selectedGender);
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
        const message = `Hola! Estoy interesado en comprar:%0A%0A${perfume.brand} - ${perfume.name}%0APrecio: $${perfume.price}%0A%0A¿Está disponible?`;
        window.open(`https://www.instagram.com/direct/t/17843825013072961?text=${message}`, '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-background to-secondary/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-5xl md:text-6xl mb-4 text-foreground",
                                children: "Catálogo de Perfumes"
                            }, void 0, false, {
                                fileName: "[project]/app/perfumes/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed",
                                children: "Descubre nuestra exclusiva colección de fragancias de las mejores marcas del mundo"
                            }, void 0, false, {
                                fileName: "[project]/app/perfumes/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/perfumes/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/perfumes/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4 mb-12 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setSelectedGender('all'),
                            variant: selectedGender === 'all' ? 'default' : 'outline',
                            className: "text-lg",
                            children: "Todos"
                        }, void 0, false, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setSelectedGender('Hombre'),
                            variant: selectedGender === 'Hombre' ? 'default' : 'outline',
                            className: "text-lg",
                            children: "Hombre"
                        }, void 0, false, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setSelectedGender('Mujer'),
                            variant: selectedGender === 'Mujer' ? 'default' : 'outline',
                            className: "text-lg",
                            children: "Mujer"
                        }, void 0, false, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setSelectedGender('Unisex'),
                            variant: selectedGender === 'Unisex' ? 'default' : 'outline',
                            className: "text-lg",
                            children: "Unisex"
                        }, void 0, false, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/perfumes/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6",
                    children: filteredPerfumes.map((perfume)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative",
                            onClick: (e)=>handleSpray(e, perfume),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-square overflow-hidden bg-secondary/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: perfume.image || "/placeholder.svg",
                                            alt: perfume.name,
                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-semibold text-sm mb-1",
                                                    children: perfume.gender
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-xs",
                                                    children: perfume.notes
                                                }, void 0, false, {
                                                    fileName: "[project]/app/perfumes/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mb-1",
                                            children: perfume.brand
                                        }, void 0, false, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-lg mb-2 text-balance",
                                            children: perfume.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-bold text-primary mb-3",
                                            children: [
                                                "$",
                                                perfume.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleBuyNow(perfume);
                                            },
                                            children: "Comprar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/perfumes/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/perfumes/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, perfume.id, true, {
                            fileName: "[project]/app/perfumes/page.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/perfumes/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                filteredPerfumes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg",
                        children: "No se encontraron perfumes en esta categoría"
                    }, void 0, false, {
                        fileName: "[project]/app/perfumes/page.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/perfumes/page.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/perfumes/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/perfumes/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(PerfumesPage, "uDVokOuV644v2vL9TXf416Wof+o=");
_c = PerfumesPage;
var _c;
__turbopack_context__.k.register(_c, "PerfumesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_584a5d4f._.js.map