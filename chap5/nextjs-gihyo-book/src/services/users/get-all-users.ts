import { ApiContext, User } from 'types/data';
import { fetcher } from 'utils';

const getAllUsers = async (context: ApiContext): Promise<User[]> => {
    return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
        headers: {
            Origin: '*',
            Accept: 'appplication/json',
            'Content-Type': 'application/json',
        },
    });
};

export default getAllUsers;
