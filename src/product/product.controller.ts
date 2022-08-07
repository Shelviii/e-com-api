import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EcomProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('ecom/product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    findAll(){
        return this.productService.findAll()
    }

    @Post()
    create(@Body() data:EcomProductDto){
        return this.productService.create(data)
    }

    @Put('/:id')
    edit(@Param('id') id:number , @Body() data:EcomProductDto){
        return this.productService.edit(id,data)
    }

    @Delete('/:id')
    delete(@Param('id') id:number){
        return this.productService.delete(id)
    }
}
