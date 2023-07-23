import { Request, Response } from "express";
import { createListingServices } from "../services/listings";
import Listings from "../models/Listing";

const listingsdata = {
  address: "my ",
  city: "logos",
  rooms: 2,
};
export const getdata = async (req: Request, res: Response) => {
  req.body = listingsdata;
  const listingInfo = new Listings({
    address: req.body.address,
    city: req.body.city,
    rooms: req.body.rooms,
  });
  try {
    const Listings = await createListingServices(listingInfo);
    res.status(200).json(Listings);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
