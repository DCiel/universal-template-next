import superagent, { Response } from 'superagent';

interface SuperAgentClientConfig {
    baseURL: string;
    defaultHeaders?: Record<string, string>;
}

interface RequestBody {
    [key: string]: any;
}

interface IRequestParams {
    body?: RequestBody; 
    query?: Record<string, any> | string;
}

interface SuperResponse<T> extends Response {
    body: T;
}

export class SuperAgentClient {
    private baseURL: string;
    private defaultHeaders: Record<string, string>;

    constructor(config: SuperAgentClientConfig) {
        this.baseURL = config.baseURL;
        this.defaultHeaders = config.defaultHeaders || {};
    }

    private async request<T = any>(
        method: 'get' | 'post' | 'put' | 'delete',
        endpoint: string,
        params: IRequestParams = {},
    ): Promise<SuperResponse<T>> {
        const { query, body } = params;

        const request = superagent[method](`${this.baseURL}${endpoint}`)
            .set(this.defaultHeaders);

        if (query) request.query(query);
        if (body) request.send(body);

        return await request;
    }

    async get<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<SuperResponse<T>> {
        return this.request<T>('get', endpoint, params);
    }

    async getBody<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<T> {
        return (await this.request<T>('get', endpoint, params)).body;
    }

    async post<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<SuperResponse<T>> {
        return this.request<T>('post', endpoint, params);
    }

    async postBody<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<T> {
        return (await this.request<T>('post', endpoint, params)).body;
    }

    async put<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<SuperResponse<T>> {
        return this.request<T>('put', endpoint, params);
    }

    async putBody<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<T> {
        return (await this.request<T>('put', endpoint, params)).body;
    }

    async delete<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<SuperResponse<T>> {
        return this.request<T>('delete', endpoint, params);
    }

    async deleteBody<T = any>(
        endpoint: string,
        params?: IRequestParams,
    ): Promise<T> {
        return (await this.request<T>('delete', endpoint, params)).body;
    }
}