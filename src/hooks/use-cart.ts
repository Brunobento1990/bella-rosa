export function useCart(){
    function setCart(productId: string, quantidade: number) {

        if (quantidade == 0) return;

        let storage = localStorage.getItem('cart');

        let cart = !storage ? [] : JSON.parse(storage);

        let cartUpdated = false;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].produtoId === productId) {
                cart[i].quantidade += quantidade;
                cartUpdated = true;
                break;
            }
        }

        if (!cartUpdated) {
            const produtoCart = {
                produtoId: productId,
                quantidade: quantidade
            };
            cart.push(produtoCart);
        }

        //updateCart(cart.length)

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function getCart(): any[]{

        const storage = localStorage.getItem('cart');

        if(storage){
            let cart = JSON.parse(storage) || [];
            return cart;
        }

        return [];
    }

    function getLengthCart(): number{
        let storage = localStorage.getItem('cart');

        let cart = !storage ? [] : JSON.parse(storage);

        return cart.length;
    }

    return {
        setCart,
        getLengthCart,
        getCart,
    }
}