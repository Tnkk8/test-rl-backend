import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attribute } from './entities/attribute.entity';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(Attribute)
    private readonly attributeRepository: Repository<Attribute>,
  ) {}

  createAtt(createAttribute: CreateAttributeDto): Promise<Attribute> {
    const attribute: Attribute = new Attribute();
    attribute.name = createAttribute.name;
    attribute.type = createAttribute.type;
    attribute.price = createAttribute.price;
    return this.attributeRepository.save(attribute);
  }
  updateAtt(
    id: number,
    updateAttributeDto: UpdateAttributeDto,
  ): Promise<Attribute> {
    const attribute: Attribute = new Attribute();
    attribute.name = updateAttributeDto.name;
    attribute.type = updateAttributeDto.type;
    attribute.price = updateAttributeDto.price;
    return this.attributeRepository.save(attribute);
  }
  findAllAtt(): Promise<Attribute[]> {
    return this.attributeRepository.find({ order: { id: 'ASC' } });
  }
  findAttById(id: number): Promise<Attribute> {
    return this.attributeRepository.findOneBy({ id });
  }
  removeAtt(id: number): Promise<{ affected?: number }> {
    return this.attributeRepository.delete(id);
  }
}
