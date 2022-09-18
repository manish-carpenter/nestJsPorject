import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { data } from 'src/data';
import { ReportType } from 'src/data';

import { AppService } from "./app.service";

@Controller('report/:type')
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(reportType, id);
  }



  @Post()
  createReport(@Param('type') type: string, @Body() {source, amount} : {source: string; amount: number}) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReport(reportType, {amount, source});
  }

  @Put(':id')
  updateReportById(@Param('type') type: string, @Param('id') id: string, @Body() body: {source: string, amount: number }) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(reportType, id, body);
  }

  @Delete(':id')
  deleteReportById(@Param('id') id: string )  {
    return this.appService.deleteReport(id);
  }
}