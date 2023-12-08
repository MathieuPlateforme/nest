import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { CardEntity } from '../card/card.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class TableEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(() => CardEntity, card => card.table)
    cards: CardEntity[];

    @ManyToOne(() => UserEntity, user => user.tables)
    user: UserEntity;
}
