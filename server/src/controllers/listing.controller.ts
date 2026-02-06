import type { Request, Response } from 'express';
import * as service from '../services/listing.service';

export default function ApplicationController() {
    return ('TODO: ApplicationController');
}

export async function list(_req:Request, res:Response) {
    const response = await service.getListings();
    res.json(response);
}


export async function create(req:Request, res:Response) {
    const created = await service.createListing(req.body);
    res.status(201).json(created);
}

export async function getById(_req:Request, res:Response) {
    const listingId = _req.params?.id
    if(!listingId) {
        return res.status(400).json({error: "Missing listing id"});
    }

    const parsedId = Number(listingId);
    if(isNaN(parsedId)) {
        return res.status(400).json({error: "Invalid listing id"});
    }

    const response = await service.getListingById(parsedId);
    res.json(response);
}

export async function getByCompany(_req: Request, res: Response){
    if(!_req.params?.company) {
        return res.status(400).json({error: "Missing company id"});
    }
    let companyId = _req.params?.company;
    if (Array.isArray(companyId)) companyId = companyId[0];
    const response = await service.getListingsByCompany(companyId);
    res.json(response);
}

export async function updateListing(_req: Request, res: Response) {
    let listingId = _req.params?.id
    if(!listingId) {
        return res.status(400).json({error: "Missing listing id"});
    }
    if(Array.isArray(listingId)) listingId = listingId[0];
    const response = await service.updateListing(_req.body);
   res.json(response); 
}