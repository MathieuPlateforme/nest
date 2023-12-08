import { Injectable } from '@nestjs/common';
import { TableEntity as Table } from './table.entity';
import { TableDto } from './dto/table.dto';

@Injectable()
export class TableService {
    private tables: Table[] = [];

    findAll(): Table[] {
        return this.tables;
    }

    findOne(id: string): Table {
        return this.tables.find(table => table.id === id);
    }

    create(createTableDto: TableDto): Table {
        const newTable: Table = {
            id: Math.random().toString(),
            ...createTableDto,
        };
        this.tables.push(newTable);
        return newTable;
    }

    update(id: string, updateTableDto: TableDto): Table {
        const table = this.findOne(id);
        if (table) {
            table.name = updateTableDto.name || table.name;
        }
        return table;
    }

    remove(id: string): Table {
        const index = this.tables.findIndex(table => table.id === id);
        if (index !== -1) {
            const removedTable = this.tables.splice(index, 1);
            return removedTable[0];
        }
        return null;
    }
}
