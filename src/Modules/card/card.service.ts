import { Injectable } from '@nestjs/common';
import { CardEntity as Card } from './card.entity';
import { CardDto } from './dto/card.dto';

@Injectable()
export class CardService {
    private cards: Card[] = [];

    findAll(): Card[] {
        return this.cards;
    }

    findOne(id: string): Card {
        return this.cards.find(card => card.id === id);
    }

    create(createCardDto: CardDto): Card {
        const newCard: Card = {
            id: Math.random().toString(),
            ...createCardDto,
        };
        this.cards.push(newCard);
        return newCard;
    }

    update(id: string, updateCardDto: CardDto): Card {
        const Card = this.findOne(id);
        if (Card) {
            Card.name = updateCardDto.name || Card.name;
            Card.description = updateCardDto.description || Card.description;
            Card.status = updateCardDto.status || Card.status;
        }
        return Card;
    }

    remove(id: string): Card {
        const index = this.cards.findIndex(card => card.id === id);
        if (index !== -1) {
            const removedCard = this.cards.splice(index, 1);
            return removedCard[0];
        }
        return null;
    }
}
