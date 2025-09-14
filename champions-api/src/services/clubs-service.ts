import * as HttpResponse from "../utils/http-helpers";
import * as clubsRepository from "../repositories/clubs-repository";

export const getClubs = async () => {
    const clubs = await clubsRepository.findAllClubs();
    return await HttpResponse.ok(clubs);
}