import UserModel from "@/../models/User"
import connectToDB from "../../../../../config/db"
import { NextResponse } from "next/server"


export async function PUT(request, { params }) {

    const { id } = params
    const { username, email } = await request.json()
    await connectToDB();
    await UserModel.findByIdAndUpdate(id, { username, email })

    return NextResponse.json({ id: params })
}

export async function DELETE(request, { params }) {

    const { id } = params
    await connectToDB();
    await UserModel.findOneAndDelete(id)
    return NextResponse.json({ message: "User Deleted" }, { status: 200 })

}