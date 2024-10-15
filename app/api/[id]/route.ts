import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
type data={
    title:string,
    description:string
}

export  async function PUT(req:NextRequest,{params}:any){
    const {id}=params;
    const {title,description}:data =await  req.json();
    await prisma.$connect();
    const result = await prisma.post.update({
        where:{
            id:Number(id)
        },
        data:{
            title,
            description
        }
    })
    return NextResponse.json(result, { status: 200 });
}

export  async function DELETE(req:NextRequest,{params}:any){
    const {id}=params;
   
    await prisma.$connect();
    const result = await prisma.post.delete({
        where:{
            id:Number(id)
        }
    })
    return NextResponse.json(result, { status: 201 });
}