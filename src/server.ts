import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import * as database from '@src/database';
import ForecastController from './controllers/forecast';
import BeachesController from './controllers/beaches';

export default class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.SetupExpress();
    this.SetupControllers();
    await this.databaseSetup();
  }

  private SetupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private SetupControllers(): void {
    const forecastController = new ForecastController();
    const beachesController = new BeachesController();
    this.addControllers([forecastController, beachesController]);
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  public async close(): Promise<void> {
    await database.close();
  }

  public getApp(): Application {
    return this.app;
  }
}
