export const calculateSubTotal = items => items.reduce((total, item) => total += item.cost, 0)

export const calculateTotal = (subtotal, tax, tip) => subtotal + tax + tip