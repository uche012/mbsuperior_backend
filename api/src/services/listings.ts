
import Listings, { ListingDocument } from "../models/Listing";

  export const createListingServices = async (
  Listings: ListingDocument
): Promise<ListingDocument | undefined> => {
    try {
      //save to database 
    // return data from database
    return Listings.save();
  } catch (error) {
    console.error(error);
  }
};


export default {createListingServices}
