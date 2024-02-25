import BaseModel from '../api/customization/BaseModel.js'
import { Model } from 'objection'

export default class Proxy extends BaseModel {
    static get tableName() {
        return 'proxies';
    }

}

