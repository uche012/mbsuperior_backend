import mongoose, { Document } from "mongoose";

export type ListingDocument = Document & {
  address: string,
  city: string,
  rooms: number
};



const listingsSchema = new mongoose.Schema({
    address: { type: "string", }, 
    city: { type: "string", },
    rooms: { type: "number", },
})

export default mongoose.model<ListingDocument>("Listings", listingsSchema)