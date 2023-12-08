import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto } from './dto/card.dto';

@Controller('users')
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Get()
    findAll() {
        return this.cardService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cardService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CardDto) {
        return this.cardService.create(createUserDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: CardDto) {
        return this.cardService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cardService.remove(id);
    }
}
