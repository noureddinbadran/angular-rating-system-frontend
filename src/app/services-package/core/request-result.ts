import {Model} from './model';

export interface RequestResult<T extends Model | boolean> {

    token: string;
    data: T[];
    metaData: {
        status: number;
        message: string;
        key: string;
    };

}
