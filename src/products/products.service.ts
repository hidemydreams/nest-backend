import { Injectable } from '@nestjs/common';
import { data } from './data';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    const newItem = {
      ...createProductDto,
      id: data.length + 1,
    };

    data.push(newItem);

    return newItem;
  }

  findAll() {
    return data;
  }

  findOne(id: number) {
    return data.find((item) => item.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
