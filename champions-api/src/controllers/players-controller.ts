
import { Request, Response } from "express";
import * as playerService from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await playerService.getPlayer()    
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const httpResponse = await playerService.getPlayerById(Number(id));
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const createPlayer = async (req: Request, res: Response) => {
    const httpResponse = await playerService.createPlayer(req.body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deletePlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const httpResponse = await playerService.deletePlayerById(Number(id));
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const httpResponse = await playerService.updatePlayerById(Number(id), req.body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}