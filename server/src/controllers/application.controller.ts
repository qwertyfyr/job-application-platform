import type { Request, Response } from 'express';
import * as service from '../services/application.service';

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