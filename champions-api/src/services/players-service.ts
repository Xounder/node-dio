import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as playerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helpers";

export const getPlayer = async () => {
    const data = await playerRepository.findAllPlayers();

    if (!data){
        return await HttpResponse.noContent();
    }

    return await HttpResponse.ok(data);
}

export const getPlayerById = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);

    if (!data){
        return await HttpResponse.noContent();
    }

    return await HttpResponse.ok(data);
}

export const createPlayer = async (player: PlayerModel) => {
    if (!Object.keys(player).length) {
        return HttpResponse.badRequest();
    }

    const newPlayer = await playerRepository.createPlayer(player);
    return await HttpResponse.created(newPlayer);
}

export const deletePlayerById = async (id: number) => {
    const result = await playerRepository.deletePlayerById(id);

    if (!result){
        return await HttpResponse.badRequest();
    }

    return await HttpResponse.noContent();
}

export const updatePlayerById = async (id: number, statistics: StatisticsModel) => {
    if (!Object.keys(statistics).length) {
        return HttpResponse.badRequest();
    }
    
    const result = await playerRepository.updatePlayerById(id, statistics);

    if (!result){
        return await HttpResponse.badRequest();
    }

    return await HttpResponse.noContent();
}