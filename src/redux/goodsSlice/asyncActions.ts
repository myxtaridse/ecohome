import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGoods = createAsyncThunk(
    "goods/fetchGoodsStatus",
    async () => {
        const {data} = await axios.get(
            'http://localhost:3000/goods'
        );
        console.log(data);
        
        return data;
    }
)