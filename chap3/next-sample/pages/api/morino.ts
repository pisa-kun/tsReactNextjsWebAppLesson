import type { NextApiRequest, NextApiResponse} from 'next';

type Response = {
    name:string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
    // ステータス200で{name: ""}を返す
    res.status(200).json(
        {
            name: "rinze morino",
        }
    )
};