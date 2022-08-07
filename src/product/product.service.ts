import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EcomProduct } from './entities/product.entities';
import * as moment from 'moment-timezone';
import { EcomProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(EcomProduct) private repo : Repository<EcomProduct>){}

    // Get all data
    async findAll():Promise<any>{
        const query = this.repo
        .createQueryBuilder()
        .select()
        .orderBy('updated_datetime','DESC')
        const result = await query.getMany()

        result.forEach(element=>{
            element.created_datetime = moment.tz(element.created_datetime,"Asia/bangkok").format()
            element.updated_datetime = moment.tz(element.updated_datetime,"Asia/Bangkok").format()
        })
        return result
    }

    // Create data
    async create(data:EcomProductDto):Promise<any>{
        const add = await this.repo.create({...data})
        return this.repo.save(add)
    }

    // Edit data
    async edit(id:number, data : EcomProductDto):Promise<any>{
        const query:EcomProduct = await this.repo.findOne({
            where:{
                product_id: id
            }
        })
        if(!query) throw new NotFoundException(404,"Not Found Data")
        query.updated_datetime = moment.tz("Asia/Bangkok").format()

        Object.assign(query,data)
        return this.repo.save(query)
    }

    // Delete data
    async delete(id:number):Promise<any>{
        const query = this.repo
        .createQueryBuilder()
        .delete()
        .where('product_id = :id',{ id: id})
        .execute()
        return query
    }
}
