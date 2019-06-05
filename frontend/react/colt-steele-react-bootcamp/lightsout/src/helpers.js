const target = (index, st) => ({[index]: !st[index]});
const left = (index, st) => ({[(+index - 1).toString(10)]: !st[(+index - 1).toString(10)]});
const right = (index, st) => ({[(+index + 1).toString(10)]: !st[(+index + 1).toString(10)]});
const up = (index, st) => ({[(+index - 5).toString(10)]: !st[(+index - 5).toString(10)]});
const down = (index, st) => ({[(+index + 5).toString(10)]: !st[(+index + 5).toString(10)]});

export const topLeft = (cur, index) => ({
    ...target(index, cur), 
    ...right(index, cur), 
    ...down(index, cur)
})

export const topRight = (cur, index) => ({
    ...target(index, cur), 
    ...left(index, cur), 
    ...down(index, cur)
})

export const bottomLeft = (cur, index) => ({
    ...target(index, cur), 
    ...up(index, cur), 
    ...right(index, cur)
})

export const bottomRight = (cur, index) => ({
    ...target(index, cur), 
    ...up(index, cur), 
    ...left(index, cur)
})

export const core = (cur, index) => ({
    ...target(index, cur), 
    ...up(index, cur),
    ...down(index, cur),
    ...left(index, cur),
    ...right(index, cur)
})

export const topRow = (cur, index) => ({
    ...target(index, cur),
    ...down(index, cur),
    ...left(index, cur),
    ...right(index, cur)
})

export const bottomRow = (cur, index) => ({
    ...target(index, cur),
    ...up(index, cur),
    ...left(index, cur),
    ...right(index, cur)
})

export const firstCol = (cur, index) => ({
    ...target(index, cur), 
    ...right(index, cur), 
    ...up(index, cur), 
    ...down(index, cur)
})

export const lastCol = (cur, index) => ({
    ...target(index, cur), 
    ...left(index, cur), 
    ...up(index, cur), 
    ...down(index, cur)
})