import { ApiContext, User } from 'types/data';
import { fetcher } from 'utils';

export type SigninPrams = {
    username: string,
    password: string,
}

/**
 * 認証API
 * @param context  コンテクスト
 * @param params  パラメータ
 */
const signin = async(
    context: ApiContext,
    params: SigninPrams
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
        {
            method: 'POST',
            headers: {
                Accept: 'appplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params),
        },
    )
}

export default signin;