const products = [
    { id: 1, name: 'Galaxy Z Flip3', price: 129000, category: 'celular', img:'https://http2.mlstatic.com/D_NQ_NP_740721-MLA47886660486_102021-V.webp', stock: 25, description:'Color: Cream'},
    { id: 2, name: 'Galaxy S22 Ultra', price: 165000, category: 'celular', img:'https://http2.mlstatic.com/D_NQ_NP_976219-MLA49065765476_022022-V.webp', stock: 16, description:'Color: Phantom White'},
    { id: 3, name: 'Galaxy S21 FE', price: 145000, category: 'celular', img:'https://http2.mlstatic.com/D_NQ_NP_637579-MLA47860056829_102021-V.webp', stock: 10, description:'Color: Olive'},
    { id: 4, name: 'Galaxy Tab S7+', price: 210000, category: 'tablet', img:'https://http2.mlstatic.com/D_NQ_NP_911301-MLA45377226709_032021-V.webp', stock: 10, description:'Color: Mystic Black'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}