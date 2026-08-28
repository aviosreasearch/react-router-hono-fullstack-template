import { useCart } from "../components/CartProvider";

export default function Cart() {
const {
items,
cartTotal,
updateQuantity,
removeItem,
isMember,
memberDiscount,
discountedCartTotal,
} = useCart();

return (
<main className="min-h-screen bg-slate-950 text-white">
<div className="mx-auto max-w-5xl px-6 py-12">
<div className="mb-8 flex items-center justify-between">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
Avios Research
</p>

<h1 className="mt-2 text-3xl font-bold">
Shopping Cart
</h1>
</div>

<a
href="/#products"
className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-500"
>
Continue Shopping
</a>
</div>

{items.length === 0 ? (
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
<h2 className="text-2xl font-semibold">
Your cart is empty
</h2>

<p className="mt-3 text-slate-400">
Add research compounds to your cart to get started.
</p>

<a
href="/#products"
className="mt-6 inline-block rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
>
View Compounds
</a>
</div>
) : (
<div className="grid gap-8 lg:grid-cols-[1fr_320px]">
<div className="space-y-4">
{items.map((item) => (
<div
key={item.id}
className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
>
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-lg font-semibold">
{item.name}
</h2>

<p className="mt-1 text-sm text-slate-400">
{item.strength}
</p>

<p className="mt-2 font-semibold text-sky-400">
${item.price.toFixed(2)}
</p>
</div>

<button
type="button"
onClick={() => removeItem(item.id)}
className="text-sm font-semibold text-slate-400 transition hover:text-red-400"
>
Remove
</button>
</div>

<div className="mt-5 flex items-center gap-3">
<span className="text-sm text-slate-400">
Quantity
</span>

<button
type="button"
onClick={() =>
updateQuantity(
item.id,
Math.max(1, item.quantity - 1)
)
}
className="h-9 w-9 rounded-lg border border-slate-700 font-semibold hover:border-sky-500"
>
−
</button>

<span className="min-w-8 text-center font-semibold">
{item.quantity}
</span>

<button
type="button"
onClick={() =>
updateQuantity(
item.id,
item.quantity + 1
)
}
className="h-9 w-9 rounded-lg border border-slate-700 font-semibold hover:border-sky-500"
>
+
</button>

<span className="ml-auto font-semibold">
${(item.price * item.quantity).toFixed(2)}
</span>
</div>
</div>
))}
</div>

<aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6">
<h2 className="text-xl font-semibold">
Order Summary
</h2>

{isMember ? (
<div className="mt-5 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4">
<p className="text-sm font-semibold text-sky-300">
Avios Membership Active
</p>

<p className="mt-1 text-xs text-slate-400">
Your 15% member discount is applied below.
</p>
</div>
) : (
<div className="mt-5 rounded-xl border border-slate-700 bg-slate-950/50 p-4">
<p className="text-sm font-semibold text-slate-300">
Save 15% with Membership
</p>

<a
href="/membership"
className="mt-2 inline-flex text-sm font-semibold text-sky-400 transition hover:text-sky-300"
>
View Membership →
</a>
</div>
)}

<div className="mt-6 space-y-4 border-t border-slate-800 pt-6">
<div className="flex items-center justify-between">
<span className="text-slate-400">
Subtotal
</span>

<span className="font-semibold">
${cartTotal.toFixed(2)}
</span>
</div>

{isMember ? (
<div className="flex items-center justify-between">
<span className="text-sky-400">
Member Discount (15%)
</span>

<span className="font-semibold text-sky-400">
-${memberDiscount.toFixed(2)}
</span>
</div>
) : null}

<div className="border-t border-slate-800 pt-4">
<div className="flex items-center justify-between">
<span className="font-semibold">
Product Total
</span>

<span className="text-xl font-bold">
$
{(isMember
? discountedCartTotal
: cartTotal
).toFixed(2)}
</span>
</div>
</div>
</div>

<p className="mt-3 text-xs leading-5 text-slate-500">
Shipping and other applicable charges will be calculated during
checkout.
</p>

<a
href="/checkout"
className="mt-6 block w-full rounded-lg bg-sky-500 px-5 py-3 text-center font-bold text-slate-950 transition hover:bg-sky-400"
>
Proceed to Checkout
</a>
</aside>
</div>
)}
</div>
</main>
);
}
