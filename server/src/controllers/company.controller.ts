import type { Request, Response } from "express";
import * as service from '../services/company.service';



export async function list(req:Request, res:Response) {
    const response = await service.getCompanies();
    res.json(response);
}


export async function getById(_req:Request, res:Response) {
    if(_req.params?.id) {
        return res.status(400).json({error: "Missing company id"});
    } 
    let companyId = _req.params?.id;
    if (Array.isArray(companyId)) companyId = companyId[0];
    const response = await service.getCompaniesById(companyId);
    res.json(response);
}

export async function create(req:Request, res:Response) {
    const created = await service.createCompany(req.body);
        res.status(201).json(created);
}