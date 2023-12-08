import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TableEntity } from '../table/table.entity';

@Entity()
export class CardEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @ManyToOne(() => TableEntity, table => table.cards)
    table: TableEntity;
}
