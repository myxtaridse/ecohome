import { createSlice } from "@reduxjs/toolkit";
import { GoodsPropsSlice, Status } from "./typeGoods";
import { fetchGoods } from "./asyncActions";
import data from '../../../db.json'

const initialState: GoodsPropsSlice = {
    goods: [],
    status: Status.LOADING
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setGoods(state, action) {
            state.goods = action.payload.goods
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGoods.pending, (state) => {
            state.status = Status.LOADING
        });
        builder.addCase(fetchGoods.fulfilled, (state, action) => {
            state.goods = action.payload
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchGoods.rejected, (state) => {
            state.status = Status.ERROR
            state.goods = data.goods
        });
    }
})

export default goodsSlice.reducer;