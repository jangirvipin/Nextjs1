import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
type data={
    title:string,
    description:string
}

export  async function POST(req:NextRequest){
    const {title,description}:data = await req.json();
    await prisma.$connect();

    const result = await prisma.post.create({
        data:{
            title,
            description
        }
    })
    return NextResponse.json(result, { status: 201 });
}

