import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from '../categories/category.entity';
export declare class ProductsService {
    private readonly productRepo;
    private readonly categoryRepo;
    constructor(productRepo: Repository<Product>, categoryRepo: Repository<Category>);
    create(dto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, dto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
//# sourceMappingURL=products.service.d.ts.map