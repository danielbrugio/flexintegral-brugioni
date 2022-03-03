const products = [
    { id: 1, name: 'Galaxy Z Flip3', price: 129000, category: 'smartphone', img:'https://http2.mlstatic.com/D_NQ_NP_740721-MLA47886660486_102021-V.webp', stock: 25, description:'Color: Cream'},
    { id: 2, name: 'Galaxy S22 Ultra', price: 165000, category: 'smartphone', img:'https://http2.mlstatic.com/D_NQ_NP_976219-MLA49065765476_022022-V.webp', stock: 16, description:'Color: Phantom White'},
    { id: 3, name: 'Galaxy S21 FE', price: 145000, category: 'smartphone', img:'https://http2.mlstatic.com/D_NQ_NP_637579-MLA47860056829_102021-V.webp', stock: 10, description:'Color: Olive'},
    { id: 4, name: 'Galaxy Tab S7+', price: 210000, category: 'tablet', img:'https://http2.mlstatic.com/D_NQ_NP_911301-MLA45377226709_032021-V.webp', stock: 10, description:'Color: Mystic Black'}
];

const categories = [
    {id: 'smartphone', description: 'Smartphone'},
    {id: 'tablet', description: 'Tablet'},
    {id: 'notebook', description: 'Notebook'},
    {id: 'tv', description: 'TV'}
];


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      const productsToResolve = products.filter(
        (item) => item.category === categoryId
      );
      resolve(productsToResolve);
    });
  };

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

/* export const getProductById = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod);
        },1000);
    });
}; */


export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories);
        },1000);
    });
};