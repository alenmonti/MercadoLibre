import React, { useState } from "react";
import {IoSearchOutline} from "react-icons/io5";

const Search = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="w-[90%] max-w-[580px] relative">
            <input onChange={(e) => console.log(e)} value={search} type="text" name="buscar" placeholder="Estoy buscando..." className="h-[40px]  w-full rounded-sm pl-3 shadow-md text-sm placeholder-opacity-40 placeholder-gray-500 outline-none"/>
            <button className="absolute right-0 top-0 h-[40px] w-[46px] flex items-center bg-white">
                <span className="h-[60%] border-l-gray-200 border-l-[1px] "></span>
                <IoSearchOutline className="text-gray-600 mx-auto text-base"/>
            </button>
        </div>
    );
}

export default Search;