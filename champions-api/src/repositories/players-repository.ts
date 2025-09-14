import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    { 
        id: 1, 
        name: "Cristiano Ronaldo", 
        club: "Manchester United", 
        nationality: "Portugal", 
        position: "Forward", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    },
    { 
        id: 2, 
        name: "Lionel Messi", 
        club: "Barcelona", 
        nationality: "Argentina", 
        position: "Forward", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    },
    { 
        id: 3, 
        name: "Neymar", 
        club: "Paris Saint-Germain", 
        nationality: "Brazil", 
        position: "Forward", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    },
    { 
        id: 4, 
        name: "Kylian Mbappe", 
        club: "Paris Saint-Germain", 
        nationality: "France", 
        position: "Forward", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    },
    { 
        id: 5, 
        name: "Luka Modric", 
        club: "Real Madrid", 
        nationality: "Croatia", 
        position: "Midfielder", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    },
    { 
        id: 6, 
        name: "Luka Modric", 
        club: "Real Madrid", 
        nationality: "Croatia", 
        position: "Midfielder", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    },
    { 
        id: 7, 
        name: "Luka Modric", 
        club: "Real Madrid", 
        nationality: "Croatia", 
        position: "Midfielder", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    },
    { 
        id: 8, 
        name: "Luka Modric", 
        club: "Real Madrid", 
        nationality: "Croatia", 
        position: "Midfielder", 
        statistics:{
            Overall: 94, 
            Pace: 91, 
            Shooting: 92, 
            Passing: 88, 
            Dribling: 85, 
            Defending: 85, 
            Physical: 87 
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const createPlayer = async (player: PlayerModel) => {
    database.push(player);
    return player;
}

export const deletePlayerById = async (id: number) => {
    const playerIndex = database.findIndex(player => player.id === id);

    if (playerIndex === -1){
        return false;
    }

    database.splice(playerIndex, 1);
    return true;
}

export const updatePlayerById = async (id: number, statistics: StatisticsModel) => {
    const playerIndex = database.findIndex(player => player.id === id);

    if (playerIndex === -1){
        return false;
    }

    database[playerIndex].statistics = statistics;
    return true;
}