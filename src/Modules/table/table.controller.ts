import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TableService } from './table.service';
import { TableDto } from './dto/table.dto';

@Controller('tables')
export class TableController {
    constructor(private readonly tableService: TableService) {}

    @Get()
    findAll() {
        return this.tableService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tableService.findOne(id);
    }

    @Post()
    create(@Body() createTableDto: TableDto) {
        return this.tableService.create(createTableDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTableDto: TableDto) {
        return this.tableService.update(id, updateTableDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tableService.remove(id);
    }
}
