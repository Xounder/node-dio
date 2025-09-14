import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
})

const teams = [
    { id: 1, name: "Ferrari", base: "Wokin, United Kingdom" },
    { id: 2, name: "Red Bull Racing", base: "Brackley, United Kingdom" },
    { id: 3, name: "Mercedes", base: "Milton Keynes, United Kigdmom" },
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
})

interface DriverParams {
    id: string;
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(driver => driver.id == id);
    
    if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver not found" };
    }
    
    response.type("application/json").code(200);
    return { driver };
})

const port = process.env.PORT

server.listen({ port: 3333 }, () => {
    console.log(`Server running on http://localhost:${port}`);
});