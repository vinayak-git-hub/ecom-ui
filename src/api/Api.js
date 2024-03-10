import api from './config'

export const getProducts = async () =>{
    const response = await api.get('/products');
    return response.data
}

export const getProduct = async (id) =>{

    try{
    const response = await api.get('/products/'+id);
    return response.data
    }catch{
        return {error:true}
    }

}

// export const getCartProducts = async () =>{
//     const response = await api.get('/cart');
//     <></>
//     return response.data
// }


// export const updateProductCart = async (request) =>{
//     const response = await api.put(`/cart/${request.id}`, request);
//     <></>
//     return response.data
// }

// export const getOrders = async () =>{
//     const response = await api.get('/orders');
//     <></>
//     return response.data
// }

// export const addOrder = async (request) =>{
//     const response = await api.post('/orders',request);
//     <></>
//     return response.data
// }

 const API = () =>{
    return 
}

export default API; 