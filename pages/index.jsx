
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from "react";

const Home = () => {

  const [wallet, setWallet] = useState("");
  const [collection, setCollection] = useState("");

  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div>
        <input onChange={(e)=>{setWallet(e.target.value)}} value={wallet} type={'text'} placeholder="Ad your wallet address"></input>
        <input onChange={(e)=>{setCollection(e.target.value)}} value={collection} type={'text'} placeholder="Add the collection address"></input>
        <label>
          <input type={'checkbox'}></input>
          <button 
           >Go</button>
        </label>
      </div>
    </div>
  )
}

export default Home
