import Contact from "@/app/models/contact";
import connectMongo from "../../../lib/mongodb";

export async function POST(request) {
  await connectMongo();
  const { firstName, lastName, phone, email, message } = await request.json();

  try {
    const newContact = await Contact.create({
      lastName,
      firstName,
      phone,
      email,
      message,
    });
    return new Response(
      JSON.stringify({ success: true, contact: newContact }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
