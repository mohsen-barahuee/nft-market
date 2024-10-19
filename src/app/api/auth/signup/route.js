import { getMaxAge } from "next/dist/server/image-optimizer";
import connectToDB from "../../../../../config/db";
import UserModel from "@/../../models/User"


export async function POST(req, res) {

    connectToDB();

    const body = await req.json()

    const { username, email, password, role } = body;
    // Validation (You)

    const isUserExist = await UserModel.findOne({
        $or: [{ username }, { email }],
    });

    if (isUserExist) {
        return Response.json(
            {
                message: "The username or email or phone exist already !!",
            },
            {
                status: 422,
            }
        );
    }

    const users = await UserModel.find({});
    await UserModel.create({
        username,
        email,
        password,
    });





    return Response.json(
        { message: "User signed up successfully :))" },
        {
            status: 201,

        }
    );

}


