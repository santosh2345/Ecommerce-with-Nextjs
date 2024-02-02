import React from 'react'
import { BillboardClient } from './components/client';
import prismadb from '@/lib/prismadb';

const Billboards = async({params}:{params: {storeId: string}}) => {

  const billboards  = await prismadb.billboard.findMany({
    where:{
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <BillboardClient data ={billboards} />

        </div>

    </div>
  )
}

export default Billboards;