import { TableCell, TableRow } from '@mui/material';
import React, { FC } from 'react';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICart } from '../../../models/ICart';
import { addCount } from '../../../store/reducers/cartSlice';

interface ICartTableProps {
    product: ICart
}

const CartTableItem: FC<ICartTableProps> = ({product}) => {
    const dispatch = useTypedDispatch()
    const { cart } = useTypedSelector(state => state.cart)

    const addProduct = () => {
        dispatch(addCount(product.id))
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <TableRow
            key={product.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {product.name}
            </TableCell>
            <TableCell align="right">
                <button>-</button>
                {product.count} шт.
                <button onClick={() => addProduct()}>+</button>
            </TableCell>
            <TableCell align="right">{product.price} р.</TableCell>
        </TableRow>
    )
}

export default CartTableItem