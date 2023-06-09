import dbConnect from "../../utils/mongodb";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const breed = await Breed.findById(id);

    if (!breed) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(breed);
  }
}
