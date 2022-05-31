import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Thiago' },
        { id: 2, name: 'Hellen' },
        { id: 3, name: 'Angela' },
    ];

    return response.json(users);
}