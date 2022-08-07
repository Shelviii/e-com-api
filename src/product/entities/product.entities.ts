import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EcomProduct{
    @PrimaryGeneratedColumn()
    product_id:number;

    @Column()
    type:string;

    @Column()
    name:string;

    @Column({type:"numeric"})
    price:number
    
    @Column({type:"numeric"})
    special_price:number;

    @Column()
    detail:string;

    @Column({type:"numeric"})
    stock:number;

    @Column({type:"timestamp with time zone", default:()=>"CURRENT_TIMESTAMP"})
    created_datetime:string;

    @Column({type:"timestamp with time zone", default:()=>"CURRENT_TIMESTAMP"})
    updated_datetime:string;
}