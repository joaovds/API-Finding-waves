import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import ForecastController from './controllers/forecast';

export default class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.SetupExpress();
    this.SetupControllers();
  }

  private SetupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private SetupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
