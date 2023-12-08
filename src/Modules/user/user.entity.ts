import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TableEntity } from '../table/table.entity';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => TableEntity, table => table.user)
    tables: TableEntity[];
}
