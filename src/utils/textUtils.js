const canvas = document.createElement('canvas')
const ctx = canvas.getContext("2d")
ctx.font = "16px Arial"

export const measureTextWidth = text => {
    const width = Math.round(ctx.measureText(text).width) + 29
    return width 
}