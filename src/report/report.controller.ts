import { Body, Controller, Delete, Get, Param, Post, Put, ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common";
import { data } from 'src/data';
import { ReportType } from 'src/data';
import { CreateRrportDTO, UpdateReportDTO, ReportResponseDTO } from 'src/dtos/report.type.dto'
import { ReportService } from 'src/report/report.service';

@Controller('report/:type')
export class ReportController {
  
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDTO[] {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string): ReportResponseDTO {
    console.log(id);
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }

  @Post()
  createReport(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Body() {source, amount} : CreateRrportDTO) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, {amount, source});
  }

  @Put(':id')
  updateReportById(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateReportDTO): ReportResponseDTO {
    console.log(body);
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, id, body);
  }

  @Delete(':id')
  deleteReportById(@Param('id', ParseUUIDPipe) id: string){
    return this.reportService.deleteReport(id);
  }
}