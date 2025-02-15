import type * as RDF from 'rdf-js';
import { IConfig } from "../config";
import IData from '../IData';
import IDatasource from "./IDatasource";


class DatasourceContext {
    private datasource: IDatasource;

    constructor(datasource: IDatasource) {
        this.datasource = datasource;
    }

    public setDatasource(datasource: IDatasource) {
        this.datasource = datasource;
    }

    public getData(config: IConfig): Promise<IData[]> {
        return this.datasource.getData(config);
    }
 
}

export default DatasourceContext;