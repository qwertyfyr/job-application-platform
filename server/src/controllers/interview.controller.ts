import type { Request, Response } from 'express';
import * as service from '../services/interview.service';

export default function ApplicationController() {
    return ('TODO: ApplicationController');
}

export async function list(_req:Request, res:Response) {
    const response = await service.getInterviews();
    res.json(response);
}

export async function create(req:Request, res:Response) {
    const response = await service.createInterview(req.body);
    res.status(201).json(response);
}